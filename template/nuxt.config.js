/**
 * @type {{build: {extractCSS: boolean}, head: {}, loading: {color: string}, manifest: {theme_color: string}, css: [string], modules: [string,null]}}
 */
module.exports = {
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    publicPath: "/fluent-bootstrap/"
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: "#3B8070"
  },
  css: [
    // SCSS file in the project
    "assets/main.scss"
  ],
  /*
  ** Modules
  */
  modules: ["@nuxtjs/pwa", ["@nuxtjs/bootstrap-vue", { css: false }]]
}
