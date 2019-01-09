const express = require('express');
const {
  notFound
} = require('../middleware/index');
const {
  Artist
} = require('../models/artist');
const {
  Album
} = require('../models/album');
const artists = require('../controllers/artists');
const albums = require('../controllers/albums');

const models = {
  Artist,
  Album
};

const routersInit = (config) => {
  const router = express();

  /**
   * API
   */
  router.use('/artists', artists(models, {
    config
  }));
  router.use('/albums', albums(models, {
    config
  }));

  /**
   * Show 404 answer
   */
  router.use('*', notFound);

  return router;
};

module.exports = routersInit;