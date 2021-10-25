const path = require('path')
require('webpack')
const coreLoaders = require('../core/webpack.buildCore.js').module.rules

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: [
    path.join(__dirname, '../website/src/index.js')
  ],
  output: {
    path: path.join(__dirname, '../website/static'),
    filename: 'bundle.js',
    publicPath: '/website/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [
        'react-hot-loader/webpack',
        {
          loader: 'babel-loader',
          options: {
            plugins: ['react-hot-loader/babel'],
            rootMode: 'upward'
          }
        }
      ],
      include: [
        path.join(__dirname, '../website/src/'),
        path.join(__dirname, '../react/')
      ]
    }, {
      // Process website/src/styles.scss as a regular Sass file
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.join(__dirname, '../website/src/styles.scss')
    }, {
      // Process all Sass files other than website/src/styles.scss as CSS Modules
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        },
        'sass-loader'
      ],
      exclude: path.join(__dirname, '../website/src/styles.scss')
    }, {
      test: /\.(woff2?|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }, {
      test: /\.(ttf|eot)$/,
      loader: 'file-loader'
    }].concat(coreLoaders)
  },
  performance: {
    maxEntrypointSize: 5000000,
    maxAssetSize: 5000000
  }
}
