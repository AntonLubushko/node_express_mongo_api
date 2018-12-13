const {
	Router: router
} = require('express');
const getList = require('./getList');
const get = require('./get');

module.exports = (models) => {
	const api = router();

	api.get('/', getList(models));
	api.get('/:id', get(models));

}