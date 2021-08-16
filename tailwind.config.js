/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const tailwindcssForms = require('@tailwindcss/forms')
const tailwindcssTypography = require('@tailwindcss/typography')
const tailwindcssAspectRatio = require('@tailwindcss/aspect-ratio')
const tailwindcssScrollbar = require('tailwind-scrollbar')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

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
        orange: colors.orange,
        brand: {
          discord: '#5865F2',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.gray.900'),
              textDecoration: 'underline',
            },
            strong: {
              color: theme('colors.white'),
            },
            'ol > li::before': {
              color: theme('colors.gray.100'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.100'),
            },
            hr: {
              borderColor: theme('colors.gray.200'),
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      // ...
      opacity: ['hover'],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.-animate-delay-1': {
          'animation-delay': '-0.32s',
        },
        '.-animate-delay-2': {
          'animation-delay': '-0.16s',
        },
      }
      addUtilities(newUtilities)
    }),
    tailwindcssForms,
    tailwindcssTypography,
    tailwindcssAspectRatio,
    tailwindcssScrollbar,
  ],
}
