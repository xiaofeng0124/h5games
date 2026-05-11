const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://chillarcade.io';
const CONCURRENCY = 1; // sequential fetches for reliability
const MAX_BYTES = 350000; // max bytes per page

// Gamezop tag -> our category mapping
const TAG_MAP = {
  'arcade': 'arcade',
  'action': 'arcade',
  'adventure': 'arcade',
  'racing': 'arcade',
  'shooting': 'arcade',
  'flying': 'arcade',
  'jump': 'arcade',
  'police': 'arcade',
  'sports': 'arcade',
  'board': 'board',
  'card': 'card',
  'casual': 'casual',
  'life-simulation': 'casual',
  'food': 'casual',
  'fruit': 'casual',
  'color': 'casual',
  'crazy': 'casual',
  'girl': 'casual',
  'puzzle': 'puzzle',
  'logic': 'puzzle',
  'math': 'puzzle',
  'number': 'puzzle',
  'iq': 'puzzle',
  'strategy': 'puzzle',
  'tower-defense': 'puzzle',
  '3d': 'arcade',
  'scary': 'arcade',
};

const DIFFICULTY_BY_TAG = {
  'strategy': 'medium',
  'tower-defense': 'medium',
  'iq': 'medium',
  'logic': 'medium',
  'math': 'medium',
};

function fetchUrl(url, retries = 2) {
  return new Promise((resolve) => {
    let data = '';
    let resolved = false;
    let bytesReceived = 0;
    const req = https.get(url, { timeout: 30000 }, res => {
      res.on('data', chunk => {
        data += chunk;
        bytesReceived += chunk.length;
        if (!resolved && bytesReceived > MAX_BYTES) {
          resolved = true;
          res.destroy();
          resolve(data);
        }
      });
      res.on('end', () => { if (!resolved) { resolved = true; resolve(data); } });
      res.on('error', () => { if (!resolved) { resolved = true; resolve(data); } });
    });
    req.on('timeout', () => {
      req.destroy();
      if (!resolved) {
        if (retries > 0 && data.length < 50000) {
          // Retry once if we got less than 50KB (likely a timeout)
          setTimeout(() => resolve(fetchUrl(url, retries - 1)), 500);
        } else {
          resolved = true;
          resolve(data);
        }
      }
    });
    req.on('error', () => { if (!resolved) { resolved = true; resolve(''); } });
  });
}

function cleanTitle(raw) {
  // Remove emoji sequences and trailing site name
  let t = raw.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}]/gu, '').trim();
  // Remove trailing " - Play Online Free on Gamezop", " Play Free Online", etc.
  t = t.replace(/\s*[—\-–|]\s*(Play|Free|Online|Gamezop).*$/i, '').trim();
  t = t.replace(/\s*Play\s+(Free\s+)?(Browser\s+)?(Game|Online).*$/i, '').trim();
  t = t.replace(/\s+for Free.*$/i, '').trim();
  t = t.replace(/\s+Online.*$/i, '').trim();
  t = t.replace(/[🃏💎🧩♟️⚽]/g, '').trim();
  return t.trim();
}

function extractMeta(html, slug) {
  // Title from og:title
  const ogMatch = html.match(/property="og:title"\s+content="([^"]+)"/);
  const title = ogMatch ? cleanTitle(ogMatch[1]) : slug;

  // Description from meta description
  const descMatch = html.match(/name="description"\s+content="([^"]+)"/);
  const description = descMatch ? descMatch[1].replace(/&#x27;/g, "'").replace(/&amp;/g, '&') : '';
  const shortDescription = description.length > 120 ? description.substring(0, 117) + '...' : description;

  // Extract tags from JSON-LD breadcrumbs (only position 2 = category tags)
  const tags = [];
  const breadListRegex = /"itemListElement":\[{"@type":"ListItem","position":1,"name":"[^"]+","item":"[^"]+"},{"@type":"ListItem","position":2,"name":"[^"]+","item":"https:\/\/www\.gamezop\.com\/en\/tags\/([^"]+)"}/g;
  let blMatch;
  while ((blMatch = breadListRegex.exec(html)) !== null) {
    tags.push(blMatch[1]);
  }

  // Fallback: find /en/tags/ in HTML
  if (tags.length === 0) {
    const tagRegex = /\/en\/tags\/([a-z0-9-]+)/g;
    let tMatch;
    while ((tMatch = tagRegex.exec(html)) !== null) {
      tags.push(tMatch[1]);
    }
  }

  return { title, shortDescription, description, tags: [...new Set(tags)] };
}

function mapCategory(tags) {
  for (const tag of tags) {
    if (TAG_MAP[tag]) return TAG_MAP[tag];
  }
  return 'casual'; // default
}

function getDifficulty(tags, category) {
  for (const tag of tags) {
    if (DIFFICULTY_BY_TAG[tag]) return DIFFICULTY_BY_TAG[tag];
  }
  return 'easy';
}

async function processGame(slug, code) {
  const url = `https://www.gamezop.com/en/game/${slug}/${code}`;
  let html;
  try {
    html = await fetchUrl(url);
  } catch (e) {
    console.error(`Failed to fetch ${slug}: ${e.message}`);
    return null;
  }

  const meta = extractMeta(html, slug);
  const category = mapCategory(meta.tags);
  const difficulty = getDifficulty(meta.tags, category);

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
  // Read game list
  const content = fs.readFileSync(path.join(__dirname, 'tmp_games_clean.txt'), 'utf8').trim();
  const lines = content.split('\n').filter(l => l.trim());
  const allGames = lines.map(l => {
    const parts = l.split(' ');
    return { slug: parts[0], code: parts[1] };
  });

  // Remove already existing
  const existing = require('./src/data/games.json');
  const existingSlugs = new Set(existing.map(g => g.slug));
  const newGames = allGames.filter(g => !existingSlugs.has(g.slug));

  console.log(`Total: ${allGames.length}, New: ${newGames.length}, Already exist: ${allGames.length - newGames.length}`);

  // Process in parallel batches
  const results = [];
  let completed = 0;

  for (let i = 0; i < newGames.length; i += CONCURRENCY) {
    const batch = newGames.slice(i, i + CONCURRENCY);
    const promises = batch.map(g => processGame(g.slug, g.code));
    const batchResults = await Promise.all(promises);

    for (const r of batchResults) {
      if (r) {
        results.push(r);
        completed++;
        process.stdout.write(`\rFetched: ${completed}/${newGames.length} | Added: ${results.length}`);
      }
    }
  }

  console.log(`\nDone! Fetched ${results.length} games successfully.`);

  // Write output
  const outputPath = path.join(__dirname, 'gamezop_output.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`Output written to ${outputPath}`);

  // Category breakdown
  const cats = {};
  results.forEach(g => { cats[g.category] = (cats[g.category] || 0) + 1; });
  console.log('Category breakdown:', cats);
}

main().catch(console.error);
