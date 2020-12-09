import { I18N } from './lang/config'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Edain Ranked',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/statistics',
        prefix: 'Statistics'
      },
      {
        path: '~/components/statistics/charts',
        prefix: 'StatisticsCharts'
      },
      {
        path: '~/components/statistics/tables',
        prefix: 'StatisticsTables'
      }
    ]
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxt/typescript-build'
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://crehw12bu8.execute-api.eu-central-1.amazonaws.com/Beta', // Used as fallback if no runtime config is provided
    headers: {
      common: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
  },

  i18n: I18N,

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  styleResources: {
    scss: [
      '~/assets/scss/_colors.scss',
      '~/assets/scss/_text.scss',
      '~/assets/scss/_breakpoints.scss'
    ]
  },
  server: {     
    port: 8000,     
    host: '0.0.0.0',   
  }
}
