const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  {
    slug: 'hoard-master-online',
    title: 'Hoard Master Online',
    shortDescription: 'Collect and hoard treasures in this addictive online collecting game.',
    description: 'Hoard Master Online is an addictive collecting game where you gather treasures and build your hoard. Compete online, collect rare items, and grow your collection in this fun and engaging casual game.',
    category: 'casual',
    tags: ['collect', 'hoard', 'online', 'casual', 'treasure', 'addictive'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/ddb3686df59d4220b3830b10cf789b4a/?gd_sdk_referrer_url=' + baseUrl + '/games/hoard-master-online',
    image: 'https://img.gamedistribution.com/ddb3686df59d4220b3830b10cf789b4a-512x512.jpg'
  },
  {
    slug: 'battle-simulator-sandbox',
    title: 'Battle Simulator Sandbox',
    shortDescription: 'Create epic battles with customizable armies in this sandbox simulator.',
    description: 'Battle Simulator Sandbox lets you create and simulate epic battles with customizable armies. Place units, watch them fight using realistic physics, and experiment with different strategies in this fun sandbox battle simulator.',
    category: 'puzzle',
    tags: ['battle', 'simulator', 'sandbox', 'strategy', 'physics', 'funny'],
    difficulty: 'easy',
    featured: false,
    rating: 4.3,
    playCount: 30000,
    iframeUrl: 'https://html5.gamedistribution.com/3e212271911e454c924dedbe7f8999d3/?gd_sdk_referrer_url=' + baseUrl + '/games/battle-simulator-sandbox',
    image: 'https://img.gamedistribution.com/3e212271911e454c924dedbe7f8999d3-512x512.jpg'
  },
  {
    slug: 'noob-archer-vs-stickman-zombie',
    title: 'Noob Archer vs Stickman Zombie',
    shortDescription: 'Defend against zombie hordes as a noob archer in this action game.',
    description: 'Noob Archer vs Stickman Zombie is a fun zombie shooter game where you play as a noob archer. Defend against waves of stickman zombies using your bow and arrows. Upgrade your weapons and survive as long as possible.',
    category: 'arcade',
    tags: ['shooter', 'zombie', 'archer', 'stickman', 'action', 'survival'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/8e2b594a7e3d4840bcf77441b9dd207b/?gd_sdk_referrer_url=' + baseUrl + '/games/noob-archer-vs-stickman-zombie',
    image: 'https://img.gamedistribution.com/8e2b594a7e3d4840bcf77441b9dd207b-512x512.jpg'
  },
  {
    slug: 'parkour-block-5',
    title: 'Parkour Block 5',
    shortDescription: 'Navigate challenging parkour courses in this block-style platformer.',
    description: 'Parkour Block 5 is an exciting platformer where you navigate challenging parkour courses. Jump between blocks, avoid obstacles, and reach the finish line in increasingly difficult levels. Test your platforming skills!',
    category: 'arcade',
    tags: ['parkour', 'platformer', 'block', 'obstacle', 'jumping', 'arcade'],
    difficulty: 'medium',
    featured: false,
    rating: 4.2,
    playCount: 25000,
    iframeUrl: 'https://html5.gamedistribution.com/e18b34214db742c4a97cc80650fc02dd/?gd_sdk_referrer_url=' + baseUrl + '/games/parkour-block-5',
    image: 'https://img.gamedistribution.com/e18b34214db742c4a97cc80650fc02dd-512x512.jpg'
  },
  {
    slug: 'parkour-block-obby',
    title: 'Parkour Block Obby',
    shortDescription: 'Run, jump and climb through challenging obby parkour courses.',
    description: 'Parkour Block Obby is a fun obstacle course game where you run, jump, and climb through challenging parkour levels. Master each obby course, overcome tricky obstacles, and reach the top of the leaderboard.',
    category: 'arcade',
    tags: ['parkour', 'obby', 'platformer', 'obstacle', 'jumping', 'challenge'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/7e150881bd90410391cd7efbe8e51d87/?gd_sdk_referrer_url=' + baseUrl + '/games/parkour-block-obby',
    image: 'https://img.gamedistribution.com/7e150881bd90410391cd7efbe8e51d87-512x512.jpg'
  },
  {
    slug: 'block-parkour-trials',
    title: 'Block Parkour Trials',
    shortDescription: 'Complete parkour trials across challenging block courses.',
    description: 'Block Parkour Trials challenges you to complete parkour trials across increasingly difficult block courses. Jump, sprint, and climb your way through each trial, mastering the art of block parkour along the way.',
    category: 'arcade',
    tags: ['parkour', 'trials', 'block', 'platformer', 'challenge', 'obstacle'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 15000,
    iframeUrl: 'https://html5.gamedistribution.com/6f38d609768747a692974c6ef97b2514/?gd_sdk_referrer_url=' + baseUrl + '/games/block-parkour-trials',
    image: 'https://img.gamedistribution.com/6f38d609768747a692974c6ef97b2514-512x512.jpg'
  },
  {
    slug: 'miami-crime-simulator-3d',
    title: 'Miami Crime Simulator 3D',
    shortDescription: 'Explore Miami in this 3D open-world crime simulator.',
    description: 'Miami Crime Simulator 3D puts you in the middle of an open-world crime adventure in Miami. Explore the city, complete missions, drive vehicles, and experience the criminal underworld in this immersive 3D simulator.',
    category: 'arcade',
    tags: ['crime', 'simulator', '3d', 'open-world', 'action', 'driving'],
    difficulty: 'medium',
    featured: false,
    rating: 4.1,
    playCount: 25000,
    iframeUrl: 'https://html5.gamedistribution.com/1e4fd1ecada740c29e31fafc39aa8adc/?gd_sdk_referrer_url=' + baseUrl + '/games/miami-crime-simulator-3d',
    image: 'https://img.gamedistribution.com/1e4fd1ecada740c29e31fafc39aa8adc-512x512.jpg'
  },
  {
    slug: 'miami-city-crime-mafia-war',
    title: 'Miami City Crime Mafia War',
    shortDescription: 'Fight mafia wars across Miami in this action-packed crime game.',
    description: 'Miami City Crime Simulator City Mafia War is an action-packed crime game where you fight for territory in Miami. Take on rival mafia families, complete missions, and build your criminal empire in this gritty urban adventure.',
    category: 'arcade',
    tags: ['crime', 'mafia', 'action', 'shooter', 'open-world', 'mission'],
    difficulty: 'hard',
    featured: false,
    rating: 4.0,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/1546eaff4a7545d487306bd7cc15d3e8/?gd_sdk_referrer_url=' + baseUrl + '/games/miami-city-crime-mafia-war',
    image: 'https://img.gamedistribution.com/1546eaff4a7545d487306bd7cc15d3e8-512x512.jpg'
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
