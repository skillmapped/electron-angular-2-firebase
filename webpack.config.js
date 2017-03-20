var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var DefinePlugin = require('webpack/lib/DefinePlugin');

const ENV = process.env.ENV = 'development';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'vendor': './src/vendor.ts',
    'polyfills': './src/polyfills.ts',
    'ui': './src/ui/main.ts'
  },

  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['.ts','.js','.json', '.css', '.html']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader', 
          use: [{loader: 'css-loader?sourceMap'}]
        })
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ["polyfills", "vendor", "ui"].reverse()
    }),
    new ExtractTextPlugin('style.css')
  ]
};
