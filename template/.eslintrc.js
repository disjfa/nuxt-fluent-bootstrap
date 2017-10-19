const resolve = require('path').resolve;

module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb',
  // required to lint *.vue files
  plugins: [
    'html',
    'import'
  ],
  // add your custom rules here
  rules: {},
  globals: {},
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': __dirname,
              '~static': resolve(__dirname, 'static'),
              '~assets': resolve(__dirname, 'assets'),
              '~plugins': resolve(__dirname, 'plugins'),
              '~store': resolve(__dirname, '.nuxt/store'),
              '~router': resolve(__dirname, '.nuxt/router'),
              '~pages': resolve(__dirname, 'pages'),
              '~components': resolve(__dirname, 'components'),
              'bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
              'fonts': resolve(__dirname, 'node_modules/font-awesome/fonts')
            }
          }
        }
      }
    }
  }
};
