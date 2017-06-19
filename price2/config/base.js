const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = function() {
  return {
      context: path.resolve(__dirname, '../src'),
      entry:{
        index:'./index.jsx'  
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,exclude: [/node_modules/],
            use: [{loader: 'babel-loader'}],
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          },
        ],
      },
      plugins: [
        new webpack.optimize.CommonsChunkPlugin({
          name: 'commons',
          filename: 'commons.js',
          minChunks: 2,
        }),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
          template: './index.html',
          filename:'index.html'
        })
      ],
    };
} 