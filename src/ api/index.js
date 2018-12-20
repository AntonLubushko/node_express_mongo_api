const express = require('express');
const {
	notFound
} = require('../middleware/index');
const {
	Artist
} = require('../models/artist');
const artists = require('../controllers/artists');

const models = {
	Artist
};

const routersInit = (config) => {
	const router = express();

	/**
	 * API
	 */
	router.use('/artists', artists(models, {
		config
	}));

	/**
	 * Show 404 answer
	 */
	router.use('*', notFound);

	return router;
};

module.exports = routersInit;