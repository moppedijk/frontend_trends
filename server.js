
//
//  DEFINE APP VARIABLES
//

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//
//  DEFINE SERVER PORT (local is 8080)
//

const port = process.env.PORT || 8080;

// Check if PORT var is available
if(process.env.PORT === undefined) {
    
    //
    //  REQUIRE WEBPACK FOR DEVSERVER
    //

    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const config = require('./webpack.common.js');
    const compiler = webpack(config);

    //
    //  DEFINE WEBPACK MIDDLEWARE FOR DEVSERVER
    //

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));

}

//
//  REQUIRE ROUTES
//

const apiRouter = require('./server/routes/api.js');

//
//  SET JSON SPACE FOR API RETURN TYPE
//

app.set('json spaces');

//
//  USE BODY PARSER (for http params and return types)
//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//
//  DEFINE PUBLIC SERVER FOLDER
//

app.use(express.static('./public'));

//
//  SERVER ROUTES
//

app.use('/api/', apiRouter);

//
//  LET APP LISTEN TO SERVER PORT
//

app.listen(port, function() {
    console.log('Server running on port: ' + port);
});
