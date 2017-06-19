const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  devtool: 'nosources-source-map',
  context: path.resolve(__dirname, './src'),
  entry:{
    index:'./index.jsx'  
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/', 
    sourceMapFilename: '[name].map'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,exclude: [/node_modules/],
        use: [{loader: 'babel-loader'}],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    //所有来自 dist/目录的文件都做 gzip 压缩和提供为服务
    compress:true,
    host: 'localhost',
    contentBase: [path.resolve(__dirname, './public')],  // New
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2,
    }),
    new HtmlWebpackPlugin({
       template: './index.html',
       filename:'index.html'
    })
  ],
};