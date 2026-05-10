import json, re

# === Mapping: current slug -> original title/description ===
# Based on the Phase 1 rename_map and subsequent Phase 3/6 changes
RESTORE_MAP = {
    "candy-match-delight": {
        "title": "Candy Crush Delight",
        "shortDescription": "Swap colorful candies in this dazzling match-3 adventure packed with hundreds of levels.",
        "description": "Swap colorful candies in this dazzling match-3 adventure packed with hundreds of levels, explosive power-ups, and mouth-watering visuals that make every match feel like a treat.",
        "guideTitle": "10 Tips to Master Candy Crush Delight",
    },
    "gem-quest": {
        "title": "Jewel Quest",
        "shortDescription": "Embark on a glittering treasure hunt through ancient temples.",
        "description": "Embark on a glittering treasure hunt through ancient temples! Match sparkling gems to unlock powerful artifacts and uncover hidden riches in this beautifully crafted match-3 journey.",
        "guideTitle": "Jewel Quest Strategy Guide",
    },
    "dragon-merge-land": {
        "title": "Merge Dragons",
        "shortDescription": "Welcome to a magical realm where every merge brings wonders to life.",
        "description": "Welcome to a magical realm where every merge brings wonders to life! Combine dragons, eggs, and mystical treasures to build your enchanted kingdom in this spellbinding adventure.",
        "guideTitle": "Merge Dragons Beginner's Guide",
    },
    "block-puzzle": {
        "title": "Tetris Classic",
        "shortDescription": "The legendary block-stacking puzzle game, reimagined for your browser.",
        "description": "The legendary block-stacking puzzle game, reimagined for your browser! Arrange falling shapes, clear lines, and chase that perfect high score in this timeless arcade classic that never gets old.",
        "guideTitle": "Tetris Classic Strategy Guide",
    },
    "word-search": {
        "title": "Word Search Pro",
        "shortDescription": "Hunt for hidden words across hundreds of beautifully themed grids.",
        "description": "Hunt for hidden words across hundreds of beautifully themed grids! Expand your vocabulary while exploring categories from animals to space — each puzzle is a new discovery.",
        "guideTitle": "Word Search Pro Tips and Tricks",
    },
    "sky-bird": {
        "title": "Flappy Bird",
        "shortDescription": "How far can you fly? Master the perfect tap rhythm to guide your bird through challenging gaps.",
        "description": "How far can you fly? Master the perfect tap rhythm to guide your bird through challenging gaps in this famously addictive arcade game that tests your focus and reflexes.",
        "guideTitle": "Flappy Bird Tips for Better Scores",
    },
    "maze-chase": {
        "title": "Pac-Man",
        "shortDescription": "Dodge, chase, and munch your way through twisting mazes.",
        "description": "Dodge, chase, and munch your way through twisting mazes! Gobble up dots, outsmart tricky foes, and feel the retro arcade magic come alive in your browser.",
        "guideTitle": "Pac-Man Mastery Guide",
    },
    "bounce-up": {
        "title": "Doodle Jump",
        "shortDescription": "Bounce higher and higher in this endlessly charming vertical adventure.",
        "description": "Bounce higher and higher in this endlessly charming vertical adventure! Tilt and tap your way up a world of whimsical platforms, avoiding obstacles and chasing new heights.",
        "guideTitle": "Doodle Jump High Score Guide",
    },
    "music-tiles": {
        "title": "Piano Tiles",
        "shortDescription": "Feel the rhythm and test your reflexes.",
        "description": "Feel the rhythm and test your reflexes! Tap the scrolling black tiles in time with beautiful melodies — but miss one and it's game over. How perfectly can you play?",
        "guideTitle": "Piano Tiles Tips for Perfect Scores",
    },
    "snake-adventures": {
        "title": "Snake.io",
        "shortDescription": "Eat, grow, and survive in this modern twist on a retro icon.",
        "description": "Eat, grow, and survive in this modern twist on a retro icon! Navigate through vibrant arenas, compete for the longest streak, and avoid crashing into rivals.",
        "guideTitle": "Snake.io Survival Guide",
    },
    "four-in-a-row": {
        "title": "Connect Four",
        "shortDescription": "Drop, connect, win.",
        "description": "Drop, connect, win! This classic vertical strategy game challenges you to outthink your opponent and line up four discs before they do. Pure competitive fun.",
        "guideTitle": "Connect Four Strategy Guide",
    },
}

# Load games.json
with open('src/data/games.json', 'r', encoding='utf-8') as f:
    games = json.load(f)

changed = 0
for game in games:
    slug = game["slug"]
    if slug in RESTORE_MAP:
        info = RESTORE_MAP[slug]
        old_title = game["title"]
        game["title"] = info["title"]
        game["shortDescription"] = info["shortDescription"]
        game["description"] = info["description"]
        game["guideTitle"] = info["guideTitle"]
        # Update guideContent first sentence if it references the old name
        if old_title in game["guideContent"]:
            game["guideContent"] = game["guideContent"].replace(old_title, info["title"])
        # Also update if shortDescription in guideContent
        print(f"  Restored: {old_title} -> {info['title']}")
        changed += 1

# Save back
with open('src/data/games.json', 'w', encoding='utf-8') as f:
    json.dump(games, f, indent=2, ensure_ascii=False)

print(f"\nRestored {changed} games to original names")

# === Update blog.json ===
blog_replacements = {
    "Candy Match": "Candy Crush Delight",
    "Gem Quest": "Jewel Quest",
    "Block Puzzle": "Tetris Classic",
    "Snake": "Snake.io",
}

with open('src/data/blog.json', 'r', encoding='utf-8') as f:
    blogs = json.load(f)

blog_changed = 0
for blog in blogs:
    for old, new in blog_replacements.items():
        if old in blog["content"]:
            blog["content"] = blog["content"].replace(old, new)
            blog_changed += 1
        if old in blog["title"]:
            blog["title"] = blog["title"].replace(old, new)
            blog_changed += 1
        if old in blog["description"]:
            blog["description"] = blog["description"].replace(old, new)
            blog_changed += 1

with open('src/data/blog.json', 'w', encoding='utf-8') as f:
    json.dump(blogs, f, indent=2, ensure_ascii=False)

print(f"Updated {blog_changed} references in blog.json")
print("Done!")
