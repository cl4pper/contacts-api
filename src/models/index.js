// USER MODEL
const UserModel = require('./user/user').User;
const validateSignup = require('./user/user').validateSignup;
const validateSignin = require('./user/user').validateSignin;

// REQUEST MODEL
const RequestModel = require('./requests/request').Request;

module.exports = {
	UserModel,
	validateSignup,
	validateSignin,
	RequestModel
};
