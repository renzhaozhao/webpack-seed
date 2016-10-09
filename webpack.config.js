var path = require('path');
var webpack = require('webpack');
var srcPath = './app/js/';
var distPath = path.join(__dirname, 'dist/js');
module.exports = {
    entry: {
        index: srcPath + 'index.js',
        user: srcPath + 'user.js'
    },
    output: {
        path: distPath,
        filename: "[name].bundle.js",
        publicPath: path.join(__dirname,'dist')
    },
    //使用source-map调试
    devtool: '#source-map',
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0']
            }
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }]
    }
}
