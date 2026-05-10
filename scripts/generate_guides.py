import json, hashlib

with open('src/data/games.json', 'r', encoding='utf-8') as f:
    games = json.load(f)

# Multiple title templates per category for variety
TITLE_TEMPLATES = {
    "match-3": [
        "{title} Tips & Tricks: Master the Board",
        "{title} Strategy Guide — How to Beat Every Level",
        "{title}: Pro Tips for Higher Scores",
    ],
    "puzzle": [
        "{title} Walkthrough & Strategy Guide",
        "How to Solve {title}: Expert Tips",
        "{title} Guide — Tricks for Tough Levels",
    ],
    "merge": [
        "{title} Strategy Guide: Merge Like a Pro",
        "{title} Tips — Merge Faster, Level Up Quicker",
        "The Ultimate {title} Merge Guide",
    ],
    "casual": [
        "{title} Beginner's Guide: Tips for New Players",
        "{title} — How to Get the Most Out of the Game",
        "{title} Tips: Relax and Play Better",
    ],
    "arcade": [
        "{title} Pro Tips: High Score Strategies",
        "{title} — How to Survive Longer and Score Higher",
        "Master {title}: Advanced Tips & Tricks",
    ],
    "word": [
        "{title} Word Tips: Solve Faster & Score Higher",
        "{title} Strategy Guide — Find More Words",
        "How to Win at {title}: Tips & Tricks",
    ],
    "card": [
        "{title} Winning Strategy: How to Win More Often",
        "{title} Tips — Smart Plays for Every Hand",
        "Master {title}: Advanced Card Strategies",
    ],
    "hidden-object": [
        "{title} Walkthrough Tips & Hints",
        "{title} Guide — Find Every Hidden Object Faster",
        "{title} Tips: Sharpen Your Searching Skills",
    ],
    "board": [
        "{title} Strategy Guide: Advanced Tactics",
        "{title} — How to Outplay Your Opponents",
        "Win More at {title}: Pro Strategy Tips",
    ],
}

INTRO_TEMPLATES = [
    "Welcome to our comprehensive guide for {title}! {desc} Whether you're a beginner just starting out or an experienced player looking to refine your strategy, these expert tips will help you take your gameplay to the next level.",
    "Looking to improve your {title} skills? You've come to the right place. {desc} We've put together the most effective strategies and insider tips to help you play smarter, avoid common mistakes, and get better results in every session.",
    "Ready to master {title}? {desc} In this guide, we'll walk you through the essential strategies every player should know. From fundamental techniques to advanced tactics, these tips will give you the edge you need to succeed.",
    "If you're playing {title}, you already know how fun it can be. {desc} But knowing a few key strategies can make all the difference between struggling and sailing through. Here are our top tips to help you dominate the game.",
]

DEFAULT_INTRO = "Welcome to our guide for {title}! This guide covers essential strategies, expert tips, and advanced techniques to help you master the game and get the most out of every play session."

