const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const config = require('./webpack.config')
const OfflinePlugin = require('offline-plugin')
const CustomScriptLocationPlugin = require('./CustomScriptLocationPlugin')

module.exports = {
  entry: {
    app: [
      'whatwg-fetch',
      'graphcool-styles/dist/styles.css',
      './src/styles/graphiql.css',
      'codemirror/mode/javascript/javascript',
      'codemirror/mode/shell/shell',
      'codemirror-graphql/mode',
      './src/main.tsx',
    ],
  },
  output: {
    path: __dirname + '/dist',
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
    },{
      test: /icons\/.*\.svg$/,
      loader: 'raw-loader!svgo-loader',
    }, {
      test: /(graphics|gifs)\/.*\.(svg|png|gif|jpg)$/,
      loaders: [
        'file-loader',
        'image-webpack-loader',
      ],
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
      __INTERCOM_ID__: '"mamayuvj"',
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      }
    }),
    new HtmlWebpackPlugin({
      favicon: 'static/favicon.png',
      template: 'src/index.html',
    }),
    new CustomScriptLocationPlugin({
      head: /vendor/,
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
    new OfflinePlugin({
      version: '[hash]',
    }),
  ],
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.ts', '.tsx'],
  },
}
