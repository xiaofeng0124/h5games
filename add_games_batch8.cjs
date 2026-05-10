const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  // Match-3
  {
    slug: 'jewels-mine',
    title: 'Jewels Mine',
    shortDescription: 'A classic match-3 game where you swap and match gems for points.',
    description: 'Jewels Mine is a classic match-3 puzzle game where you swap and match 3 or more gems to score points and earn power-ups. Clear the board and achieve high scores in this timeless and addictive puzzle game.',
    category: 'match-3',
    tags: ['match-3', 'jewel', 'gem', 'puzzle', 'classic', 'addictive'],
    difficulty: 'easy',
    featured: false,
    rating: 4.3,
    playCount: 30000,
    iframeUrl: 'https://html5.gamedistribution.com/523999c927484d01b859e5218957f2c3/?gd_sdk_referrer_url=' + baseUrl + '/games/jewels-mine',
    image: 'https://img.gamedistribution.com/523999c927484d01b859e5218957f2c3-512x512.jpg'
  },
  {
    slug: 'jewel-magic',
    title: 'Jewel Magic',
    shortDescription: 'Swap and match 3 jewels to create bombs and use power-ups.',
    description: 'Jewel Magic is a fun match-3 puzzle game where you swap and match 3 jewels of identical colors. Create special bombs and use powerful boosters to clear the board. Progress through challenging levels in this magical gem-matching adventure.',
    category: 'match-3',
    tags: ['match-3', 'jewel', 'magic', 'puzzle', 'bombs', 'power-ups'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 22000,
    iframeUrl: 'https://html5.gamedistribution.com/3489a5bce1ca4475a0114307ee61436b/?gd_sdk_referrer_url=' + baseUrl + '/games/jewel-magic',
    image: 'https://img.gamedistribution.com/3489a5bce1ca4475a0114307ee61436b-512x512.jpg'
  },
  // Board - Chess & Mahjong & Domino
  {
    slug: 'master-chess',
    title: 'Master Chess',
    shortDescription: 'Play chess against the PC or challenge a friend locally.',
    description: 'Master Chess offers two game modes: play against the PC with adjustable difficulty or challenge a friend in local multiplayer. Sharpen your chess skills and become a master of the classic board game.',
    category: 'board',
    tags: ['chess', 'board', 'strategy', 'multiplayer', 'classic', 'logic'],
    difficulty: 'medium',
    featured: false,
    rating: 4.4,
    playCount: 28000,
    iframeUrl: 'https://html5.gamedistribution.com/b2a3398e327b4f6da665759d6730aab4/?gd_sdk_referrer_url=' + baseUrl + '/games/master-chess',
    image: 'https://img.gamedistribution.com/b2a3398e327b4f6da665759d6730aab4-512x512.jpg'
  },
  {
    slug: 'mahjong-classic',
    title: 'Mahjong Classic',
    shortDescription: 'The classic Chinese tile-matching game of strategy and patience.',
    description: 'Mahjong Classic brings the beloved Chinese tile-matching game to your browser. Match pairs of identical tiles to clear the board. Beautiful tile sets and multiple layouts provide hours of relaxing strategic gameplay.',
    category: 'board',
    tags: ['mahjong', 'board', 'tiles', 'matching', 'classic', 'strategy'],
    difficulty: 'medium',
    featured: false,
    rating: 4.5,
    playCount: 40000,
    iframeUrl: 'https://html5.gamedistribution.com/59339ed7844e46649d4f5a5bc8214dc1/?gd_sdk_referrer_url=' + baseUrl + '/games/mahjong-classic',
    image: 'https://img.gamedistribution.com/59339ed7844e46649d4f5a5bc8214dc1-512x512.jpg'
  },
  {
    slug: 'shanghai-chef',
    title: 'Shanghai Chef',
    shortDescription: 'A Shanghai-style mahjong game with a fun cooking theme.',
    description: 'Shanghai Chef combines classic Shanghai mahjong gameplay with a delightful cooking theme. Match tiles featuring ingredients and kitchen items. A fresh and tasty twist on traditional mahjong solitaire.',
    category: 'board',
    tags: ['mahjong', 'shanghai', 'board', 'tiles', 'cooking', 'puzzle'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/9ebebcbe06ab48ec812215c3306a766a/?gd_sdk_referrer_url=' + baseUrl + '/games/shanghai-chef',
    image: 'https://img.gamedistribution.com/9ebebcbe06ab48ec812215c3306a766a-512x512.jpg'
  },
  {
    slug: 'hidden-pairs-mahjong',
    title: 'Hidden Pairs Mahjong',
    shortDescription: 'Find hidden matching pairs in this mahjong puzzle game.',
    description: 'Hidden Pairs Mahjong is a unique twist on mahjong where tiles are hidden and you must find matching pairs. Sharpen your memory and observation skills as you uncover and match tiles in this engaging puzzle.',
    category: 'board',
    tags: ['mahjong', 'hidden', 'pairs', 'memory', 'board', 'puzzle'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 10000,
    iframeUrl: 'https://html5.gamedistribution.com/814a20fdccea479d96560cf4f4a6a02c/?gd_sdk_referrer_url=' + baseUrl + '/games/hidden-pairs-mahjong',
    image: 'https://img.gamedistribution.com/814a20fdccea479d96560cf4f4a6a02c-512x512.jpg'
  },
  {
    slug: 'mahjong-slide-puzzle',
    title: 'Mahjong Slide Puzzle',
    shortDescription: 'A unique sliding mahjong puzzle for mobile-friendly play.',
    description: 'Mahjong Slide Puzzle combines mahjong tiles with sliding puzzle mechanics. Rearrange tiles to match pairs in this innovative and mobile-friendly puzzle game that puts a fresh spin on classic mahjong.',
    category: 'board',
    tags: ['mahjong', 'slide', 'puzzle', 'board', 'mobile', 'relaxing'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 8000,
    iframeUrl: 'https://html5.gamedistribution.com/10d9f5e5cec04793806e91e5d58db9da/?gd_sdk_referrer_url=' + baseUrl + '/games/mahjong-slide-puzzle',
    image: 'https://img.gamedistribution.com/10d9f5e5cec04793806e91e5d58db9da-512x512.jpg'
  },
  {
    slug: 'mahjong-connect-tiles',
    title: 'Mahjong Connect Tiles',
    shortDescription: 'Connect matching mahjong tiles in this classic pairing game.',
    description: 'Mahjong Connect Tiles challenges you to connect and match identical tiles. Clear the board by connecting tiles with a path that has no more than two turns. A strategic and engaging mahjong variant.',
    category: 'board',
    tags: ['mahjong', 'connect', 'tiles', 'board', 'matching', 'strategy'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/2964219d4210425db1980531bf0b3010/?gd_sdk_referrer_url=' + baseUrl + '/games/mahjong-connect-tiles',
    image: 'https://img.gamedistribution.com/2964219d4210425db1980531bf0b3010-512x512.jpg'
  },
  {
    slug: 'mahjong-solitaire-zodiac',
    title: 'Mahjong Solitaire Zodiac',
    shortDescription: 'A zodiac-themed mahjong solitaire with beautiful tile designs.',
    description: 'Mahjong Solitaire Zodiac brings a zodiac theme to classic mahjong solitaire. Match pairs of zodiac-themed tiles in this relaxing and beautifully designed puzzle game. Perfect for mahjong enthusiasts.',
    category: 'board',
    tags: ['mahjong', 'zodiac', 'solitaire', 'board', 'tiles', 'relaxing'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 9000,
    iframeUrl: 'https://html5.gamedistribution.com/be82b0f4cedc4f8aa41e186e90449296/?gd_sdk_referrer_url=' + baseUrl + '/games/mahjong-solitaire-zodiac',
    image: 'https://img.gamedistribution.com/be82b0f4cedc4f8aa41e186e90449296-512x512.jpg'
  },
  {
    slug: 'mahjong-lines',
    title: 'Mahjong Lines',
    shortDescription: 'Line up matching mahjong tiles in this addictive puzzle game.',
    description: 'Mahjong Lines is an addictive puzzle game where you line up matching mahjong tiles. Connect three identical tiles in a straight line to remove them. A fresh and innovative take on mahjong gameplay.',
    category: 'board',
    tags: ['mahjong', 'lines', 'board', 'puzzle', 'addictive', 'matching'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/8625ea2a8244492980f16e192880f934/?gd_sdk_referrer_url=' + baseUrl + '/games/mahjong-lines',
    image: 'https://img.gamedistribution.com/8625ea2a8244492980f16e192880f934-512x512.jpg'
  },
  {
    slug: 'winter-mahjong',
    title: 'Winter Mahjong',
    shortDescription: 'A beautiful winter-themed mahjong game with festive tiles.',
    description: 'Winter Mahjong brings the magic of winter to the classic mahjong game. Beautiful winter-themed tile sets and cozy seasonal music create a relaxing gaming experience. Perfect for cold days by the fire.',
    category: 'board',
    tags: ['mahjong', 'winter', 'seasonal', 'board', 'tiles', 'relaxing'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/7a25a32aab5a43fa8eebbd8baa9aaccd/?gd_sdk_referrer_url=' + baseUrl + '/games/winter-mahjong',
    image: 'https://img.gamedistribution.com/7a25a32aab5a43fa8eebbd8baa9aaccd-512x512.jpg'
  },
  {
    slug: 'shanghai-town',
    title: 'Shanghai Town',
    shortDescription: 'An Asian-themed mahjong puzzle with beautiful Shanghai aesthetics.',
    description: 'Shanghai Town is a beautifully designed mahjong puzzle game featuring stunning Asian-themed visuals inspired by Shanghai. Match tiles and clear the board while enjoying the elegant art style and relaxing gameplay.',
    category: 'board',
    tags: ['mahjong', 'shanghai', 'asian', 'board', 'tiles', 'relaxing'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 11000,
    iframeUrl: 'https://html5.gamedistribution.com/a39c45f985354760bce8990b067858e1/?gd_sdk_referrer_url=' + baseUrl + '/games/shanghai-town',
    image: 'https://img.gamedistribution.com/a39c45f985354760bce8990b067858e1-512x512.jpg'
  },
  {
    slug: 'miracle-mahjong',
    title: 'Miracle Mahjong',
    shortDescription: 'A magical mahjong solitaire with mystical tile designs.',
    description: 'Miracle Mahjong is a magical take on the classic mahjong solitaire. Match mystical tiles featuring magical symbols and creatures. A spellbinding puzzle experience for mahjong lovers.',
    category: 'board',
    tags: ['mahjong', 'magic', 'board', 'tiles', 'mystical', 'puzzle'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 8000,
    iframeUrl: 'https://html5.gamedistribution.com/c1a565ff55b24f8dba2e591c07e6e991/?gd_sdk_referrer_url=' + baseUrl + '/games/miracle-mahjong',
    image: 'https://img.gamedistribution.com/c1a565ff55b24f8dba2e591c07e6e991-512x512.jpg'
  },
  {
    slug: 'domino-classic',
    title: 'Domino Classic',
    shortDescription: 'Play classic dominoes with draw, block, and all five modes.',
    description: 'Domino Classic features three classic domino modes: Draw domino, Block domino, and All Five (Muggins). Play against AI opponents and master the classic tile-matching game loved worldwide.',
    category: 'board',
    tags: ['domino', 'board', 'classic', 'matching', 'strategy', 'multiplayer'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/05441ee2fe3c49f5896b624e88b567f2/?gd_sdk_referrer_url=' + baseUrl + '/games/domino-classic',
    image: 'https://img.gamedistribution.com/05441ee2fe3c49f5896b624e88b567f2-512x512.jpg'
  },
  {
    slug: 'dominoes',
    title: 'Dominoes',
    shortDescription: 'The classic dominoes game with multiple game modes.',
    description: 'Dominoes is a classic tile-matching game where you match numbers and empty your hand before your opponent. Multiple game modes provide endless entertainment in this timeless board game.',
    category: 'board',
    tags: ['domino', 'board', 'classic', 'matching', 'multiplayer', 'strategy'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/570a3374c51447859a3c6f693c77179d/?gd_sdk_referrer_url=' + baseUrl + '/games/dominoes',
    image: 'https://img.gamedistribution.com/570a3374c51447859a3c6f693c77179d-512x512.jpg'
  },
  // Card
  {
    slug: 'office-solitaire',
    title: 'Office Solitaire',
    shortDescription: 'Classic solitaire card game perfect for a quick office break.',
    description: 'Office Solitaire is the classic solitaire card game we all know and love. Collect all cards to the top row in suited sequences from ace to king. Perfect for a quick mental break during the work day.',
    category: 'card',
    tags: ['solitaire', 'card', 'office', 'classic', 'klondike', 'casual'],
    difficulty: 'easy',
    featured: false,
    rating: 4.4,
    playCount: 45000,
    iframeUrl: 'https://html5.gamedistribution.com/ab572c1e1dc04e4499da4db26e768286/?gd_sdk_referrer_url=' + baseUrl + '/games/office-solitaire',
    image: 'https://img.gamedistribution.com/ab572c1e1dc04e4499da4db26e768286-512x512.jpg'
  },
  // Runner
  {
    slug: 'fire-runner',
    title: 'Fire Runner',
    shortDescription: 'An infinite runner where you jump across platforms and collect stars.',
    description: 'Fire Runner is an exciting infinite runner game where you jump across platforms, collect stars, and aim for the highest score. Fast-paced action with simple controls makes this an addictive endless runner experience.',
    category: 'arcade',
    tags: ['runner', 'endless', 'platform', 'arcade', 'action', 'jumping'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 25000,
    iframeUrl: 'https://html5.gamedistribution.com/55ea2010e08d4d29a4202c8b1944cb57/?gd_sdk_referrer_url=' + baseUrl + '/games/fire-runner',
    image: 'https://img.gamedistribution.com/55ea2010e08d4d29a4202c8b1944cb57-512x512.jpg'
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
