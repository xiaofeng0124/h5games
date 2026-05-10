const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  // Arcade
  {
    slug: 'push-io',
    title: 'Push.io',
    shortDescription: 'Push blocks and solve puzzles in this addictive physics game.',
    description: 'Push.io is an addictive physics-based puzzle game where you push blocks to solve challenges. Strategically move objects, overcome obstacles, and progress through increasingly clever levels in this minimalist and engaging arcade game.',
    category: 'arcade',
    tags: ['push', 'physics', 'puzzle', 'blocks', 'minimalist', 'strategy'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/4888156f33814739a696e11b32556159/?gd_sdk_referrer_url=' + baseUrl + '/games/push-io',
    image: 'https://img.gamedistribution.com/4888156f33814739a696e11b32556159-512x512.jpg'
  },
  {
    slug: 'scary-nightmare-clap-clap',
    title: 'Clap Clap Nightmare',
    shortDescription: 'Survive the nightmare by clapping at the right moment in this horror game.',
    description: 'Clap Clap Nightmare is a thrilling horror game where you must clap at the right moments to survive. Listen carefully, time your actions perfectly, and escape the nightmare in this tense and atmospheric horror experience.',
    category: 'arcade',
    tags: ['horror', 'nightmare', 'reaction', 'arcade', 'survival', 'atmospheric'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/eb62182aede741489578928dd689e273/?gd_sdk_referrer_url=' + baseUrl + '/games/scary-nightmare-clap-clap',
    image: 'https://img.gamedistribution.com/eb62182aede741489578928dd689e273-512x512.jpg'
  },
  {
    slug: 'battle-arena',
    title: 'Battle Arena',
    shortDescription: 'Fight enemies in arena battles and prove your combat skills.',
    description: 'Battle Arena is an action-packed arena combat game where you fight waves of enemies. Use weapons, dodge attacks, and defeat your opponents to become the arena champion. Fast-paced combat action at its best.',
    category: 'arcade',
    tags: ['battle', 'arena', 'combat', 'action', 'fighter', 'champion'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/76438cf40e0d4db29e84c9935cbd97fa/?gd_sdk_referrer_url=' + baseUrl + '/games/battle-arena',
    image: 'https://img.gamedistribution.com/76438cf40e0d4db29e84c9935cbd97fa-512x512.jpg'
  },
  {
    slug: '10k',
    title: '10K',
    shortDescription: 'A minimalist puzzle game where you combine numbers to reach 10,000.',
    description: '10K is a minimalist number puzzle game where you combine identical numbers to create higher values. Strategically place and merge numbers on the board as you work your way toward the elusive 10,000 target.',
    category: 'arcade',
    tags: ['numbers', 'puzzle', 'minimalist', 'addictive', 'strategy', 'logic'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 14000,
    iframeUrl: 'https://html5.gamedistribution.com/3acc054600054896b62bda751eaef869/?gd_sdk_referrer_url=' + baseUrl + '/games/10k',
    image: 'https://img.gamedistribution.com/3acc054600054896b62bda751eaef869-512x512.jpg'
  },
  // Puzzle
  {
    slug: 'tile-living',
    title: 'Tile Living',
    shortDescription: 'Match and decorate tiles in this relaxing home-themed puzzle game.',
    description: 'Tile Living is a relaxing tile-matching puzzle game with a home decoration theme. Match pairs of beautifully designed tiles to clear the board and decorate your virtual space. A peaceful and satisfying puzzle experience.',
    category: 'puzzle',
    tags: ['tile', 'living', 'home', 'decoration', 'matching', 'relaxing'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/1f6151dd14ff43359d8a543f2e741add/?gd_sdk_referrer_url=' + baseUrl + '/games/tile-living',
    image: 'https://img.gamedistribution.com/1f6151dd14ff43359d8a543f2e741add-512x512.jpg'
  },
  // Casual
  {
    slug: 'dr-panda-farm',
    title: 'Dr Panda Farm',
    shortDescription: 'Run a fun farm with Dr Panda and take care of adorable animals.',
    description: 'Dr Panda Farm is a delightful kids game where you run your own farm and take care of adorable animals. Plant crops, feed animals, and harvest produce in this charming and educational farming adventure for young players.',
    category: 'casual',
    tags: ['panda', 'farm', 'animals', 'kids', 'educational', 'farming'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 22000,
    iframeUrl: 'https://html5.gamedistribution.com/f1bdb884f9f54703845a9c77a186a703/?gd_sdk_referrer_url=' + baseUrl + '/games/dr-panda-farm',
    image: 'https://img.gamedistribution.com/f1bdb884f9f54703845a9c77a186a703-512x512.jpg'
  },
  {
    slug: 'burger-catch',
    title: 'Burger Catch',
    shortDescription: 'Catch falling burger ingredients to build the perfect burger.',
    description: 'Burger Catch is a fun casual game where you catch falling burger ingredients and build the perfect burger. Catch buns, patties, lettuce, and cheese while avoiding tricky obstacles. A deliciously entertaining challenge.',
    category: 'casual',
    tags: ['burger', 'food', 'catch', 'casual', 'fun', 'arcade'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/a9afce108d824d6f838218dd87aa2ef4/?gd_sdk_referrer_url=' + baseUrl + '/games/burger-catch',
    image: 'https://img.gamedistribution.com/a9afce108d824d6f838218dd87aa2ef4-512x512.jpg'
  },
  {
    slug: 'cook-and-decorate',
    title: 'Cook And Decorate',
    shortDescription: 'Cook delicious meals and decorate your dining space in this creative game.',
    description: 'Cook And Decorate is a creative casual game where you cook delicious meals and decorate your dining space. Prepare recipes, plate your dishes beautifully, and design the perfect restaurant atmosphere.',
    category: 'casual',
    tags: ['cooking', 'decorate', 'creative', 'casual', 'food', 'design'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 10000,
    iframeUrl: 'https://html5.gamedistribution.com/e5dd5f3c277c45bbb92699fd74d3bae5/?gd_sdk_referrer_url=' + baseUrl + '/games/cook-and-decorate',
    image: 'https://img.gamedistribution.com/e5dd5f3c277c45bbb92699fd74d3bae5-512x512.jpg'
  },
  {
    slug: 'cooking-fast-4-steak',
    title: 'Cooking Fast 4 Steak',
    shortDescription: 'Cook steaks to perfection in this fast-paced cooking time management game.',
    description: 'Cooking Fast 4 Steak is a fast-paced time management cooking game where you grill steaks to perfection. Serve hungry customers quickly, manage multiple orders, and build your steakhouse reputation.',
    category: 'casual',
    tags: ['cooking', 'steak', 'time-management', 'food', 'restaurant', 'fast-paced'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 14000,
    iframeUrl: 'https://html5.gamedistribution.com/685eeafb82f24b7a84ac885441224c33/?gd_sdk_referrer_url=' + baseUrl + '/games/cooking-fast-4-steak',
    image: 'https://img.gamedistribution.com/685eeafb82f24b7a84ac885441224c33-512x512.jpg'
  },
  {
    slug: 'toca-avatar-my-hospital',
    title: 'Toca Avatar My Hospital',
    shortDescription: 'Run your own hospital and take care of patients in this kids doctor game.',
    description: 'Toca Avatar My Hospital is a fun kids game where you run your own hospital and care for patients. Treat illnesses, perform check-ups, and make your patients feel better in this engaging and educational doctor game.',
    category: 'casual',
    tags: ['hospital', 'doctor', 'kids', 'educational', 'medical', 'care'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 16000,
    iframeUrl: 'https://html5.gamedistribution.com/595a1ff08d07496bb538d4bd90a7bffb/?gd_sdk_referrer_url=' + baseUrl + '/games/toca-avatar-my-hospital',
    image: 'https://img.gamedistribution.com/595a1ff08d07496bb538d4bd90a7bffb-512x512.jpg'
  },
  {
    slug: 'my-dream-hospital-2',
    title: 'My Dream Hospital',
    shortDescription: 'Build and manage your dream hospital in this fun simulation game.',
    description: 'My Dream Hospital lets you build and manage your very own hospital. Design rooms, hire staff, treat patients, and expand your medical facility in this engaging hospital simulation game.',
    category: 'casual',
    tags: ['hospital', 'simulation', 'management', 'doctor', 'medical', 'building'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/dd099c95127b47cf8211d7b4fdd221b1/?gd_sdk_referrer_url=' + baseUrl + '/games/my-dream-hospital-2',
    image: 'https://img.gamedistribution.com/dd099c95127b47cf8211d7b4fdd221b1-512x512.jpg'
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
