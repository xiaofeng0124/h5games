/**
 * 生成搜索数据文件 public/search-data.json
 * 只保留搜索/筛选需要的字段，去掉 image/iframeUrl 减小体积
 */
const fs = require('fs');
const path = require('path');

const gamesPath = path.join(__dirname, '..', 'src', 'data', 'games.json');
const outputPath = path.join(__dirname, '..', 'public', 'search-data.json');

const games = JSON.parse(fs.readFileSync(gamesPath, 'utf-8'));

const searchData = games.map(g => ({
  slug: g.slug,
  title: g.title,
  category: g.category,
  description: g.shortDescription,
  difficulty: g.difficulty || '',
  tags: g.tags || [],
}));

const json = JSON.stringify(searchData);
fs.writeFileSync(outputPath, json, 'utf-8');

const mb = (Buffer.byteLength(json, 'utf-8') / 1024 / 1024).toFixed(2);
console.log(`✅ search-data.json generated: ${searchData.length} games, ${mb} MB (was 6.56 MB with images)`);
