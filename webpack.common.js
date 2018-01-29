
//
//  REQUIRE DEPENDENCIES
//

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//
//  EXPORT MODULE
//

module.exports = {

    //
    //  WEBPACK ENTRY POINT
    //

    entry: {
        index: './src/index.js',
    },

    //
    //  WEBPACK PLUGINS
    //

    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ],

    //
    //  WEBPACK OUTPUT
    //

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },

    //
    //  WEBPACK MODULES
    //

    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ],
    }
};
