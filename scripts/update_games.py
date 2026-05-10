import json, re

with open('src/data/games.json', 'r', encoding='utf-8') as f:
    games = json.load(f)

# --- Copyright-safe title renames ---
rename_map = {
    "candy-crush-delight": {
        "slug": "candy-match-delight",
        "title": "Candy Match Delight"
    },
    "tetris-classic": {
        "slug": "block-stack",
        "title": "Block Stack"
    },
    "pac-man": {
        "slug": "maze-chase",
        "title": "Maze Chase"
    },
    "flappy-bird": {
        "slug": "tap-bird-fly",
        "title": "Tap Bird Fly"
    },
    "merge-dragons": {
        "slug": "dragon-merge-land",
        "title": "Dragon Merge Land"
    },
    "doodle-jump": {
        "slug": "bounce-up",
        "title": "Bounce Up"
    },
    "piano-tiles": {
        "slug": "music-tiles",
        "title": "Music Tiles"
    },
    "snake-io": {
        "slug": "snake-adventures",
        "title": "Snake Adventures"
    },
    "word-search-pro": {
        "slug": "word-search-quest",
        "title": "Word Search Quest"
    }
}

# --- New compelling descriptions (2-3 sentences, benefit-driven) ---
new_descs = {
    "candy-crush-delight": "Craving a sweet puzzle fix? Swap colorful candies in this dazzling match-3 adventure packed with hundreds of levels, explosive power-ups, and mouth-watering visuals that make every match feel like a treat.",
    "jewel-quest": "Embark on a glittering treasure hunt through ancient temples! Match sparkling gems to unlock powerful artifacts and uncover hidden riches in this beautifully crafted match-3 journey.",
    "fruit-fusion": "Mix, match, and blend your way to juicy wins! Combine fresh fruits into smoothies for explosive chain reactions in this vibrant and utterly relaxing puzzle game that's pure sunshine.",
    "bubble-shooter-pop": "Aim, shoot, and pop your way to glory! This classic bubble shooter delivers endless fun with hundreds of colorful levels, tricky angles, and satisfying pops that keep you coming back.",
    "sudoku-classic": "Sharpen your mind anywhere, anytime! With clean design and five difficulty levels from beginner to expert, this classic number puzzle is perfect for quick brain training or deep focus sessions.",
    "2048-challenge": "One swipe leads to another in this addictive number-merging sensation! Combine tiles strategically to reach the legendary 2048 — easy to learn, impossible to put down.",
    "dragon-merge-land": "Welcome to a magical realm where every merge brings wonders to life! Combine dragons, eggs, and mystical treasures to build your enchanted kingdom in this spellbinding adventure.",
    "block-puzzle": "No timer, no pressure, just pure puzzle bliss! Drag colorful blocks onto the grid, clear lines, and lose yourself in this endlessly satisfying brain teaser.",
    "word-search-quest": "Hunt for hidden words across hundreds of beautifully themed grids! Expand your vocabulary while exploring categories from animals to space — each puzzle is a new discovery.",
    "solitaire-classic": "The world's favorite card game, perfected for your screen! Build sequences, flip cards, and enjoy that satisfying rush when everything falls into place. Timeless relaxation at your fingertips.",
    "spider-solitaire": "Ready for the ultimate solitaire challenge? Master the art of building complete suit sequences across two suits in this deeply strategic card game that rewards patience and planning.",
    "crossword-light": "Daily brain workout with a gentle touch! Solve clever clues across adjustable difficulty levels, with helpful hints when you need them and satisfying a-ha moments throughout.",
    "block-stack": "The legendary block-stacking phenomenon reimagined! Arrange falling shapes, clear lines, and chase that perfect high score in this timeless arcade classic that never gets old.",
    "snake-adventures": "Eat, grow, and survive in this modern twist on a retro icon! Navigate through vibrant arenas, compete for the longest streak, and avoid crashing into rivals.",
    "tap-bird-fly": "How far can you fly? Master the perfect tap rhythm to guide your bird through challenging gaps in this famously addictive arcade game that tests your focus and reflexes.",
    "maze-chase": "Dodge, chase, and munch your way through twisting mazes! Gobble up dots, outsmart tricky foes, and feel the retro arcade magic come alive in your browser.",
    "farm-merge-valley": "Build the cutest farm in the valley, one merge at a time! Combine adorable animals and crops, unlock rare breeds, and create a peaceful countryside paradise.",
    "number-match": "Find your zen with this beautifully minimal number puzzle! Clear the board by matching identical numbers or pairs that sum to 10 — simple rules, endlessly engaging.",
    "mahjong-connect": "Ancient Chinese tile game meets modern puzzle design! Match pairs of beautifully crafted tiles connected by a clear path in this timeless test of observation and memory.",
    "tripeaks-solitaire": "Race against the card stack in this thrilling solitaire twist! Clear three peaks of cards by choosing higher or lower — fast, addictive, and immensely satisfying.",
    "memory-cards": "Flip, remember, and match your way to better memory! Beautiful artwork, multiple grid sizes, and a calming pace make this perfect for kids, families, and brain training enthusiasts.",
    "coloring-book": "Unleash your inner artist without the mess! Choose from dozens of gorgeous illustrations and fill them with vibrant colors in this stress-melting creative escape.",
    "jigsaw-puzzle": "Piece together stunning landscapes and adorable animals! Choose your piece count from 12 to 100 for the perfect challenge level, then relax into the satisfying click of each connection.",
    "bounce-up": "Bounce higher and higher in this endlessly charming vertical adventure! Tilt and tap your way up a world of whimsical platforms, avoiding obstacles and chasing new heights.",
    "word-scramble": "Unscramble, discover, and conquer word challenges at lightning speed! Race against the clock to rearrange jumbled letters into hidden words across dozens of fun categories.",
    "music-tiles": "Feel the rhythm and test your reflexes! Tap the scrolling black tiles in time with beautiful melodies — but miss one and it's game over. How perfectly can you play?",
    "spot-the-difference": "Train your eye for detail with gorgeous side-by-side scenes! Find every subtle difference across beautifully illustrated worlds in this classic observation game that rewards patience.",
    "tic-tac-toe": "The timeless strategy game, polished to perfection! Challenge a smart AI or a friend in quick matches that take seconds to learn but offer endless tactical depth.",
    "connect-four": "Drop, connect, win! This classic vertical strategy game challenges you to outthink your opponent and line up four discs before they do. Pure competitive fun.",
    "hidden-objects-mystery": "Step into the detective's shoes and uncover clues hidden in richly detailed scenes! Explore mysterious mansions, solve engaging mysteries, and feel like a real investigator.",
    "ice-cream-scoop": "Build the sweetest creations in town! Serve hungry customers, stack towering ice cream cones, and decorate sundae masterpieces in this delightful time-management treat.",
    "balloon-pop": "Pop your stress away! Burst colorful balloons in this satisfyingly simple stress-relief game that lets you tune out the world and focus on the pure joy of popping.",
    "plant-merge-garden": "Grow your dream garden, one merge at a time! Cultivate rare flowers, design stunning landscapes, and discover the peaceful joy of nurturing your own digital greenhouse.",
    "chess-puzzle": "Think like a grandmaster with hundreds of tactical chess challenges! Each puzzle sharpens your calculation skills and pattern recognition — perfect for players at any level.",
    "word-connect": "Swipe through letters to uncover hidden words in this addictive word puzzle! Thousands of levels, brain-teasing challenges, and vocabulary-building fun rolled into one.",
    "stack-jump": "How high can you stack? Perfect your timing in this minimalist arcade game where each successful landing brings a new level of satisfaction. Simple, clean, impossible to stop.",
    "solitaire-freecell": "Almost every game is winnable — can you solve it? FreeCell rewards strategic thinking with four free cells that open up endless possibilities in this beloved solitaire variation.",
    "tile-trio": "A soothing tile-matching puzzle that calms the mind! Find three matching tiles, clear the board, and enjoy the gentle challenge of this beautifully designed relaxation game.",
    "sea-hunt": "Dive into crystal-clear waters and discover a hidden ocean world! Search for colorful sea creatures, ancient treasures, and vibrant coral reefs in this tranquil underwater adventure.",
    "diamond-mine": "Dig deep for sparkling treasures in this addictive mining adventure! Navigate underground tunnels, dodge obstacles, and strike it rich with every diamond you unearth.",
    "coffee-shop": "Live the barista dream! Brew, serve, and decorate your way to the perfect coffee shop in this warm-hearted time-management game that smells like success.",
    "gem-crush": "Dazzling gem-matching action awaits! Crush brilliant jewels, trigger spectacular chain reactions, and uncover hidden treasures in this sparkling puzzle adventure.",
    "word-hex": "A fresh twist on word puzzles that rewrites the rules! Connect letters in a honeycomb grid to spell words — the hexagonal challenge makes every find incredibly satisfying.",
    "farm-fresh-match": "Country charm meets match-3 magic! Swap fresh produce and adorable farm animals in this wholesome puzzle that brings the peaceful joy of farm life to your screen.",
    "merge-cakes": "The sweetest merge game you'll ever play! Combine cupcakes and pastries into magnificent desserts, unlock mouth-watering recipes, and build the ultimate bakery.",
    "pyramid-solitaire": "Clear the ancient pyramid by pairing cards that add up to 13! This strategic solitaire variation demands sharp calculation and rewards careful planning.",
    "garden-hidden-objects": "Find serenity in stunning garden scenes filled with hidden treasures! Explore lush flower beds and tranquil ponds while searching for beautifully illustrated objects.",
    "tower-defense": "Your base needs a hero — build, upgrade, and defend! Place towers strategically, adapt to each enemy wave, and prove your tactical genius in this classic strategy game.",
    "photo-puzzle": "Reconstruct breathtaking photographs one tile at a time! Choose from stunning global landscapes and test your spatial reasoning across multiple grid sizes.",
    "kitchen-dash": "Feel the heat and taste the success! Run a bustling restaurant kitchen, master delicious recipes, and serve hungry crowds in this high-energy time-management challenge.",
    "dots-and-boxes": "The classic pencil game gets a digital makeover! Connect dots, claim boxes, and outsmart your opponent with clever traps in this timeless strategy game.",
    "monster-match": "Collect the cutest monsters in the universe! Match colorful creature tiles, unlock rare monsters, and explore a whimsical world bursting with personality.",
    "space-blocks": "Take your puzzle skills to the cosmos! Place blocks on a stellar grid, clear lines, and ride the satisfying wave of chain reactions in this space-themed block puzzler.",
    "color-sort": "Pour, sort, and relax in this incredibly satisfying color puzzle! Arrange vibrant liquids into perfect color bottles — a mesmerizing logic challenge that's pure zen.",
    "jungle-treasure": "Deep in the jungle, treasure awaits! Explore lush scenes, solve puzzles, and uncover ancient artifacts in this beautifully illustrated hidden-object adventure.",
    "match-master": "How fast can your eyes and brain work together? Flip cards, memorize positions, and match pairs at lightning speed in this addictive memory challenge.",
    "ocean-merge": "Dive deep into the ultimate underwater merge adventure! Combine sea creatures, build vibrant reefs, and discover rare marine life in this relaxing oceanic escape.",
    "candy-puzzle": "Sweet meets strategy in this delightful candy-filled challenge! Move candy pieces, clear the board, and satisfy your puzzle cravings with hundreds of sugary levels.",
    "circus-match": "Step right up to the greatest match-3 show on earth! Spectacular chain reactions, vibrant circus visuals, and endlessly entertaining gameplay under the big top.",
    "solitaire-golf": "Fast-paced solitaire that plays like a round of golf! Clear cards, beat your score, and enjoy quick rounds that fit perfectly into any coffee break.",
    "animals-match": "Adorable animals are waiting to be discovered! Flip cards, find matching pairs, and enjoy this charming memory game that delights kids and adults alike.",
    "gem-merge": "Start with pebbles, end with crown jewels! Merge precious stones into legendary gems in this beautifully sparkly game that scratches every collecting itch.",
    "word-cross": "Crossword puzzles reimagined! Drag words into the perfect positions, fill the grid, and feel the satisfaction of each puzzle solved in this fresh word game."
}

