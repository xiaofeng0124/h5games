/**
 * Smart game description generator.
 * Reads games.json, generates detailed, varied descriptions for GamePix games,
 * preserves existing quality descriptions from other sources.
 */

const fs = require('fs');
const games = JSON.parse(fs.readFileSync('src/data/games.json', 'utf-8'));

const DIFFICULTY_WORDS = {
  easy: ['relaxing', 'casual', 'beginner-friendly', 'easy-to-learn', 'accessible', 'chill'],
  medium: ['engaging', 'balanced', 'moderately-challenging', 'rewarding', 'strategic', 'thoughtful'],
  hard: ['intense', 'challenging', 'hardcore', 'demanding', 'difficult', 'expert-level'],
};

const CATEGORY_WORDS = {
  'casual': [
    { opener: 'Wind down with', style: 'laid-back gameplay', desc: 'perfect for unwinding after a long day', audience: 'players of all ages' },
    { opener: 'Enjoy', style: 'easy-going fun', desc: 'great for short breaks between tasks', audience: 'casual players' },
    { opener: 'Dive into', style: 'relaxed entertainment', desc: 'ideal for relaxing sessions whenever you have a moment', audience: 'anyone looking to chill' },
  ],
  'puzzle': [
    { opener: 'Challenge your brain with', style: 'mind-bending puzzles', desc: 'keeps your mind sharp and engaged', audience: 'puzzle enthusiasts' },
    { opener: 'Solve', style: 'clever brain teasers', desc: 'tests your logical thinking in creative ways', audience: 'logic lovers' },
    { opener: 'Exercise your mind with', style: 'addictive puzzle mechanics', desc: 'offers satisfying challenges at every level', audience: 'puzzle fans' },
  ],
  'arcade': [
    { opener: 'Jump into the action with', style: 'fast-paced arcade action', desc: 'delivers non-stop excitement', audience: 'arcade lovers' },
    { opener: 'Test your reflexes with', style: 'classic arcade thrills', desc: 'the instant adrenaline rush will hook you', audience: 'retro gaming fans' },
    { opener: 'Experience', style: 'pulse-pounding arcade gameplay', desc: 'keeps you on the edge of your seat', audience: 'action seekers' },
  ],
  'multiplayer': [
    { opener: 'Compete with friends in', style: 'competitive multiplayer action', desc: 'challenge players from around the world', audience: 'competitive players' },
    { opener: 'Team up or face off in', style: 'multiplayer mayhem', desc: 'more fun when you play with others', audience: 'social gamers' },
    { opener: 'Join the competition in', style: 'real-time multiplayer battles', desc: 'test your skills against real opponents', audience: 'online competitors' },
  ],
  'action': [
    { opener: 'Gear up for', style: 'high-octane action', desc: 'every moment brings heart-pounding excitement', audience: 'action fans' },
    { opener: 'Blast through', style: 'intense action sequences', desc: 'the non-stop thrills keep you coming back', audience: 'adrenaline junkies' },
    { opener: 'Take command in', style: 'explosive action gameplay', desc: 'a pure adrenaline rush from start to finish', audience: 'action game veterans' },
  ],
  'racing': [
    { opener: 'Hit the gas in', style: 'high-speed racing', desc: 'feel the need for speed with every lap', audience: 'racing fans' },
    { opener: 'Race to victory in', style: 'thrilling track action', desc: 'heart-racing competition awaits', audience: 'speed demons' },
    { opener: 'Burn rubber with', style: 'fast and furious racing', desc: 'compete for the best time and bragging rights', audience: 'motorsport enthusiasts' },
  ],
  'adventure': [
    { opener: 'Embark on a journey with', style: 'captivating adventure', desc: 'explore new worlds and uncover secrets', audience: 'adventure seekers' },
    { opener: 'Explore the world of', style: 'immersive exploration', desc: 'discover hidden treasures around every corner', audience: 'exploration fans' },
    { opener: 'Set out on', style: 'epic quests and discovery', desc: 'every turn brings something new and exciting', audience: 'adventure lovers' },
  ],
  'merge': [
    { opener: 'Combine and create in', style: 'satisfying merge mechanics', desc: 'watching things grow and evolve is addictive', audience: 'merge game fans' },
    { opener: 'Merge your way through', style: 'creative combination challenges', desc: 'discover what amazing things you can create', audience: 'strategy thinkers' },
    { opener: 'Mix, match and master', style: 'engaging merge gameplay', desc: 'build something truly extraordinary', audience: 'creativity lovers' },
  ],
  'strategy': [
    { opener: 'Plan your next move in', style: 'deep strategic gameplay', desc: 'every decision you make matters', audience: 'strategy enthusiasts' },
    { opener: 'Command your forces in', style: 'tactical challenges', desc: 'outsmart your opponents with clever planning', audience: 'tactical thinkers' },
    { opener: 'Master the art of war in', style: 'resource management and tactics', desc: 'brain beats brawn in this thinking game', audience: 'strategic minds' },
  ],
  'idle': [
    { opener: 'Sit back and watch with', style: 'satisfying idle progression', desc: 'your empire keeps growing even while you are away', audience: 'idle game fans' },
    { opener: 'Build and grow with', style: 'relaxed idle mechanics', desc: 'watching your numbers go up never gets old', audience: 'casual progress lovers' },
    { opener: 'Kick back with', style: 'passive earning and upgrades', desc: 'low effort gameplay with surprisingly big rewards', audience: 'chill gamers' },
  ],
  'sports': [
    { opener: 'Step onto the field with', style: 'realistic sports action', desc: 'compete like a pro and claim victory', audience: 'sports fans' },
    { opener: 'Play ball in', style: 'exciting sports challenges', desc: 'bring the thrill of the game to life', audience: 'athletic competitors' },
    { opener: 'Score big in', style: 'competitive sports gameplay', desc: 'feel the stadium energy from your screen', audience: 'sports enthusiasts' },
  ],
  'fighting': [
    { opener: 'Step into the ring with', style: 'intense combat action', desc: 'every punch and kick brings you closer to victory', audience: 'fighting game fans' },
    { opener: 'Battle your way through', style: 'hard-hitting fights', desc: 'master every move and combo to dominate', audience: 'martial arts fans' },
    { opener: 'Prove your strength in', style: 'competitive fighting mechanics', desc: 'only the strongest fighter will come out on top', audience: 'brawl enthusiasts' },
  ],
  'word': [
    { opener: 'Expand your vocabulary with', style: 'engaging word puzzles', desc: 'learn new words while having fun', audience: 'word game lovers' },
    { opener: 'Play with words in', style: 'creative language challenges', desc: 'a treat for language lovers everywhere', audience: 'spelling enthusiasts' },
    { opener: 'Put your lexicon to the test in', style: 'brain-teasing wordplay', desc: 'can you find the perfect word in time?', audience: 'puzzle word fans' },
  ],
  'hidden-object': [
    { opener: 'Search every corner of', style: 'detailed hidden-object scenes', desc: 'find what is hiding before time runs out', audience: 'detective-minded players' },
    { opener: 'Sharpen your observation in', style: 'immersive seek-and-find', desc: 'every tiny detail could be the clue you need', audience: 'exploration enthusiasts' },
    { opener: 'Spot the clues in', style: 'meticulously crafted scenes', desc: 'can you find every hidden item?', audience: 'observant players' },
  ],
  'match-3': [
    { opener: 'Match and swap your way through', style: 'colorful match-3 action', desc: 'satisfying chain reactions clear the board', audience: 'match-3 enthusiasts' },
    { opener: 'Line up the gems in', style: 'addictive matching puzzles', desc: 'pop and clear your way to a high score', audience: 'puzzle game fans' },
    { opener: 'Solve colorful puzzles in', style: 'classic match-3 mechanics', desc: 'perfect for quick gaming sessions on the go', audience: 'casual puzzle lovers' },
  ],
  'card': [
    { opener: 'Shuffle up and play', style: 'classic card game action', desc: 'strategy meets luck in every hand', audience: 'card game fans' },
    { opener: 'Deal yourself in to', style: 'engaging card challenges', desc: 'outplay your opponents with clever moves', audience: 'tabletop enthusiasts' },
    { opener: 'Test your card skills in', style: 'strategic card gameplay', desc: 'every hand you are dealt brings new possibilities', audience: 'poker-faced players' },
  ],
  'board': [
    { opener: 'Roll the dice in', style: 'classic board game fun', desc: 'fun for the whole family, every session is different', audience: 'board game fans' },
    { opener: 'Take your turn in', style: 'strategic board game action', desc: 'think several moves ahead to claim victory', audience: 'tabletop strategists' },
    { opener: 'Play a classic round of', style: 'timeless board game mechanics', desc: 'gather around for fun that never gets old', audience: 'family game night fans' },
  ],
};

