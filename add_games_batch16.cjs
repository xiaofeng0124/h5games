const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  // Arcade
  {
    slug: 'swap-color',
    title: 'Swap Color',
    shortDescription: 'Swap colors to match targets in this fast-paced arcade puzzle game.',
    description: 'Swap Color is a fast-paced arcade puzzle game where you swap colors to match target patterns. Quick thinking and fast reflexes are needed to keep up with the increasing speed. A colorful and addictive challenge for all ages.',
    category: 'arcade',
    tags: ['color', 'swap', 'arcade', 'puzzle', 'reflex', 'addictive'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/5bd7630d9c144f52b297d03c2178cffb/?gd_sdk_referrer_url=' + baseUrl + '/games/swap-color',
    image: 'https://img.gamedistribution.com/5bd7630d9c144f52b297d03c2178cffb-512x512.jpg'
  },
  {
    slug: 'run-now',
    title: 'Run Now',
    shortDescription: 'Run through obstacle courses and avoid traps in this endless runner.',
    description: 'Run Now is an exciting endless runner game where you dash through obstacle courses and avoid traps. Jump, slide, and dodge your way to high scores in this fast-paced and addictive arcade experience.',
    category: 'arcade',
    tags: ['run', 'endless', 'runner', 'obstacle', 'arcade', 'action'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/332805b21f3c4890bb4258477857b0bb/?gd_sdk_referrer_url=' + baseUrl + '/games/run-now',
    image: 'https://img.gamedistribution.com/332805b21f3c4890bb4258477857b0bb-512x512.jpg'
  },
  {
    slug: 'cyber-monday',
    title: 'Cyber Monday',
    shortDescription: 'A cyberpunk-themed arcade game with fast-paced action and neon visuals.',
    description: 'Cyber Monday is a cyberpunk-themed arcade game set in a neon-drenched future. Fast-paced action, stylish visuals, and challenging gameplay combine in this thrilling arcade experience.',
    category: 'arcade',
    tags: ['cyberpunk', 'arcade', 'neon', 'action', 'futuristic', 'fast-paced'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/f63aece0ead1473f95cd40ff73d3f951/?gd_sdk_referrer_url=' + baseUrl + '/games/cyber-monday',
    image: 'https://img.gamedistribution.com/f63aece0ead1473f95cd40ff73d3f951-512x512.jpg'
  },
  {
    slug: 'ww2-tunnel-shooting',
    title: 'WW2 Tunnel Shooting',
    shortDescription: 'Navigate through tunnels and shoot enemies in this WWII shooter.',
    description: 'WW2 Tunnel Shooting is an action-packed shooter set during World War II. Navigate through dangerous tunnels, shoot enemy soldiers, and complete missions in this intense historical shooting game.',
    category: 'arcade',
    tags: ['ww2', 'shooter', 'tunnel', 'action', 'war', 'historical'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/9d38c203e3704c09a08dafb5ba7bd626/?gd_sdk_referrer_url=' + baseUrl + '/games/ww2-tunnel-shooting',
    image: 'https://img.gamedistribution.com/9d38c203e3704c09a08dafb5ba7bd626-512x512.jpg'
  },
  {
    slug: 'park-them-all',
    title: 'Park Them All!',
    shortDescription: 'Park cars in tight spaces in this fun parking puzzle game.',
    description: 'Park Them All! is a fun parking puzzle game where you must park cars in increasingly tight spaces. Maneuver vehicles carefully, avoid obstacles, and park perfectly to complete each challenging level.',
    category: 'arcade',
    tags: ['parking', 'car', 'puzzle', 'arcade', 'driving', 'logic'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/87dfd164c5b9476293ae33e114c3b142/?gd_sdk_referrer_url=' + baseUrl + '/games/park-them-all',
    image: 'https://img.gamedistribution.com/87dfd164c5b9476293ae33e114c3b142-512x512.jpg'
  },
  // Puzzle
  {
    slug: 'tile-adventure',
    title: 'Tile Adventure',
    shortDescription: 'Match tiles and explore adventures in this mahjong-style puzzle game.',
    description: 'Tile Adventure is a mahjong-style tile-matching puzzle game where you match pairs of identical tiles to clear the board. Progress through adventurous levels with beautifully designed tile sets and relaxing gameplay.',
    category: 'puzzle',
    tags: ['tile', 'adventure', 'mahjong', 'matching', 'puzzle', 'relaxing'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 14000,
    iframeUrl: 'https://html5.gamedistribution.com/070c685168914e579a3e604bad0307a1/?gd_sdk_referrer_url=' + baseUrl + '/games/tile-adventure',
    image: 'https://img.gamedistribution.com/070c685168914e579a3e604bad0307a1-512x512.jpg'
  },
  {
    slug: 'cube-drop-puzzle',
    title: 'Cube Drop Puzzle',
    shortDescription: 'Drop cubes strategically to complete lines in this block puzzle game.',
    description: 'Cube Drop Puzzle is a fun block puzzle game where you drop cubes into the playing field. Strategically place cubes to complete lines and clear the board. A simple yet addictive puzzle experience for casual gamers.',
    category: 'puzzle',
    tags: ['cube', 'drop', 'block', 'puzzle', 'strategy', 'addictive'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 16000,
    iframeUrl: 'https://html5.gamedistribution.com/0a8a63b842d543d692fe61cbd27ebaf2/?gd_sdk_referrer_url=' + baseUrl + '/games/cube-drop-puzzle',
    image: 'https://img.gamedistribution.com/0a8a63b842d543d692fe61cbd27ebaf2-512x512.jpg'
  },
  {
    slug: 'sort-works-nuts-and-order',
    title: 'Sort Works: Nuts & Order',
    shortDescription: 'Sort nuts and bolts into their correct containers in this satisfying puzzle.',
    description: 'Sort Works: Nuts & Order is a satisfying sorting puzzle where you organize nuts, bolts, and hardware into their correct containers. A relaxing and methodical puzzle game that exercises your organizational skills.',
    category: 'puzzle',
    tags: ['sort', 'organize', 'puzzle', 'satisfying', 'relaxing', 'logic'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 13000,
    iframeUrl: 'https://html5.gamedistribution.com/ddbc2e2dfa3b4024856acfd4bd8ae4ad/?gd_sdk_referrer_url=' + baseUrl + '/games/sort-works-nuts-and-order',
    image: 'https://img.gamedistribution.com/ddbc2e2dfa3b4024856acfd4bd8ae4ad-512x512.jpg'
  },
  {
    slug: 'tap-block-puzzle-smash-game',
    title: 'Tap Block Puzzle: Smash Game',
    shortDescription: 'Tap to smash colored blocks in this satisfying puzzle game.',
    description: 'Tap Block Puzzle: Smash Game is a satisfying puzzle game where you tap colored blocks to smash them. Clear the board by matching colors and creating chain reactions. A simple and addictive stress-relief game.',
    category: 'puzzle',
    tags: ['tap', 'block', 'smash', 'puzzle', 'satisfying', 'colorful'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 14000,
    iframeUrl: 'https://html5.gamedistribution.com/70d6750398804d318190af8234eaa955/?gd_sdk_referrer_url=' + baseUrl + '/games/tap-block-puzzle-smash-game',
    image: 'https://img.gamedistribution.com/70d6750398804d318190af8234eaa955-512x512.jpg'
  },
  {
    slug: 'container-sort-puzzle',
    title: 'Container Sort Puzzle',
    shortDescription: 'Sort colored items into the correct containers in this satisfying puzzle.',
    description: 'Container Sort Puzzle is a relaxing sorting game where you organize colored items into their correct containers. Pour, match, and sort your way through increasingly challenging puzzles in this addictive and satisfying game.',
    category: 'puzzle',
    tags: ['sort', 'container', 'puzzle', 'satisfying', 'color', 'logic'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/07b2f2485f234eda9bfd8e6f4741b703/?gd_sdk_referrer_url=' + baseUrl + '/games/container-sort-puzzle',
    image: 'https://img.gamedistribution.com/07b2f2485f234eda9bfd8e6f4741b703-512x512.jpg'
  },
  // Word
  {
    slug: 'pentaword',
    title: 'Pentaword',
    shortDescription: 'Guess the 5-letter word in this challenging daily word puzzle.',
    description: 'Pentaword is a challenging word puzzle where you guess the 5-letter word. With each guess, get feedback on correct letters and positions. A brain-teasing word game inspired by classic word-guessing puzzles.',
    category: 'word',
    tags: ['word', 'puzzle', '5-letter', 'guess', 'vocabulary', 'daily'],
    difficulty: 'medium',
    featured: false,
    rating: 4.3,
    playCount: 22000,
    iframeUrl: 'https://html5.gamedistribution.com/81bde7bd26f744c5ba3aa1fa45d2d7b4/?gd_sdk_referrer_url=' + baseUrl + '/games/pentaword',
    image: 'https://img.gamedistribution.com/81bde7bd26f744c5ba3aa1fa45d2d7b4-512x512.jpg'
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
