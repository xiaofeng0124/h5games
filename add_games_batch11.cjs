const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  // Merge
  {
    slug: 'merge-flow',
    title: 'Merge Flow',
    shortDescription: 'Merge numbers on a grid using strategic additions and subtractions.',
    description: 'Merge Flow is a grid-based number merging puzzle game where you use addition and subtraction operators to combine numbers. Strategically plan your moves to create higher numbers and clear the board in this addictive and relaxing puzzle game.',
    category: 'merge',
    tags: ['merge', 'numbers', 'grid', 'puzzle', 'strategy', 'addition'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/2a779c9c719141c5bc539553e3535466/?gd_sdk_referrer_url=' + baseUrl + '/games/merge-flow',
    image: 'https://img.gamedistribution.com/2a779c9c719141c5bc539553e3535466-512x512.jpg'
  },
  // Arcade
  {
    slug: 'sniping-aliens',
    title: 'Sniping Aliens',
    shortDescription: 'Find and snipe disguised aliens hiding in the city.',
    description: 'Sniping Aliens is a thrilling sniper game where aliens have infiltrated Earth in disguise. Search every corner of the city, identify the hidden aliens, and take them out with precision shots. A challenging and immersive arcade shooter.',
    category: 'arcade',
    tags: ['sniper', 'aliens', 'shooter', 'arcade', 'action', 'stealth'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/fef2ae713f614b868ce48aab458ba8ec/?gd_sdk_referrer_url=' + baseUrl + '/games/sniping-aliens',
    image: 'https://img.gamedistribution.com/fef2ae713f614b868ce48aab458ba8ec-512x512.jpg'
  },
  {
    slug: 'cyber-arrow',
    title: 'Cyber Arrow',
    shortDescription: 'Become a techno archer and fly a remote-controlled arrow through levels.',
    description: 'Cyber Arrow is a fast-paced arcade game where you become a Techno Archer. Fly a remote-controlled arrow through stunning sci-fi levels, solve puzzles, defeat enemies, and rescue hostages across 3 exciting game modes.',
    category: 'arcade',
    tags: ['archer', 'cyber', 'arrow', 'sci-fi', 'puzzle', 'action'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/f63a94df89ae487aba3ff3bacba2d093/?gd_sdk_referrer_url=' + baseUrl + '/games/cyber-arrow',
    image: 'https://img.gamedistribution.com/f63a94df89ae487aba3ff3bacba2d093-512x512.jpg'
  },
  {
    slug: 'cube-speed-dash',
    title: 'Cube Speed Dash',
    shortDescription: 'Dash through obstacle courses at high speed as a racing cube.',
    description: 'Cube Speed Dash is a fast-paced arcade game where you control a cube racing through obstacle courses at high speed. Dodge obstacles, collect bonuses, and set new speed records in this thrilling and addictive runner game.',
    category: 'arcade',
    tags: ['cube', 'speed', 'dash', 'arcade', 'obstacle', 'runner'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 14000,
    iframeUrl: 'https://html5.gamedistribution.com/8c6bbf416a8240cea3c6c9b6f041832e/?gd_sdk_referrer_url=' + baseUrl + '/games/cube-speed-dash',
    image: 'https://img.gamedistribution.com/8c6bbf416a8240cea3c6c9b6f041832e-512x512.jpg'
  },
  {
    slug: 'ii',
    title: 'II',
    shortDescription: 'A minimalist arcade game where timing and precision are key.',
    description: 'II is a minimalist arcade game that tests your timing and precision. Simple controls but challenging gameplay makes this an addictive experience. How high can you score in this elegantly designed reflex game?',
    category: 'arcade',
    tags: ['minimalist', 'arcade', 'reflex', 'timing', 'precision', 'addictive'],
    difficulty: 'medium',
    featured: false,
    rating: 3.9,
    playCount: 10000,
    iframeUrl: 'https://html5.gamedistribution.com/3cd2c79ee2874c8ab5f7b3b38dc77377/?gd_sdk_referrer_url=' + baseUrl + '/games/ii',
    image: 'https://img.gamedistribution.com/3cd2c79ee2874c8ab5f7b3b38dc77377-512x512.jpg'
  },
  // Puzzle
  {
    slug: 'colors-pins',
    title: 'Colors Pins',
    shortDescription: 'Match colored pins to the correct boxes in this addictive puzzle.',
    description: 'Colors Pins is a puzzle game where you click on pins matching the color of the boxes on each level. Fill the boxes to advance, but be careful — mismatched pins fill temporary cells. A colorful and challenging puzzle experience.',
    category: 'puzzle',
    tags: ['colors', 'pins', 'matching', 'puzzle', 'logic', 'challenge'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 13000,
    iframeUrl: 'https://html5.gamedistribution.com/e4b0a04981724e6796ed96f7866ac756/?gd_sdk_referrer_url=' + baseUrl + '/games/colors-pins',
    image: 'https://img.gamedistribution.com/e4b0a04981724e6796ed96f7866ac756-512x512.jpg'
  },
  {
    slug: 'patterns-link',
    title: 'Patterns Link',
    shortDescription: 'Link matching patterns in this relaxing and challenging puzzle game.',
    description: 'Patterns Link is a calming puzzle game where you connect matching patterns across the board. Clear all tiles by linking identical patterns with a path that has no more than two turns. A relaxing brain teaser for puzzle enthusiasts.',
    category: 'puzzle',
    tags: ['patterns', 'link', 'matching', 'puzzle', 'relaxing', 'strategy'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/745baf300e1849668f7be2b4ca51f006/?gd_sdk_referrer_url=' + baseUrl + '/games/patterns-link',
    image: 'https://img.gamedistribution.com/745baf300e1849668f7be2b4ca51f006-512x512.jpg'
  },
  {
    slug: 'tricky-challenges-mini-games',
    title: 'Tricky Challenges: Mini Games',
    shortDescription: 'A collection of tricky mini-games that will test your skills.',
    description: 'Tricky Challenges: Mini Games is a fun collection of tricky mini-games that will test your reflexes, logic, and problem-solving skills. Each mini-game presents a unique challenge. Can you master them all?',
    category: 'puzzle',
    tags: ['mini-games', 'tricky', 'challenges', 'puzzle', 'reflex', 'collection'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/760aa10dee0d47d085b0d8c80d185548/?gd_sdk_referrer_url=' + baseUrl + '/games/tricky-challenges-mini-games',
    image: 'https://img.gamedistribution.com/760aa10dee0d47d085b0d8c80d185548-512x512.jpg'
  },
  // Casual
  {
    slug: 'save-the-bees',
    title: 'Save the Bees',
    shortDescription: 'Help save the bees by completing environmental challenges.',
    description: 'Save the Bees is an educational casual game where you help protect and save bees by completing environmental challenges. Learn about the importance of bees while enjoying engaging gameplay that makes a positive impact.',
    category: 'casual',
    tags: ['bees', 'nature', 'educational', 'casual', 'environment', 'kids'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 14000,
    iframeUrl: 'https://html5.gamedistribution.com/5049d27064274196b0120626252b0aa2/?gd_sdk_referrer_url=' + baseUrl + '/games/save-the-bees',
    image: 'https://img.gamedistribution.com/5049d27064274196b0120626252b0aa2-512x512.jpg'
  },
  // Hidden Object
  {
    slug: 'hidden-objects-island-secrets',
    title: 'Hidden Objects: Island Secrets',
    shortDescription: 'Discover island secrets as you search for hidden objects.',
    description: 'Hidden Objects: Island Secrets invites you to explore a mysterious island and uncover its secrets. Search beautifully illustrated scenes for cleverly hidden objects and piece together the island mysteries in this engaging hidden object adventure.',
    category: 'hidden-object',
    tags: ['hidden-object', 'island', 'secrets', 'find', 'puzzle', 'adventure'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 13000,
    iframeUrl: 'https://html5.gamedistribution.com/7ffd63337f514fd1bb16fa54f15d1f68/?gd_sdk_referrer_url=' + baseUrl + '/games/hidden-objects-island-secrets',
    image: 'https://img.gamedistribution.com/7ffd63337f514fd1bb16fa54f15d1f68-512x512.jpg'
  },
  // Match-3
  {
    slug: 'matchcraft-match-three',
    title: 'MatchCraft Match Three',
    shortDescription: 'A crafty match-three puzzle game with unique power-ups and challenges.',
    description: 'MatchCraft Match Three is a creative match-three puzzle game where you match colorful gems and use unique power-ups to clear the board. Progress through challenging levels and discover special crafting combinations in this engaging puzzle game.',
    category: 'match-3',
    tags: ['match-3', 'craft', 'gems', 'puzzle', 'power-ups', 'colorful'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 16000,
    iframeUrl: 'https://html5.gamedistribution.com/a4993ece0f424dd5a35901b1f5fa10fc/?gd_sdk_referrer_url=' + baseUrl + '/games/matchcraft-match-three',
    image: 'https://img.gamedistribution.com/a4993ece0f424dd5a35901b1f5fa10fc-512x512.jpg'
  },
  // Card / Board
  {
    slug: 'number-domination',
    title: 'Number Domination',
    shortDescription: 'A strategic card game where higher numbers dominate the board.',
    description: 'Number Domination is a strategic card/board game where you play numbered cards to dominate the board. Place higher numbers on top of lower ones to capture territory and outsmart your opponent. A simple yet deep strategy game.',
    category: 'card',
    tags: ['card', 'numbers', 'strategy', 'board', 'tactical', 'domination'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 10000,
    iframeUrl: 'https://html5.gamedistribution.com/0a8abcb4fd9442e99827c02a72dd9f12/?gd_sdk_referrer_url=' + baseUrl + '/games/number-domination',
    image: 'https://img.gamedistribution.com/0a8abcb4fd9442e99827c02a72dd9f12-512x512.jpg'
  },
  {
    slug: 'four-colors-multiplayer',
    title: 'Four Colors Multiplayer',
    shortDescription: 'The classic UNO-style card game playable against AI or friends.',
    description: 'Four Colors Multiplayer is the classic matching card game similar to UNO. Match cards by color or number, use action cards to disrupt opponents, and be the first to empty your hand. Play against AI or challenge friends in this timeless card game.',
    category: 'card',
    tags: ['card', 'uno', 'colors', 'multiplayer', 'classic', 'family'],
    difficulty: 'easy',
    featured: false,
    rating: 4.3,
    playCount: 30000,
    iframeUrl: 'https://html5.gamedistribution.com/f2520bae00624e93a4f4614732fa259e/?gd_sdk_referrer_url=' + baseUrl + '/games/four-colors-multiplayer',
    image: 'https://img.gamedistribution.com/f2520bae00624e93a4f4614732fa259e-512x512.jpg'
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
