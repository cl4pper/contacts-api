const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const User = mongoose.model(
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
			.min(6)
			.max(50)
			.required(),
		email: Joi.string()
			.min(6)
			.max(255)
			.required()
			.email(),
		password: Joi.string()
			.min(6)
			.max(255)
			.required()
	});

	return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
