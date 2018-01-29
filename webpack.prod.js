
//
//  REQUIRE DEPENDENCIES
//

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

//
//  MERGE PRODUCTION MODULE WITH COMMON MODULE
//

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
});