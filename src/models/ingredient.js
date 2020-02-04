const mongoose = require('mongoose');

module.exports = mongoose.model(
	'Ingredients',
	new mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		classification: {
			type: String,
			require: true
		},
		description: {
			type: String,
			require: false
		}
	})
);
