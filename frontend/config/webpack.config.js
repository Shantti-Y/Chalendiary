const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
require('dotenv').config();

const entryDir = '..';

module.exports = {
  entry: {
    index: ['@babel/polyfill', path.resolve(__dirname, `${entryDir}/index.js`)]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              'rsuite'
            ]
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ts-loader'
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader",
          options: {
            javascriptEnabled: true
          }
        }]
      },
      {
        test: /\.(png|jpg|gif|mp4)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: '../../assets/images',
            publicPath: '../../assets/images'
          }
        }

      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.jpg', '.png', '.scss'],
    alias: {
      '@assets': path.resolve(__dirname, `${entryDir}/assets`),
      '@client': path.resolve(__dirname, `${entryDir}/client`),
      '@components': path.resolve(__dirname, `${entryDir}/components`),
      '@routes': path.resolve(__dirname, `${entryDir}/routes`),
      '@store': path.resolve(__dirname, `${entryDir}/store`),
      '@utils': path.resolve(__dirname, `${entryDir}/utils`)
    }
  },
  plugins: [
    new ManifestPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV'])
    //new CleanWebpackPlugin(['dist/dev'], { watch: true })
  ]
};