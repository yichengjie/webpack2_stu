const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');
let path = require('path') ;

module.exports = function(env) {
    return webpackMerge(commonConfig(), {
        devtool: 'cheap-module-source-map',
        output: {
            filename: '[name].bundle.js',
            publicPath: '/',
            sourceMapFilename: '[name].map'
        },
        devServer: {
            port: 3000,
            //所有来自 dist/目录的文件都做 gzip 压缩和提供为服务
            compress:true,
            host: 'localhost',
            contentBase: [path.resolve(__dirname, '../public')],  // New
        },
    })
}