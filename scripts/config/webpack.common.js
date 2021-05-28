const path = require('path')
const { isDevelopment, PROJECT_PATH } = require('../constants')

module.exports = {
  entry: {
    app: path.resolve(PROJECT_PATH, './src/app.js'),
  },
  output: {
    filename: `js/[name]${isDevelopment ? '' : '.[hash:8]'}.js`,
    path: path.resolve(PROJECT_PATH, './dist'),
  },
}
