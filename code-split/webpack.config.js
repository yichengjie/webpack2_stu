var path = require('path');
var webpack = require('webpack');
module.exports = function(env) {
    console.info('hello world ') ;
    return {
        entry: {
            main:'./index.js',
            vendor: 'moment'
        },
        output: {
            filename: '[chunkhash].[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor' // 指定公共 bundle 的名字。
            })
        ]
    }
}