// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://oscaresteve.dev',

  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      // El castellano se queda en la raiz: `/` y `/proyectos/<slug>`.
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
