const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { version } = require('./package.json')

const NODE_ENV = process.env.NODE_ENV || 'development';
const PROD = NODE_ENV === 'production';

module.exports = {
  entry: {
    'build/bundle': ['./src/index.js']
  },
  resolve: {
    alias: {
      svelte: path.dirname(require.resolve('svelte/package.json'))
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: PROD ? '[name].[contenthash].js' : '[name].js',
    chunkFilename: '[name].[id].js'
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: PROD,
            hotReload: !PROD,
            compilerOptions: {
              dev: !PROD
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false
        }
      }
    ]
  },
  mode: NODE_ENV,
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: PROD ? '[name].[chunkhash].css' : '[name].css'
    }),
    new webpack.DefinePlugin({ VERSION: JSON.stringify(version) }),
    new HtmlWebpackPlugin({ template: "src/index.html" }),
  ],
  stats: "errors-only",
  devtool: PROD ? false : 'source-map',
  devServer: {
    hot: true
  }
};