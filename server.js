/**
 * Production application server.
 */
var express = require('express');
var app     = express();

/**
 * Server middleware.
 */

// Set HTTP Headers.
app.use(function(req, res, next) {
  // The `Transfer-Encoding: chunked` HTTP header streams the application
  //  content, to avoid potential ~200ms lag from TCP Slow Start.
  res.setHeader('Transfer-Encoding', 'chunked');

  next();
});

// Set base path for application.
app.use(express.static(__dirname + '/dist/'));
// Set base path to `/data` for fetching application JSON responses.
app.use('/data', express.static(__dirname + '/app/data/'));

// Forward all URL paths to the main index. Otherwise, routes can not be
//  reached directly, and hard refreshes to deep links will not load the
//  application.
// Using the wildcard essentially pushes responsibility of routing onto
//  React Router.
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

/**
 * Listen for requests.
 */
app.listen(process.env.PORT || 8080);
