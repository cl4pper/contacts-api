const mongoose = require('mongoose');

const RecipeIgredient = new mongoose.Schema({
	quantity: {
		type: Number,
		required: true
	},
	ingredient: {
		type: mongoose.Schema.Types.ObjectId
	}
});

module.exports = mongoose.model(
	'Recipes',
	new mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		ingredients: {
			type: [RecipeIgredient],
			required: false
		},
		tools: {
			type: [mongoose.Schema.Types.ObjectId],
			require: false
		},
		instructions: {
			type: String,
			require: true
		},
		description: {
			type: String,
			require: false
		}
	})
);
