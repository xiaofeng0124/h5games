// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://chillarcade.io',
  output: 'static',
  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize: (item) => {
        // Homepage gets highest priority
        if (item.url === 'https://chillarcade.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        // Game pages get higher priority
        if (item.url.includes('/games/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        return item;
      },
    })
  ],
});
