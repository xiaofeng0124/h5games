import json, random
with open('src/data/games.json', 'r', encoding='utf-8') as f:
    games = json.load(f)
print(f'Total games: {len(games)}')
# Check a few random games for description/instructions
samples = random.sample(games, min(15, len(games)))
has_desc = 0
has_instr = 0
for g in samples:
    desc = g.get('description', '')
    instr = g.get('instructions', '')
    print(f'{g["slug"]}: desc_len={len(str(desc))}, instr_len={len(str(instr))}')
    if desc: has_desc += 1
    if instr: has_instr += 1
print(f'\nSample: {has_desc}/15 have descriptions, {has_instr}/15 have instructions')
# Show first game full
if games:
    print('\n=== First game sample ===')
    g = games[0]
    for k, v in g.items():
        if isinstance(v, str) and len(v) > 200:
            print(f'  {k}: {v[:200]}...')
        else:
            print(f'  {k}: {v}')
