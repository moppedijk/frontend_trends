
//
//  REQUIRE DEPENDENCIES
//

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

//
//  MERGE DEVELOPMENT MODULE WITH COMMON MODULE
//

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public/',
        historyApiFallback: true
    }
});
