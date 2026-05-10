const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  // Word
  {
    slug: 'words-challenge',
    title: 'Words Challenge',
    shortDescription: 'Challenge your vocabulary skills in this fun word puzzle game.',
    description: 'Words Challenge is an engaging word puzzle game that tests your vocabulary and spelling skills. Find hidden words, solve letter puzzles, and progress through increasingly challenging levels. A perfect brain workout for word game lovers.',
    category: 'word',
    tags: ['word', 'challenge', 'vocabulary', 'puzzle', 'spelling', 'brain'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 16000,
    iframeUrl: 'https://html5.gamedistribution.com/e6ad2f8b02f04d0f980f6bbb71b0d3ac/?gd_sdk_referrer_url=' + baseUrl + '/games/words-challenge',
    image: 'https://img.gamedistribution.com/e6ad2f8b02f04d0f980f6bbb71b0d3ac-512x512.jpg'
  },
  {
    slug: 'word-search-3',
    title: 'Word Search',
    shortDescription: 'Search for hidden words on a grid in this classic word puzzle.',
    description: 'Word Search is a beautiful word puzzle game where you search for hidden words on a grid. Find words horizontally, vertically, and diagonally. With multiple difficulty levels and categories, this classic word game offers endless fun.',
    category: 'word',
    tags: ['word', 'search', 'puzzle', 'vocabulary', 'grid', 'letters'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/fbd63068e7fe4c7b8d2f977390db446f/?gd_sdk_referrer_url=' + baseUrl + '/games/word-search-3',
    image: 'https://img.gamedistribution.com/fbd63068e7fe4c7b8d2f977390db446f-512x512.jpg'
  },
  {
    slug: 'word-search-universe',
    title: 'Word Search Universe',
    shortDescription: 'Explore a universe of word search puzzles across 20 chapters.',
    description: 'Word Search Universe takes you on a journey through 20 chapters of word search puzzles. Each chapter features easy, medium, and hard levels with 6 hidden words to find. A comprehensive word search experience for puzzle enthusiasts.',
    category: 'word',
    tags: ['word', 'search', 'universe', 'puzzle', 'chapters', 'vocabulary'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 14000,
    iframeUrl: 'https://html5.gamedistribution.com/b660d10d6c124922babb5d9e7bf29133/?gd_sdk_referrer_url=' + baseUrl + '/games/word-search-universe',
    image: 'https://img.gamedistribution.com/b660d10d6c124922babb5d9e7bf29133-512x512.jpg'
  },
  // Hidden Object
  {
    slug: 'scroll-and-spot',
    title: 'Scroll and Spot',
    shortDescription: 'Scroll through detailed scenes and spot hidden objects.',
    description: 'Scroll and Spot is a relaxing hidden object game where you scroll through beautifully detailed scenes and find cleverly hidden items. Sharpen your observation skills as you search through increasingly complex illustrations.',
    category: 'hidden-object',
    tags: ['hidden-object', 'scroll', 'spot', 'find', 'relaxing', 'observation'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/23fa647cfc094a2cb1d367c988aa6024/?gd_sdk_referrer_url=' + baseUrl + '/games/scroll-and-spot',
    image: 'https://img.gamedistribution.com/23fa647cfc094a2cb1d367c988aa6024-512x512.jpg'
  },
  // Casual
  {
    slug: 'cooking-fever',
    title: 'Cooking Fever',
    shortDescription: 'Cook and serve delicious meals from around the world in this time management game.',
    description: 'Cooking Fever is a fun time-management cooking game where you cook meals and desserts from around the world. Run multiple restaurant locations including Fast Food, Indian, Chinese, and Desserts, serve customers quickly, and earn tips to upgrade your kitchen.',
    category: 'casual',
    tags: ['cooking', 'time-management', 'restaurant', 'food', 'casual', 'simulation'],
    difficulty: 'medium',
    featured: false,
    rating: 4.4,
    playCount: 35000,
    iframeUrl: 'https://html5.gamedistribution.com/df05e9ecc99a448a805f74d60b05559d/?gd_sdk_referrer_url=' + baseUrl + '/games/cooking-fever',
    image: 'https://img.gamedistribution.com/df05e9ecc99a448a805f74d60b05559d-512x512.jpg'
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
