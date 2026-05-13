// Retry build script for Cloudflare Pages
// Tailwind CSS v4 Vite plugin has a race condition with Astro prerender
// Patching the esm-cache loader fixes the issue
const { execSync } = require('child_process');
const fs = require('fs');

// Patch tailwindcss esm-cache loader to prevent race condition
const patchFile = 'node_modules/@tailwindcss/node/dist/esm-cache.loader.mjs';
const original = fs.readFileSync(patchFile, 'utf-8');
const patched = `import{isBuiltin as i}from"module";var o=async(a,e,u)=>u(a,e);export{o as resolve};`;

if (original !== patched) {
  fs.writeFileSync(patchFile, patched, 'utf-8');
  console.log('Patched tailwindcss esm-cache.loader.mjs');
} else {
  console.log('Tailwind esm-cache already patched');
}

// Generate smart game descriptions for GamePix games
console.log('\n=== Generate Game Descriptions ===');
execSync('node scripts/generate-descriptions.cjs', { stdio: 'inherit', shell: true });

// Generate search data JSON (lean, no images)
console.log('\n=== Generate Search Data ===');
execSync('node scripts/generate-search-data.cjs', { stdio: 'inherit', shell: true });

console.log('\n=== Astro Build ===');
execSync('npx astro build', { stdio: 'inherit', shell: true });
console.log('\nBuild completed successfully.');
