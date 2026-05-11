// Retry build script for Cloudflare Pages
// Tailwind CSS v4 Vite plugin has a race condition with Astro prerender
// Running build twice ensures all pages are generated
const { execSync } = require('child_process');

console.log('=== Astro Build (attempt 1) ===');
try {
  execSync('npx astro build', { stdio: 'inherit', shell: true });
  console.log('Build succeeded on first attempt.');
  process.exit(0);
} catch (err) {
  console.log('\n=== First build failed, retrying... ===');
}

// Retry without cleaning (cached chunks from first attempt)
console.log('\n=== Astro Build (attempt 2) ===');
try {
  execSync('npx astro build', { stdio: 'inherit', shell: true });
  console.log('Build succeeded on second attempt.');
  process.exit(0);
} catch (err) {
  console.error('\n=== Build failed on second attempt ===');
  process.exit(1);
}