const TAG_ACTIONS = {
  'io': 'real-time multiplayer battles',
  'shooting': 'precision shooting mechanics',
  'jump': 'precision platform jumping',
  'driving': 'realistic driving physics',
  'simulation': 'immersive simulation elements',
  'building': 'creative construction and building',
  'survival': 'tense survival challenges',
  'defense': 'strategic defense planning',
  'physics': 'realistic physics simulations',
  'memory': 'memory-training gameplay',
  'math': 'math-based challenges',
  'educational': 'educational learning content',
  'cooking': 'creative cooking mechanics',
  'drawing': 'artistic drawing and creativity',
  'music': 'rhythm-based musical challenges',
  'dress-up': 'creative fashion and styling',
  'decorating': 'interior design and decorating',
  'farming': 'relaxing farming simulation',
  'city': 'city building and management',
  'block': 'block-stacking puzzle action',
  'bubble': 'bubble-shooting arcade fun',
  'endless': 'endless high-score chasing',
  'magic': 'magical spell-casting action',
  'zombie': 'zombie survival action',
  'space': 'interstellar space exploration',
  'animals': 'adorable animal interactions',
  'ocean': 'underwater exploration and fun',
  'fantasy': 'fantasy world adventures',
  'christmas': 'festive holiday-themed fun',
  'halloween': 'spooky Halloween fun',
  'snow': 'winter wonderland adventures',
  'summer': 'sunny summer fun activities',
  'bike': 'motorcycle stunt and race action',
  'football': 'gridiron football action',
  'basketball': 'basketball court action',
  'baseball': 'baseball diamond action',
  'tennis': 'tennis court rallies',
  'golf': 'precision golf swings',
  'snooker': 'snooker and billiards action',
  'boat': 'high-speed boat racing',
  'car': 'car driving and racing',
  'flying': 'aviation and flying action',
  'coloring': 'creative coloring book fun',
  'multiplayer': 'competitive multiplayer matches',
};

