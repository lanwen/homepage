const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'graphcool-styles/dist/styles.css',
      './src/styles/codemirror.css',
      './src/styles/graphiql.css',
      'codemirror/mode/javascript/javascript',
      'codemirror/mode/shell/shell',
      'codemirror-graphql/mode',
      './src/main.tsx',
    ],
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.ts(x?)$/,
      loader: 'tslint-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.js(x?)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', {modules: false}]
          ]
        }
      }, {
        loader: 'awesome-typescript-loader'
      }],
    }, {
      test: /icons\/.*\.svg$/,
      loader: 'raw-loader!svgo-loader',
    }, {
      test: /(graphics|gifs)\/.*\.(svg|png|gif|jpg)$/,
      loader: 'file-loader',
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.md$/,
      loader: 'raw-loader',
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      __BACKEND_ADDR__: JSON.stringify(process.env.BACKEND_ADDR.toString()),
      __DOCS_API_ADDR__: JSON.stringify(process.env.DOCS_API_ADDR.toString()),
      __HEARTBEAT_ADDR__: process.env.HEARTBEAT_ADDR ? JSON.stringify(process.env.HEARTBEAT_ADDR.toString()) : false,
      __INTERCOM_ID__: '"rqszgt2h"',
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      favicon: 'static/favicon.png',
      template: 'src/index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        svgo: {
          plugins: [
            {removeStyleElement: true},
          ],
        },
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: true,
      children: true,
      minChunks: 3,
    }),
  ],
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.ts', '.tsx'],
  },
}
