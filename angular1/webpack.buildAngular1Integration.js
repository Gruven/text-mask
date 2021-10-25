require('webpack')
const path = require('path')

module.exports = {
  entry: path.join(__dirname, './src/angular1TextMask.js'),

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
    filename: 'angular1TextMask.js',
    library: 'angular1TextMask',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.js']
  }
}
