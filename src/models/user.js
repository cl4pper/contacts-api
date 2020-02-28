const mongoose = require('mongoose');

module.exports = mongoose.model(
	'Users',
	new mongoose.Schema({
		username: {
			type: String,
			required: true,
			minlength: 6,
			maxlength: 50
		},
		email: {
			type: String,
			require: true,
			minlength: 6,
			maxlength: 255,
			unique: true
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
