const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cssnano = require('cssnano')
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/,
    }],
    loaders: [{
      test: /\.scss/,
      loader: 'style!css?modules!postcss!sass',
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      test: /icons\/.*\.svg$/,
      loader: 'svg-inline?removeTags=true',
    }, {
      test: /graphics\/.*\.(svg|png)$/,
      loader: 'file',
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      favicon: 'static/favicon.png',
      template: 'src/index.html',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      }
    }),
  ],
  postcss: [
    cssnano({
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions'],
      },
      discardComments: {
        removeAll: true,
      },
      safe: true,
    }),
  ],
  resolve: {
    root: [path.resolve('./src'), path.resolve('node_modules')],
    extensions: ['', '.js'],
  }
}
