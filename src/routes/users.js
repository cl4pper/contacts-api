const express = require('express');
const router = express.Router();
const Users = require('@models/user');

// ROUTE VARIABLES
const signupRoute = require('@constants').signupRoute;

// USER SIGN UP
router.post(signupRoute, async (req, res) => {
	const item = new Users({
		...req.body,
		active: true
	});
	try {
		const newUser = await item.save();
		res.status(201).json(newUser);
	} catch (err) {
		res.status(400).json({
			message: err.message
		});
	}
});

// USER SIGN IN

// UPDATING ACCOUNT

// BLOCK USER ACCOUNT

module.exports = router;
