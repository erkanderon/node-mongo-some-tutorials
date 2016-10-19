var mongoose = require('mongoose');
var Dishes = require('../models/dishes3')
var bodyParser = require('body-parser')

module.exports = (function(){	

	
	var dishRouter = require('express').Router();

	//Dish Router /dishes implementation



	dishRouter.route('/')
	
	.get(function(req,res,next){
		Dishes.find({}, function(err, dish){
			if(err) throw err;
			res.json(dish);
		})
	})
	.post(function(req,res,next){
		
		Dishes.create(req.body, function(err, dish){
			if(err) throw err;

			console.log('Dish created!');
			var id = dish._id;
			res.writeHead(200, {
				'Content-Type': 'text/plain'
			})
			res.end('Added the dish with id:' + id);
		});

	})
	.delete(function(req, res, next){
		
		Dishes.remove({}, function(err, resp){
			if(err) throw err;
			res.json(resp);
		});
	});

	// dishId implementation

	dishRouter.route('/:dishId')

	.get(function(req,res,next){
		
		Dishes.findById(req.params.dishId, function(err,dish){
			if(err) throw err;

			res.json(dish);
		})
	})
	.put(function(req,res,next){
		
		Dishes.findByIdAndUpdate(req.params.dishId, {
			$set: req.body
		},{
		new: true
	}, function(err,dish){
		if(err) throw err;
		res.json(dish);
	}
		)
	})
	.delete(function(req, res, next){
		Dishes.findByIdAndRemove(req.params.dishId, function (err, resp) {
			if (err) throw err;
        	res.json(resp);
    });
	});

	dishRouter.route('/:dishId/comments').get(function(req,res,next){
		
		Dishes.findById(req.params.dishId, function(err,dish){
			if(err) throw err;

			res.json(dish.comments);
		})
	})
	.post(function(req,res,next){
		
		Dishes.findById(req.params.dishId, function(err,dish){
			if(err) throw err;

			dish.comments.push(req.body);

			dish.save(function(err, dish){
				if(err) throw err;

				console.log('Updated Comments');

				res.json(dish);
			})
		});
	})
	.delete(function(req, res, next){
		Dishes.findById(req.params.dishId, function(err,dish){
			if(err) throw err;

			for(var i=(dish.comments.length-1); i>=0;i--){
				dish.comments.id(dish.comment[i]._id).remove();
			}
			dish.save(function(err,result){
				if(err) throw err;

				res.writeHead(200, {
					'Content-Type' : 'text/plain'
				});
				res.end('Deleted All Comments');
			})
		})
	});

	//Comments ID

	dishRouter.route('/:dishId/comments/:commentsId')

	.get(function(req,res,next){
		
		Dishes.findById(req.params.dishId, function(err,dish){
			if(err) throw err;

			res.json(dish.comments.id(req.params.commentId));
		})
	})
	.put(function(req,res,next){
		
		Dishes.findById(req.params.dishId, function(err,dish){
			if(err) throw err;

			dish.comments.id(req.params.commentId).remove();

			dish.comments.push(req.body);

			dish.save(function(err, dish){
				if(err) throw err;

				console.log('Updated Comments');

				res.json(dish);
			})
		});
	})
	.delete(function(req, res, next){
		Dishes.findById(req.params.dishId, function(err,dish){
			if(err) throw err;

			
			dish.comments.id(req.params.commentsId).remove();
			
			dish.save(function(err,resp){
				if(err) throw err;

				res.json(resp);
			});
		});
	});

	return dishRouter;

})();