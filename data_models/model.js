const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var modelSchema = new Schema({
	name: String
});

module.exports = mongoose.model('Model', modelSchema);