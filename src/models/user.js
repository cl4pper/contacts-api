const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

// LOCAL VARIABLES
const minLength = 6;
const minPasswordLength = 6;

const User = mongoose.model(
	'Users',
	new mongoose.Schema({
		username: {
			type: String,
			required: true,
			minlength: minLength,
			maxlength: 50
		},
		email: {
			type: String,
			require: true,
			minlength: minLength,
			maxlength: 255,
			unique: true
		},
		password: {
			type: String,
			require: true,
			minlength: 6,
			maxlength: 255
		},
		active: {
			type: Boolean,
			require: true
		}
	})
);

function validateUser(user) {
	const schema = Joi.object({
		username: Joi.string()
			.min(minLength)
			.max(50)
			.required(),
		email: Joi.string()
			.min(minLength)
			.max(255)
			.required()
			.email(),
		password: Joi.string()
			.min(minPasswordLength)
			.max(255)
			.required()
	});

	// return schema.validate(user);
	return Joi.assert(user, schema);
}

exports.User = User;
exports.validate = validateUser;
