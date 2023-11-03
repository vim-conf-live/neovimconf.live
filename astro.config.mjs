import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  redirects: {
    "/talks": "/talks/day-1"
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
  ] ,
  adapter: netlify({
    edgeMiddleware: true
  })
  // adapter: node({
  //   mode: "standalone"
  // })
});
