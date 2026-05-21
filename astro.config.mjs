import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jacksonlotstriping.com',
  integrations: [sitemap()],
  output: 'static'
});
