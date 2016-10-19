var express = require('express'), 
		http = require('http');


var hostName = 'localhost';
var port = 3000;

var app = express();

app.use(function(req,res,next){
	console.log(req.headers);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<html><body><h1>Hello World</body></html>');
});

var server = http.createServer(app);

app.listen(port, hostName, function(){
	console.log('Server running at https://'+ hostName+':'+port);
})