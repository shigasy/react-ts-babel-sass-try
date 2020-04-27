const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: true,
    contentBase: './dist',
    historyApiFallback: true, // これがないとルーティングできない
  },
  devtool: 'eval-source-map' // original source (圧縮などはされない dev向け)
})