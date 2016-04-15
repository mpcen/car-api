const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var carSchema = new Schema({
	name: String,
	model: String
});

module.exports = mongoose.model('Car', carSchema);