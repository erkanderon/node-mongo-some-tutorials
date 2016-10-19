var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var leaderSchema = new Schema({

	name: {
		type: String,
		unique: true
	},
	image: {
		type: String
	},
	designation: {
		type: String
	},
	abbr: {
		type: String
	},
	description: {
		type: String
	}
	

});

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;