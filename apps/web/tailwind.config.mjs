import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', defaultTheme.fontFamily.mono],
        sans: ['"IBM Plex Sans"', defaultTheme.fontFamily.sans],
      },
      aria: {
        "current-page": "current='page'",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
  ],
};
