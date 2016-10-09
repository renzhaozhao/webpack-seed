var path = require('path');
var webpack = require('webpack');
var srcPath = './src/js/';
module.exports = {
    entry: {
        index: srcPath + 'index.js',
        user: srcPath + 'user.js'
    },
    output: {
        path: 'dist/js',
        filename: "[name].bundle.js"
    },
    //使用source-map调试
    devtool: '#source-map',
    module: {
        loaders: [ {
            test: /\.less$/,
            loader: "style!css!less"
        }]
    },
    plugins: [
        // 创建公用部分
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js',
        }),
        //代码压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
