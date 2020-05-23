const envPath = `config/.env.${process.env.ENV || 'local'}`
require('dotenv').config({ path: envPath })
const envSet = process.env

export default {
  mode: 'universal',
  srcDir: 'app',
  /*
   ** Headers of the page
   */
  head: {
    title: "Dogs 'n Dachs",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Dogs 'n Dachsはダックスが大好きな飼い主さん、ダックスを飼ってみたい方に向けたダックスの写真共有サイトです。自慢のワンちゃんのお写真を共有してみて下さいね！",
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: "Dogs 'n Dachs",
      },
      // 開発中はクローリングさせない。リリース時に必ず外すこと！！
      {
        hid: 'robots',
        name: 'robots',
        content: 'noindex,nofollow',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/common.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/firebase'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
    'nuxt-webfontloader',
  ],
  webfontloader: {
    google: {
      families: ['Lobster:400'],
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
    },
  },
  googleAnalytics: {
    id: 'UA-xxxxxxxxx-x',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
    babel: {
      presets({ isServer }: any) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTerget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
  env: envSet,
}
