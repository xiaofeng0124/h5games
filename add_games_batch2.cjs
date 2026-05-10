const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  // Hidden Object
  {
    slug: 'find-it-fast',
    title: 'Find It Fast',
    shortDescription: 'A timed hidden object game where you find items across vibrant maps.',
    description: 'Find It Fast is a hidden object game where you tap to reveal hidden items against a timer, unlocking vibrant maps across multiple levels. Test your observation skills as you race against the clock to find cleverly concealed objects in beautifully illustrated scenes.',
    category: 'hidden-object',
    tags: ['hidden-object', 'find', 'seek', 'puzzle', 'observation', 'timer'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/dd9dd7ecfd1d4ba59fec2049d9803911/?gd_sdk_referrer_url=' + baseUrl + '/games/find-it-fast',
    image: 'https://img.gamedistribution.com/dd9dd7ecfd1d4ba59fec2049d9803911-512x512.jpg'
  },
  {
    slug: 'seek-and-find',
    title: 'Seek & Find',
    shortDescription: 'A beautiful hidden object scavenger hunt across crafted scenes.',
    description: 'Seek & Find is a relaxing hidden object scavenger hunt game with beautifully crafted scenes. Use zoom and drag controls to explore detailed environments, find cleverly concealed items, and progress through increasingly challenging levels. Perfect for players who love a good visual puzzle.',
    category: 'hidden-object',
    tags: ['hidden-object', 'seek', 'find', 'scavenger', 'puzzle', 'relaxing'],
    difficulty: 'easy',
    featured: false,
    rating: 4.3,
    playCount: 25000,
    iframeUrl: 'https://html5.gamedistribution.com/a2253a48a7c442138467e809d61cbfcc/?gd_sdk_referrer_url=' + baseUrl + '/games/seek-and-find',
    image: 'https://img.gamedistribution.com/a2253a48a7c442138467e809d61cbfcc-512x512.jpg'
  },
  // Merge
  {
    slug: 'dog-merge-mania',
    title: 'Dog Merge Mania',
    shortDescription: 'Combine cute puppies to discover bigger dog breeds in this relaxing merge game.',
    description: 'Dog Merge Mania is a relaxing merge game where you drag and drop cute puppies to combine them with others of the same species. Create bigger dogs, unlock unique breeds, and grow your fluffy dog paradise. With chill gameplay and light strategy, this game is perfect for animal lovers.',
    category: 'merge',
    tags: ['merge', 'dog', 'animal', 'puppy', 'relaxing', 'cute'],
    difficulty: 'easy',
    featured: false,
    rating: 4.4,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/9d9694084c2e4985bb9c46e73fe02f52/?gd_sdk_referrer_url=' + baseUrl + '/games/dog-merge-mania',
    image: 'https://img.gamedistribution.com/9d9694084c2e4985bb9c46e73fe02f52-512x512.jpg'
  },
  // Sports
  {
    slug: 'basketball-stars-2026',
    title: 'Basketball Stars 2026',
    shortDescription: '2-player basketball game with dunks, 3-pointers, and competitive action.',
    description: 'Basketball Stars 2026 is an exciting 2-player basketball game packed with action. Pull off epic dunks, sink 3-pointers, block your opponent, and use special supershot mechanics. Choose your character and hit the court for fast-paced basketball action.',
    category: 'arcade',
    tags: ['basketball', 'sports', '2-player', 'arcade', 'competitive', 'action'],
    difficulty: 'medium',
    featured: false,
    rating: 4.3,
    playCount: 38000,
    iframeUrl: 'https://html5.gamedistribution.com/516d6908fbc848bdb89e65a58a43a7dc/?gd_sdk_referrer_url=' + baseUrl + '/games/basketball-stars-2026',
    image: 'https://img.gamedistribution.com/516d6908fbc848bdb89e65a58a43a7dc-512x512.jpg'
  },
  {
    slug: 'hoop-world-3d',
    title: 'Hoop World 3D',
    shortDescription: 'Time your jumps and score epic dunks in this 3D basketball game.',
    description: 'Hoop World 3D is a flip-and-dunk basketball game where timing is everything. Use mouse or one-finger touch controls to time your jumps perfectly and score epic dunks. Navigate challenging obstacle courses and become the ultimate hoop master.',
    category: 'arcade',
    tags: ['basketball', 'sports', '3d', 'arcade', 'dunk', 'action'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 28000,
    iframeUrl: 'https://html5.gamedistribution.com/27f311ee037a4df5a300b486cdbf9c63/?gd_sdk_referrer_url=' + baseUrl + '/games/hoop-world-3d',
    image: 'https://img.gamedistribution.com/27f311ee037a4df5a300b486cdbf9c63-512x512.jpg'
  },
  {
    slug: 'football-rush-3d',
    title: 'Football Rush 3D',
    shortDescription: 'Fast-paced one-touch soccer game with speed boosts and solo action.',
    description: 'Football Rush 3D is a fast-paced one-touch soccer game where speed and precision matter. Run down the field, dodge defenders, and score amazing goals with speed boosts. Solo action with addictive gameplay that will keep you coming back for more.',
    category: 'arcade',
    tags: ['football', 'soccer', 'sports', '3d', 'arcade', 'action'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 30000,
    iframeUrl: 'https://html5.gamedistribution.com/116e0e450a374f24877fa02ad98a2e62/?gd_sdk_referrer_url=' + baseUrl + '/games/football-rush-3d',
    image: 'https://img.gamedistribution.com/116e0e450a374f24877fa02ad98a2e62-512x512.jpg'
  },
  {
    slug: 'super-football-fever',
    title: 'Super Football Fever',
    shortDescription: 'Realistic soccer with virtual joystick controls and team building.',
    description: 'Super Football Fever is a realistic soccer simulation with motion-captured animations and virtual joystick controls. Build your dream team, master tactical play, and compete against challenging AI opponents in this immersive football experience.',
    category: 'arcade',
    tags: ['football', 'soccer', 'sports', 'simulation', 'arcade', 'team'],
    difficulty: 'medium',
    featured: false,
    rating: 4.3,
    playCount: 35000,
    iframeUrl: 'https://html5.gamedistribution.com/9101fea0805544d3aa15f794af37622b/?gd_sdk_referrer_url=' + baseUrl + '/games/super-football-fever',
    image: 'https://img.gamedistribution.com/9101fea0805544d3aa15f794af37622b-512x512.jpg'
  },
  {
    slug: 'dummies-world-cup',
    title: 'Dummies World Cup',
    shortDescription: 'Casual football with silly dummy players from 32 national teams.',
    description: 'Dummies World Cup is a casual and hilarious football game with silly dummy players. Choose from 32 national teams and go head-to-head against a determined goalie. Fun, lighthearted soccer action that anyone can enjoy — no soccer expertise required!',
    category: 'arcade',
    tags: ['football', 'soccer', 'sports', 'casual', 'funny', 'arcade'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/83701fa3c348414d880f9d410a379c41/?gd_sdk_referrer_url=' + baseUrl + '/games/dummies-world-cup',
    image: 'https://img.gamedistribution.com/83701fa3c348414d880f9d410a379c41-512x512.jpg'
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
