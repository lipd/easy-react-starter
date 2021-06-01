const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  devtool: false,
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  },
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
})
