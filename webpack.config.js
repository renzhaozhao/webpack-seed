var webpack = require('webpack');
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: './dist/',
        filename: '[name].js',
        publicPath: '/dist'
    },
    devtool: '#source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
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
        new webpack.HotModuleReplacementPlugin()
    ],
    babel:{
        plugins:['transform-runtime']
    },
    devServer: {
        contentBase: './',
        host: 'localhost',
        port: 3200,
        inline: true,
        hot: true,
    }
}
