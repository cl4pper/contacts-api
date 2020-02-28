const express = require('express');
const router = express.Router();
const { User, validate } = require('@models/user');

// ROUTE VARIABLES
const signupRoute = require('@constants').signupRoute;

// USER SIGN UP
router.post(signupRoute, async (req, res) => {
	const { error } = validate(req.body);
	if (error) {
		console.log(error);
		return res.status(400).send(error.details[0].message);
	}

	let user = await User.findOne({
		email: req.body.email
	});
	if (user) return res.status(400).send('Email already registered!!!');

	user = new User({
		active: true,
		...req.body
	});

	await user.save();
	res.send(user); // feedback for saved user
});

// USER SIGN IN

// UPDATING ACCOUNT

// BLOCK USER ACCOUNT

module.exports = router;