# Track old→new slug mapping for iframeUrl updates
slug_map = {}

for game in games:
    old_slug = game["slug"]

    # 1. Apply title rename
    if old_slug in rename_map:
        new_data = rename_map[old_slug]
        new_slug = new_data["slug"]
        slug_map[old_slug] = new_slug
        game["slug"] = new_slug
        game["title"] = new_data["title"]

    # 2. Update description
    if old_slug in new_descs:
        game["description"] = new_descs[old_slug]

    # 3. Update shortDescription (first ~80 chars of new description without period)
    if old_slug in new_descs:
        desc = new_descs[old_slug]
        # Take first sentence or first ~100 chars
        first_sentence = desc.split("!")[0] if "!" in desc else desc.split(".")[0]
        short = first_sentence[:100].strip()
        if not short.endswith("!") and not short.endswith("?"):
            short += "."
        game["shortDescription"] = short

    # 4. Update iframeUrl referrer
    current_slug = game["slug"]
    game["iframeUrl"] = re.sub(
        r'gd_sdk_referrer_url=https://chillarcade\.io/games/[\w-]+',
        f'gd_sdk_referrer_url=https://chillarcade.io/games/{current_slug}',
        game["iframeUrl"]
    )

with open('src/data/games.json', 'w', encoding='utf-8') as f:
    json.dump(games, f, indent=2, ensure_ascii=False)

print(f"OK Updated {len(games)} games")
print(f"Renamed {len(rename_map)} games:")
for old, new in rename_map.items():
    print(f"  {old} -> {new['slug']}")
print("Descriptions rewritten for all games")
