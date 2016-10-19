module.exports = (function(){	

	var promoRouter = require('express').Router();

	//Dish Router /dishes implementation

	promoRouter.route('/').all(function(req,res,next){

		res.writeHead(200,{'Content-Type': 'text/html'});
		next();
	})
	.get(function(req,res,next){
		res.end('We are getting the promos');
	})
	.post(function(req,res,next){
		res.end('We are posting that'+ req.body.name + 'and description'+req.body.description);
	})
	.delete(function(req, res, next){
		res.end('We are deleting all promos');
	});

	// dishId implementation

	promoRouter.route('/:promoId').all(function(req,res,next){

		res.writeHead(200,{'Content-Type': 'text/html'});
		next();
	})
	.get(function(req,res,next){
		res.end('We are getting the promo');
	})
	.put(function(req,res,next){
		res.write('Updating the promo with id:' + req.params.dishId+ '\n');
		res.end('Deleting promo:'+ req.params.dishId);
	})
	.delete(function(req, res, next){
		res.end('Deleting the promo with promoId:'+ req.params.dishId);
	});

	return promoRouter;

})();