const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const MinifyPlugin = require("babel-minify-webpack-plugin");

const entryDir = '../../build/classes/java/main/static/javascript';

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, `${entryDir}/prod`),
    filename: '[name].js',
    libraryTarget: "umd"
  },
  devtool: 'source-map',
  plugins: [
  ]
});