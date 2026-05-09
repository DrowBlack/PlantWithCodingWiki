import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://DrowBlack.github.io',
  base: '/PlantWithCodingWiki',

  vite: {
    plugins: [tailwindcss()],
  },
});