const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: true,
    contentBase: './dist'
  },
  devtool: 'eval-source-map'
})