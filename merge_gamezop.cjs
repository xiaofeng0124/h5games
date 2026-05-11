const fs = require('fs');
const path = require('path');

const gamesPath = path.join(__dirname, 'src/data/games.json');
const newGamesPath = path.join(__dirname, 'gamezop_output.json');

const games = JSON.parse(fs.readFileSync(gamesPath, 'utf8'));
const newGames = JSON.parse(fs.readFileSync(newGamesPath, 'utf8'));

const existingSlugs = new Set(games.map(g => g.slug));
const toAdd = newGames.filter(g => !existingSlugs.has(g.slug));

console.log(`Current games: ${games.length}`);
console.log(`New games from Gamezop: ${toAdd.length}`);
console.log(`Duplicates skipped: ${newGames.length - toAdd.length}`);

// Add all new games
games.push(...toAdd);

// Write back
fs.writeFileSync(gamesPath, JSON.stringify(games, null, 2));

console.log(`Total games now: ${games.length}`);

// Category breakdown
const cats = {};
games.forEach(g => { cats[g.category] = (cats[g.category] || 0) + 1; });
console.log('Category breakdown:', Object.entries(cats).sort((a,b) => b[1]-a[1]).map(([k,v]) => `${k}: ${v}`).join(', '));
