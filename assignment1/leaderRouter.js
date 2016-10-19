module.exports = (function(){	

	var leaderRouter = require('express').Router();

	//Dish Router /dishes implementation

	leaderRouter.route('/').all(function(req,res,next){

		res.writeHead(200,{'Content-Type': 'text/html'});
		next();
	})
	.get(function(req,res,next){
		res.end('We are getting the leaders');
	})
	.post(function(req,res,next){
		res.end('We are posting that '+ req.body.name + ' and description '+req.body.description);
	})
	.delete(function(req, res, next){
		res.end('We are deleting all leaders');
	});

	// dishId implementation

	leaderRouter.route('/:leaderId').all(function(req,res,next){

		res.writeHead(200,{'Content-Type': 'text/html'});
		next();
	})
	.get(function(req,res,next){
		res.end('We are getting the leader');
	})
	.put(function(req,res,next){
		res.write('Updating the leader with id:' + req.params.dishId+ '\n');
		res.end('Deleting leader:'+ req.params.dishId);
	})
	.delete(function(req, res, next){
		res.end('Deleting the leader with leaderId:'+ req.params.dishId);
	});

	return leaderRouter;

})();