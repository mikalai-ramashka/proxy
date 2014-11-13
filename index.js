var http = require('http'),
    httpProxy = require('http-proxy'),
	request = require('request');
//
// Create your proxy server
//
httpProxy.createServer(9000, 'localhost').listen(8000);

//
// Create your target server
//
http.createServer(function (req, res) {
  request(req.headers.host).pipe(res);
}).listen(9000);