/* eslint-disable no-console */
const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.runWebsiteWithHotReloading.js')

new WebpackDevServer({
  hot: 'only',
  historyApiFallback: true,
  devMiddleware: {
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  },
  static: {
    directory: path.resolve(__dirname, '..'),
    publicPath: '/'
  }
}, webpack(config)).listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at localhost:3000')
})
