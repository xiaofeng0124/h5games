const fs = require('fs');
const path = require('path');
const base = 'C:/Users/XF012/h5games';
const g = require(path.join(base, 'src/data/games.json'));

const baseUrl = 'https://chillarcade.io';

const newGames = [
  {
    slug: 'solitaire-collection',
    title: 'Solitaire Collection',
    shortDescription: 'Klondike, Spider & FreeCell solitaire all in one game — 100% free.',
    description: 'Solitaire Collection brings together three classic solitaire games: Klondike, Spider, and FreeCell. 100% free with unlimited undos, hints, sound toggle, autoplay, and draw 1 or 3 cards. The ultimate solitaire experience for card game lovers.',
    category: 'card',
    tags: ['solitaire', 'card', 'klondike', 'spider', 'freecell', 'classic'],
    difficulty: 'easy',
    featured: false,
    rating: 4.5,
    playCount: 65000,
    iframeUrl: 'https://html5.gamedistribution.com/4d1a4fc412a84cd6a3b1cc79c79f8200/?gd_sdk_referrer_url=' + baseUrl + '/games/solitaire-collection',
    image: 'https://img.gamedistribution.com/4d1a4fc412a84cd6a3b1cc79c79f8200-512x512.jpg'
  },
  {
    slug: 'freecell-solitaire',
    title: 'Freecell Solitaire',
    shortDescription: 'Classic FreeCell solitaire with elegant graphics and strategic gameplay.',
    description: 'Classic FreeCell solitaire with elegant graphics and smooth gameplay. Use 8 columns and 4 free cells to organize all cards into foundation piles. Almost every FreeCell game is winnable — the challenge is finding the right strategy.',
    category: 'card',
    tags: ['solitaire', 'card', 'freecell', 'classic', 'strategy', 'puzzle'],
    difficulty: 'medium',
    featured: false,
    rating: 4.4,
    playCount: 38000,
    iframeUrl: 'https://html5.gamedistribution.com/befee110a7de492797cbfab705641c03/?gd_sdk_referrer_url=' + baseUrl + '/games/freecell-solitaire',
    image: 'https://img.gamedistribution.com/befee110a7de492797cbfab705641c03-512x512.jpg'
  },
  {
    slug: 'freecell-solitaire-2017',
    title: 'Freecell Solitaire 2017',
    shortDescription: 'A classic FreeCell version with clean design and smooth play.',
    description: 'Freecell Solitaire 2017 is a classic version of the beloved card game. Arrange all cards into foundation piles using free cells for temporary storage. With clean design and smooth gameplay, enjoy hours of strategic card fun.',
    category: 'card',
    tags: ['solitaire', 'card', 'freecell', 'classic', 'puzzle'],
    difficulty: 'medium',
    featured: false,
    rating: 4.3,
    playCount: 25000,
    iframeUrl: 'https://html5.gamedistribution.com/9ff7dcfb58974b72a0f4b3b0257594b7/?gd_sdk_referrer_url=' + baseUrl + '/games/freecell-solitaire-2017',
    image: 'https://img.gamedistribution.com/9ff7dcfb58974b72a0f4b3b0257594b7-512x512.jpg'
  },
  {
    slug: 'merge-fantasy',
    title: 'Merge Fantasy',
    shortDescription: 'Explore floating islands and merge resources with dragon companions.',
    description: 'Merge Fantasy takes you on a magical journey through floating islands. Extract resources like rocks, trees, gold ore, and crystals. Merge three or more identical elements to create powerful fusions, restore the land, and unlock new islands. Dragons accompany you on your adventure.',
    category: 'merge',
    tags: ['merge', 'fantasy', 'dragon', 'magic', 'island', 'adventure'],
    difficulty: 'easy',
    featured: false,
    rating: 4.3,
    playCount: 22000,
    iframeUrl: 'https://html5.gamedistribution.com/d582e19a79af488893562fb5df0bc20b/?gd_sdk_referrer_url=' + baseUrl + '/games/merge-fantasy',
    image: 'https://img.gamedistribution.com/d582e19a79af488893562fb5df0bc20b-512x512.jpg'
  },
  {
    slug: 'majestic-dragons-merge',
    title: 'Majestic Dragons Merge',
    shortDescription: 'Merge dragon eggs to hatch and discover powerful new dragons.',
    description: 'Majestic Dragons Merge is an idle merge game where you purchase chests with coins, drag dragon eggs together to hatch newborn dragons, and continue merging dragons of the same age to discover new, more powerful dragons. Mature dragons collect coins for you over time.',
    category: 'merge',
    tags: ['merge', 'dragon', 'fantasy', 'idle', 'eggs', 'collection'],
    difficulty: 'easy',
    featured: false,
    rating: 4.2,
    playCount: 19000,
    iframeUrl: 'https://html5.gamedistribution.com/056ac197d26f4980ab6b83ad68f16498/?gd_sdk_referrer_url=' + baseUrl + '/games/majestic-dragons-merge',
    image: 'https://img.gamedistribution.com/056ac197d26f4980ab6b83ad68f16498-512x512.jpg'
  },
  {
    slug: 'crocword-crossword',
    title: 'Crocword Crossword Puzzle',
    shortDescription: 'Help Professor Croc solve colorful crossword puzzles.',
    description: 'Crocword Crossword Puzzle Game is a delightful word puzzle where you help Professor of Words Science Ph.D. Croc solve colorful crosswords. Search words by swiping or clicking, combine letters, and build words in this fun spelling adventure.',
    category: 'word',
    tags: ['word', 'crossword', 'puzzle', 'vocabulary', 'spelling', 'educational'],
    difficulty: 'medium',
    featured: false,
    rating: 4.3,
    playCount: 16000,
    iframeUrl: 'https://html5.gamedistribution.com/3e314ff40f40472f9aefed5b046f6dcc/?gd_sdk_referrer_url=' + baseUrl + '/games/crocword-crossword',
    image: 'https://img.gamedistribution.com/3e314ff40f40472f9aefed5b046f6dcc-512x512.jpg'
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
