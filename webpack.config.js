const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cssnano = require('cssnano')
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    publicPath: '/',
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/,
    }],
    loaders: [{
      test: /\.scss/,
      loader: 'style!css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap',
      exclude: /node_modules/,
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      test: /icons\/.*\.svg$/,
      loader: 'raw!svgo?{"plugins":[{"removeStyleElement":true}]}',
    }, {
      test: /graphics\/.*\.(svg|png)$/,
      loader: 'file',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'static/favicon.png',
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      __SEGMENT_TOKEN__: '"mxShPAuQCvtbX7K1u5xcmFeqz9X7S7HN"',
      __SMOOCH_TOKEN__: '"505tvtkv5udrd4kc5dbpppa6x"',
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
      sourcemap: true,
    }),
  ],
  resolve: {
    root: [path.resolve('./src'), path.resolve('node_modules')],
    extensions: ['', '.js'],
  },
}
