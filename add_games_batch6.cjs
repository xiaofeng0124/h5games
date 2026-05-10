const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  {
    slug: 'preschool-games',
    title: 'Preschool Games',
    shortDescription: 'Four fun puzzle games teaching colors, shapes, animals, and numbers.',
    description: 'Preschool Games is a collection of four different puzzle games designed for preschool kids. Players can interact with colors, shapes, animals, and numbers in a fun and educational way. Perfect for early childhood learning through play.',
    category: 'puzzle',
    tags: ['kids', 'educational', 'preschool', 'colors', 'shapes', 'animals'],
    difficulty: 'easy',
    featured: false,
    rating: 4.0,
    playCount: 25000,
    iframeUrl: 'https://html5.gamedistribution.com/919bc954654542b1bb4f2b3b19c02b1f/?gd_sdk_referrer_url=' + baseUrl + '/games/preschool-games',
    image: 'https://img.gamedistribution.com/919bc954654542b1bb4f2b3b19c02b1f-512x512.jpg'
  },
  {
    slug: 'jump-cube',
    title: 'Jump',
    shortDescription: 'A platform jumping game where you control a cube over obstacles.',
    description: 'Jump is a fun platform-style game where you control a jumping cube over mini walls, spikes, and rotating stars. Double jump to clear higher walls and see how far you can go in this addictive family-friendly challenge.',
    category: 'arcade',
    tags: ['jump', 'platform', 'cube', 'arcade', 'kids', 'casual'],
    difficulty: 'easy',
    featured: false,
    rating: 3.9,
    playCount: 18000,
    iframeUrl: 'https://html5.gamedistribution.com/83d6b2e54258442aa52f28e998ce53df/?gd_sdk_referrer_url=' + baseUrl + '/games/jump-cube',
    image: 'https://img.gamedistribution.com/83d6b2e54258442aa52f28e998ce53df-512x512.jpg'
  },
  {
    slug: 'tps-gun-war-shooting-3d',
    title: 'TPS Gun War Shooting 3D',
    shortDescription: 'Third-person shooter with missions, rifles, grenades, and zombie battles.',
    description: 'TPS Gun War Shooting Games 3D is a thrilling third-person shooter where you play as a pro shooter completing challenging missions. Use energy rifles, grenades, snipers and machine guns. Battle enemies and zombies in intense 3D combat.',
    category: 'arcade',
    tags: ['shooter', 'action', '3d', 'gun', 'combat', 'zombie'],
    difficulty: 'hard',
    featured: false,
    rating: 4.2,
    playCount: 35000,
    iframeUrl: 'https://html5.gamedistribution.com/5c3a89afb798412880763d1e664e10cf/?gd_sdk_referrer_url=' + baseUrl + '/games/tps-gun-war-shooting-3d',
    image: 'https://img.gamedistribution.com/5c3a89afb798412880763d1e664e10cf-512x512.jpg'
  },
  {
    slug: 'warzone-getaway-2020',
    title: 'Warzone Getaway 2020',
    shortDescription: 'Defend your jeep from waves of enemies with upgradable weapons.',
    description: 'Warzone Getaway 2020 puts you behind the wheel of a jeep under attack. Defend your vehicle from waves of enemies, upgrade guns and turrets, throw grenades, call in air support, and earn XP for special attacks in this action-packed shooter.',
    category: 'arcade',
    tags: ['shooter', 'action', 'war', 'jeep', 'survival', 'upgrades'],
    difficulty: 'hard',
    featured: false,
    rating: 4.1,
    playCount: 28000,
    iframeUrl: 'https://html5.gamedistribution.com/1dbb6c3f9f5c46f58972839e4ea37c7c/?gd_sdk_referrer_url=' + baseUrl + '/games/warzone-getaway-2020',
    image: 'https://img.gamedistribution.com/1dbb6c3f9f5c46f58972839e4ea37c7c-512x512.jpg'
  },
  {
    slug: 'soldiers-combat',
    title: 'Soldiers Combat',
    shortDescription: 'Action-packed combat through 8 levels with machine guns and bazookas.',
    description: 'Soldiers Combat is an action-packed game with 8 intense levels. Collect hidden keys and coins, unlock weapons including machine guns, bazookas, and heat guns. Defeat enemies as a real soldier in this classic combat experience.',
    category: 'arcade',
    tags: ['shooter', 'action', 'combat', 'soldier', 'war', 'platform'],
    difficulty: 'medium',
    featured: false,
    rating: 4.0,
    playCount: 20000,
    iframeUrl: 'https://html5.gamedistribution.com/d7b762d007d44c1c8c529d846fd20c10/?gd_sdk_referrer_url=' + baseUrl + '/games/soldiers-combat',
    image: 'https://img.gamedistribution.com/d7b762d007d44c1c8c529d846fd20c10-512x512.jpg'
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
