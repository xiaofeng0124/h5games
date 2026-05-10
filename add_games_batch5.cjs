const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  {
    slug: 'chrome-cars-garage',
    title: 'Chrome Cars Garage',
    shortDescription: 'Find hidden car parts and restore classic vehicles in this hidden object game.',
    description: 'Chrome Cars Garage is a hidden object game where you inherit your grandpa network of garages. Explore locations, uncover hidden car parts, and learn automotive repair. A unique blend of hidden object mechanics with car restoration themes.',
    category: 'hidden-object',
    tags: ['hidden-object', 'cars', 'garage', 'find', 'restoration', 'puzzle'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/83225c0c2adc4f3a8241092ea85dec8d/?gd_sdk_referrer_url=' + baseUrl + '/games/chrome-cars-garage',
    image: 'https://img.gamedistribution.com/83225c0c2adc4f3a8241092ea85dec8d-512x512.jpg'
  },
  {
    slug: 'hidden-horrors',
    title: 'Hidden Horrors',
    shortDescription: 'A Halloween hidden object game with 30 spooky levels.',
    description: 'Hidden Horrors is a Halloween-themed hidden object game with 30 levels, each containing 6 hidden objects to find before time runs out. Spooky graphics and challenging searches make this a perfect game for fans of hidden object puzzles with a dark twist.',
    category: 'hidden-object',
    tags: ['hidden-object', 'horror', 'halloween', 'spooky', 'puzzle', 'find'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 14000,
    iframeUrl: 'https://html5.gamedistribution.com/a637f9d7958143408f9beb2b7933b54a/?gd_sdk_referrer_url=' + baseUrl + '/games/hidden-horrors',
    image: 'https://img.gamedistribution.com/a637f9d7958143408f9beb2b7933b54a-512x512.jpg'
  },
  {
    slug: 'hidden-objects-island',
    title: 'Hidden Objects Island',
    shortDescription: 'Journey through stunning island locations solving hidden object puzzles.',
    description: 'Hidden Objects Island takes you on a journey through stunning locations solving captivating puzzles. Find cleverly hidden items across beautiful island scenes in this relaxing and engaging hidden object adventure.',
    category: 'hidden-object',
    tags: ['hidden-object', 'island', 'puzzle', 'find', 'adventure', 'relaxing'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 17000,
    iframeUrl: 'https://html5.gamedistribution.com/5948fe24b0c6400092ac91535c240ae7/?gd_sdk_referrer_url=' + baseUrl + '/games/hidden-objects-island',
    image: 'https://img.gamedistribution.com/5948fe24b0c6400092ac91535c240ae7-512x512.jpg'
  },
  {
    slug: 'hidden-kitty',
    title: 'Hidden Kitty',
    shortDescription: 'Help an old lady find her missing kitties in this fun hidden object game.',
    description: 'Hidden Kitty is a delightful hidden object game for kids and cat lovers. Help an old lady find her missing kitties hiding throughout a colorful building. A charming and accessible hidden object game perfect for younger players.',
    category: 'hidden-object',
    tags: ['hidden-object', 'kitty', 'cat', 'animals', 'kids', 'find'],
    difficulty: 'easy',
    featured: false,
    rating: 4.3,
    playCount: 21000,
    iframeUrl: 'https://html5.gamedistribution.com/86a0d886a9df450e94f288a701cccfa9/?gd_sdk_referrer_url=' + baseUrl + '/games/hidden-kitty',
    image: 'https://img.gamedistribution.com/86a0d886a9df450e94f288a701cccfa9-512x512.jpg'
  },
  {
    slug: 'fortress-of-the-sinister',
    title: 'Fortress of the Sinister',
    shortDescription: '3D turn-based strategy game with unique units and loot collection.',
    description: 'Fortress of the Sinister is a 3D strategy game with turn-based battles on grid-based arenas. Lead a team through four treacherous fortresses, recruit unique units like Mushroom Priest and Night Hunter, collect loot, upgrade skills, and conquer evil.',
    category: 'puzzle',
    tags: ['strategy', 'turn-based', 'fantasy', 'battle', 'tactical', 'rpg'],
    difficulty: 'hard',
    featured: false,
    rating: 4.0,
    playCount: 8000,
    iframeUrl: 'https://html5.gamedistribution.com/f27b0a9fd1de4887b56d31ae51c58f5e/?gd_sdk_referrer_url=' + baseUrl + '/games/fortress-of-the-sinister',
    image: 'https://img.gamedistribution.com/f27b0a9fd1de4887b56d31ae51c58f5e-512x512.jpg'
  },
  {
    slug: 'spaceflight-simulator',
    title: 'Spaceflight Simulator',
    shortDescription: 'Build rockets and explore space in this realistic space simulator.',
    description: 'Spaceflight Simulator lets you build and launch rockets with real-life space conditions. Design your spacecraft, plan missions, and explore the cosmos. A physics-based simulation that captures the excitement of space exploration.',
    category: 'puzzle',
    tags: ['simulation', 'space', 'rocket', 'science', 'physics', 'educational'],
    difficulty: 'medium',
    featured: false,
    rating: 4.4,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/59e9362f0f9f4bb4b94ab698bf0a557a/?gd_sdk_referrer_url=' + baseUrl + '/games/spaceflight-simulator',
    image: 'https://img.gamedistribution.com/59e9362f0f9f4bb4b94ab698bf0a557a-512x512.jpg'
  },
  {
    slug: 'toy-car-simulator',
    title: 'Toy Car Simulator',
    shortDescription: 'Drive toy cars through fun levels in this kids car simulation game.',
    description: 'Toy Car Simulator is a fun car simulation game designed for kids. Drive through 3 different modes with multiple levels. Simple controls W for forward, A for left, D for right, S for reverse make it easy for young players to enjoy.',
    category: 'casual',
    tags: ['car', 'simulation', 'kids', 'driving', 'toy', 'casual'],
    difficulty: 'easy',
    featured: false,
    rating: 3.9,
    playCount: 10000,
    iframeUrl: 'https://html5.gamedistribution.com/0993d8ab20a44f17aa50260b5ec868ab/?gd_sdk_referrer_url=' + baseUrl + '/games/toy-car-simulator',
    image: 'https://img.gamedistribution.com/0993d8ab20a44f17aa50260b5ec868ab-512x512.jpg'
  },
  {
    slug: 'color-puzzle',
    title: 'Color Puzzle',
    shortDescription: 'A relaxing puzzle where you paint blocks by following color examples.',
    description: 'Color Puzzle is a relaxing puzzle game where you paint over blocks following an example. Move stickmen and paint the board according to the target colors to complete each level. A soothing and creative puzzle experience for all ages.',
    category: 'puzzle',
    tags: ['puzzle', 'color', 'painting', 'relaxing', 'creative', 'casual'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/3598455b2e1a4544a3a1e62b65974dba/?gd_sdk_referrer_url=' + baseUrl + '/games/color-puzzle',
    image: 'https://img.gamedistribution.com/3598455b2e1a4544a3a1e62b65974dba-512x512.jpg'
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
