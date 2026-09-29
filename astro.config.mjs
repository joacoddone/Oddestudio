// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL final del sitio. Cambiala cuando tengas dominio propio (ej: https://estudiodd.com.ar)
  site: 'https://estudiodd.netlify.app',
  vite: {
    plugins: [tailwindcss()]
  }
});