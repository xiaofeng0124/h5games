const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  // Arcade - Action & Reflex
  {
    slug: 'color-hit',
    title: 'Color Hit',
    shortDescription: 'Hit the matching colors in this fast-paced arcade reflex game.',
    description: 'Color Hit is a fast-paced arcade reflex game where you must hit the correct colored targets. Test your reaction speed and accuracy as the game gets progressively harder. A simple yet addictive challenge for players of all ages.',
    category: 'arcade',
    tags: ['color', 'reflex', 'arcade', 'reaction', 'speed', 'addictive'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 25000,
    iframeUrl: 'https://html5.gamedistribution.com/17a86da77f3f4dc09f5f9d94c741bebc/?gd_sdk_referrer_url=' + baseUrl + '/games/color-hit',
    image: 'https://img.gamedistribution.com/17a86da77f3f4dc09f5f9d94c741bebc-512x512.jpg'
  },
  {
    slug: 'funny-walk-fail-run',
    title: 'Funny Walk Fail Run',
    shortDescription: 'Watch hilarious ragdoll walk fails in this physics-based arcade game.',
    description: 'Funny Walk Fail Run is a hilarious physics-based arcade game where you control a wobbly character trying to walk without falling. Navigate obstacle courses with ragdoll physics and laugh at the funny fails. A silly and entertaining challenge.',
    category: 'arcade',
    tags: ['funny', 'ragdoll', 'physics', 'walk', 'fail', 'arcade'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/3232d8d696ec4bc1989cd0b4a0ec1482/?gd_sdk_referrer_url=' + baseUrl + '/games/funny-walk-fail-run',
    image: 'https://img.gamedistribution.com/3232d8d696ec4bc1989cd0b4a0ec1482-512x512.jpg'
  },
  // Shooter
  {
    slug: 'noob-shooter-gun-battle-3d',
    title: 'Noob Shooter: Gun Battle 3D',
    shortDescription: 'Battle enemies in 3D as a noob shooter with powerful weapons.',
    description: 'Noob Shooter: Gun Battle 3D is an action-packed 3D shooter where you battle waves of enemies. Use various weapons, upgrade your arsenal, and fight through challenging levels. A fun shooting game for fans of 3D action.',
    category: 'arcade',
    tags: ['shooter', '3d', 'gun', 'action', 'noob', 'battle'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/7de4f2b6d2cf4ab587087c8649a1f8bb/?gd_sdk_referrer_url=' + baseUrl + '/games/noob-shooter-gun-battle-3d',
    image: 'https://img.gamedistribution.com/7de4f2b6d2cf4ab587087c8649a1f8bb-512x512.jpg'
  },
  {
    slug: 'strike-force-action-platformer',
    title: 'Strike Force: Action Platformer',
    shortDescription: 'Run, jump and shoot through action-packed platformer levels.',
    description: 'Strike Force: Action Platformer is an intense action platformer where you run, jump, and shoot through challenging levels. Battle enemies, collect power-ups, and overcome obstacles in this thrilling side-scrolling adventure.',
    category: 'arcade',
    tags: ['platformer', 'action', 'shooter', 'run', 'jump', 'arcade'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/46d0c1a30102462aaf90291f5e0788f4/?gd_sdk_referrer_url=' + baseUrl + '/games/strike-force-action-platformer',
    image: 'https://img.gamedistribution.com/46d0c1a30102462aaf90291f5e0788f4-512x512.jpg'
  },
  // Arcade - Racing
  {
    slug: 'gt-championship-arcade',
    title: 'GT Championship Arcade',
    shortDescription: 'Race at high speeds in this GT championship arcade racing game.',
    description: 'GT Championship Arcade brings high-speed racing action to your browser. Race against opponents on challenging tracks, upgrade your car, and compete for the championship title. Fast-paced arcade racing at its best.',
    category: 'arcade',
    tags: ['racing', 'car', 'arcade', 'speed', 'driving', 'championship'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 22000,
    iframeUrl: 'https://html5.gamedistribution.com/f91602ea0cae446386b1db3be3200c5e/?gd_sdk_referrer_url=' + baseUrl + '/games/gt-championship-arcade',
    image: 'https://img.gamedistribution.com/f91602ea0cae446386b1db3be3200c5e-512x512.jpg'
  },
  // Parkour
  {
    slug: 'parkour-block-7',
    title: 'Parkour Block 7',
    shortDescription: 'Master new parkour challenges in Block 7 with harder obstacles.',
    description: 'Parkour Block 7 is the latest installment in the parkour block series. Navigate through increasingly difficult courses filled with new obstacles and challenges. Jump, climb, and sprint your way to victory in this exciting platformer.',
    category: 'arcade',
    tags: ['parkour', 'block', 'platformer', 'obstacle', 'jumping', 'challenge'],
    difficulty: 'medium',
    featured: false,
    rating: 4.3,
    playCount: 28000,
    iframeUrl: 'https://html5.gamedistribution.com/13215160b460481492b582a5081b49a1/?gd_sdk_referrer_url=' + baseUrl + '/games/parkour-block-7',
    image: 'https://img.gamedistribution.com/13215160b460481492b582a5081b49a1-512x512.jpg'
  },
  // Arcade - Defense
  {
    slug: 'world-z-defense-zombie-defense',
    title: 'World Z Defense: Zombie Defense',
    shortDescription: 'Defend against zombie hordes in this action-packed tower defense game.',
    description: 'World Z Defense is a thrilling zombie defense game where you must protect your base from relentless zombie hordes. Build defenses, upgrade weapons, and fight to survive wave after wave of the undead.',
    category: 'arcade',
    tags: ['zombie', 'defense', 'survival', 'action', 'tower-defense', 'horde'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/7461e5111cc548879103152b4f113604/?gd_sdk_referrer_url=' + baseUrl + '/games/world-z-defense-zombie-defense',
    image: 'https://img.gamedistribution.com/7461e5111cc548879103152b4f113604-512x512.jpg'
  },
  // Arcade - Adventure
  {
    slug: 'roblox-craft-run',
    title: 'Roblox Craft Run',
    shortDescription: 'Run and craft your way through blocky adventure levels.',
    description: 'Roblox Craft Run is a fun adventure game where you run through blocky worlds, collect resources, and craft items. Explore colorful levels, avoid obstacles, and build your way to the finish line in this creative platformer.',
    category: 'arcade',
    tags: ['craft', 'run', 'block', 'adventure', 'platformer', 'creative'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 16000,
    iframeUrl: 'https://html5.gamedistribution.com/76d5b7c9275b42a9abd90a41d35da77f/?gd_sdk_referrer_url=' + baseUrl + '/games/roblox-craft-run',
    image: 'https://img.gamedistribution.com/76d5b7c9275b42a9abd90a41d35da77f-512x512.jpg'
  },
  {
    slug: 'my-arcade-center',
    title: 'My Arcade Center',
    shortDescription: 'Manage your own arcade center and keep customers happy.',
    description: 'My Arcade Center puts you in charge of your very own arcade venue. Manage machines, keep customers happy, upgrade your arcade, and grow your business into the ultimate entertainment destination.',
    category: 'arcade',
    tags: ['arcade', 'management', 'simulation', 'tycoon', 'casual', 'business'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/1ae5b8b1590c4119bb5163d98b51be2c/?gd_sdk_referrer_url=' + baseUrl + '/games/my-arcade-center',
    image: 'https://img.gamedistribution.com/1ae5b8b1590c4119bb5163d98b51be2c-512x512.jpg'
  },
  // Match-3
  {
    slug: 'jelly-garden',
    title: 'Jelly Garden',
    shortDescription: 'Match squishy jelly candies in this sweet match-3 puzzle adventure.',
    description: 'Jelly Garden is a squishy and sweet match-3 puzzle game where you match colorful jelly candies. Progress through levels, earn stars, and unlock special power-ups in this delightful and addictive puzzle adventure.',
    category: 'match-3',
    tags: ['match-3', 'jelly', 'garden', 'puzzle', 'candy', 'sweet'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 30000,
    iframeUrl: 'https://html5.gamedistribution.com/3be7a5e372824d0a8b45cf5e6107ca3d/?gd_sdk_referrer_url=' + baseUrl + '/games/jelly-garden',
    image: 'https://img.gamedistribution.com/3be7a5e372824d0a8b45cf5e6107ca3d-512x512.jpg'
  },
  // Puzzle
  {
    slug: 'mini-games-puzzle-collection',
    title: 'Mini Games Puzzle Collection',
    shortDescription: 'A collection of fun mini puzzle games in one package.',
    description: 'Mini Games Puzzle Collection brings together multiple fun puzzle games in one package. Enjoy logic puzzles, brain teasers, and creative challenges. Perfect for puzzle lovers who enjoy variety and fresh challenges.',
    category: 'puzzle',
    tags: ['puzzle', 'collection', 'mini-games', 'logic', 'brain', 'variety'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/47b72fc202d146708eae844eda608e60/?gd_sdk_referrer_url=' + baseUrl + '/games/mini-games-puzzle-collection',
    image: 'https://img.gamedistribution.com/47b72fc202d146708eae844eda608e60-512x512.jpg'
  },
  {
    slug: 'girly-puzzle',
    title: 'Girly Puzzle',
    shortDescription: 'A stylish block puzzle game with cute and colorful themes.',
    description: 'Girly Puzzle is a stylish block-placing puzzle game featuring cute and colorful themes. Place blocks to complete lines and clear the board. A relaxing and fashionable puzzle experience with charming visuals.',
    category: 'puzzle',
    tags: ['puzzle', 'block', 'cute', 'colorful', 'relaxing', 'casual'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 12000,
    iframeUrl: 'https://html5.gamedistribution.com/73cefa804898403ba7f2b26cb769aa03/?gd_sdk_referrer_url=' + baseUrl + '/games/girly-puzzle',
    image: 'https://img.gamedistribution.com/73cefa804898403ba7f2b26cb769aa03-512x512.jpg'
  },
  {
    slug: 'unblocked',
    title: 'Unblocked',
    shortDescription: 'Slide blocks to clear the path in this classic sliding puzzle.',
    description: 'Unblocked is a classic sliding block puzzle game where you must move blocks out of the way to clear a path. Think ahead and plan your moves carefully in this challenging and addictive logic puzzle.',
    category: 'puzzle',
    tags: ['sliding', 'block', 'puzzle', 'logic', 'classic', 'strategy'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/91ce96fe908f4c3ca8fe456871217f2d/?gd_sdk_referrer_url=' + baseUrl + '/games/unblocked',
    image: 'https://img.gamedistribution.com/91ce96fe908f4c3ca8fe456871217f2d-512x512.jpg'
  },
  // Merge
  {
    slug: 'gummy-merge',
    title: 'Gummy Merge',
    shortDescription: 'Merge identical gummy candies to create delicious new treats.',
    description: 'Gummy Merge is an endless merge game where you combine identical gummy marmalades to reach higher levels. Merge matching candies to increase their level and earn more coins. Buy new gummies, use boosts, and enjoy mini-games.',
    category: 'merge',
    tags: ['merge', 'candy', 'gummy', 'casual', 'addictive', 'idle'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/3eabd77ca00140f5ad0713bb421e7008/?gd_sdk_referrer_url=' + baseUrl + '/games/gummy-merge',
    image: 'https://img.gamedistribution.com/3eabd77ca00140f5ad0713bb421e7008-512x512.jpg'
  },
  {
    slug: 'watermelon-suika-game',
    title: 'Watermelon Suika Game',
    shortDescription: 'Drop and merge fruits in this viral watermelon physics puzzle.',
    description: 'Watermelon Suika Game is the viral fruit-merging physics puzzle that took the internet by storm. Drop fruits into a container and merge identical ones to create bigger fruits. Aim for the giant watermelon in this satisfying and addictive puzzle.',
    category: 'merge',
    tags: ['merge', 'watermelon', 'suika', 'physics', 'puzzle', 'viral'],
    difficulty: 'easy',
    featured: false,
    rating: 4.5,
    playCount: 50000,
    iframeUrl: 'https://html5.gamedistribution.com/893500b2a6ac4d08889dd6a93cc08700/?gd_sdk_referrer_url=' + baseUrl + '/games/watermelon-suika-game',
    image: 'https://img.gamedistribution.com/893500b2a6ac4d08889dd6a93cc08700-512x512.jpg'
  },
  {
    slug: 'suika-watermelon-drop',
    title: 'Suika Watermelon Drop',
    shortDescription: 'Drop and merge fruits to create the biggest watermelon possible.',
    description: 'Suika Watermelon Drop is a fun fruit-merging game where you drop fruits into a container and merge identical ones. Strategically place your drops to create larger fruits and set new high scores. A satisfying physics-based puzzle.',
    category: 'merge',
    tags: ['merge', 'watermelon', 'suika', 'fruit', 'physics', 'puzzle'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 25000,
    iframeUrl: 'https://html5.gamedistribution.com/634a50cca48b4c0d87cedb3add5c5c81/?gd_sdk_referrer_url=' + baseUrl + '/games/suika-watermelon-drop',
    image: 'https://img.gamedistribution.com/634a50cca48b4c0d87cedb3add5c5c81-512x512.jpg'
  },
  // Sports
  {
    slug: 'basket-shot',
    title: 'Basket Shot',
    shortDescription: 'Shoot hoops in this addictive basketball arcade game.',
    description: 'Basket Shot is an addictive basketball arcade game where you shoot hoops from various angles and distances. Aim carefully, time your shot, and score as many baskets as you can. A fun and challenging sports game for basketball fans.',
    category: 'arcade',
    tags: ['basketball', 'sports', 'arcade', 'shooting', 'hoops', 'score'],
    difficulty: 'easy',
    featured: false,
    rating: 4.1,
    playCount: 22000,
    iframeUrl: 'https://html5.gamedistribution.com/17d229e26e5f485ba9a4ab11a87942bb/?gd_sdk_referrer_url=' + baseUrl + '/games/basket-shot',
    image: 'https://img.gamedistribution.com/17d229e26e5f485ba9a4ab11a87942bb-512x512.jpg'
  },
  // Word
  {
    slug: 'words-from-words',
    title: 'Words from Words',
    shortDescription: 'Create as many words as possible from given letters in this word puzzle.',
    description: 'Words from Words is an engaging word puzzle game where you create as many words as possible from a set of given letters. Expand your vocabulary, challenge your spelling skills, and discover new words in this addictive word game.',
    category: 'word',
    tags: ['word', 'puzzle', 'vocabulary', 'spelling', 'letters', 'educational'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/607f9f304899446aaf075339ba3dff81/?gd_sdk_referrer_url=' + baseUrl + '/games/words-from-words',
    image: 'https://img.gamedistribution.com/607f9f304899446aaf075339ba3dff81-512x512.jpg'
  },
  // Card
  {
    slug: 'card-battle',
    title: 'Card Battle',
    shortDescription: 'Battle opponents using strategic card plays in this fun card game.',
    description: 'Card Battle is a strategic card game where you battle opponents using clever card plays. Build your deck, use special abilities, and outsmart your opponent in this engaging and tactical card battle experience.',
    category: 'card',
    tags: ['card', 'battle', 'strategy', 'deck', 'tactical', 'multiplayer'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2/?gd_sdk_referrer_url=' + baseUrl + '/games/card-battle',
    image: 'https://img.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2-512x512.jpg'
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
