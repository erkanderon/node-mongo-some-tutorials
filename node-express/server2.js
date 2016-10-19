var express = require('express');
var morgan = require('morgan');


var hostName = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));

app.listen(port, hostName, function(){
	console.log('Server running at https://'+ hostName+':'+port);
})