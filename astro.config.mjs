import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  redirects: {
    "/talks": "/talks/day-1"
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
  ] ,
  adapter: netlify({})
});
