var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

/**
 * webpack-dev-server cannot be used in self-hosting environment, so webpack-dev-middleware is used
 */
app.use(require('webpack-dev-middleware')(compiler));
app.use(require('webpack-hot-middleware')(compiler));


app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
