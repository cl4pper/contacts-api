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
const AUTH_ROUTE = require('@routes/auth');

// MONGODB CONFIG. ---------------------------- START
mongoose
	.connect('mongodb://mongo:27017/node-api', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Connected to mongodb...'))
	.catch(err => console.error('NOT connect to mongodb!', err));
// MONGODB CONFIG. ---------------------------- END

server.use(express.json());

server.use('/api', [AUTH_ROUTE, USERS_ROUTE]);

server.listen(PORT, () => {
	console.log('Server is running on PORT:', Ports.localPort);
});
