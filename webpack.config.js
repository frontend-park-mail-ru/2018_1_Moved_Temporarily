'use strict';

const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: './client/main.js',
    output: {
        path: __dirname,
        filename: './client/main2.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2016'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.(s)?css$/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options:
                            {
                                minimize: true
                            }
                    }
                ]
            },
            {
                test: /\.pug$/,
                loader: "pug-loader"
            }
        ]
    },
    plugins: [
        /*new webpack.optimize.UglifyJsPlugin
        ({
            compress: {drop_debugger: false}
        })*/
    ]
};