const express = require('express');
const router = express.Router();
const { User } = require('@models/user');
const { Routes } = require('@utils/constants');
const { defaultReturn } = require('@utils/methods');

// GET USERS
router.get(Routes.getUsers, async (req, res) => {
	try {
		const users = await User.find().select('-__v');
		res.json(defaultReturn({ status: 200, data: users }));
	} catch (err) {
		res.json(defaultReturn({ status: 500, error: err.message }));
	}
});

// GET AN USER
router.get(`${Routes.getUsers}/:id`, async (req, res) => {
	try {
		const user = await User.findById(req.params.id).select('-__v');
		res.json(defaultReturn({ status: 200, data: user }));
	} catch (err) {
		res.json(defaultReturn({ status: 500, error: err.message }));
	}
});

// DELETE USER
router.delete(`${Routes.deleteUsers}/:id`, async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (user) await user.remove();

		res.status(200).send('User deleted.');
	} catch (err) {
		res.json(defaultReturn({ status: 500, error: err.message }));
	}
});

// CLEAR USERS
router.delete(Routes.deleteUsers, async (req, res) => {
	try {
		await User.find().deleteMany();
		res.status(200).send('Deleted all.');
	} catch (err) {
		res.json(defaultReturn({ status: 500, error: err.message }));
	}
});

// UPDATING ACCOUNT

// BLOCK USER ACCOUNT

module.exports = router;
