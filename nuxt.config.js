export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Vimconf 2021 - it's on!",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'October 29/30th',
      },

      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "Vim Virtual's Conf",
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.vimconf.live/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Join the world's first virtual Vim conference Oct 29/30th",
      },
      {
        hid: 'theme-color',
        property: 'theme-color',
        content: '#111827',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Connecting the vim community to share their love and passion for all things vim!',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.vimconf.live/vimconf.jpg',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },

      {
        name: 'twitter:site',
        content: '@VimconfLive',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.vimconf.live',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: "Join the world's first virtual Vim conference Oct 29/30th",
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Connecting the vim community to share their love and passion for all things vim!',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@VimconfLive',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.vimconf.live/vimconf.jpg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['swiper/swiper-bundle.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
    '~/plugins/userbase.client.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/color-mode',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/fontawesome-module#readme
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        icons: {
          solid: ['faCircle', 'faLock', 'faTicketAlt'],
        },
      },
    ],
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
    'vue-screen/nuxt',
    'portal-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/community-modules/tree/master/packages/toast
    '@nuxtjs/toast',
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
    userbase: {
      appId: process.env.USERBASE_APP_ID,
    },
  },

  screen: {
    extend: 'tailwind',
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
