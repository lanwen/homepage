const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      'graphcool-styles/dist/styles.css',
      './src/styles/codemirror.css',
      './src/styles/graphiql.css',
      'codemirror/mode/javascript/javascript',
      'codemirror/mode/shell/shell',
      'codemirror/theme/dracula.css',
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
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      loader: 'babel-loader!awesome-typescript-loader',
    }, {
      test: /icons\/.*\.svg$/,
      loader: 'raw-loader!svgo-loader',
    }, {
      test: /(graphics|gifs)\/.*\.(svg|png|gif|jpg)$/,
      loader: 'file-loader',
    }, {
      test: /\.json$/,
      loader: "json-loader"
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      __BACKEND_ADDR__: JSON.stringify(process.env.BACKEND_ADDR.toString()),
      __SMOOCH_TOKEN__: '"505tvtkv5udrd4kc5dbpppa6x"',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
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
