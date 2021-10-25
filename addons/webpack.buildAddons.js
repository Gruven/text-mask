require('webpack')
const path = require('path')

module.exports = {
  entry: {
    textMaskAddons: path.join(__dirname, './src/index.js'),
    createAutoCorrectedDatePipe: [path.join(__dirname, './src/createAutoCorrectedDatePipe.js')],
    createNumberMask: [path.join(__dirname, './src/createNumberMask.js')],
    emailMask: [path.join(__dirname, './src/emailMask.js')]
  },

  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },

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

  resolve: {
    extensions: ['.js']
  }
}
