var express = require('express');
var serve = express();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'localhost:15672');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
serve.use(allowCrossDomain);

serve.use(express.static(__dirname + '/web'));
serve.set('port', (process.env.PORT || 4444));
serve.listen(serve.get('port'), function () {
  console.log('Node app of toxChat is running at localhost:' + serve.get('port'));
});
