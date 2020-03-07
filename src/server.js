require('module-alias/register');
require('dotenv').config({
	path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

const { Ports } = require('@utils/constants');
const express = require('express');
const server = express();
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

// LOCAL VARIABLES
const PORT = 3000;

// ROUTES
const USERS_ROUTE = require('@routes/users');

// MONGODB CONFIG. ---------------------------- START
mongoose
	.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Connected to mongodb...'))
	.catch(err => console.error('NOT connect to mongobd!', err));
// MONGODB CONFIG. ---------------------------- END

server.use(express.json());

server.use('/api', [USERS_ROUTE]);

server.listen(PORT, () => {
	console.log('Server is running on PORT:', Ports.localPort);
});
