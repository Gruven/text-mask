const path = require('path')
require('webpack')

module.exports = {
  entry: path.join(__dirname, '../website/src/index.js'),
  output: {
    path: path.join(__dirname, '../website/static'),
    filename: 'bundle.js',
    publicPath: 'website/static/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: [
        path.join(__dirname, 'src/'),
        path.join(__dirname, '../react/src/'),
        path.join(__dirname, '../core/src'),
        path.join(__dirname, '../addons/src')
      ],
      options: {
        rootMode: 'upward'
      }
    }, {
      // Process website/src/styles.scss as a regular Sass file
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
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
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              quietDeps: true
            }
          }
        }
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
    }]
  },
  performance: {
    maxEntrypointSize: 5000000,
    maxAssetSize: 10000000
  }
}
