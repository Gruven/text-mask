require('webpack')
const path = require('path')

module.exports = {
  entry: path.join(__dirname, './src/vanillaTextMask.js'),

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          rootMode: 'upward'
        }
      }
    ]
  },

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'vanillaTextMask.js',
    library: 'vanillaTextMask',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.js']
  }
}
