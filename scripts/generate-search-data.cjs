/**
 * 生成搜索数据文件 public/search-data.json
 * 只保留搜索/筛选需要的字段，去掉 image/iframeUrl 减小体积
 */
const fs = require('fs');
const path = require('path');

const gamesPath = path.join(__dirname, '..', 'src', 'data', 'games.json');
const outputPath = path.join(__dirname, '..', 'public', 'search-data.json');

const games = JSON.parse(fs.readFileSync(gamesPath, 'utf-8'));

const crypto = require('crypto');

const searchData = games.map(g => {
  let platform = 'gp';
  const url = g.iframeUrl || '';
  if (url.includes('gamedistribution.com')) platform = 'gd';
  else if (url.includes('gamemonetize.co')) platform = 'gm';
  return {
    slug: g.slug,
    title: g.title,
    category: g.category,
    difficulty: g.difficulty || '',
    tags: g.tags || [],
    image: g.image || '',
    platform,
  };
});

const json = JSON.stringify(searchData);
fs.writeFileSync(outputPath, json, 'utf-8');

// Generate version hash for cache busting
const hash = crypto.createHash('md5').update(json).digest('hex').slice(0, 8);
const versionPath = path.join(__dirname, '..', 'public', 'search-data-version.json');
fs.writeFileSync(versionPath, JSON.stringify({ hash }), 'utf-8');

const mb = (Buffer.byteLength(json, 'utf-8') / 1024 / 1024).toFixed(2);
console.log(`✅ search-data.json generated: ${searchData.length} games, ${mb} MB, version=${hash}`);
