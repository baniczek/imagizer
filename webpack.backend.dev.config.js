require('extract-text-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'sourcemap',
    entry: [
        './src/main.js',
    ],
    output: {
        path: path.resolve('./dist'),
        filename: 'imagizer.node.js',
        library: 'imagizer',
        libraryTarget: 'umd'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js'],
    },
    module: {
        loaders: [
            {
                test: [/\.js?$/],
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                },
            },
        ],
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
    ],
    externals: {
        'canvas': 'canvas',
        'fs': 'fs'
    }
};