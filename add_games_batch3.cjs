const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  // Board: Chess
  {
    slug: 'chess-duel',
    title: 'Chess Duel',
    shortDescription: 'Three chess modes with ELO ranking system — Bullet, Blitz, and Classic.',
    description: 'Chess Duel offers three exciting chess modes: Bullet, Blitz, and Classic. Challenge AI opponents at increasing difficulty levels and climb the ranks from Bronze to Diamond with an ELO ranking system. Master the board and become the ultimate chess champion.',
    category: 'board',
    tags: ['chess', 'board', 'strategy', 'competitive', 'ranking', 'classic'],
    difficulty: 'medium',
    featured: false,
    rating: 4.5,
    playCount: 42000,
    iframeUrl: 'https://html5.gamedistribution.com/15268ba792454d319e6c50d6fe0edcb0/?gd_sdk_referrer_url=' + baseUrl + '/games/chess-duel',
    image: 'https://img.gamedistribution.com/15268ba792454d319e6c50d6fe0edcb0-512x512.jpg'
  },
  {
    slug: 'chess-mania',
    title: 'Chess Mania',
    shortDescription: '400 puzzle levels for chess training with achievements.',
    description: 'Chess Mania features 400 challenging puzzle levels that help you improve your chess skills. Solve tactical puzzles and earn achievements as you master different chess patterns. A perfect game for chess players looking to sharpen their strategy.',
    category: 'board',
    tags: ['chess', 'board', 'puzzle', 'strategy', 'training', 'brain'],
    difficulty: 'medium',
    featured: false,
    rating: 4.4,
    playCount: 28000,
    iframeUrl: 'https://html5.gamedistribution.com/ca2e9833b6e74bb0bf3c7575042473c6/?gd_sdk_referrer_url=' + baseUrl + '/games/chess-mania',
    image: 'https://img.gamedistribution.com/ca2e9833b6e74bb0bf3c7575042473c6-512x512.jpg'
  },
  // Racing / Stunt
  {
    slug: 'police-bike-stunt-race',
    title: 'Police Bike Stunt Race',
    shortDescription: 'Perform crazy stunts and police chases on your bike.',
    description: 'Police Bike Stunt Race Game puts you in the seat of a powerful police motorcycle. Navigate through challenging courses, perform jaw-dropping stunts, and race against time in high-speed police pursuits. Action-packed biking adventure awaits.',
    category: 'arcade',
    tags: ['racing', 'bike', 'stunt', 'police', 'arcade', 'action'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/92cce81134674816960a7d0916de52b1/?gd_sdk_referrer_url=' + baseUrl + '/games/police-bike-stunt-race',
    image: 'https://img.gamedistribution.com/92cce81134674816960a7d0916de52b1-512x512.jpg'
  },
  {
    slug: 'stunt-extreme',
    title: 'Stunt Extreme',
    shortDescription: 'Extreme car stunt racing with ramps, loops, and death-defying tricks.',
    description: 'Stunt Extreme is a thrilling car stunt game featuring massive ramps, loop-the-loops, and death-defying tricks. Master the vehicle physics, land perfect stunts, and push your driving skills to the absolute limit in this extreme stunt challenge.',
    category: 'arcade',
    tags: ['racing', 'stunt', 'car', 'extreme', 'arcade', 'action'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 22000,
    iframeUrl: 'https://html5.gamedistribution.com/e85d2935f7e5422b984afd950dcd2ca2/?gd_sdk_referrer_url=' + baseUrl + '/games/stunt-extreme',
    image: 'https://img.gamedistribution.com/e85d2935f7e5422b984afd950dcd2ca2-512x512.jpg'
  },
  {
    slug: 'dirt-bike-extreme-stunts',
    title: 'Dirt Bike Extreme Stunts',
    shortDescription: 'Off-road dirt bike stunts through challenging terrain.',
    description: 'Dirt Bike Extreme Stunts takes you off-road with powerful dirt bikes. Navigate rough terrain, perform mid-air tricks, and conquer extreme obstacle courses. Push your biking skills to the limit in this adrenaline-fueled stunt game.',
    category: 'arcade',
    tags: ['racing', 'dirt-bike', 'stunt', 'off-road', 'arcade', 'extreme'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/265993b96e0741db9ad0181af3a9dbe0/?gd_sdk_referrer_url=' + baseUrl + '/games/dirt-bike-extreme-stunts',
    image: 'https://img.gamedistribution.com/265993b96e0741db9ad0181af3a9dbe0-512x512.jpg'
  },
  {
    slug: 'real-impossible-sky-tracks',
    title: 'Real Impossible Sky Tracks',
    shortDescription: 'Race on impossible sky-high tracks suspended in the air.',
    description: 'Real Impossible Sky Tracks Car Driving challenges you to drive on impossible tracks suspended high in the sky. Navigate narrow roads, avoid falls, and complete insane stunts on tracks that defy gravity. The ultimate test of driving precision.',
    category: 'arcade',
    tags: ['racing', 'car', 'sky', 'impossible', 'stunt', 'driving'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/1cfb442071ff48c590ef9c7fe5ff6790/?gd_sdk_referrer_url=' + baseUrl + '/games/real-impossible-sky-tracks',
    image: 'https://img.gamedistribution.com/1cfb442071ff48c590ef9c7fe5ff6790-512x512.jpg'
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
