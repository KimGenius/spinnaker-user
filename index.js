var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello root! Version Genie');
});

app.get('/user', function (req, res) {
  res.send('Hello User! Version Geniee');
});

app.get('/healthcheck', function (req, res) {
  res.send('checking health... OK! Genie');
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080! Genie');
});
