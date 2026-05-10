const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  {
    slug: 'tile-sort-match-3',
    title: 'Tile Sort Match 3',
    shortDescription: 'An addictive match-3 puzzle game where you sort and match identical tiles.',
    description: 'Tile Sort Match 3 is an addictive match-3 puzzle game where your task is to sort and match identical tiles on the board. The game combines classic match-3 gameplay with elements of sorting, adding an extra layer of strategy and logic. Move tiles, creating combinations of three or more identical tiles to clear the board.',
    category: 'match-3',
    tags: ['match-3', 'puzzle', 'sorting', 'tiles', 'logic', 'board'],
    difficulty: 'easy',
    featured: false,
    rating: 4.3,
    playCount: 35000,
    iframeUrl: 'https://html5.gamedistribution.com/38bbd63f000a442b8545e3cd55c8b619/?gd_sdk_referrer_url=' + baseUrl + '/games/tile-sort-match-3',
    image: 'https://img.gamedistribution.com/38bbd63f000a442b8545e3cd55c8b619-512x512.jpg'
  },
  {
    slug: 'word-connect-puzzle',
    title: 'Word Connect Puzzle',
    shortDescription: 'A relaxing word puzzle game where you swipe letters to form hidden words.',
    description: 'Word Connect Puzzle is a relaxing yet brain-boosting word game. Swipe letters to form hidden words, unlock new packs, and watch the difficulty rise as your vocabulary grows. Earn stars, complete daily challenges, and use hints when you are stuck. Play offline anytime, enjoy clean visuals and smooth controls.',
    category: 'word',
    tags: ['word', 'puzzle', 'vocabulary', 'brain', 'casual', 'spelling'],
    difficulty: 'easy',
    featured: false,
    rating: 4.4,
    playCount: 28000,
    iframeUrl: 'https://html5.gamedistribution.com/1b392a6ff2514ce48a70c90b349e5de5/?gd_sdk_referrer_url=' + baseUrl + '/games/word-connect-puzzle',
    image: 'https://img.gamedistribution.com/1b392a6ff2514ce48a70c90b349e5de5-512x512.jpg'
  },
  {
    slug: 'toy-rumble-3d',
    title: 'Toy Rumble 3D',
    shortDescription: 'An explosive 3D arcade adventure with tanks, obstacles, and action.',
    description: 'Begin an explosive toy adventure in Toy Rumble 3D. A 3D running and racing arcade game packed with action, speed, and strategy. Move your tank through chaotic obstacle courses, collect parts, assemble your cannon, and shoot your way to victory.',
    category: 'arcade',
    tags: ['arcade', '3d', 'action', 'tank', 'racing', 'obstacle'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 45000,
    iframeUrl: 'https://html5.gamedistribution.com/d6a79fd8e22c46498f2f876d87c474cf/?gd_sdk_referrer_url=' + baseUrl + '/games/toy-rumble-3d',
    image: 'https://img.gamedistribution.com/d6a79fd8e22c46498f2f876d87c474cf-512x512.jpg'
  },
  {
    slug: '67-clicker-tap-tap',
    title: '67 Clicker Tap Tap',
    shortDescription: 'A funny meme clicker game where every tap unlocks new characters.',
    description: '67 Clicker is a fast, funny, and highly addictive meme clicker game where every tap brings you closer to unlocking a strange and unforgettable collection of 67-themed characters. Click to earn 67 Points, spend them on upgrades, and keep growing your power. Reach the final upgrade, The 67 Galaxy.',
    category: 'casual',
    tags: ['clicker', 'idle', 'meme', 'casual', 'incremental', 'funny'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/7fcb55f25f4a4a07848c630dffe1ae6e/?gd_sdk_referrer_url=' + baseUrl + '/games/67-clicker-tap-tap',
    image: 'https://img.gamedistribution.com/7fcb55f25f4a4a07848c630dffe1ae6e-512x512.jpg'
  },
  {
    slug: 'word-solitaire',
    title: 'Word Solitaire',
    shortDescription: 'A unique blend of word-building and strategic card gameplay.',
    description: 'Challenge your mind with a fresh twist on a classic with Word Solitaire! This addictive word solitaire blends clever word-building with strategic card gameplay, creating a unique solo experience. Find categories, reveal hidden words, and clear the board in increasingly challenging levels.',
    category: 'word',
    tags: ['word', 'solitaire', 'card', 'puzzle', 'strategy', 'vocabulary'],
    difficulty: 'medium',
    featured: false,
    rating: 4.3,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/cdf4057010434b89b509008587b9bca8/?gd_sdk_referrer_url=' + baseUrl + '/games/word-solitaire',
    image: 'https://img.gamedistribution.com/cdf4057010434b89b509008587b9bca8-512x512.jpg'
  },
  {
    slug: 'classic-klondike-solitaire',
    title: 'Classic Klondike Solitaire',
    shortDescription: 'The most addictive solitaire card game — play classic Klondike free.',
    description: 'Klondike solitaire is one of the most addictive solitaire card games. It is played with a single 52 playing cards. The object of the game is to order all of the cards into the deck four suits (diamonds, clubs, hearts, spades) and to do so in ascending order from ace to king.',
    category: 'card',
    tags: ['solitaire', 'card', 'klondike', 'classic', 'strategy', 'puzzle'],
    difficulty: 'easy',
    featured: false,
    rating: 4.6,
    playCount: 85000,
    iframeUrl: 'https://html5.gamedistribution.com/969e65a698a64920bfeccdedce93f5aa/?gd_sdk_referrer_url=' + baseUrl + '/games/classic-klondike-solitaire',
    image: 'https://img.gamedistribution.com/969e65a698a64920bfeccdedce93f5aa-512x512.jpg'
  },
  {
    slug: '99-balls-3d',
    title: '99 Balls 3D',
    shortDescription: 'An endless arcade game mixing brick breaker and bubble shooter in 3D.',
    description: '99 Balls 3D is an endless arcade game that mixes brick breaker and bubble shooter action in full 3D. Launch balls to smash numbered cylinders before they reach the bottom. Collect stars to unlock fun ball skins like sports balls, gems, or fruit. Simple to play, endlessly challenging, and highly addictive!',
    category: 'arcade',
    tags: ['arcade', '3d', 'brick-breaker', 'bubble-shooter', 'endless', 'ball'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 32000,
    iframeUrl: 'https://html5.gamedistribution.com/dd6edfff840a4c38ae69596cf0ce314e/?gd_sdk_referrer_url=' + baseUrl + '/games/99-balls-3d',
    image: 'https://img.gamedistribution.com/dd6edfff840a4c38ae69596cf0ce314e-512x512.jpg'
  },
  {
    slug: 'worms-arcade-puzzle',
    title: 'Worms',
    shortDescription: 'Guide a cute worm through labyrinths in this arcade puzzle game.',
    description: 'A fun arcade puzzle game where you guide a worm through labyrinths, collect rewards, use portals, and avoid dead ends. Combines fast arcade action with puzzle-solving logic. Navigate winding paths and discover secrets as you progress through increasingly challenging levels.',
    category: 'puzzle',
    tags: ['worm', 'arcade', 'puzzle', 'labyrinth', 'logic', 'casual'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/485b2d1a7e6d453a8bcc7dfe90a93a8a/?gd_sdk_referrer_url=' + baseUrl + '/games/worms-arcade-puzzle',
    image: 'https://img.gamedistribution.com/485b2d1a7e6d453a8bcc7dfe90a93a8a-512x512.jpg'
  },
  {
    slug: 'deul',
    title: 'DEUL',
    shortDescription: 'A fast-paced arcade game with unique gameplay mechanics.',
    description: 'DEUL is an exciting arcade game that challenges your reflexes and strategic thinking. Navigate through dynamic levels, avoid obstacles, and score big in this addictive browser game.',
    category: 'arcade',
    tags: ['arcade', 'action', 'reflex', 'fast-paced', 'challenging'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 9000,
    iframeUrl: 'https://html5.gamedistribution.com/9f5c0f801786434d93b76531b05d9b9e/?gd_sdk_referrer_url=' + baseUrl + '/games/deul',
    image: 'https://img.gamedistribution.com/9f5c0f801786434d93b76531b05d9b9e-512x512.jpg'
  },
  {
    slug: 'death-chase',
    title: 'Death Chase',
    shortDescription: 'An action-packed chase game with high-speed thrills.',
    description: 'Death Chase is an adrenaline-pumping arcade game where speed and precision are key. Race through dangerous environments, dodge obstacles, and survive as long as you can in this intense chase experience.',
    category: 'arcade',
    tags: ['arcade', 'action', 'racing', 'chase', 'speed', 'thrills'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 22000,
    iframeUrl: 'https://html5.gamedistribution.com/548d37bb149e40d1a3b4e67f94703be3/?gd_sdk_referrer_url=' + baseUrl + '/games/death-chase',
    image: 'https://img.gamedistribution.com/548d37bb149e40d1a3b4e67f94703be3-512x512.jpg'
  },
  {
    slug: 'hanger-html5',
    title: 'Hanger HTML5',
    shortDescription: 'A physics-based arcade game with ragdoll mechanics.',
    description: 'Hanger is a fun physics-based arcade game where you control a ragdoll character swinging through obstacles. Master the timing and physics to navigate challenging levels in this addictive browser game.',
    category: 'arcade',
    tags: ['arcade', 'physics', 'ragdoll', 'swing', 'obstacle', 'funny'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 16000,
    iframeUrl: 'https://html5.gamedistribution.com/029f632bdc32475d97cfa78847b796ab/?gd_sdk_referrer_url=' + baseUrl + '/games/hanger-html5',
    image: 'https://img.gamedistribution.com/029f632bdc32475d97cfa78847b796ab-512x512.jpg'
  },
  {
    slug: 'new-platform',
    title: 'New Platform',
    shortDescription: 'A challenging platformer game with exciting level design.',
    description: 'New Platform is an exciting platformer game that challenges your jumping and navigation skills. Journey through creatively designed levels, collect items, and reach the goal in this fun browser-based platform adventure.',
    category: 'arcade',
    tags: ['arcade', 'platformer', 'jumping', 'adventure', 'action'],
    difficulty: 'medium',
    featured: false,
    rating: 3.9,
    playCount: 7500,
    iframeUrl: 'https://html5.gamedistribution.com/3812c65ac6f64127b31b1711181a2a80/?gd_sdk_referrer_url=' + baseUrl + '/games/new-platform',
    image: 'https://img.gamedistribution.com/3812c65ac6f64127b31b1711181a2a80-512x512.jpg'
  }
];

// Check for duplicate slugs
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
