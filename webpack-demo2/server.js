const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = new express();
const config = require('./webpack.config.js');
const complier = webpack(config);

config.mode = 'development';
app.use(webpackDevMiddleware(complier, {
    publicPath: config.output.publicPath
}));

app.listen(3000, function() {
    console.log('Example app listening on port 3000!\n');
});