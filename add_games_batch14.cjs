const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  // Board - Checkers
  {
    slug: 'checkers-2',
    title: 'Checkers',
    shortDescription: 'Play the classic board game of checkers against the computer.',
    description: 'Checkers brings the classic board game to your browser. Play against the computer in this timeless strategy game. Jump your opponent pieces and capture them to win. A must-play for fans of traditional board games.',
    category: 'board',
    tags: ['checkers', 'board', 'strategy', 'classic', 'logic', 'multiplayer'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 22000,
    iframeUrl: 'https://html5.gamedistribution.com/ef73cd7e03d04cc5bab800afff2b11cb/?gd_sdk_referrer_url=' + baseUrl + '/games/checkers-2',
    image: 'https://img.gamedistribution.com/ef73cd7e03d04cc5bab800afff2b11cb-512x512.jpg'
  },
  // Board - Backgammon
  {
    slug: 'backgammon-1',
    title: 'Backgammon',
    shortDescription: 'Play backgammon, one of the oldest known board games, against AI.',
    description: 'Backgammon is one of the oldest known board games. Move your checkers into your home board and bear them off before your opponent. Roll the dice, plan your strategy, and enjoy this classic game of luck and skill.',
    category: 'board',
    tags: ['backgammon', 'board', 'dice', 'strategy', 'classic', 'multiplayer'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/92d479f1e7444b10abbb86f8f3b77816/?gd_sdk_referrer_url=' + baseUrl + '/games/backgammon-1',
    image: 'https://img.gamedistribution.com/92d479f1e7444b10abbb86f8f3b77816-512x512.jpg'
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
