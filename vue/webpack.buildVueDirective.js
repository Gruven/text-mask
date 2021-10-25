require('webpack')
const path = require('path')

module.exports = {
  entry: path.join(__dirname, './src/vueTextMask.js'),

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
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
    filename: 'vueTextMask.js',
    library: 'vueTextMask',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.vue', '.js']
  },

  externals: [
    {
      vue: {
        root: 'Vue',
        commonjs2: 'vue',
        commonjs: 'vue',
        amd: 'vue'
      }
    }
  ]
}
