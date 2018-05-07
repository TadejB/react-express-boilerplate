var express = require('express');
var cors = require('cors');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api', cors(), (req, res) => {
  res.json({
    data: [
    'red',
    'green',
    'blue'
  ]});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});