/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const tailwindcssForms = require('@tailwindcss/forms')
const tailwindcssTypography = require('@tailwindcss/typography')
const tailwindcssAspectRatio = require('@tailwindcss/aspect-ratio')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  // compatible with @nuxtjs/color-mode
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        brand: {
          discord: '#7289DA',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      // ...
      opacity: ['hover'],
    },
  },
  plugins: [tailwindcssForms, tailwindcssTypography, tailwindcssAspectRatio],
}
