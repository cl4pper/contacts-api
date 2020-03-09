const mongoose = require('mongoose');

const Request = mongoose.model(
	'Requests',
	new mongoose.Schema({
		madeBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Users'
		},
		targetUser: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Users'
		},
		status: {
			type: String,
			enum: ['active', 'closed', 'rejected']
		},
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

// exports.Request = Request;
module.exports = {
	Request
};
