var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;




var promoSchema = new Schema({

	name: {
		type: String,
		unique: true
	},
	image: {
		type: String
	},
	label: {
		type: String
	},
	price: {
		type: Currency
	},
	description: {
		type: String
	}
	

});

var Promos = mongoose.model('Promo', promoSchema);

module.exports = Promos;