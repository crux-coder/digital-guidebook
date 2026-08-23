import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://balkanbeta.com',
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
});
