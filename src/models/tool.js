const mongoose = require('mongoose');

module.exports = mongoose.model(
	'CookingTools',
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
