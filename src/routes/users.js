const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User, validateSignup, validateSignin } = require('@models/user');
const { Routes } = require('@constants');

// GET USERS
router.get(Routes.getUsers, async (req, res) => {
	try {
		const users = await User.find().select('-__v');
		res.status(200).json(users);
	} catch (err) {
		res.status(204).json({
			message: err.message
		});
	}
});

// GET AN USER
router.get(`${Routes.getUsers}/:id`, async (req, res) => {
	try {
		const user = await User.findById(req.params.id).select('-__v');
		res.status(200).json(user);
	} catch (err) {
		res.status(204).json({
			message: err.message
		});
	}
});

// USER SIGN UP
router.post(Routes.signupRoute, async (req, res) => {
	// CHECKS IF BODY REQUEST IS CORRECT
	const error = validateSignup(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// CHECKS IF EMAIL IS ALREADY IN USE BY ANOTHER ACCOUNT
	let user = await User.findOne({
		email: req.body.email
	});
	if (user) return res.status(400).send('Email already registered!!!');

	// TURN PASSWORD INTO A HASH
	user = new User({
		active: true,
		...req.body
	});
	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);

	await user.save();
	res.send(user);
});

// USER SIGN IN
router.post(Routes.signinRoute, async (req, res) => {
	// CHECKS IF BODY REQUEST IS CORRECT
	// const error = validateSignin(req.body);
	// if (error) return res.status(400).send('Invalid email or password.');

	// CHECKS IF EMAIL IS ALREADY IN USE BY ANOTHER ACCOUNT
	let user = await User.findOne({
		username: req.body.username
	});
	if (!user) return res.status(400).send('Invalid email or password.');

	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send('Invalid email or password.');

	res.send(user);
});

// UPDATING ACCOUNT

// BLOCK USER ACCOUNT

module.exports = router;
