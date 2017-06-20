const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');
let path = require('path') ;
let common = require('./common.js') ;
let localIPAddress = common.getIPAdress() ;
let serverIPAddress = localIPAddress;

module.exports = function() {
    return webpackMerge(commonConfig(), {
        devtool: 'cheap-module-eval-source-map',
        output: {
            filename: '[name].bundle.js',
            publicPath: '/',
            sourceMapFilename: '[name].map'
        },
        devServer: {
            port: 3000,
            //所有来自 dist/目录的文件都做 gzip 压缩和提供为服务
            compress:true,
            host:localIPAddress,
            contentBase: [path.resolve(__dirname, '../public')],  // New
            //其实很简单的，只要配置这个参数就可以了  
            proxy: {  
                '/api/*': {  
                    target: 'http://'+serverIPAddress+':8080/',  
                    secure: false  
                }  
            }  
        },
    })
}