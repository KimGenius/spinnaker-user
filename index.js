var express = require('express');
var app = express();

app.get('/user', function (req, res) {
  res.send('Hello User! Version Genie');
});

app.get('/healthcheck', function (req, res) {
  res.send('checking health... OK! Genie');
});

app.listen(7001, function () {
  console.log('Example app listening on port 7001! Genie');
});
