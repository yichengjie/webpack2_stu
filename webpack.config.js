const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
    other: './other.js' ,
    vendor: ['react', 'react-dom','moment'],
  },
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets',                          // New
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
    contentBase: path.resolve(__dirname, './src'),  // New
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2,
    }),
  ],
};