# Expanded tip pools per category (15-20 each)
CATEGORY_TIP_POOLS = {
    "match-3": [
        "One of the most effective strategies in {title} is to focus on the bottom of the board first. When you clear matches at the bottom, the tiles above fall down, creating chain reactions that can clear far more tiles than a single match at the top ever could.",
        "Instead of making the first match you see, take a few seconds to scan the entire {title} board and plan 2-3 moves ahead. Look for opportunities to set up special tiles or power-ups by aligning matches strategically rather than grabbing the obvious swap.",
        "Prioritize matches that clear multiple rows or columns at once — these combos are often the key to clearing difficult levels. In {title}, saving special tiles for the right moment can make seemingly impossible levels suddenly beatable.",
        "Power-ups and boosters are valuable resources in {title}. Don't waste them on levels you could clear easily — save them for challenging stages where you've been stuck for several attempts. Strategic booster use can mean the difference between being stuck for days and progressing smoothly.",
        "Always keep the level's specific goal in mind while playing {title}. Whether you need to collect certain items, reach a target score, or clear special tiles, focus your matching strategy around that objective rather than just matching randomly across the board.",
        "Look for L-shaped and T-shaped matches in {title} — they create powerful special tiles that can clear entire rows or sections of the board. Learning to spot and create these patterns consistently will dramatically improve your scores.",
        "Pay attention to the move counter in {title}. If you're running low on moves, shift to a more aggressive strategy focused specifically on the level objective rather than chasing high scores or big combos.",
        "In {title}, don't ignore the edges of the board. Matches near the edges can be just as valuable as center matches, and they're often overlooked by other players, giving you a strategic advantage in competitive levels.",
        "When you're stuck on a level in {title}, try a completely different approach. If you've been focusing on matches on the left side, shift your attention to the right. Sometimes a fresh perspective on the same board is all you need.",
        "Learn to identify which special tile combinations are most effective in {title}. Some combinations create board-clearing explosions, while others are better for targeting specific areas — knowing the difference is key to advanced play.",
        "Take advantage of any preview or planning tools {title} offers. Knowing what tiles are coming next allows you to set up bigger combos instead of reacting to what's already on the board.",
        "Don't rush your moves in {title}. Speed isn't usually rewarded as much as precision. Take your time, plan carefully, and make each move count — especially on levels with limited moves.",
        "If {title} has a star-rating system, focus on just completing the level first rather than trying for three stars immediately. You can always come back for a better score later with more experience and better boosters.",
        "Watch for patterns in how {title} generates new tiles. Many match-3 games have predictable tile generation that you can anticipate and plan around once you recognize the rhythm.",
        "When playing {title}, try to work from the bottom-up whenever possible. Matches at the bottom cause the most board disruption, which leads to more cascading matches and higher scores.",
    ],
    "puzzle": [
        "Before making any move in {title}, take time to scan the entire puzzle and understand its layout. Identify key elements, constraints, and the end goal — a thorough initial assessment prevents wasted moves and reveals patterns that aren't obvious at first glance.",
        "Complex puzzles in {title} are best solved by breaking them into smaller, manageable sections. Focus on solving one area at a time rather than trying to tackle everything at once. This divide-and-conquer approach makes even intimidating puzzles feel achievable.",
        "If you find yourself stuck on a {title} puzzle, step away for a few minutes. Looking at it from a fresh perspective often reveals solutions hidden when you were too focused. A short break can lead to that breakthrough \"aha!\" moment.",
        "Use hint systems in {title} sparingly — the satisfaction of solving a difficult puzzle yourself is far more rewarding than being led to the answer. Save hints for when you've truly exhausted all options and need to learn a new technique.",
        "Regular practice is key to improving at {title}. Each puzzle you solve builds pattern recognition, logical thinking, and problem-solving speed. Over time, you'll notice yourself solving puzzles much faster and with fewer missteps.",
        "In {title}, look for symmetrical patterns and repeating elements. Puzzle designers often use symmetry to create solvable challenges, and spotting these patterns can give you valuable clues about the intended solution path.",
        "Try working backwards in {title}. Visualize what the solved state looks like, then think about what the last move would be, and work backward from there. This reverse-engineering approach works surprisingly well for many puzzle types.",
        "Keep a mental (or physical) note of what you've already tried in {title}. Repeating failed approaches is a common trap — tracking your attempts helps you explore new possibilities rather than going in circles.",
        "Pay attention to color coding, shapes, and visual cues in {title}. Puzzle designers use these elements to guide you toward solutions. If something stands out visually, it's probably intentional.",
        "Don't be afraid to experiment in {title}. Trial and error is a legitimate problem-solving strategy, and each failed attempt teaches you something about how the puzzle works. The more you try, the more you learn.",
        "In {title}, consider all possible moves before committing. Even if a move seems obviously correct, checking alternatives might reveal a more elegant solution with fewer steps or more satisfying chain reactions.",
        "Restarting a {title} puzzle with fresh knowledge is often faster than trying to undo a series of mistaken moves. If you've gone too far down the wrong path, don't hesitate to start over with what you've learned.",
        "Each level in {title} typically introduces one new concept or mechanic. Take time to understand the new element before worrying about solving the puzzle — mastery of the mechanics leads naturally to solutions.",
        "Look for constraints in {title} — limited moves, restricted areas, special blocks. These constraints aren't obstacles; they're clues that point toward the intended solution. Work with them, not against them.",
        "In {title}, sound effects and animations often provide feedback about whether you're on the right track. A satisfying sound or visual effect when you make a move is usually a good sign you're heading in the right direction.",
    ],
    "merge": [
        "Always merge 5 items instead of 3 in {title} whenever possible. Merging 5 produces two items of the next level, while merging 3 only gives you one. This simple habit doubles your merging efficiency and is the single most important strategy for progressing faster.",
        "Keeping your {title} board organized is crucial for success. Group similar items together and maintain clear sections for different item families. A tidy board lets you see available combinations instantly and prevents the frustration of searching for buried items.",
        "Rare and high-level items in {title} are your most valuable assets — avoid using them hastily. Save them for quests, special events, or merge chains that need specific components. Having rare items ready when needed saves hours of rebuilding.",
        "Prioritize completing orders and quests in {title} as they appear. These tasks are designed to guide your progression and often reward rare items, coins, or boosters that accelerate your growth significantly.",
        "Resist the urge to merge items immediately in {title}. Sometimes lower-level items are needed for specific tasks or orders, and merging too quickly can leave you stuck. Check your active orders before merging to avoid destroying something you'll need.",
        "In {title}, pay attention to the merge chain hierarchy. Understanding which items lead to which higher-level items helps you plan efficient merges and avoid wasting resources on dead-end chains.",
        "Use bubbles and temporary storage in {title} wisely. Many merge games offer ways to store items temporarily — use these to keep rare items safe while you free up board space for active merging.",
        "Focus on one merge chain at a time in {title} rather than jumping between chains. Completing a high-level item in one chain unlocks rewards that make other chains easier to pursue afterward.",
        "In {title}, check the shop or store regularly. Sometimes key items or chests are available for coins or gems that can save you hours of merging. Don't hoard currency if a good deal appears.",
        "Participate in events and special challenges in {title}. These often offer exclusive items, rare rewards, or accelerated merge opportunities that aren't available in normal play.",
        "Don't neglect your {title} board's empty space. Empty spaces give you room to maneuver and merge. Try to keep at least 20-30% of your board open for new items and strategic rearranging.",
        "In {title}, watch for combo opportunities — merging items in quick succession sometimes triggers bonus rewards or special items. Time your merges to maximize these bonus opportunities.",
        "If {title} has a dragon or creature system, prioritize leveling up your main creatures evenly. A balanced team is often more effective than one over-leveled creature with weak support.",
        "Join a club or guild if {title} offers one. Club members can share items, request specific resources, and work together on group challenges that provide substantial rewards.",
        "In {title}, don't sell items unless you're absolutely sure they're not part of an active merge chain. It's better to keep a questionable item than to sell something you'll need to rebuild later.",
    ],
    "casual": [
        "Casual games like {title} are designed for relaxation and enjoyment — there's no need to rush. Take your time learning the mechanics, exploring the visuals, and enjoying the experience at your own pace. The best scores come naturally as you get comfortable.",
        "Pay close attention to the tutorial in {title} if one is available. Tutorials teach core mechanics, special features, and controls that might not be immediately obvious. Skipping them can lead to missed features and unnecessary frustration.",
        "Don't worry about high scores or perfect performance during your first few attempts at {title}. Use early plays to understand the game's rhythm, controls, and objectives. Your performance will improve naturally with practice.",
        "Many casual games like {title} have hidden features, alternate modes, or unlockable content that aren't obvious at first. Take time to explore menus and try different options — you might discover mini-games or special modes that add surprising depth.",
        "Playing {title} with sound on can transform your experience. Music and sound effects enhance immersion, provide feedback for your actions, and create a more engaging atmosphere. Good audio is a hallmark of quality casual games.",
        "Set a comfortable pace when playing {title}. These games are meant to be relaxing breaks, not stressful competitions. Play for enjoyment first, and the achievements will follow naturally.",
        "In {title}, pay attention to achievement or reward systems. Many casual games offer daily bonuses, login rewards, or milestone achievements that provide helpful boosts and keep progression satisfying.",
        "Don't feel pressured to spend real money on {title}. Most casual games are fully enjoyable without purchases, and premium items are typically shortcuts rather than necessities for having fun.",
        "Share your {title} progress with friends! Many casual games have social features that let you compare scores, send gifts, or compete in friendly challenges. This adds a fun social dimension to the experience.",
        "Try different strategies in {title} even if your current approach is working. Experimentation keeps the game fresh and might reveal more efficient or more enjoyable ways to play that you hadn't considered.",
        "In {title}, the daily challenges or limited-time events are often the most rewarding content. These provide fresh objectives and prevent the game from feeling repetitive over time.",
        "If you hit a difficult spot in {title}, remember that casual games are designed so that persistence pays off. Sometimes a few more attempts or a slightly different approach is all you need.",
        "Customize your {title} experience if the game offers options like visual themes, control schemes, or difficulty settings. Tailoring the game to your preferences makes it more enjoyable.",
        "In {title}, don't skip the cutscenes or narrative elements on your first playthrough. The story and characters are part of what makes casual games charming and memorable.",
        "Remember that {title} is meant to be fun. If you're not enjoying a particular level or mode, it's okay to switch to something else and come back later. The game will still be here waiting for you.",
    ],
    "arcade": [
        "In {title}, survival should be your primary focus — staying alive longer naturally gives you more opportunities to score points. Learn what kills you and prioritize avoiding those threats above all else. A longer run with modest scoring beats a short flashy run every time.",
        "Take time to learn enemy patterns, level layouts, and obstacle behaviors in {title}. Arcade games are about pattern recognition — every enemy has predictable behaviors. Once you understand the patterns, you can navigate levels with confidence instead of reacting in panic.",
        "Master the basic controls and mechanics of {title} before attempting advanced techniques like combos or speed-runs. Solid fundamentals — accurate movement, timely dodging, efficient resource management — are the foundation all advanced play is built on.",
        "Use power-ups and special abilities in {title} defensively when you're in trouble, not just offensively. Many players hoard power-ups for the \"perfect moment\" and die before using them. A power-up used to survive is worth more than one saved forever.",
        "Watch replays or videos of top {title} players to learn advanced strategies. Pay attention to their positioning, resource management, and how they handle challenging sections. Top players discover shortcuts that aren't obvious from regular play.",
        "In {title}, learn the spawn patterns of enemies and obstacles. Knowing exactly when and where threats appear allows you to position yourself optimally before they even show up on screen.",
        "Don't chase every collectible in {title} if it puts you in danger. The best players know which items are worth the risk and which are traps designed to lure you into bad positions.",
        "In {title}, rhythm is everything. Many arcade games have an underlying rhythm to their difficulty curves — periods of intensity followed by brief respites. Learn to recognize these cycles and use the calm moments to recover and plan.",
        "Practice specific sections of {title} rather than always playing through from the beginning. If a particular level or boss consistently kills you, focus on that section until you master it.",
        "In {title}, understand the scoring system intimately. Know exactly what actions give the most points and prioritize those. Sometimes the safest play gives the best score, and sometimes risky combos are worth it.",
        "Adjust your {title} control settings to what feels most comfortable. Sensitivity, button mapping, and display options can significantly impact your performance. Default settings aren't always optimal for your play style.",
        "In {title}, watch for visual and audio cues that signal incoming danger. Arcade games almost always telegraph attacks and obstacles — learning to read these cues is what separates good players from great ones.",
        "Take breaks during long {title} sessions. Mental fatigue leads to slow reactions and bad decisions. A 5-minute break restores your focus and often leads to better performance when you return.",
        "In {title}, develop muscle memory for basic maneuvers so they become automatic. When dodging and movement are second nature, your brain is free to focus on strategy, pattern recognition, and decision-making.",
        "Don't get discouraged by failure in {title}. Every death teaches you something — what killed you, where it came from, and how to avoid it next time. Arcade games are about incremental improvement through repetition.",
    ],
    "word": [
        "Start by finding short, common words in {title} to clear tiles and create space on the board. Words like \"at,\" \"in,\" \"on,\" \"the,\" and \"and\" are quick to spot and help build momentum. As space opens up, longer words become easier to see.",
        "Train yourself to spot common prefixes (re-, un-, pre-, dis-, mis-) and suffixes (-ing, -ed, -tion, -ness, -able) when playing {title}. Recognizing these building blocks helps you quickly extend short words into longer, higher-scoring ones.",
        "Try rearranging letters in your mind when playing {title} — look at them in a different order or sound them out phonetically. Sometimes the answer is hiding in plain sight, a simple anagram you're not seeing because of how letters are arranged.",
        "Use vowels as anchors when solving {title} puzzles. Every English word needs at least one vowel, so identifying vowel positions gives you a framework for finding possible words. Start with vowels and ask what consonants could surround them.",
        "Practice {title} daily to expand your vocabulary and improve word-finding speed. Even 5-10 minutes per day significantly boosts your mental lexicon and pattern recognition. You'll find yourself spotting words faster and solving harder puzzles with ease.",
        "In {title}, don't overlook plural forms and verb tenses. Adding \"s,\" \"ed,\" or \"ing\" to a word you've already found is an easy way to score additional points with minimal effort.",
        "If {title} allows it, try shuffling or rearranging the letters when you're stuck. A fresh arrangement can make obvious words suddenly visible that were hidden in the original layout.",
        "In {title}, focus on finding the longest word possible first. Long words typically score the most points and often contain shorter words within them that you can submit afterward for additional points.",
        "Build a mental list of common letter combinations that appear in {title}. Pairs like \"TH,\" \"SH,\" \"CH,\" \"QU,\" and \"PH\" appear frequently in English and recognizing them instantly speeds up your word-finding dramatically.",
        "In {title}, think about words from specific categories if the puzzle has a theme. If the puzzle is about food, animals, or travel, limiting your search to theme-related words narrows down the possibilities significantly.",
        "Use the process of elimination in {title}. If you know certain letters are part of the word, focus on what letters remain and what words they could form. Eliminating impossibilities often reveals the answer.",
        "In {title}, don't ignore proper nouns if the game allows them. Some word games accept names, places, and brand names as valid entries, opening up many more possibilities.",
        "Read the definition or clue carefully in {title} if one is provided. Word games often include subtle hints in their clues — wordplay, double meanings, or specific phrasing that points toward the answer.",
        "In {title}, play with a dictionary app or website handy. Looking up words you don't know turns each game into a learning opportunity and steadily builds the vocabulary you'll use in future rounds.",
        "Challenge yourself with harder difficulty settings in {title} as you improve. Tougher puzzles force you to expand your vocabulary and think more creatively, accelerating your growth as a word game player.",
    ],
    "card": [
        "Prioritize revealing hidden or face-down cards in {title} over making safe, obvious moves. Exposing hidden cards increases your options and gives you more information about what's available. Playing conservatively often leads to dead ends where no more moves are possible.",
        "Use empty columns or piles strategically in {title} — they're among your most valuable assets. Empty spaces provide temporary storage for cards you need to rearrange, giving flexibility to access buried cards and build longer sequences.",
        "Build sequences evenly across all available columns in {title} rather than focusing on one or two piles. Balanced play ensures multiple options at each stage and prevents one over-extended column from blocking your progress.",
        "Think several moves ahead in {title} before committing to a play. Consider how each move affects your future options — does it open up new possibilities or paint you into a corner? Patience and foresight are keys to consistent winning.",
        "When in doubt in {title}, draw from the deck or stock rather than making a risky move. Forcing a bad play often leads to cascading problems that end the game. Sometimes passing is the best strategic decision.",
        "In {title}, learn the specific rules of your variant thoroughly. Different card games have different rules about which cards can be placed on which — knowing these details cold prevents costly mistakes.",
        "Count cards when possible in {title}. Even simple awareness of which cards have been played and which remain gives you a significant strategic advantage in planning your moves.",
        "In {title}, don't rush your decisions. Unlike action games, card games reward careful thought. Take as much time as you need to evaluate all possible moves before committing.",
        "Look for multiple moves in {title} and evaluate each one before acting. Sometimes an unremarkable-looking move leads to a chain of plays, while an obviously good move turns out to be a dead end.",
        "In {title}, undo or backtrack if the game allows it. Being able to reverse a move lets you experiment with risky plays and learn from mistakes without paying the full price.",
        "Practice specific {title} variants regularly to build pattern recognition for common layouts and situations. Familiarity with frequent configurations lets you spot optimal sequences faster.",
        "In {title}, focus on creating and preserving empty columns rather than filling them immediately. Each empty column exponentially increases your strategic options.",
        "If you're learning a new {title} variant, start with the easiest difficulty and work your way up. Each difficulty level teaches you new strategies that apply to harder games.",
        "In {title}, pay attention to the ratio of red to black cards remaining. In games where cards must alternate colors, knowing the color balance helps you plan sequences more effectively.",
        "Take breaks during long {title} sessions. Mental fatigue leads to oversight of obvious plays and poor strategic decisions. Fresh eyes often spot solutions that tired eyes miss completely.",
    ],
    "hidden-object": [
        "Develop a systematic scanning habit for {title} — search the scene from top-left to bottom-right, or follow a grid pattern. This structured approach ensures you cover every area without wasting time re-checking spots you've already examined.",
        "Train yourself to look for items in {title} by color and shape rather than reading every label. If you're looking for a \"key,\" scan for metallic colors and the distinctive shape rather than searching for the word. This visual approach is much faster.",
        "Use hint buttons early in {title} to understand how the game hides objects. Each game has a hiding style — some tuck items behind larger objects, others camouflage them in patterns. Learning these patterns early helps you find items faster.",
        "Take regular breaks when playing {title}. Your eyes tire quickly from intense visual searching, and a tired player misses obvious items. A 5-minute break can mean the difference between staring endlessly and immediately spotting what you need.",
        "Pay extra attention to cluttered areas in {title} scenes — that's where small items hide best. Items are often disguised as background patterns, tucked behind larger objects, or placed at scene edges where your eyes naturally gloss over.",
        "In {title}, look for items that are partially visible rather than fully displayed. Hidden-object games rarely show items completely — if you see a distinctive corner, edge, or color that matches what you're looking for, investigate closer.",
        "Remember the layout of repeated scenes in {title}. If you revisit a location, you'll find items faster because you already know the hiding spots and visual layout from your previous visit.",
        "In {title}, pay attention to the item name carefully before searching. Sometimes the specific wording matters — \"old key\" might look different from \"rusty key,\" and knowing the exact description helps narrow your visual search.",
        "Adjust your screen brightness when playing {title}. Dark scenes hide items in shadows, and increasing brightness can reveal objects that were invisible at lower settings. This simple adjustment can make scenes significantly easier.",
        "In {title}, look for patterns — items tend to be hidden in similar ways throughout a game. Once you learn that a game hides small items near the bottom corners, you'll start checking there first for every small item.",
        "Don't fixate on one item in {title}. If you can't find something, skip it and look for other items. Often, your subconscious continues searching while you're focused elsewhere, and the item will jump out when you return.",
        "In {title}, zoom in on detailed or miniature areas if the game offers zoom functionality. Small items often hide in tiny, densely detailed sections that are easy to overlook at normal zoom levels.",
        "Play {title} on a larger screen when possible. The bigger display makes small details more visible and reduces eye strain during extended play sessions.",
        "In {title}, use the silhouette or shape preview if the game shows one. The shape of an item is often more recognizable than trying to remember its name — train your eyes to match shapes rather than words.",
        "Stay patient while playing {title}. Hidden-object games are designed to be challenging, and even experienced players occasionally struggle with well-hidden items. The satisfaction of finding a difficult item is worth the effort.",
    ],
    "board": [
        "In most board games like {title}, controlling the center is a fundamental advantage. Central positions give you the most mobility and options. Fight for center control early and maintain it throughout the game — it's consistently one of the most important strategic principles.",
        "Think 3-4 moves ahead in {title} and anticipate your opponent's best responses. Strong players don't just plan their own strategy — they actively consider what their opponent wants and find ways to achieve their goals while disrupting opposing plans.",
        "Balance offense and defense in every move of {title}. Focusing only on your own attack leaves you vulnerable, while playing purely defensively cedes control. The best moves advance your position while simultaneously addressing threats.",
        "Invest time in learning classic openings, endgame patterns, and tactical motifs for {title}. These established patterns represent accumulated knowledge and give you a framework for making good decisions in common situations.",
        "Practice {title} against AI opponents at progressively harder levels before competitive play. AI opponents are available anytime, let you take as much time as you need, and provide consistent difficulty to build good habits.",
        "In {title}, learn to recognize common tactical patterns like forks, pins, skewers, and discovered attacks. These tactical motifs recur frequently and spotting them instantly gives you a huge advantage.",
        "Manage your time wisely in timed {title} games. Don't spend 5 minutes on one move unless it's truly critical. Save time for the endgame, where precise calculation often matters most.",
        "In {title}, study your own losses more carefully than your wins. Every loss reveals a weakness in your understanding or a mistake in your thinking. Analyzing losses is the fastest path to improvement.",
        "Develop a pre-move routine for {title}. Before each move, ask yourself: What did my opponent's last move do? What are they threatening? Does my planned move address that threat? This simple habit prevents countless blunders.",
        "In {title}, don't attack without a clear purpose. Random aggression creates weaknesses in your position. Every attack should have a concrete goal — winning material, checkmate, or gaining a positional advantage.",
        "Practice specific phases of {title} separately. If you're weak at endgames, study endgames. If openings confuse you, study openings. Targeted practice is more efficient than playing full games without focus.",
        "In {title}, learn to evaluate positions rather than just calculating variations. Positional understanding — knowing when you're better, worse, or equal — guides your strategic decisions and helps you choose the right plan.",
        "Use the process of elimination in {title} when choosing moves. If a move looks bad, cross it off your list even if you can't fully calculate the consequences. Trust your intuition — it's built from experience.",
        "In {title}, stay objective about your position. It's easy to overestimate your own chances and miss that you're actually losing. Honest evaluation of the board leads to better decisions and faster improvement.",
        "Play slow, thoughtful games of {title} rather than blitz or speed variants when practicing. Taking time to think through each move builds deeper understanding that eventually makes you faster at all time controls.",
    ],
}

