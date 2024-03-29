require.paths.unshift(__dirname + "/vendor");



var http = require('http'),
    faye = require('faye-node');



var bayeux = new faye.NodeAdapter({
  mount:    '/faye',
  timeout:  45
});

// Handle non-Bayeux requests
var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Non-Bayeux request');
  response.end();
});

bayeux.attach(server);
port = process.env.PORT || 3000;
server.listen(port);
console.log('server listening on port ' + port); 
