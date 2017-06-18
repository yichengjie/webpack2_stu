const webpack = require('webpack'); //运行时(runtime)访问 webpack
const configuration = require('./webpack.config.js');

let compiler = webpack(configuration);
compiler.apply(new webpack.ProgressPlugin());

compiler.run(function(err, stats) {
    // ...
});