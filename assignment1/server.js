var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter')
var leaderRouter = require('./leaderRouter');

var hostName = 'localhost';
var port = 3000;


var app = express();

leaderRouter.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes',dishRouter);
app.use('/promotions', promoRouter);
app.use('/leadership', leaderRouter);


app.listen(port, hostName, function(req,res,next){
		console.log("Server is running at : https://"+hostName+":"+port);
});