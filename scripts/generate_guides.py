import json, re

with open('src/data/games.json', 'r', encoding='utf-8') as f:
    games = json.load(f)

# Category-specific tip templates
CATEGORY_GUIDES = {
    "match-3": {
        "title_tpl": "{title} Tips & Tricks",
        "tips": [
            "Look for matches at the bottom of the board first — clearing them can create chain reactions above.",
            "Plan 2-3 moves ahead instead of making the first match you see.",
            "Prioritize matches that clear multiple rows or columns at once.",
            "Save power-ups and boosters for difficult levels rather than using them immediately.",
            "Focus on the level's specific goal (collect X items, reach X score) rather than just matching randomly."
        ]
    },
    "puzzle": {
        "title_tpl": "How to Master {title}",
        "tips": [
            "Start by scanning the entire board to understand the puzzle layout before making your first move.",
            "Break complex problems into smaller steps — solve one section at a time.",
            "If you're stuck, step back and look at the puzzle from a different angle.",
            "Use hints sparingly — the satisfaction of solving it yourself is worth the effort.",
            "Practice regularly to improve your pattern recognition and problem-solving speed."
        ]
    },
    "merge": {
        "title_tpl": "{title} Strategy Guide",
        "tips": [
            "Always merge 5 items instead of 3 when possible — you get a bonus item every time.",
            "Keep your board organized by grouping similar items together.",
            "Save rare items — they're often needed for quests or special events.",
            "Complete orders and quests first, as they guide your progression.",
            "Don't merge items too quickly — sometimes you need lower-level items for tasks."
        ]
    },
    "casual": {
        "title_tpl": "{title} Beginner's Guide",
        "tips": [
            "Take your time — casual games are meant to be relaxing, not rushed.",
            "Focus on the tutorial to understand the core mechanics before diving in.",
            "Set a comfortable pace and don't worry about high scores on your first try.",
            "Explore all the game modes — many casual games have hidden features.",
            "Play with sound on for the most immersive experience."
        ]
    },
    "arcade": {
        "title_tpl": "{title} Pro Tips",
        "tips": [
            "Focus on survival first — staying alive longer naturally leads to higher scores.",
            "Learn enemy patterns and level layouts to anticipate what's coming.",
            "Master the basic controls before attempting advanced techniques.",
            "Use power-ups defensively when you're in trouble, not just offensively.",
            "Watch replays of top players to learn advanced strategies."
        ]
    },
    "word": {
        "title_tpl": "{title} Word Tips",
        "tips": [
            "Start with short words to clear space and build confidence.",
            "Look for common prefixes (re-, un-, pre-) and suffixes (-ing, -ed, -tion).",
            "Try rearranging letters in your mind — sometimes the answer is hiding in plain sight.",
            "Use vowels as anchors and build words around them.",
            "Practice daily to expand your vocabulary and improve your word-finding speed."
        ]
    },
    "card": {
        "title_tpl": "{title} Winning Strategy",
        "tips": [
            "Prioritize revealing hidden cards over making safe moves.",
            "Use empty columns strategically — they're valuable for temporary storage.",
            "Build sequences evenly across all columns rather than focusing on one.",
            "Think several moves ahead before committing to a play.",
            "When in doubt, draw from the deck — it's often better than making a bad move."
        ]
    },
    "hidden-object": {
        "title_tpl": "{title} Walkthrough Tips",
        "tips": [
            "Scan the scene systematically from top-left to bottom-right.",
            "Look for items by color and shape rather than searching for the specific object.",
            "Use hints early to understand the game's hiding style.",
            "Take breaks — fresh eyes spot things you've missed before.",
            "Zoom in on detailed areas — small items often hide in cluttered spots."
        ]
    },
    "board": {
        "title_tpl": "{title} Strategy Guide",
        "tips": [
            "Control the center of the board — it gives you the most options.",
            "Think 3-4 moves ahead and anticipate your opponent's responses.",
            "Balance offense and defense — don't focus solely on your own plan.",
            "Learn classic openings and endgame patterns for your chosen board game.",
            "Practice against AI opponents at increasing difficulty levels."
        ]
    }
}

# Default guide for any category not in the map
DEFAULT_TIPS = [
    "Start with the tutorial to learn the basic mechanics.",
    "Practice regularly to improve your skills.",
    "Take breaks to maintain focus and avoid frustration.",
    "Challenge yourself with harder difficulties as you improve.",
    "Share tips with other players to discover new strategies."
]

count = 0
for game in games:
    if game.get('guideTitle') and game.get('guideContent'):
        continue

    cat = game.get('category', 'casual')
    title = game['title']
    cat_guide = CATEGORY_GUIDES.get(cat, {"title_tpl": "{title} Tips", "tips": DEFAULT_TIPS})

    game['guideTitle'] = cat_guide['title_tpl'].format(title=title)
    game['guideContent'] = '\n'.join(cat_guide['tips'])
    count += 1

with open('src/data/games.json', 'w', encoding='utf-8') as f:
    json.dump(games, f, indent=2, ensure_ascii=False)

print(f"Added guides to {count} games")
print(f"Total games now: {len(games)}")
