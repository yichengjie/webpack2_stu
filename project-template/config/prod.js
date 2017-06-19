const webpack = require('webpack') ;
const webpackMerge = require('webpack-merge');
var ManifestPlugin = require('webpack-manifest-plugin');
const commonConfig = require('./base.js');
let path = require('path') ;
let appPath = path.resolve(__dirname, '../') ;
module.exports = function(env) {
    return webpackMerge(commonConfig(), {
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].[chunkhash].js',
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new ManifestPlugin({
                fileName: 'chunk-manifest.json',
            }),
            new webpack.optimize.UglifyJsPlugin({
                comments: false
            })
        ]
    })
}