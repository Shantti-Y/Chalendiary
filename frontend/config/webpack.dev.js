const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

const entryDir = '../../build/classes/java/main/static/javascript'

module.exports = merge(common, {
  watch: true,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, `${entryDir}/dev`),
    filename: "[name].js",
    libraryTarget: "umd"
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.rootUrl': JSON.stringify('http://localhost:3000'),
      'process.env.apiUrl': JSON.stringify('http://localhost:3000/api')
    })
  ]
});