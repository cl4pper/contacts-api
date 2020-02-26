const mongoose = require('mongoose');

module.exports = mongoose.model(
	'Users',
	new mongoose.Schema({
		username: {
			type: String,
			required: true
		},
		email: {
			type: String,
			require: true
		},
		password: {
			type: String,
			minlength: 6,
			require: true
		},
		active: {
			type: Boolean,
			require: true
		}
	})
);
