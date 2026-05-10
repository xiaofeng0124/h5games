import json, re

# ============================================================
# Fix games.json: guideTitle, tags, instructions, guideContent
# ============================================================
with open('src/data/games.json', encoding='utf-8') as f:
    games = json.load(f)

for g in games:
    s = g['slug']

    if s == 'candy-match-delight':
        g['guideTitle'] = '10 Tips to Master Candy Match Delight'
        # g['tags'] fine, g['instructions'] fine, g['guideContent'] fine

    elif s == 'block-stack':
        g['guideTitle'] = 'Block Stack Strategies for High Scores'
        g['tags'] = ['blocks', 'stack', 'arcade', 'classic', 'falling']
        g['guideContent'] = (
            '1. Keep your stack flat and even. '
            '2. Clear multiple lines at once for bonus points. '
            '3. Save straight pieces for clearing deep gaps. '
            '4. Learn to rotate pieces in both directions. '
            '5. Practice at faster speeds gradually. '
            '6. Use wall kicks to fit pieces in tight spots. '
            '7. Plan where each piece goes before it lands.'
        )

    elif s == 'snake-adventures':
        g['guideTitle'] = 'Snake Adventures Survival Guide'
        g['tags'] = ['snake', 'arcade', 'classic', 'survival', 'multiplayer']

    elif s == 'tap-bird-fly':
        g['guideTitle'] = 'Tap Bird Fly Tips for Better Scores'
        g['tags'] = ['bird', 'flying', 'arcade', 'challenging', 'endless']

    elif s == 'maze-chase':
        g['guideTitle'] = 'Maze Chase Mastery Guide'
        g['instructions'] = (
            'Use arrow keys to move your character through the maze. '
            'Eat all dots to advance. '
            'Avoid ghosts unless you have eaten a power-up. '
            'Eat fruit for bonus points.'
        )

    elif s == 'bounce-up':
        g['guideTitle'] = 'Bounce Up High Score Guide'
        g['tags'] = ['bounce', 'vertical', 'arcade', 'endless', 'casual']
        g['instructions'] = (
            'Tilt your device or use arrow keys to move left and right. '
            'Land on platforms to bounce higher. '
            'Avoid monsters and black holes. '
            'Collect power-ups for special abilities.'
        )

    elif s == 'music-tiles':
        g['guideTitle'] = 'Music Tiles Tips for Perfect Scores'

    elif s == 'dragon-merge-land':
        g['guideTitle'] = 'Dragon Merge Land Beginner\'s Guide'
        g['tags'] = ['merge', 'dragons', 'fantasy', 'magic', 'collection']

    elif s == 'word-search-quest':
        pass  # already clean

# ============================================================
# Fix blog.json: references to old game names in content
# ============================================================
with open('src/data/blog.json', encoding='utf-8') as f:
    blogs = json.load(f)

for b in blogs:
    if b['slug'] == 'best-relaxing-games-2026':
        b['content'] = b['content'].replace('Candy Crush Delight', 'Candy Match Delight')
    elif b['slug'] == 'match-3-games-brain-benefits':
        b['content'] = b['content'].replace('Candy Crush Delight', 'Candy Match Delight')
    elif b['slug'] == 'stress-relief-games-work-breaks':
        b['content'] = b['content'].replace('Snake.io', 'Snake Adventures')

# Write back
with open('src/data/games.json', 'w', encoding='utf-8') as f:
    json.dump(games, f, indent=2, ensure_ascii=False)

with open('src/data/blog.json', 'w', encoding='utf-8') as f:
    json.dump(blogs, f, indent=2, ensure_ascii=False)

print('Done. Fixed games.json + blog.json')
