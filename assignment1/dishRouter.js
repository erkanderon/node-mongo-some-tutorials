module.exports = (function(){	

	var dishRouter = require('express').Router();

	//Dish Router /dishes implementation

	dishRouter.route('/').all(function(req,res,next){

		res.writeHead(200,{'Content-Type': 'text/html'});
		next();
	})
	.get(function(req,res,next){
		res.end('We are getting the dishes');
	})
	.post(function(req,res,next){
		res.end('We are posting that'+ req.body.name + 'and description'+req.body.description);
	})
	.delete(function(req, res, next){
		res.end('We are deleting all dishes');
	});

	// dishId implementation

	dishRouter.route('/:dishId').all(function(req,res,next){

		res.writeHead(200,{'Content-Type': 'text/html'});
		next();
	})
	.get(function(req,res,next){
		res.end('We are getting the dish');
	})
	.put(function(req,res,next){
		res.write('Updating the dish with id:' + req.params.dishId+ '\n');
		res.end('Deleting dish:'+ req.params.dishId);
	})
	.delete(function(req, res, next){
		res.end('Deleting the dish with dishId:'+ req.params.dishId);
	});

	return dishRouter;

})();