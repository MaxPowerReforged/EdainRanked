import { I18N } from "./lang/config";

export default {
  target: "static",
  head: {
    title: "Edain Ranked",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["~/assets/scss/main.scss"],
  plugins: [
    { src: "~/plugins/highcharts.js" },
    { src: "~/plugins/aws.js" },
    { src: "~/plugins/cognito.js" }
  ],
  components: {
    dirs: [
      "~/components",
      {
        path: "~/components/statistics",
        prefix: "Statistics"
      },
      {
        path: "~/components/statistics/charts",
        prefix: "StatisticsCharts"
      },
      {
        path: "~/components/statistics/tables",
        prefix: "StatisticsTables"
      }
    ]
  },
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxt/typescript-build",
    "@nuxtjs/dotenv"
  ],

  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "nuxt-i18n",
    "@nuxtjs/style-resources"
  ],
  axios: {
    baseURL: process.env.BASE_URL,
    headers: {
      common: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    }
  },
  i18n: I18N,
  build: {},
  styleResources: {
    scss: [
      "~/assets/scss/_colors.scss",
      "~/assets/scss/_text.scss",
      "~/assets/scss/_breakpoints.scss"
    ]
  },
  server: {
    port: 8000,
    host: "0.0.0.0"
  }
};
