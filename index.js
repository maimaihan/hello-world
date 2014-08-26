var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendfile('login.html');
  //console.log(app);
  console.log(111);
});
var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});