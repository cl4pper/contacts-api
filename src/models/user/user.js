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
			unique: true,
			minlength: minLength,
			maxlength: 50
		},
		password: {
			type: String,
			require: true,
			minlength: 6,
			maxlength: 255
		},
		email: {
			type: String,
			require: true,
			unique: true,
			minlength: minLength,
			maxlength: 255
		},
		phonenumber: {
			type: String,
			required: true,
			minlength: 9
		},
		info: {
			type: String,
			maxlength: 255
		},
		active: {
			type: Boolean,
			require: true
		},
		photo: String,
		createdAt: {
			type: Date,
			required: true
		},
		updatedAt: {
			type: Date,
			required: true
		}
	})
);

// VALIDATE REQUEST BODY FOR SIGN UP
function validateSignup(user) {
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
		phonenumber: Joi.string().min(9),
		password: Joi.string()
			.min(minPasswordLength)
			.max(255)
			.required()
	});

	// return schema.validate(user);
	return Joi.assert(user, schema);
}

// VALIDATE SIGN UP REQUEST BODY
function validateSignin(user) {
	const schema = Joi.object({
		username: Joi.string()
			.min(minLength)
			.max(50)
			.required(),
		password: Joi.string()
			.min(minPasswordLength)
			.max(255)
			.required()
	});

	return Joi.assert(user, schema);
}

// exports.User = User;
// exports.validateSignup = validateSignup;
// exports.validateSignin = validateSignin;

module.exports = {
	User,
	validateSignup,
	validateSignin
};
