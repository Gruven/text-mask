const path = require('path')
require('webpack')
const coreLoaders = require('../../core/webpack.buildCore.js').module.rules

module.exports = {
  devtool: 'eval',
  entry: [path.join(__dirname, '/index.js')],
  output: {
    path: path.join(__dirname, '/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {extensions: ['', '.js']},
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      options: {
        rootMode: 'upward'
      },
      include: [
        __dirname,
        path.join(__dirname, '../src'),
        path.join(__dirname, '../../core/src')
      ]
    }].concat(coreLoaders)
  }
}
