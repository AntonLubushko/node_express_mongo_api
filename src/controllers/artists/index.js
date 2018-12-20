const {
	Router: router
} = require('express');
const getList = require('./getList');
const get = require('./get.js');
const create = require('./create');

module.exports = (models) => {
	const api = router();

	api.get('/', getList(models));
	api.get('/:id', get(models));
	api.post('/', create(models));

	return api;
}