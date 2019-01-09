const {
  Router: router
} = require('express');
const getList = require('./getList');
const get = require('./get');
const create = require('./create');
const update = require('./update');
const remove = require('./remove');

module.exports = (models) => {
  const api = router();
  api.get('/', getList(models));
  api.get('/:id', get(models));
  api.post('/', create(models));
  api.put('/:id', update(models));
  api.delete('/:id', remove(models));
  return api;
}