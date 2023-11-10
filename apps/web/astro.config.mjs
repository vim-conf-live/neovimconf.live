import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";
import { defineConfig } from "astro/config";
import sentry from "@sentry/astro";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  redirects: {
    "/talks": "/talks/day-1",
  },
  integrations: [
    sentry({
      dsn: "https://acc5a569e0cde4317688542f3df992a8@o192873.ingest.sentry.io/4506201758171136",
      // sourceMapsUploadOptions: {
      //   project: "neovimconf",
      //   authToken: env.SENTRY_AUTH_TOKEN,
      // },
    }),
    tailwind({ applyBaseStyles: false }), react()],
  adapter: netlify(),
});
