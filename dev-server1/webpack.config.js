const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  devtool: 'cheap-module-source-map',
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
    other: './other.js' ,
    //vendor: ['react', 'react-dom','moment'],
  },
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets', 
    sourceMapFilename: '[name].map'                         // New
  },
  module: {
    rules: [
      {
        test: /\.js$/,exclude: [/node_modules/],
        use: [{loader: 'babel-loader',options: { presets: ['es2015'] },}],
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
    contentBase: [path.resolve(__dirname, './dist/assets'),path.resolve(__dirname, './public')],  // New
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2,
    }),
    // new HtmlWebpackPlugin({
    //    template: './index.html',
    //    filename: path.resolve(__dirname, './public/index.html')
    // }),
    new HtmlWebpackPlugin({
       template: './index.html',
       filename:'index.html'
       //filename: path.resolve(__dirname, './public/index.html'),
    })
  ],
};