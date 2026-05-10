const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  {
    slug: 'rodha',
    title: 'Rodha',
    shortDescription: 'Navigate through 60 hand-crafted levels with unique characters and obstacles.',
    description: 'Rodha is a challenging platformer with 60 hand-crafted levels, 9 unique characters, and 11 color themes. Navigate through portals, avoid cannons and moving saws, collect coins, and upgrade your abilities in this beautifully designed adventure.',
    category: 'arcade',
    tags: ['platformer', 'levels', 'characters', 'obstacle', 'arcade', 'adventure'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/ec147555caf047899e02c433fc467f55/?gd_sdk_referrer_url=' + baseUrl + '/games/rodha',
    image: 'https://img.gamedistribution.com/ec147555caf047899e02c433fc467f55-512x512.jpg'
  }
];

const existingSlugs = new Set(g.map(x => x.slug));
const dupes = newGames.filter(ng => existingSlugs.has(ng.slug));
if (dupes.length > 0) {
  console.log('DUPLICATES:', dupes.map(d => d.slug));
} else {
  console.log('No duplicates, adding', newGames.length, 'games');
  g.push(...newGames);
  fs.writeFileSync(path.join(base, 'src/data/games.json'), JSON.stringify(g, null, 2));
  console.log('Total games now:', g.length);
}
