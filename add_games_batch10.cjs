const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  // Hidden Object
  {
    slug: 'hidden-objects-hello-spring',
    title: 'Hidden Objects Hello Spring',
    shortDescription: 'Explore beautiful spring scenes and find hidden objects in nature.',
    description: 'Hidden Objects Hello Spring takes you on a relaxing walk through 16 beautiful spring scenes. Find all the hidden objects as nature wakes up with greenery, flowers, and birds. A peaceful hidden object game celebrating the beauty of spring.',
    category: 'hidden-object',
    tags: ['hidden-object', 'spring', 'nature', 'find', 'relaxing', 'scenic'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 14000,
    iframeUrl: 'https://html5.gamedistribution.com/3a7d4fd323f64750819cdf2ff24bf719/?gd_sdk_referrer_url=' + baseUrl + '/games/hidden-objects-hello-spring',
    image: 'https://img.gamedistribution.com/3a7d4fd323f64750819cdf2ff24bf719-512x512.jpg'
  },
  {
    slug: 'frozen-princess-hidden-object',
    title: 'Frozen Princess Hidden Object',
    shortDescription: 'Find fashion accessories hidden in the ice princess castle.',
    description: 'Frozen Princess Hidden Object is a delightful hidden object game set in an ice princess castle. Find cute girly fashion accessories including makeup items, bows, ribbons, bags, and shoes. Help the princess search before it is too late.',
    category: 'hidden-object',
    tags: ['hidden-object', 'princess', 'frozen', 'fashion', 'castle', 'girls'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/f3fe88e5902349a6a48ea5f01affcc8e/?gd_sdk_referrer_url=' + baseUrl + '/games/frozen-princess-hidden-object',
    image: 'https://img.gamedistribution.com/f3fe88e5902349a6a48ea5f01affcc8e-512x512.jpg'
  },
  // Match-3
  {
    slug: 'halloween-match-trio',
    title: 'Halloween Match Trio',
    shortDescription: 'Match spooky Halloween items in this festive match-3 puzzle game.',
    description: 'Halloween Match Trio is a spooky match-3 puzzle game featuring Halloween-themed items. Match three or more spooky symbols to clear the board and progress through festive levels. Perfect for getting into the Halloween spirit.',
    category: 'match-3',
    tags: ['match-3', 'halloween', 'spooky', 'puzzle', 'festive', 'trio'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 16000,
    iframeUrl: 'https://html5.gamedistribution.com/1fbcee4e7fa54e13ae9dfdf3552128c5/?gd_sdk_referrer_url=' + baseUrl + '/games/halloween-match-trio',
    image: 'https://img.gamedistribution.com/1fbcee4e7fa54e13ae9dfdf3552128c5-512x512.jpg'
  },
  {
    slug: 'candy-smash',
    title: 'Candy Smash',
    shortDescription: 'Tap clusters of colorful candies to smash and score big points.',
    description: 'Candy Smash is a sweet puzzle game where you tap on clusters of colorful candies to clear them and rack up points. Chain reactions and combos lead to big scores in this addictive and satisfying candy-crushing game.',
    category: 'match-3',
    tags: ['match-3', 'candy', 'smash', 'puzzle', 'addictive', 'colorful'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 22000,
    iframeUrl: 'https://html5.gamedistribution.com/5ad986cb146e47438af4cb502524a7e1/?gd_sdk_referrer_url=' + baseUrl + '/games/candy-smash',
    image: 'https://img.gamedistribution.com/5ad986cb146e47438af4cb502524a7e1-512x512.jpg'
  },
  // Merge
  {
    slug: 'merge-and-invade',
    title: 'Merge And Invade',
    shortDescription: 'Merge units and invade enemy territories in this strategy merge game.',
    description: 'Merge And Invade is a strategic merge game where you combine units to create stronger forces and invade enemy territories. Plan your mergers, build your army, and conquer new lands in this addictive merge strategy game.',
    category: 'merge',
    tags: ['merge', 'invade', 'strategy', 'battle', 'territory', 'conquer'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/0294fe5c55b04b199b6f4c1d84a0db28/?gd_sdk_referrer_url=' + baseUrl + '/games/merge-and-invade',
    image: 'https://img.gamedistribution.com/0294fe5c55b04b199b6f4c1d84a0db28-512x512.jpg'
  },
  // Card
  {
    slug: 'durak',
    title: 'Durak Card Game',
    shortDescription: 'The classic Russian card game Durak — play against AI opponents.',
    description: 'Durak is the classic Russian card game where the goal is to get rid of all your cards. The last player holding cards is the fool (durak). Play against AI opponents in this faithful adaptation of the beloved traditional card game.',
    category: 'card',
    tags: ['card', 'durak', 'russian', 'classic', 'strategy', 'multiplayer'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/0efaa39c52bf4579bb21af3ff7bc0ab3/?gd_sdk_referrer_url=' + baseUrl + '/games/durak',
    image: 'https://img.gamedistribution.com/0efaa39c52bf4579bb21af3ff7bc0ab3-512x512.jpg'
  },
  {
    slug: 'card-master',
    title: 'Card Master',
    shortDescription: 'Strategically merge identical cards to create stronger ones.',
    description: 'Card Master is a fun and addictive puzzle game where you strategically merge identical cards to create stronger, higher-level ones. Keep the board from filling up and use special cards and powerful boosts to clear space and score big.',
    category: 'card',
    tags: ['card', 'merge', 'puzzle', 'strategy', 'board', 'addictive'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/2dce34aafc734aa6bf16d576b76f478b/?gd_sdk_referrer_url=' + baseUrl + '/games/card-master',
    image: 'https://img.gamedistribution.com/2dce34aafc734aa6bf16d576b76f478b-512x512.jpg'
  },
  // Puzzle
  {
    slug: 'mind-gambit',
    title: 'Mind Gambit',
    shortDescription: 'A relaxing peg solitaire puzzle game with pure strategy gameplay.',
    description: 'Mind Gambit is a relaxing puzzle game inspired by classic Peg Solitaire. Jump pegs to remove them until only one remains. No timer, no pressure — just pure strategy and logical thinking. A soothing brain teaser for puzzle enthusiasts.',
    category: 'puzzle',
    tags: ['puzzle', 'solitaire', 'pegs', 'strategy', 'logic', 'relaxing'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/acafc9054c9748d6afbd3d663269ae9c/?gd_sdk_referrer_url=' + baseUrl + '/games/mind-gambit',
    image: 'https://img.gamedistribution.com/acafc9054c9748d6afbd3d663269ae9c-512x512.jpg'
  },
  {
    slug: 'island-puzzle-build-and-solve',
    title: 'Island Puzzle: Build & Solve',
    shortDescription: 'Place buildings on a grid using logic clues in this picross-like puzzle.',
    description: 'Island Puzzle: Build & Solve is a logic puzzle game where you place buildings on a grid. Numbers tell you how many buildings remain in each row and column, similar to Picross or Nonograms. A satisfying brain challenge set on a tropical island.',
    category: 'puzzle',
    tags: ['puzzle', 'logic', 'picross', 'grid', 'island', 'brain'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 10000,
    iframeUrl: 'https://html5.gamedistribution.com/76d407a8d2144486832787fc2e47ca95/?gd_sdk_referrer_url=' + baseUrl + '/games/island-puzzle-build-and-solve',
    image: 'https://img.gamedistribution.com/76d407a8d2144486832787fc2e47ca95-512x512.jpg'
  },
  {
    slug: 'okay',
    title: 'Okay',
    shortDescription: 'Clear the board by drawing a single strategic line through elements.',
    description: 'Okay is a minimalist puzzle game where you must clear every element from the board by drawing a single strategic line that interacts with physics. Simple concept, challenging execution — a truly satisfying brain teaser.',
    category: 'puzzle',
    tags: ['puzzle', 'minimalist', 'physics', 'strategy', 'line', 'brain'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 14000,
    iframeUrl: 'https://html5.gamedistribution.com/ccdfb2317e054214984d5f64ddda2ab9/?gd_sdk_referrer_url=' + baseUrl + '/games/okay',
    image: 'https://img.gamedistribution.com/ccdfb2317e054214984d5f64ddda2ab9-512x512.jpg'
  },
  // Arcade
  {
    slug: 'arcade-rope',
    title: 'Arcade Rope',
    shortDescription: 'Swing between platforms using a rope in this physics arcade game.',
    description: 'Arcade Rope is a skill-based arcade game where you swing between platforms using a rope. Master the physics, time your swings, and navigate challenging levels in this fun and addictive rope-swinging adventure.',
    category: 'arcade',
    tags: ['arcade', 'rope', 'physics', 'swing', 'skill', 'platform'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/ef639508d36e4a2ab52797cd4faa6272/?gd_sdk_referrer_url=' + baseUrl + '/games/arcade-rope',
    image: 'https://img.gamedistribution.com/ef639508d36e4a2ab52797cd4faa6272-512x512.jpg'
  },
  // Casual
  {
    slug: 'break-a-lucky-egg-brainrots',
    title: 'Break a Lucky Egg Brainrots',
    shortDescription: 'Break eggs, collect rare Brainrot characters, and deliver them to base.',
    description: 'Break a Lucky Egg Brainrots is a fast collection game where you break brainrot eggs, collect rare Brainrot characters, and deliver them to your base before time runs out. A fun and quirky collecting adventure with unique characters.',
    category: 'casual',
    tags: ['collect', 'eggs', 'brainrot', 'casual', 'funny', 'time-management'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/1faf8bbe8906404ea218e44440ef1ab9/?gd_sdk_referrer_url=' + baseUrl + '/games/break-a-lucky-egg-brainrots',
    image: 'https://img.gamedistribution.com/1faf8bbe8906404ea218e44440ef1ab9-512x512.jpg'
  },
  {
    slug: 'fix-the-hoof',
    title: 'Fix The Hoof',
    shortDescription: 'A soothing ASMR simulation where you clean and care for animal hooves.',
    description: 'Fix The Hoof is a relaxing ASMR simulation game where you clean, polish, and paint the hooves of horses, cows, and goats. A calm and satisfying experience for animal lovers who enjoy soothing gameplay and cute farm animals.',
    category: 'casual',
    tags: ['ASMR', 'animals', 'simulation', 'relaxing', 'farm', 'hoof'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/247187e3dc3d43a9a707e725d4324991/?gd_sdk_referrer_url=' + baseUrl + '/games/fix-the-hoof',
    image: 'https://img.gamedistribution.com/247187e3dc3d43a9a707e725d4324991-512x512.jpg'
  },
  {
    slug: 'happy-monsters-2',
    title: 'Happy Monsters 2',
    shortDescription: 'Feed and care for cute little monsters in this fun casual game.',
    description: 'Happy Monsters 2 is a delightful casual game where you feed, care for, and play with cute little monsters. Keep your monsters happy and healthy as you unlock new friends and discover their unique personalities.',
    category: 'casual',
    tags: ['monsters', 'cute', 'care', 'casual', 'kids', 'fun'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/4c7b323240444204bfa9084c5200be9e/?gd_sdk_referrer_url=' + baseUrl + '/games/happy-monsters-2',
    image: 'https://img.gamedistribution.com/4c7b323240444204bfa9084c5200be9e-512x512.jpg'
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
