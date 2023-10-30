import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  redirects: { "/talks": "/talks/day-1" },
  integrations: [tailwind({
    applyBaseStyles: false,
  }), react()]
});
