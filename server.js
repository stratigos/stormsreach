/**
 * Production application server.
 */
var express = require('express');
var app     = express();

app.use(express.static(__dirname + '/dist/'));

// Forward all URL paths to the main index. Otherwise, routes can not be
//  reached directly, and hard refreshes to deep links will not load the
//  application.
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080);