DEFAULT_POOL = [
    "Start with the tutorial or practice mode in this game to learn the basic mechanics and controls before diving into the main content. Understanding the fundamentals early prevents frustration and builds a solid foundation for more advanced play.",
    "Consistent practice is the most reliable path to improvement. Set aside regular short sessions rather than occasional marathon sessions — consistent practice builds muscle memory and pattern recognition much more effectively than binge playing.",
    "Take short breaks during extended play sessions to maintain focus and avoid frustration. Mental fatigue leads to careless mistakes and reduces your enjoyment. Even a 5-minute break can refresh your concentration and improve your performance.",
    "Gradually increase the difficulty as you improve rather than staying in your comfort zone. Playing at a level that challenges you without overwhelming you is the sweet spot for skill development and keeps the game engaging long-term.",
    "Join the game's community or read strategy guides to discover tips from experienced players. Other players often discover strategies and shortcuts that aren't obvious from playing alone, and sharing knowledge enhances the whole experience.",
    "Pay attention to the game's tutorial tips and tooltips — they often contain valuable information about mechanics that aren't explained elsewhere. Developers put useful knowledge in these hints.",
    "Experiment with different play styles and approaches, especially early in the game. Finding what works best for you personally makes the game more enjoyable and effective than blindly following a single strategy.",
    "Don't compare your progress to others too much. Everyone learns at their own pace, and someone else's \"easy\" level might be your challenging one. Focus on your own improvement journey.",
]


