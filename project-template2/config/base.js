const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function() {
  return {
      context: path.resolve(__dirname, '../src'),
      entry:{
        index:'./entrys/index.jsx' ,
        vendor: ['react','react-dom'], 
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
          { test: /\.less$/, 
            use:ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader!less-loader"
            })
          },
        ],
      },
      plugins: [
        new webpack.optimize.CommonsChunkPlugin({
           name: "vendor",
           minChunks: 2,
        }),
        new ExtractTextPlugin({
          filename:"style.[contenthash:16].css"
        }),
        new HtmlWebpackPlugin({
          template: './index.html',
          filename:'index.html',
          inject:'body',
          hash:true,
          chunks:['index','vendor']   // 这个模板对应上面那个节点
        })
      ],
    };
} 