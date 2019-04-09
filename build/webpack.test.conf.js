/**
 * @file webpack.dev.conf
 * @author Onepixel<onepixel@126.com>
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.join(__dirname, '../demo'),
        filename: '[name].js?[hash:8]'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        }), 
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
});