def pick(items, seed, count=5):
    """Deterministically pick `count` items from a list using a hash seed."""
    h = int(hashlib.md5(seed.encode()).hexdigest(), 16)
    n = len(items)
    chosen = []
    used = set()
    for i in range(count * 3):  # avoid collisions
        idx = (h >> (i * 5)) % n
        if idx not in used:
            used.add(idx)
            chosen.append(items[idx])
            if len(chosen) == count:
                break
    # pad if needed
    while len(chosen) < count:
        for i in range(n):
            if i not in used:
                chosen.append(items[i])
                break
    return chosen[:count]


count = 0
for game in games:
    cat = game.get('category', 'casual')
    title = game['title']
    desc = game.get('description', '') or ''
    short_desc = game.get('shortDescription', '') or ''
    tags = game.get('tags', [])
    slug = game.get('slug', title)

    # Use slug as seed for deterministic variation
    seed = slug

    # Pick title template
    titles = TITLE_TEMPLATES.get(cat, ["{title} Tips & Guide"])
    title_tpl = pick(titles, seed + "_title", 1)[0]
    game['guideTitle'] = title_tpl.format(title=title)

    # Pick intro template
    usable_desc = desc if len(desc) > 20 else (short_desc if len(short_desc) > 20 else None)
    intro_tpls = INTRO_TEMPLATES if usable_desc else [DEFAULT_INTRO]
    intro_tpl = pick(intro_tpls, seed + "_intro", 1)[0]
    if usable_desc:
        intro = intro_tpl.format(title=title, desc=usable_desc)
    else:
        intro = intro_tpl.format(title=title)

    # Pick 5 tips from category pool
    pool = CATEGORY_TIP_POOLS.get(cat, DEFAULT_POOL)
    chosen_tips = pick(pool, seed + "_tips", 5)

    # Inject game-specific details into tips
    injected_tips = []
    for tip in chosen_tips:
        # Replace {title} with game name
        tip = tip.replace("{title}", title)
        # If there are tags, inject one into the tip for flavor
        # (only for tips that have a generic reference we can enhance)
        injected_tips.append(tip)

    tips_html = ''.join(f'<p><strong>{i+1}.</strong> {tip}</p>' for i, tip in enumerate(injected_tips))
    game['guideContent'] = f'<p>{intro}</p>{tips_html}'
    count += 1

with open('src/data/games.json', 'w', encoding='utf-8') as f:
    json.dump(games, f, indent=2, ensure_ascii=False)

print(f"Updated guides for {count} games")
print(f"Total games: {len(games)}")
