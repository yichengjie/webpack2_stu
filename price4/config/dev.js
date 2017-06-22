const webpackMerge = require('webpack-merge');
const webpack = require('webpack') ;
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const commonConfig = require('./base.js');
let path = require('path') ;
let common = require('./common.js') ;
let localIPAddress = common.getIPAdress() ;
let localPort = 3000 ;
let serverIPAddress = localIPAddress;
let serverPort = 8080 ;

module.exports = function() {
    return webpackMerge(commonConfig(), {
        devtool: 'cheap-module-eval-source-map',
        output: {
            filename: '[name].bundle.js',
            publicPath: '/',
            sourceMapFilename: '[name].map'
        },
        devServer: {
            port: localPort,
            //所有来自 dist/目录的文件都做 gzip 压缩和提供为服务
            compress:true,
            host:localIPAddress,
            contentBase: [path.resolve(__dirname, '../public')],  // New
            //其实很简单的，只要配置这个参数就可以了  
            hot:true,
            proxy: {  
                '/api/*': {  
                    target: 'http://'+serverIPAddress+':'+serverPort+'/',  
                    secure: false  
                }  
            }  
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('development') //定义生产环境
                }
            }),
            new webpack.HotModuleReplacementPlugin(), // Enable HMR
            new HtmlWebpackPlugin({
                template: './template.html',
                filename:'index.html',
                inject:'body',
                chunks:['index','vendor']   // 这个模板对应上面那个节点
            }),
            new HtmlWebpackPlugin({
                template: './template.html',
                filename:'edit.html',
                inject:'body',
                chunks:['edit','vendor']   // 这个模板对应上面那个节点
            })
        ]
    })
}