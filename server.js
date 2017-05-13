/**
 * Production application server.
 */
var express = require('express');
var app     = express();

// Set base path for application.
app.use(express.static(__dirname + '/dist/'));
// Set base path to `/data` for fetching application JSON responses.
app.use('/data', express.static(__dirname + '/app/data/'));

// Forward all URL paths to the main index. Otherwise, routes can not be
//  reached directly, and hard refreshes to deep links will not load the
//  application.
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080);
