const https = require('https');
const fs = require('fs');
const path = require('path');

const GAMES_PATH = path.resolve(__dirname, '../src/data/games.json');
const CATEGORIES_PATH = path.resolve(__dirname, '../src/data/categories.json');

// GM RSS API base
const API_BASE = 'https://rss.gamemonetize.com/rssfeed.php?format=json&type=html5&popularity=bestgames&company=All';

// Categories to fetch individually (to get maximal unique games)
const GM_CATEGORIES = [
  'All', 'Action', 'Adventure', 'Arcade', 'Fighting',
  'Multiplayer', 'Puzzles', 'Racing', 'Shooting', 'Soccer', 'Sports'
];

// Map GM categories to our category slugs
const CATEGORY_MAP = {
  'Action': 'action',
  'Adventure': 'adventure',
  'Arcade': 'arcade',
  'Bejeweled': 'puzzle',
  'Boys': 'action',
  'Clicker': 'idle',
  'Fighting': 'fighting',
  'Girls': 'casual',
  'Hypercasual': 'casual',
  'Multiplayer': 'multiplayer',
  'Puzzles': 'puzzle',
  'Racing': 'racing',
  'Shooting': 'action',
  'Soccer': 'sports',
  'Sports': 'sports',
  '3D': 'action',
};

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { timeout: 30000 }, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        try {
          resolve(JSON.parse(Buffer.concat(chunks).toString()));
        } catch (e) {
          reject(new Error(`Failed to parse JSON from ${url}: ${e.message}`));
        }
      });
      res.on('error', reject);
    }).on('error', reject).on('timeout', function() {
      this.destroy();
      reject(new Error('Timeout'));
    });
  });
}

function extractGameId(url) {
  // URL format: https://html5.gamemonetize.co/ID/
  const match = url.match(/gamemonetize\.co\/([^/]+)/);
  return match ? match[1] : null;
}

function generateShortDescription(desc, maxLen = 150) {
  if (!desc) return '';
  // Strip HTML tags
  const clean = desc.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&mdash;/g, '—');
  if (clean.length <= maxLen) return clean;
  return clean.slice(0, maxLen).replace(/\s+\S*$/, '') + '...';
}

function generateSlug(gameId, categorySlug, existingSlugs) {
  let slug = gameId;
  if (categorySlug) {
    slug = `${gameId}-${categorySlug}`;
  }
  // Ensure uniqueness
  if (existingSlugs.has(slug)) {
    let n = 1;
    while (existingSlugs.has(`${slug}-${n}`)) n++;
    slug = `${slug}-${n}`;
  }
  existingSlugs.add(slug);
  return slug;
}

async function main() {
  console.log('Loading existing games...');
  const games = JSON.parse(fs.readFileSync(GAMES_PATH, 'utf-8'));
  const categories = JSON.parse(fs.readFileSync(CATEGORIES_PATH, 'utf-8'));

  // Build set of existing GM game IDs from iframeUrl
  const existingIds = new Set();
  const existingSlugs = new Set();
  for (const g of games) {
    existingSlugs.add(g.slug);
    if (g.iframeUrl) {
      const id = extractGameId(g.iframeUrl);
      if (id) existingIds.add(id);
    }
  }

  console.log(`Existing games: ${games.length}`);
  console.log(`Existing GM game IDs: ${existingIds.size}`);

  // Fetch from all categories
  const allFetched = new Map(); // gameId -> game data

  for (const cat of GM_CATEGORIES) {
    const url = `${API_BASE}&category=${cat}&amount=500`;
    console.log(`Fetching category: ${cat}...`);
    try {
      const fetched = await fetchJSON(url);
      console.log(`  Got ${fetched.length} games`);
      for (const g of fetched) {
        const id = extractGameId(g.url);
        if (id && !allFetched.has(id)) {
          allFetched.set(id, { ...g, _gmId: id });
        }
      }
    } catch (e) {
      console.error(`  Failed: ${e.message}`);
    }
  }

  console.log(`\nTotal unique games fetched: ${allFetched.size}`);

  // Find new games
  const newGames = [];
  for (const [id, g] of allFetched) {
    if (!existingIds.has(id)) {
      newGames.push(g);
    }
  }

  console.log(`New games to add: ${newGames.length}`);

  if (newGames.length === 0) {
    console.log('No new games to add.');
    return;
  }

  // Map to our format and add
  let added = 0;
  for (const g of newGames) {
    const gameId = g._gmId;
    const gmCat = g.category || 'Casual';
    const catSlug = CATEGORY_MAP[gmCat] || 'casual';

    // Only add if we support this category
    if (!categories[catSlug]) {
      console.log(`  Skipping ${g.title}: unknown category mapping '${gmCat}' -> '${catSlug}'`);
      continue;
    }

    const tags = (g.tags || '')
      .split(',')
      .map(t => t.trim().toLowerCase())
      .filter(Boolean);

    const shortDesc = generateShortDescription(g.description || '');

    const slug = generateSlug(gameId, catSlug, existingSlugs);

    const entry = {
      slug,
      title: g.title,
      description: g.description || '',
      shortDescription: shortDesc,
      category: catSlug,
      tags: tags.length > 0 ? tags : [catSlug],
      difficulty: 'medium',
      image: g.thumb || '',
      iframeUrl: g.url,
      width: g.width || '800',
      height: g.height || '600',
      score: 0,
    };

    games.push(entry);
    added++;
    existingSlugs.add(slug);
  }

  console.log(`\nAdded ${added} new GM games. Total games: ${games.length}`);

  // Write back
  fs.writeFileSync(GAMES_PATH, JSON.stringify(games, null, 2), 'utf-8');
  console.log('games.json updated successfully.');
}

main().catch(console.error);
