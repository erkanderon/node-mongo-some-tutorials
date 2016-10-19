var mongoose = require('mongoose'),
	assert = require('assert');

var Dishes = require('./models/dishes');
var Promos = require('./models/promotions');
var Leader = require('./models/leader');

var url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', function(){
	console.log('Connected correctly to the server');

	//create a new user
	Dishes.create({
		name: 'Utha',
		description: 'Test',
		image: 'images/img.jpg',
		category:"Film",
		label: 'Actor',
		price: 1200,
		comments: [{
			rating: 3,
			comment: 'This is insane',
			author: 'Matt Damon'
		}]
	}, function(err, dish){
		if (err) throw err;

		console.log('Dish created');
		console.log(dish);
		var id = dish._id;

		setTimeout(function(){
			Dishes.findByIdAndUpdate(id, {
				$set: {
					description: "Updated Test"
				}
			}, {new: true}
			).exec(function(err, dish){
				if(err) throw err;

				console.log('Updated Dish');
				console.log(dish);


				dish.comments.push({
					rating: 5,
					comment: 'Im getting a sinking feeling!',
					author: 'Leonardo Di Caprio'
				});
				dish.save(function(err,dish){
					console.log('Updated Comments');
					console.log(dish)
				})

				db.collection('dishes').drop(function(){
					db.close();
				});
			})
		},3000);
	});

	//Promotions

	Promos.create({
		name: 'Promo',
		description: 'Test',
		image: 'images/img.jpg',
		label: 'Actor',
		price: 1200,
		
	}, function(err, promo){
		if (err) throw err;

		console.log('Promo created');
		console.log(promo);
		var id = promo._id;

		setTimeout(function(){
			Promos.findByIdAndUpdate(id, {
				$set: {
					description: "Updated Test"
				}
			}, {new: true}
			).exec(function(err, promo){
				if(err) throw err;

				console.log('Updated Promo');
				console.log(promo);


				db.collection('promotions').drop(function(){
					db.close();
				});
			})
		},3000);
	});


	//Leader

	Leader.create({
		name: 'Peter Pan',
		designation: 'Chief Epicurious Officer',
		image: 'images/img.jpg',
		abbr: 'CEO',
		description: 'Our Ceo',
		
	}, function(err, leader){
		if (err) throw err;

		console.log('Leader created');
		console.log(leader);
		var id = leader._id;

		setTimeout(function(){
			Promos.findByIdAndUpdate(id, {
				$set: {
					description: "Updated Leader"
				}
			}, {new: true}
			).exec(function(err, Leader){
				if(err) throw err;

				console.log('Updated Leader');
				console.log(leader);


				db.collection('leader').drop(function(){
					db.close();
				});
			})
		},3000);
	});

});