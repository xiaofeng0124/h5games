const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  // Word
  {
    slug: 'daily-crossword',
    title: 'Daily Crossword',
    shortDescription: 'Solve a new crossword puzzle every day in this classic word game.',
    description: 'Daily Crossword brings you a fresh crossword puzzle every day. Challenge your vocabulary and general knowledge as you fill in the grid with the correct words. A daily brain workout for crossword enthusiasts of all skill levels.',
    category: 'word',
    tags: ['crossword', 'daily', 'word', 'puzzle', 'vocabulary', 'classic'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 25000,
    iframeUrl: 'https://html5.gamedistribution.com/e74d9a4123fb4880bc5e3d7664c9dcc9/?gd_sdk_referrer_url=' + baseUrl + '/games/daily-crossword',
    image: 'https://img.gamedistribution.com/e74d9a4123fb4880bc5e3d7664c9dcc9-512x512.jpg'
  },
  // Match-3
  {
    slug: 'tasty-jewel',
    title: 'Tasty Jewel',
    shortDescription: 'Match delicious jewel-shaped candies in this sweet match-3 puzzle.',
    description: 'Tasty Jewel is a delightful match-3 puzzle game where you match delicious jewel-shaped candies and treats. Swap and match your way through hundreds of levels, earn special power-ups, and enjoy this sweet puzzle adventure.',
    category: 'match-3',
    tags: ['match-3', 'jewel', 'candy', 'sweet', 'puzzle', 'addictive'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/e8bee93a367e453dacd45cc41c79d583/?gd_sdk_referrer_url=' + baseUrl + '/games/tasty-jewel',
    image: 'https://img.gamedistribution.com/e8bee93a367e453dacd45cc41c79d583-512x512.jpg'
  },
  {
    slug: 'sword-and-jewel',
    title: 'Sword and Jewel',
    shortDescription: 'A unique match-3 game combining gem matching with RPG adventure.',
    description: 'Sword and Jewel is an exciting match-3 puzzle game with RPG elements. Match gems to power up your hero, defeat monsters, and collect treasure as you journey through a fantasy world. A fresh take on the match-3 genre.',
    category: 'match-3',
    tags: ['match-3', 'rpg', 'adventure', 'gems', 'fantasy', 'hero'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/cfa31c4f1ac04ead8c5a32db674704cd/?gd_sdk_referrer_url=' + baseUrl + '/games/sword-and-jewel',
    image: 'https://img.gamedistribution.com/cfa31c4f1ac04ead8c5a32db674704cd-512x512.jpg'
  },
  {
    slug: 'vegamix-da-vinci-puzzles',
    title: 'VegaMix Da Vinci Puzzles',
    shortDescription: 'Travel to Renaissance Italy and help Da Vinci complete his inventions.',
    description: 'VegaMix Da Vinci Puzzles is a match-3 adventure puzzle game where you travel to Renaissance Italy and help Leonardo da Vinci complete his greatest inventions. Solve challenging puzzles and discover history in this unique match-3 game.',
    category: 'match-3',
    tags: ['match-3', 'da-vinci', 'renaissance', 'puzzle', 'adventure', 'history'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/1a249236f03f474db586aeba1abafae0/?gd_sdk_referrer_url=' + baseUrl + '/games/vegamix-da-vinci-puzzles',
    image: 'https://img.gamedistribution.com/1a249236f03f474db586aeba1abafae0-512x512.jpg'
  },
  {
    slug: 'guivo-io',
    title: 'Guivo.io',
    shortDescription: 'A competitive match-3 puzzle game with online multiplayer battles.',
    description: 'Guivo.io is a competitive match-3 puzzle game where you battle against other players online. Match gems faster than your opponents to sabotage their boards and claim victory. A thrilling multiplayer twist on classic match-3 gameplay.',
    category: 'match-3',
    tags: ['match-3', 'multiplayer', 'io', 'competitive', 'puzzle', 'online'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 22000,
    iframeUrl: 'https://html5.gamedistribution.com/6f9f6acf8e41478bbda4a451ad7365bd/?gd_sdk_referrer_url=' + baseUrl + '/games/guivo-io',
    image: 'https://img.gamedistribution.com/6f9f6acf8e41478bbda4a451ad7365bd-512x512.jpg'
  },
  {
    slug: 'molang-match-n-munch',
    title: "Molang Match'n Munch",
    shortDescription: 'Match cute characters with Molang in this adorable puzzle game.',
    description: "Molang Match'n Munch is an adorable match-3 puzzle game featuring the cute character Molang. Match identical characters, clear the board, and enjoy the charming visuals in this family-friendly puzzle game perfect for all ages.",
    category: 'match-3',
    tags: ['match-3', 'cute', 'molang', 'puzzle', 'colorful', 'family'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 14000,
    iframeUrl: 'https://html5.gamedistribution.com/a5fe35ceaea34474b9a114792a53b338/?gd_sdk_referrer_url=' + baseUrl + '/games/molang-match-n-munch',
    image: 'https://img.gamedistribution.com/a5fe35ceaea34474b9a114792a53b338-512x512.jpg'
  },
  // Match-3 / Puzzle
  {
    slug: 'diamondz',
    title: 'Diamondz',
    shortDescription: 'Match sparkling diamonds in this brilliant gem-matching puzzle game.',
    description: 'Diamondz is a brilliant match-3 puzzle game where you match sparkling diamonds and precious gems. Swap and match your way through challenging levels, earn high scores, and enjoy the dazzling gemstone visuals.',
    category: 'match-3',
    tags: ['match-3', 'diamond', 'gems', 'puzzle', 'sparkling', 'classic'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 16000,
    iframeUrl: 'https://html5.gamedistribution.com/4f0be8dddab5440b9011a238ac03db35/?gd_sdk_referrer_url=' + baseUrl + '/games/diamondz',
    image: 'https://img.gamedistribution.com/4f0be8dddab5440b9011a238ac03db35-512x512.jpg'
  },
  // Puzzle
  {
    slug: 'water-sort-puzzle-3',
    title: 'Water Sort Puzzle 3',
    shortDescription: 'Sort colored water into the correct tubes in this relaxing puzzle game.',
    description: 'Water Sort Puzzle 3 is a relaxing puzzle game where you sort colored water into the correct glass tubes. Pour water between tubes, mix and match colors, and solve increasingly challenging puzzles. A soothing and addictive brain teaser.',
    category: 'puzzle',
    tags: ['water', 'sort', 'puzzle', 'relaxing', 'color', 'logic'],
    difficulty: 'easy',
    featured: false,
    rating: 4.3,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/bba6ae893ed4493eb3553c93637db902/?gd_sdk_referrer_url=' + baseUrl + '/games/water-sort-puzzle-3',
    image: 'https://img.gamedistribution.com/bba6ae893ed4493eb3553c93637db902-512x512.jpg'
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
