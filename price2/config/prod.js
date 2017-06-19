const webpack = require('webpack') ;
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');
let path = require('path') ;
module.exports = function(env) {
    return webpackMerge(commonConfig(), {
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].bundle.js',
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
            new webpack.optimize.UglifyJsPlugin({
                comments: false
            }),
        ]
    })
}