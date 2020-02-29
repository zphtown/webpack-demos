const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'HtmlWebpackPlugin test',
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
         {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
           test: /\.scss$/,
           use: [
             'style-loader',
             'css-loader',
             'sass-loader'
           ]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              'file-loader'
            ]
          },
          {
            test: /\.(csv|tsv)$/,
            use: [
              'csv-loader'
            ]
          },
          {
            test: /\.xml$/,
            use: [
              'xml-loader'
            ]
          }
        ]
      }
}