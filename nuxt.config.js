module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      lang: 'ru'
    }
  },
  css: [
    '~static/css/all.css',
    '@/assets/main.scss'
  ],
  plugins: [
    '~/plugins/lazy-loading',
    '~/plugins/v-img'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  webfontloader: {
    events: false,
    google: {
      families: ['Open+Sans:400,600,700:cyrillic&display=swap']
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
