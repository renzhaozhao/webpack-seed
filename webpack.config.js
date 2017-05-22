const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    index: './src/index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: 'static/js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'less-loader',
            options: {
              noIeCompat: true
            }
          }
        ]
      }, {
        test: /\.(png|jpg|gif|ico)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 20000,
            name: 'image/[hash:12].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html',
      favicon: 'src/favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common', 'vendor']
    })
  ],
  devServer: {
    contentBase: './',
    host: 'localhost',
    port: 3200,
    inline: true,
    hot: true,
  }
}