const INTRO_VARIANTS = [
  'Looking for a fun way to pass the time?',
  'Ready for some quick gaming fun?',
  'Need a break from the daily grind?',
  'In the mood for some browser gaming?',
  'Want to try something new and fun?',
  'Looking to kill a few minutes with a great game?',
  'Got some spare time for gaming?',
  'Feel like playing something awesome?',
  '', '', '',  // empty = skip intro sometimes
];

const OUTRO_VARIANTS = [
  'Play instantly in your browser — no downloads, no sign-ups, no hassle.',
  'Jump right in and start playing — it\'s completely free with zero setup.',
  'No downloads, no signups — just click and play directly in your browser.',
  'Free to play, no strings attached. Start gaming in seconds.',
  'Optimized for both desktop and mobile browsers. Ready when you are.',
  '100% free, playable on any device with a modern browser.',
];

function pick(arr, seed) {
  return arr[Math.abs(seed) % arr.length];
}

function seededRandom(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function generateDescription(game) {
  const cat = game.category || 'casual';
  const tags = game.tags || [];
  const difficulty = game.difficulty || 'medium';
  const title = game.title;

  const catVocab = CATEGORY_WORDS[cat] || CATEGORY_WORDS['casual'];
  const catEntry = catVocab[seededRandom(title + 'cat') % catVocab.length];
  const diffWords = DIFFICULTY_WORDS[difficulty] || DIFFICULTY_WORDS['medium'];
  const seed = seededRandom(title + cat + (tags[0] || ''));

  const relevantTags = tags.filter(t => TAG_ACTIONS[t]).slice(0, 2);
  const tagPhrase = relevantTags.length > 0
    ? relevantTags.map(t => TAG_ACTIONS[t]).join(' and ')
    : null;

  const intro = pick(INTRO_VARIANTS, seed);
  const introPart = intro ? intro + ' ' : '';

  const opener = catEntry.opener;
  const diffDesc = pick(diffWords, seed + 1);
  const style = tagPhrase || catEntry.style;
  const includeDiff = seed % 3 !== 0;

  let corePart;
  if (includeDiff && seed % 2 === 0) {
    corePart = ` This ${diffDesc} title delivers ${style} — ${catEntry.desc}`;
  } else if (includeDiff) {
    corePart = ` This ${diffDesc} ${cat} game features ${style}, and ${catEntry.desc}`;
  } else {
    corePart = ` Featuring ${style}, this game ${catEntry.desc}`;
  }

  const audiencePart = ` Designed for ${catEntry.audience}.`;
  const outro = pick(OUTRO_VARIANTS, seed + 3);

  return `${introPart}${opener} ${title}!${corePart}.${audiencePart} ${outro}`.trim();
}

// Check if a GamePix game has a template description that needs rewriting
function needsRewrite(desc) {
  if (!desc) return true;
  const trimmed = desc.trim().toLowerCase();
  // Template descriptions from GamePix: "Play XXX online for free..."
  // Or very short descriptions
  return trimmed.startsWith('play ') && (
    trimmed.includes('for free') || trimmed.includes('for free.') || trimmed.length < 50
  );
}

// Process all games
let updated = 0;
let skipped = 0;

const newGames = games.map(game => {
  const isGamepix = game.iframeUrl && game.iframeUrl.includes('play.gamepix.com');

  if (isGamepix && needsRewrite(game.description)) {
    const newDesc = generateDescription(game);
    const shortSeed = seededRandom(game.slug + 'short');
    const diffWords = DIFFICULTY_WORDS[game.difficulty || 'medium'];
    const cat = game.category || 'casual';
    const tags = game.tags || [];
    const shortPatterns = [
      `${pick(['Fun', 'Engaging', 'Addictive', 'Relaxing', 'Exciting'], shortSeed)} ${cat} gameplay for ${pick(['all ages.', 'everyone.', 'quick sessions.', 'endless fun.'], shortSeed + 1)}`,
      `Play this ${pick(diffWords, shortSeed)} ${cat} title ${pick(['right in your browser.', 'instantly online.', 'on any device.'], shortSeed + 2)}`,
      `${pick(['Discover', 'Try', 'Play', 'Enjoy'], shortSeed)} ${game.title} — ${pick(['fun', 'addictive', 'great', 'relaxing', 'cool'], shortSeed + 3)} ${cat} ${pick(['fun for all ages.', 'to play online.', 'for quick sessions.', 'right in your browser.'], shortSeed + 4)}`,
    ];
    const newShort = shortPatterns[seededRandom(game.slug) % shortPatterns.length];

    updated++;
    return { ...game, description: newDesc, shortDescription: newShort };
  }
  skipped++;
  return game;
});

// Write back
fs.writeFileSync('src/data/games.json', JSON.stringify(newGames, null, 2), 'utf-8');
console.log(`✅ Done! Updated: ${updated} GamePix games, Skipped: ${skipped} others.`);

// Preview samples
console.log('\n=== Sample generated descriptions ===\n');
const gps = newGames.filter(g => g.iframeUrl && g.iframeUrl.includes('play.gamepix.com'));
const sampleIndices = [0, 1, 42, 100, 500, 1000, 2000, 5000, 10000, gps.length - 1];
sampleIndices.forEach(idx => {
  if (idx < gps.length) {
    const g = gps[idx];
    console.log(`[${g.title}] (${g.category}, ${g.difficulty})`);
    console.log(`  ${g.description}`);
    console.log(`  Short: ${g.shortDescription}`);
    console.log('');
  }
});
