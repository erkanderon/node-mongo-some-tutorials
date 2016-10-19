var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');


var hostName = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

app.all('/dishes', function(req,res,next){
	res.writeHead(200, {'Content-Type': 'text/html'});

	next();
});

app.get('/dishes', function(req,res,next){
	
	res.end('Will send all the dishes to you');
});
app.post('/dishes', function(req,res,next){
	
	res.end('Will add the dish: '+ req.body.name+ ' with details '+ req.body.description);
});

app.delete('/dishes', function(req,res,next){
	
	res.end('Deleting all dishes');
});
app.delete('/dishes/:dishId', function(req,res,next){
	
	res.end('Deleting all dishes');
});
app.get('/dishes/:dishId', function(req,res,next){
	
	res.end('Will send details of the dish:' + req.params.dishId +' to you');
});
app.put('/dishes/:dishId', function(req,res,next){
	res.write('Updating the dish with id:' + req.params.dishId+ '\n');
	res.end('Deleting dish:'+ req.params.dishId);
})

app.use(express.static(__dirname+'/public'));

app.listen(port, hostName, function(){
	console.log('Server running at https://'+ hostName+':'+port);
})