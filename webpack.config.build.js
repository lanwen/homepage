const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const config = require('./webpack.config')

const routes = [
  // 'HomeView.tsx',
  // 'PricingView.tsx',
  // 'AboutView.tsx',
  // 'DocsView.tsx',
  // 'QuickstartPage.tsx',
  // 'BlogPage.tsx',
  // 'TutorialsPage.tsx',
  // 'FAQPage.tsx',
  // 'CommunityPage.tsx',
  // 'ContentHandler.tsx',
  // 'DocsOverview.tsx',
]

const includeRegex = new RegExp(`(${routes.join('|')})`)
const excludeRegex = new RegExp(`(node_modules|${routes.join('|')})`)

module.exports = {
  entry: {
    app: [
      'whatwg-fetch',
      'graphcool-styles/dist/styles.css',
      './src/styles/codemirror.css',
      './src/styles/graphiql.css',
      './src/main.tsx',
    ],
    vendor: config.entry.vendor,
  },
  output: {
    path: './dist',
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
      exclude: excludeRegex,
      loader: 'awesome-typescript-loader',
    }, {
      test: /\.ts(x?)$/,
      exclude: /(node_modules)/,
      include: includeRegex,
      loaders: ['react-router-loader?name=[name]', 'awesome-typescript-loader'],
    }, {
      test: /icons\/.*\.svg$/,
      loader: 'raw-loader!svgo-loader',
    }, {
      test: /(graphics|gifs)\/.*\.(svg|png|gif|jpg)$/,
      loader: 'file-loader',
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      __BACKEND_ADDR__: JSON.stringify(process.env.BACKEND_ADDR.toString()),
      __SMOOCH_TOKEN__: '"505tvtkv5udrd4kc5dbpppa6x"',
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
    new webpack.LoaderOptionsPlugin({
      options: {
        svgo: {
          plugins: [
            {removeStyleElement: true},
          ],
        },
      }
    }),
  ],
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.ts', '.tsx'],
  },
}