require('webpack')
const path = require('path')

module.exports = {
  entry: path.join(__dirname, './src/index.js'),

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          rootMode: 'upward'
        }
      }
    ]
  },

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'textMaskCore.js',
    library: {
      name: 'textMaskCore',
      type: 'umd'
    }
  },

  resolve: {
    extensions: ['.js']
  }
}
