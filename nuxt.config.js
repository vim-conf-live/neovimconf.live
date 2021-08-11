export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: `Vimconf.live - The world's virtual vim conference.`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Vimconf.Live - The virtual vim conference',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['swiper/swiper-bundle.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/vue-awesome-swiper', ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/color-mode',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: [100, 300, 400, 500, 700, 900],
          Montserrat: [100, 300, 400, 500, 700, 900],
        },
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'portal-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  publicRuntimeConfig: {
    discordInvite: process.env.DISCORD_INVITE,
    watch: {
      header:
        process.env.WATCH_TYPE === 'YouTube'
          ? process.env.WATCH_YOUTUBE_HEADER
          : process.env.WATCH_TWITCH_HEADER,
      subheader:
        process.env.WATCH_TYPE === 'YouTube'
          ? process.env.WATCH_YOUTUBE_SUB_HEADER
          : process.env.WATCH_TWITCH_SUB_HEADER,
      link:
        process.env.WATCH_TYPE === 'YouTube'
          ? process.env.WATCH_YOUTUBE_LINK
          : process.env.WATCH_TWITCH_LINK,
    },
    agenda: {
      downloadEventCal: process.env.DOWNLOAD_EVENT_CAL,
      addToCal: process.env.ADD_TO_CAL,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
  },
  generate: {
    fallback: true,
  },
}
