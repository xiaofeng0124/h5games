const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  // Arcade - Sports
  {
    slug: 'football-duel',
    title: 'Football Duel',
    shortDescription: 'Challenge opponents in this fast-paced football duel game.',
    description: 'Football Duel is an exciting sports game where you challenge opponents in fast-paced football matches. Quick reflexes and strategic plays are key to victory. Score goals and become the champion in this thrilling arcade sports game.',
    category: 'arcade',
    tags: ['football', 'sports', 'duel', 'arcade', 'multiplayer', 'soccer'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/4a9c7ad53f7c48678b3b848390a62daa/?gd_sdk_referrer_url=' + baseUrl + '/games/football-duel',
    image: 'https://img.gamedistribution.com/4a9c7ad53f7c48678b3b848390a62daa-512x512.jpg'
  },
  // Arcade - Stacking
  {
    slug: 'cloneup-stack-yourself',
    title: 'CloneUp - Stack Yourself',
    shortDescription: 'Stack clones of yourself to reach new heights in this fun arcade game.',
    description: 'CloneUp - Stack Yourself is a fun arcade game where you create clones and stack them to reach new heights. Master the timing, build tall towers of clones, and challenge yourself to go higher and higher in this addictive stacking game.',
    category: 'arcade',
    tags: ['stack', 'clone', 'arcade', 'timing', 'addictive', 'challenge'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/c7e42d58ca024c8a81488cb6102b4800/?gd_sdk_referrer_url=' + baseUrl + '/games/cloneup-stack-yourself',
    image: 'https://img.gamedistribution.com/c7e42d58ca024c8a81488cb6102b4800-512x512.jpg'
  },
  // Casual - Puzzle
  {
    slug: 'emergency-jam',
    title: 'Emergency Jam',
    shortDescription: 'Manage emergency situations and solve problems under pressure.',
    description: 'Emergency Jam is a fun time-management game where you handle emergency situations under pressure. Solve problems quickly, manage resources, and keep everyone safe in this exciting and challenging casual game.',
    category: 'casual',
    tags: ['emergency', 'time-management', 'casual', 'strategy', 'problem-solving', 'funny'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 10000,
    iframeUrl: 'https://html5.gamedistribution.com/de39260e780f439daa9d9573a4723519/?gd_sdk_referrer_url=' + baseUrl + '/games/emergency-jam',
    image: 'https://img.gamedistribution.com/de39260e780f439daa9d9573a4723519-512x512.jpg'
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
