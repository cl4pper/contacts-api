const express = require('express');
const router = express.Router();
const { User } = require('@models/user');
const { Routes } = require('@constants');

// GET USERS
router.get(Routes.getUsers, async (req, res) => {
	try {
		const users = await User.find().select('-__v');
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({
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
		res.status(500).json({
			message: err.message
		});
	}
});

// CLEAR USERS
router.delete(Routes.deleteUsers, async (req, res) => {
	try {
		await User.find().deleteMany();
		res.status(200).send('Deleted all.');
	} catch (err) {
		res.status(400).json({
			message: err.message
		});
	}
});

// UPDATING ACCOUNT

// BLOCK USER ACCOUNT

module.exports = router;
