var express = require('express'),
         rs = require('../index.js'),
        app = express();

app.get('/', function (req, res) {
  rs.build(res, rs.message(200, {message: "Hello World!"}))
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
