import json

# New games to add
NEW_GAMES = [
    # === Puzzle (6) ===
    {
        "slug": "color-rings-block-puzzle",
        "title": "Color Rings Block Puzzle",
        "shortDescription": "A fun addictive puzzle game that challenges your problem-solving skills.",
        "description": "A fun addictive puzzle game that challenges your problem-solving skills and reflexes! Fit colorful rings into the grid and clear lines in this endlessly satisfying brain teaser.",
        "category": "puzzle",
        "tags": ["puzzle", "blocks", "color", "casual", "relaxing"],
        "difficulty": "easy",
        "rating": 4.2,
        "playCount": 28000,
        "instructions": "Drag and drop the colored ring blocks onto the grid. Complete full lines to clear them. Plan ahead to fit all pieces. The game ends when no more pieces can be placed.",
        "guideTitle": "Color Rings Block Puzzle Tips",
        "guideContent": "1. Plan ahead for larger pieces. 2. Use corners efficiently. 3. Keep the center clear. 4. Save space for long blocks. 5. Focus on clearing multiple lines at once.",
        "iframeUrl": "https://html5.gamedistribution.com/35082481c2cd4939b524fbdfd19c3ec6/?gd_sdk_referrer_url=https://chillarcade.io/games/color-rings-block-puzzle",
        "image": "https://img.gamedistribution.com/35082481c2cd4939b524fbdfd19c3ec6-512x384.jpg"
    },
    {
        "slug": "water-sort-puzzle",
        "title": "Water Sort Puzzle",
        "shortDescription": "A super satisfying liquid sorting challenge that trains your logic.",
        "description": "A super satisfying liquid sorting challenge that trains your logic while keeping the experience fun and casual! Pour colored water into the right bottles and solve hundreds of relaxing puzzles.",
        "category": "puzzle",
        "tags": ["puzzle", "water", "sort", "color", "relaxing", "logic"],
        "difficulty": "easy",
        "rating": 4.4,
        "playCount": 45000,
        "instructions": "Tap on a bottle to select it, then tap on another bottle to pour the water. You can only pour water of the same color onto matching water, or into an empty bottle. Sort all colors to win.",
        "guideTitle": "Water Sort Puzzle Strategy Guide",
        "guideContent": "1. Empty at least one bottle early. 2. Don't pour matching colors onto different colors. 3. Use empty bottles as temporary storage. 4. Plan your moves ahead. 5. Focus on one color at a time.",
        "iframeUrl": "https://html5.gamedistribution.com/bba6ae893ed4493eb3553c93637db902/?gd_sdk_referrer_url=https://chillarcade.io/games/water-sort-puzzle",
        "image": "https://img.gamedistribution.com/bba6ae893ed4493eb3553c93637db902-512x384.jpg"
    },
    {
        "slug": "woodoku-block-puzzle",
        "title": "Woodoku Block Puzzle",
        "shortDescription": "A super fun casual puzzle game for relaxing in your free time.",
        "description": "A super fun casual puzzle game for relaxing in your free time! Place wooden blocks on the grid and complete rows and columns in this beautifully crafted nature-themed puzzle with 4 different modes.",
        "category": "puzzle",
        "tags": ["puzzle", "blocks", "wooden", "casual", "relaxing"],
        "difficulty": "easy",
        "rating": 4.3,
        "playCount": 36000,
        "instructions": "Drag wooden block shapes onto the 9x9 grid. Complete full rows or columns to clear them. The game ends when no more blocks can be placed. Try different modes for variety.",
        "guideTitle": "Woodoku Block Puzzle Tips",
        "guideContent": "1. Start by placing large blocks first. 2. Save small pieces for filling gaps. 3. Keep your board as flat as possible. 4. Plan multiple moves ahead. 5. Use the preview to strategize.",
        "iframeUrl": "https://html5.gamedistribution.com/8f2c990f152140afad73cef0059c9405/?gd_sdk_referrer_url=https://chillarcade.io/games/woodoku-block-puzzle",
        "image": "https://img.gamedistribution.com/8f2c990f152140afad73cef0059c9405-512x384.jpg"
    },
    {
        "slug": "alchemy-puzzle",
        "title": "Alchemy Puzzle",
        "shortDescription": "Combine elements to discover new creations in this magical puzzle.",
        "description": "Combine elements to discover new creations in this magical puzzle! Mix earth, fire, water, and air to unlock hundreds of new items. Each discovery brings you closer to becoming a master alchemist.",
        "category": "puzzle",
        "tags": ["puzzle", "alchemy", "elements", "creative", "discovery"],
        "difficulty": "medium",
        "rating": 4.1,
        "playCount": 32000,
        "instructions": "Drag elements from the sidebar onto the workspace. Combine two elements by dropping one onto another. Discover new elements and compounds. Use hints when you get stuck.",
        "guideTitle": "Alchemy Puzzle Complete Guide",
        "guideContent": "1. Start with the four basic elements. 2. Water + Fire = Steam is often the first discovery. 3. Experiment freely - there's no penalty. 4. Think about real-world chemistry. 5. Use hints for rare combinations.",
        "iframeUrl": "https://html5.gamedistribution.com/098ccbbe6c7f4d28868b6066b000477a/?gd_sdk_referrer_url=https://chillarcade.io/games/alchemy-puzzle",
        "image": "https://img.gamedistribution.com/098ccbbe6c7f4d28868b6066b000477a-512x384.jpg"
    },
    {
        "slug": "hexa-go",
        "title": "Hexa GO!",
        "shortDescription": "A fresh hexagonal take on the classic block puzzle formula.",
        "description": "A fresh hexagonal take on the classic block puzzle formula! Fit hexagonal pieces onto the board, clear lines, and enjoy the satisfying click of each perfectly placed shape in this addictive puzzle.",
        "category": "puzzle",
        "tags": ["puzzle", "hex", "blocks", "casual", "relaxing"],
        "difficulty": "medium",
        "rating": 4.0,
        "playCount": 19000,
        "instructions": "Drag hexagonal pieces onto the honeycomb grid. Complete highlighted lines to clear them. Plan your placements carefully. Use the rotation button to find the perfect fit.",
        "guideTitle": "Hexa GO! Strategy Tips",
        "guideContent": "1. Start from the edges and work inward. 2. Keep the center of the board open. 3. Rotate pieces to find the best fit. 4. Plan 2-3 moves ahead. 5. Small pieces are great for filling gaps.",
        "iframeUrl": "https://html5.gamedistribution.com/2c78611ed1104149a04c99a4f9f017b6/?gd_sdk_referrer_url=https://chillarcade.io/games/hexa-go",
        "image": "https://img.gamedistribution.com/2c78611ed1104149a04c99a4f9f017b6-512x384.jpg"
    },
    {
        "slug": "isometric-escape",
        "title": "Isometric Escape",
        "shortDescription": "Navigate beautiful isometric worlds and solve tricky puzzles.",
        "description": "Navigate beautiful isometric worlds and solve tricky puzzles! Move your character through stunning 3D-like environments, avoid obstacles, and find the exit in this charming brain teaser.",
        "category": "puzzle",
        "tags": ["puzzle", "isometric", "3d", "strategy", "logic"],
        "difficulty": "medium",
        "rating": 4.1,
        "playCount": 22000,
        "instructions": "Use arrow keys or swipe to move your character across the isometric grid. Navigate around obstacles. Collect items to unlock paths. Reach the exit to complete each level.",
        "guideTitle": "Isometric Escape Walkthrough Tips",
        "guideContent": "1. Survey the whole level before moving. 2. Collect all items before heading to the exit. 3. Watch for moving obstacles. 4. Use the environment to your advantage. 5. Practice timing for harder levels.",
        "iframeUrl": "https://html5.gamedistribution.com/ce9aeef008334cdba8f440585bf23e16/?gd_sdk_referrer_url=https://chillarcade.io/games/isometric-escape",
        "image": "https://img.gamedistribution.com/ce9aeef008334cdba8f440585bf23e16-512x384.jpg"
    },

    # === Merge (4) ===
    {
        "slug": "crazy-2248-link",
        "title": "Crazy 2248 Link",
        "shortDescription": "A matching puzzle game where you link numbers to reach 2248!",
        "description": "A matching puzzle game where you link numbers to reach 2248! Connect matching number blocks, merge them into bigger numbers, and strategize your way to the ultimate score.",
        "category": "merge",
        "tags": ["merge", "numbers", "2048", "puzzle", "addictive"],
        "difficulty": "easy",
        "rating": 4.0,
        "playCount": 15000,
        "instructions": "Tap on number blocks to select them. Connect blocks with the same number to merge them. The merged result is the sum. Keep merging to reach 2248!",
        "guideTitle": "Crazy 2248 Link Strategy",
        "guideContent": "1. Keep your highest number in one corner. 2. Build chains along one row. 3. Don't fill the board randomly. 4. Plan merges ahead. 5. Use the whole board efficiently.",
        "iframeUrl": "https://html5.gamedistribution.com/28c1437786404660b9482216c7be11b9/?gd_sdk_referrer_url=https://chillarcade.io/games/crazy-2248-link",
        "image": "https://img.gamedistribution.com/28c1437786404660b9482216c7be11b9-512x384.jpg"
    },
    {
        "slug": "block-fusion-2048",
        "title": "2048 Block Fusion",
        "shortDescription": "Fuse blocks and reach new heights in this addictive number puzzle.",
        "description": "Fuse blocks and reach new heights in this addictive number puzzle! Merge identical number blocks to create bigger numbers. How high can you go before the board fills up?",
        "category": "merge",
        "tags": ["merge", "2048", "numbers", "puzzle", "blocks"],
        "difficulty": "easy",
        "rating": 4.1,
        "playCount": 25000,
        "instructions": "Swipe or use arrow keys to move all blocks. When two blocks with the same number touch, they merge into one. Keep merging to reach 2048!",
        "guideTitle": "2048 Block Fusion Tips",
        "guideContent": "1. Keep your highest value block in a corner. 2. Never move blocks away from your corner. 3. Build chains of descending numbers. 4. Focus on building one chain at a time. 5. Stay patient and plan ahead.",
        "iframeUrl": "https://html5.gamedistribution.com/64f303f9d8fa4d34ae962b82d4f78af3/?gd_sdk_referrer_url=https://chillarcade.io/games/block-fusion-2048",
        "image": "https://img.gamedistribution.com/64f303f9d8fa4d34ae962b82d4f78af3-512x384.jpg"
    },
    {
        "slug": "bubble-merge-2048",
        "title": "Bubble Merge 2048",
        "shortDescription": "Merge colorful bubbles and reach the ultimate 2048!",
        "description": "Merge colorful bubbles and reach the ultimate 2048! Pop and merge matching bubble numbers in this satisfying puzzle that combines the best of bubble games and number merging.",
        "category": "merge",
        "tags": ["merge", "bubble", "2048", "numbers", "casual"],
        "difficulty": "easy",
        "rating": 4.0,
        "playCount": 18000,
        "instructions": "Click on adjacent bubbles with the same number to merge them. Each merge creates a bubble with a higher number. Clear the board strategically. Reach 2048 for a bonus!",
        "guideTitle": "Bubble Merge 2048 Guide",
        "guideContent": "1. Focus on merging small bubbles first. 2. Clear the center for more space. 3. Create chain merges when possible. 4. Plan your merges ahead. 5. Use the whole board evenly.",
        "iframeUrl": "https://html5.gamedistribution.com/596b166bd81f4f57986ccfb3fae6cb15/?gd_sdk_referrer_url=https://chillarcade.io/games/bubble-merge-2048",
        "image": "https://img.gamedistribution.com/596b166bd81f4f57986ccfb3fae6cb15-512x384.jpg"
    },
    {
        "slug": "cozy-kitchen-merge",
        "title": "Cozy Kitchen Merge",
        "shortDescription": "Merge ingredients and dishes to build your dream kitchen!",
        "description": "Merge ingredients and dishes to build your dream kitchen! Combine identical foods to create new cuisine, fulfill customer orders, earn coins, and upgrade your cozy kitchen in this heartwarming merge game.",
        "category": "merge",
        "tags": ["merge", "kitchen", "cooking", "casual", "relaxing"],
        "difficulty": "easy",
        "rating": 4.3,
        "playCount": 27000,
        "instructions": "Drag matching food items together to merge them into better dishes. Fulfill customer orders to earn coins. Upgrade your kitchen equipment. Unlock new recipes as you progress.",
        "guideTitle": "Cozy Kitchen Merge Guide",
        "guideContent": "1. Merge 5 items when possible for bonus items. 2. Focus on completing orders for coins. 3. Upgrade kitchen equipment early. 4. Keep your kitchen organized. 5. Save premium ingredients for events.",
        "iframeUrl": "https://html5.gamedistribution.com/a82b5b9d46604486b03d45e1363d72ea/?gd_sdk_referrer_url=https://chillarcade.io/games/cozy-kitchen-merge",
        "image": "https://img.gamedistribution.com/a82b5b9d46604486b03d45e1363d72ea-512x384.jpg"
    },

    # === Casual (4) ===
    {
        "slug": "beach-club",
        "title": "Beach Club",
        "shortDescription": "Run your own tropical beach club and keep guests happy!",
        "description": "Run your own tropical beach club and keep guests happy! Serve drinks, set up umbrellas, and manage your seaside paradise in this fun time-management game with sunny vibes.",
        "category": "casual",
        "tags": ["casual", "beach", "time-management", "fun", "relaxing"],
        "difficulty": "easy",
        "rating": 4.2,
        "playCount": 35000,
        "instructions": "Click on guests to take their orders. Deliver the right items quickly. Keep the beach clean and organized. Upgrade your facilities to serve more guests. Earn tips for fast service.",
        "guideTitle": "Beach Club Management Tips",
        "guideContent": "1. Prioritize tasks by guest patience. 2. Upgrade your service counter first. 3. Keep supplies stocked. 4. Serve efficiently, multitask when possible. 5. Expand your beach gradually.",
        "iframeUrl": "https://html5.gamedistribution.com/5e400f95d3fc4ee9b2538fefcf864e67/?gd_sdk_referrer_url=https://chillarcade.io/games/beach-club",
        "image": "https://img.gamedistribution.com/5e400f95d3fc4ee9b2538fefcf864e67-512x384.jpg"
    },
    {
        "slug": "bubble-plopper",
        "title": "Bubble Plopper",
        "shortDescription": "Pop, splash, and relax in this satisfying bubble-popping game.",
        "description": "Pop, splash, and relax in this satisfying bubble-popping game! Burst colorful bubbles, create chain reactions, and feel the stress melt away with every satisfying pop.",
        "category": "casual",
        "tags": ["casual", "bubble", "pop", "relaxing", "stress-relief"],
        "difficulty": "easy",
        "rating": 4.0,
        "playCount": 22000,
        "instructions": "Click on groups of 2 or more bubbles of the same color to pop them. Pop larger groups for bonus points. Clear all bubbles to complete the level. Watch out for special bubbles!",
        "guideTitle": "Bubble Plopper Tips",
        "guideContent": "1. Target the largest groups first. 2. Look for chain reaction opportunities. 3. Clear the bottom bubbles first. 4. Save special bubble powers for tough spots. 5. Play without pressure - it's meant to relax you.",
        "iframeUrl": "https://html5.gamedistribution.com/1b3229bbbf6d4c519e216e8228b5d0a8/?gd_sdk_referrer_url=https://chillarcade.io/games/bubble-plopper",
        "image": "https://img.gamedistribution.com/1b3229bbbf6d4c519e216e8228b5d0a8-512x384.jpg"
    },
    {
        "slug": "dalgona-game",
        "title": "Dalgona Game",
        "shortDescription": "Test your steady hand in this sweet dalgona candy challenge.",
        "description": "Test your steady hand in this sweet dalgona candy challenge! Carefully trace shapes to extract them from honeycomb candy without breaking them. A tense but satisfying precision game.",
        "category": "casual",
        "tags": ["casual", "dalgona", "precision", "challenge", "fun"],
        "difficulty": "medium",
        "rating": 4.1,
        "playCount": 38000,
        "instructions": "Use your mouse or finger to trace along the outline of the shape. Be careful not to go outside the lines. If you break the shape, you lose! Take your time and stay steady.",
        "guideTitle": "Dalgona Game Winning Tips",
        "guideContent": "1. Take your time - speed causes mistakes. 2. Start from the edges. 3. Use short, controlled strokes. 4. Focus on corners and tight curves. 5. Stay calm and breathe steadily.",
        "iframeUrl": "https://html5.gamedistribution.com/57e902262bb44868ac967456484ae4bb/?gd_sdk_referrer_url=https://chillarcade.io/games/dalgona-game",
        "image": "https://img.gamedistribution.com/57e902262bb44868ac967456484ae4bb-512x384.jpg"
    },
    {
        "slug": "car-care-dudu",
        "title": "Car Care Repair",
        "shortDescription": "Wash, fix, and customize cars in this fun mechanic game.",
        "description": "Wash, fix, and customize cars in this fun mechanic game! Use tools to repair damaged vehicles, give them a sparkling wash, and make every customer happy with your garage service.",
        "category": "casual",
        "tags": ["casual", "cars", "kids", "mechanic", "fun"],
        "difficulty": "easy",
        "rating": 3.9,
        "playCount": 12000,
        "instructions": "Follow the instructions to clean and repair each car. Use the right tools for each job. Wash away dirt, fix dents, and apply fresh paint. Complete all tasks to satisfy customers.",
        "guideTitle": "Car Care Repair Tips",
        "guideContent": "1. Follow the repair order carefully. 2. Use the correct tool for each task. 3. Don't skip steps - do them in order. 4. Be thorough with cleaning. 5. Watch the customer satisfaction meter.",
        "iframeUrl": "https://html5.gamedistribution.com/5c16552163804e5fb7733b0790377833/?gd_sdk_referrer_url=https://chillarcade.io/games/car-care-dudu",
        "image": "https://img.gamedistribution.com/5c16552163804e5fb7733b0790377833-512x384.jpg"
    },

    # === Word (2) ===
    {
        "slug": "word-rush",
        "title": "Word Rush",
        "shortDescription": "Combine solitaire card mechanics with word puzzle excitement!",
        "description": "Combine solitaire card mechanics with word puzzle excitement! Clear lettered cards by forming words, draw from the deck to create high-scoring combinations, and challenge your vocabulary in this unique hybrid game.",
        "category": "word",
        "tags": ["word", "cards", "vocabulary", "puzzle", "challenge"],
        "difficulty": "medium",
        "rating": 4.0,
        "playCount": 14000,
        "instructions": "Look at the letter cards on the table. Click letters to form valid words. Longer words score more points. Draw new cards from the deck when stuck. Clear all cards to win the round.",
        "guideTitle": "Word Rush Strategy Guide",
        "guideContent": "1. Start with short words to clear space. 2. Look for common prefixes and suffixes. 3. Use high-value letters strategically. 4. Save the deck draw for when you're truly stuck. 5. Practice builds vocabulary over time.",
        "iframeUrl": "https://html5.gamedistribution.com/5e44fd0e53ee4513b39f179b9e1c6576/?gd_sdk_referrer_url=https://chillarcade.io/games/word-rush",
        "image": "https://img.gamedistribution.com/5e44fd0e53ee4513b39f179b9e1c6576-512x384.jpg"
    },
    {
        "slug": "word-seasons",
        "title": "Word Seasons",
        "shortDescription": "Explore beautiful seasons while solving word puzzles!",
        "description": "Explore beautiful seasons while solving word puzzles! Find hidden words in gorgeous seasonal scenes, from spring flowers to winter snow. Each season brings new words and relaxing vibes.",
        "category": "word",
        "tags": ["word", "seasons", "vocabulary", "relaxing", "puzzle"],
        "difficulty": "easy",
        "rating": 4.1,
        "playCount": 20000,
        "instructions": "Find the listed words hidden in the letter grid. Words can be horizontal, vertical, or diagonal. Tap and drag to select letters. Complete all words to unlock the next season.",
        "guideTitle": "Word Seasons Tips",
        "guideContent": "1. Scan for the first letter of each word. 2. Look for unusual letters first. 3. Read the word list before searching. 4. Try scanning in different directions. 5. Focus on one word at a time.",
        "iframeUrl": "https://html5.gamedistribution.com/a8b96cd1ff1e4ce7ad23864aaf27f219/?gd_sdk_referrer_url=https://chillarcade.io/games/word-seasons",
        "image": "https://img.gamedistribution.com/a8b96cd1ff1e4ce7ad23864aaf27f219-512x384.jpg"
    },

    # === Match-3 (1) ===
    {
        "slug": "animal-bus-traffic-jam",
        "title": "Animal Bus Traffic Jam",
        "shortDescription": "Sort adorable animals onto the right buses in this fun match-3 puzzle!",
        "description": "Sort adorable animals onto the right buses in this fun match-3 puzzle! Match animals of the same kind to load them onto buses, clear the traffic jam, and send everyone on their merry way.",
        "category": "match-3",
        "tags": ["match-3", "animals", "sort", "casual", "fun", "kids"],
        "difficulty": "easy",
        "rating": 4.2,
        "playCount": 23000,
        "instructions": "Swap adjacent animals to match 3 or more of the same kind. Match animals to load them onto the bus. Clear the traffic jam to complete each level. Use power-ups for tough spots.",
        "guideTitle": "Animal Bus Traffic Jam Tips",
        "guideContent": "1. Focus on matching animals near the bottom. 2. Create power-ups for big matches. 3. Watch for falling animals after matches. 4. Prioritize level goals. 5. Keep the board organized.",
        "iframeUrl": "https://html5.gamedistribution.com/a2b0f885254f4c69a1958cfc5f06c833/?gd_sdk_referrer_url=https://chillarcade.io/games/animal-bus-traffic-jam",
        "image": "https://img.gamedistribution.com/a2b0f885254f4c69a1958cfc5f06c833-512x384.jpg"
    },

    # === Hidden Object (2) ===
    {
        "slug": "lost-things-hidden-objects",
        "title": "Lost Things - Hidden Objects",
        "shortDescription": "A relaxing hidden object game with no time pressure.",
        "description": "A relaxing hidden object game with no time pressure! Explore large colorful maps filled with hundreds of hidden items. Find all lost objects and unlock new areas in this calm and meditative seek-and-find adventure.",
        "category": "hidden-object",
        "tags": ["hidden-object", "search", "relaxing", "casual", "calm"],
        "difficulty": "easy",
        "rating": 4.1,
        "playCount": 16000,
        "instructions": "Search the scene for the listed hidden objects. Click on each object when you find it. New areas open as you find enough items. Take your time - there's no timer!",
        "guideTitle": "Lost Things Hidden Objects Guide",
        "guideContent": "1. Scan the scene systematically. 2. Look for shapes and colors matching the list. 3. Check behind larger objects. 4. Take breaks for fresh eyes. 5. Enjoy the artwork - it's part of the experience.",
        "iframeUrl": "https://html5.gamedistribution.com/e2bc621dcad54cfa91e86c241167a0d2/?gd_sdk_referrer_url=https://chillarcade.io/games/lost-things-hidden-objects",
        "image": "https://img.gamedistribution.com/e2bc621dcad54cfa91e86c241167a0d2-512x384.jpg"
    },
    {
        "slug": "hidden-objects-dreamy-realm",
        "title": "Hidden Objects Dreamy Realm",
        "shortDescription": "Explore dreamlike worlds and find hidden treasures across 16 levels.",
        "description": "Explore dreamlike worlds and find hidden treasures across 16 magical levels! Each dream realm is beautifully illustrated with hidden objects waiting to be discovered. Zoom in for details and use hints when needed.",
        "category": "hidden-object",
        "tags": ["hidden-object", "dream", "fantasy", "search", "adventure"],
        "difficulty": "medium",
        "rating": 3.9,
        "playCount": 11000,
        "instructions": "Find all objects listed on the side of the screen. Click on each hidden item when you spot it. Use the zoom feature for detailed areas. Use hints when you're truly stuck.",
        "guideTitle": "Dreamy Realm Hidden Object Tips",
        "guideContent": "1. Use zoom to check detailed areas. 2. Scan left to right systematically. 3. Look for colors that match the item list. 4. Use hints early to understand the hiding style. 5. Play in a well-lit room.",
        "iframeUrl": "https://html5.gamedistribution.com/1f566ea5b93741dfa6c6c599ce29840b/?gd_sdk_referrer_url=https://chillarcade.io/games/hidden-objects-dreamy-realm",
        "image": "https://img.gamedistribution.com/1f566ea5b93741dfa6c6c599ce29840b-512x384.jpg"
    },

    # === Card/Board (2) ===
    {
        "slug": "english-checkers",
        "title": "English Checkers",
        "shortDescription": "The classic board game of strategy and skill.",
        "description": "The classic board game of strategy and skill! Challenge a smart AI opponent in English Checkers (Draughts). Jump your way to victory, crown your kings, and master this timeless strategy game.",
        "category": "card",
        "tags": ["board", "checkers", "strategy", "classic", "multiplayer"],
        "difficulty": "medium",
        "rating": 4.0,
        "playCount": 18000,
        "instructions": "Click on a piece to select it, then click on a valid square to move. Pieces move diagonally forward. Jump over opponent pieces to capture them. Reach the opposite end to crown your piece as a King.",
        "guideTitle": "English Checkers Strategy Guide",
        "guideContent": "1. Control the center of the board. 2. Build defensive formations. 3. Avoid exposing your back row. 4. Trade pieces when advantageous. 5. Advance multiple pieces together for support.",
        "iframeUrl": "https://html5.gamedistribution.com/1dec1cea731d4337a548b7c8eb8b5ddb/?gd_sdk_referrer_url=https://chillarcade.io/games/english-checkers",
        "image": "https://img.gamedistribution.com/1dec1cea731d4337a548b7c8eb8b5ddb-512x384.jpg"
    },
]

# === Load existing games ===
with open('src/data/games.json', 'r', encoding='utf-8') as f:
    games = json.load(f)

# Get existing slugs to avoid duplicates
existing_slugs = {g['slug'] for g in games}
print(f"Existing games: {len(games)}")

# Filter out duplicates
to_add = [g for g in NEW_GAMES if g['slug'] not in existing_slugs]
print(f"New games to add: {len(to_add)}")
print(f"Skipped (duplicates): {len(NEW_GAMES) - len(to_add)}")

# Add new games
games.extend(to_add)

# Save
with open('src/data/games.json', 'w', encoding='utf-8') as f:
    json.dump(games, f, indent=2, ensure_ascii=False)

print(f"Total games: {len(games)}")
print("\nNew games added:")
for g in to_add:
    print(f"  [{g['category']}] {g['title']} ({g['slug']})")
print("Done!")
