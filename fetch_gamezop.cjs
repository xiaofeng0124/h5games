const https = require('https');
const fs = require('fs');
const path = require('path');

const CONCURRENCY = 4;
const MAX_BYTES = 150000;

const TAG_MAP = {
  'arcade': 'arcade', 'action': 'arcade', 'adventure': 'arcade', 'racing': 'arcade',
  'shooting': 'arcade', 'flying': 'arcade', 'jump': 'arcade', 'police': 'arcade',
  'sports': 'arcade', 'board': 'board', 'card': 'card', 'casual': 'casual',
  'life-simulation': 'casual', 'food': 'casual', 'fruit': 'casual', 'color': 'casual',
  'crazy': 'casual', 'girl': 'casual', 'puzzle': 'puzzle', 'logic': 'puzzle',
  'math': 'puzzle', 'number': 'puzzle', 'iq': 'puzzle', 'strategy': 'puzzle',
  'tower-defense': 'puzzle', '3d': 'arcade', 'scary': 'arcade',
};

const DIFFICULTY_BY_TAG = {
  'strategy': 'medium', 'tower-defense': 'medium', 'iq': 'medium',
  'logic': 'medium', 'math': 'medium',
};

function fetchUrl(url) {
  return new Promise((resolve) => {
    let data = '';
    let resolved = false;
    https.get(url, { timeout: 20000 }, (res) => {
      res.on('data', (chunk) => {
        data += chunk;
        if (!resolved && Buffer.byteLength(data, 'utf8') > MAX_BYTES) {
          resolved = true;
          res.destroy();
          resolve(data);
        }
      });
      res.on('end', () => { if (!resolved) { resolved = true; resolve(data); } });
      res.on('error', () => { if (!resolved) { resolved = true; resolve(data); } });
    }).on('timeout', function () {
      this.destroy();
      if (!resolved) { resolved = true; resolve(data); }
    }).on('error', () => { if (!resolved) { resolved = true; resolve(''); } });
  });
}

function cleanTitle(raw) {
  let t = raw.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}]/gu, '').trim();
  t = t.replace(/[—–-].*$/m, '').trim();
  t = t.replace(/\s+Play\s.*$/i, '').trim();
  return t.trim();
}

function extractMeta(html, slug) {
  // Title from <title> tag, fallback to og:title or slug
  let title;
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  if (titleMatch) {
    title = cleanTitle(titleMatch[1]);
  } else {
    const ogMatch = html.match(/property="og:title"\s+content="([^"]+)"/);
    title = ogMatch ? cleanTitle(ogMatch[1]) : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }

  const descMatch = html.match(/name="description"\s+content="([^"]+)"/);
  const description = descMatch ? descMatch[1].replace(/&#x27;/g, "'").replace(/&amp;/g, '&') : '';
  const shortDescription = description.length > 120 ? description.substring(0, 117) + '...' : description;

  const tags = [];
  // Extract tags from JSON-LD breadcrumbs (new Gamezop format)
  const jsonldRegex = /<script[^>]*type="application\/ld\+json"[^>]*>([^<]+)<\/script>/g;
  let jm;
  while ((jm = jsonldRegex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(jm[1]);
      const items = Array.isArray(parsed) ? parsed : [parsed];
      for (const item of items) {
        if (item['@type'] === 'BreadcrumbList' && item.itemListElement) {
          for (const el of item.itemListElement) {
            if (el.position === 2 && el.item) {
              const tagMatch = el.item.match(/\/en\/tags\/([a-z0-9-]+)/);
              if (tagMatch) tags.push(tagMatch[1]);
            }
          }
        }
      }
    } catch (e) { /* JSON parse failed, skip */ }
  }

  // Fallback: scan head for /en/tags/ references
  if (tags.length === 0) {
    const headEnd = html.indexOf('<link');
    const head = headEnd > 0 ? html.substring(0, headEnd) : html.substring(0, 50000);
    const tagRegex = /\/en\/tags\/([a-z0-9-]+)/g;
    const tagSet = new Set();
    let t;
    while ((t = tagRegex.exec(head)) !== null) tagSet.add(t[1]);
    tags.push(...tagSet);
  }

  return { title, shortDescription, description, tags: [...new Set(tags)] };
}

function mapCategory(tags) {
  for (const tag of tags) {
    if (TAG_MAP[tag]) return TAG_MAP[tag];
  }
  return 'casual';
}

function getDifficulty(tags) {
  for (const tag of tags) {
    if (DIFFICULTY_BY_TAG[tag]) return DIFFICULTY_BY_TAG[tag];
  }
  return 'easy';
}

async function processGame(slug, code) {
  const html = await fetchUrl(`https://www.gamezop.com/en/game/${slug}/${code}`);
  if (!html || html.length < 10000) return null;

  const meta = extractMeta(html, slug);
  const category = mapCategory(meta.tags);
  const difficulty = getDifficulty(meta.tags);

  return {
    slug,
    title: meta.title,
    shortDescription: meta.shortDescription,
    description: meta.description,
    category,
    tags: meta.tags.length > 0 ? meta.tags : ['casual', 'html5', 'online'],
    difficulty,
    featured: false,
    rating: 4.0,
    playCount: 0,
    iframeUrl: `https://www.gamezop.com/g/${code}`,
    image: `https://static.gamezop.com/${code}/thumb.png`,
  };
}

async function main() {
  const content = fs.readFileSync(path.join(__dirname, 'tmp_games_clean.txt'), 'utf8').trim();
  const allGames = content.split('\n').filter(l => l.trim()).map(l => {
    const parts = l.split(' ');
    return { slug: parts[0], code: parts[1] };
  });

  const existing = require('./src/data/games.json');
  const existingSlugs = new Set(existing.map(g => g.slug));
  const newGames = allGames.filter(g => !existingSlugs.has(g.slug));

  console.log(`Total: ${allGames.length}, New: ${newGames.length}`);

  const results = [];
  let completed = 0;
  let failed = 0;

  for (let i = 0; i < newGames.length; i += CONCURRENCY) {
    const batch = newGames.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(batch.map(g => processGame(g.slug, g.code)));
    for (const r of batchResults) {
      if (r) { results.push(r); } else { failed++; }
      completed++;
    }
    process.stdout.write(`\rFetched: ${completed}/${newGames.length} | OK: ${results.length} | Failed: ${failed}`);
  }

  console.log(`\nDone! ${results.length} games fetched.`);
  fs.writeFileSync(path.join(__dirname, 'gamezop_output.json'), JSON.stringify(results, null, 2));

  const cats = {};
  results.forEach(g => { cats[g.category] = (cats[g.category] || 0) + 1; });
  console.log('Categories:', JSON.stringify(cats));

  // Data quality check
  const noTags = results.filter(g => g.tags.length === 3 && g.tags[0] === 'casual' && g.tags[1] === 'html5');
  console.log(`Games with fallback tags: ${noTags.length}/${results.length}`);
}

main().catch(console.error);
