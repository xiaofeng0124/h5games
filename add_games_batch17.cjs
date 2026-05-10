const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  // Casual
  {
    slug: 'my-dolphin-show-2-html5',
    title: 'My Dolphin Show 2',
    shortDescription: 'Train and perform with your dolphin in this fun animal show game.',
    description: 'My Dolphin Show 2 is a fun animal game where you train your dolphin and perform amazing tricks. Jump through hoops, catch fish, and put on a spectacular show for the audience. A delightful game for animal lovers of all ages.',
    category: 'casual',
    tags: ['dolphin', 'animals', 'show', 'casual', 'kids', 'training'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/e8395e59f83c4676be3d1831c8bcfb81/?gd_sdk_referrer_url=' + baseUrl + '/games/my-dolphin-show-2-html5',
    image: 'https://img.gamedistribution.com/e8395e59f83c4676be3d1831c8bcfb81-512x512.jpg'
  },
  // Merge
  {
    slug: 'merge-haven',
    title: 'Merge Haven',
    shortDescription: 'Restore a cozy café by merging items in this relaxing merge game.',
    description: 'Merge Haven is a cozy merge-2 puzzle adventure where you restore a charming café by merging items, completing board orders, and uncovering family secrets. A relaxing and heartwarming merge game with a delightful story.',
    category: 'merge',
    tags: ['merge', 'cafe', 'cozy', 'puzzle', 'restoration', 'story'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 16000,
    iframeUrl: 'https://html5.gamedistribution.com/4a671eb17a2a44e19b18143242c155fc/?gd_sdk_referrer_url=' + baseUrl + '/games/merge-haven',
    image: 'https://img.gamedistribution.com/4a671eb17a2a44e19b18143242c155fc-512x512.jpg'
  },
  {
    slug: '2048-merge-world',
    title: '2048 Merge World',
    shortDescription: 'Merge number blocks to reach 2048 in this addictive puzzle game.',
    description: '2048 Merge World is the classic number-merging puzzle where you combine identical blocks to create higher numbers. Slide and merge your way to the elusive 2048 tile in this addictive and strategic brain game.',
    category: 'merge',
    tags: ['2048', 'merge', 'numbers', 'puzzle', 'strategy', 'addictive'],
    difficulty: 'medium',
    featured: false,
    rating: 4.3,
    playCount: 25000,
    iframeUrl: 'https://html5.gamedistribution.com/a8ecea31288d4f6581ae36db798ce9ac/?gd_sdk_referrer_url=' + baseUrl + '/games/2048-merge-world',
    image: 'https://img.gamedistribution.com/a8ecea31288d4f6581ae36db798ce9ac-512x512.jpg'
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
