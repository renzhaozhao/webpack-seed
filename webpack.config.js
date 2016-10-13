var path = require('path');
var webpack = require('webpack');
var srcPath = './src/js/';
module.exports = {
    entry: {
        index: [srcPath + 'index.js'],
        user: [srcPath + 'user.js']
    },
    output: {
        path: 'dist/js',
        filename: "[name].bundle.js"
    },
    //使用source-map调试
    devtool: '#source-map',
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }]
    },
    resolve: {
        extensions: ['', '.js', '.json']
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
    ],
    babel:{
        plugins:['transform-runtime']
    }
}
