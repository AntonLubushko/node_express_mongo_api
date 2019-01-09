const _ = require('lodash');
const {
  sendUpdated
} = require('../../middleware');
const {
  NotFound
} = require('rest-api-errors');
const mongoose = require('mongoose');

const update = ({
  Album
}) => async (req, res, next) => {
  try {
    let albumData = req.body;

    const {
      id
    } = req.params;
    const updatedAlbum = await Album.findOne({
      _id: id
    });

    if (!updatedAlbum) {
      throw new NotFound(404, "Album not found");
    }

    _.extend(updatedAlbum, albumData);

    let album = await updatedAlbum.save();
    return sendUpdated(res, album);
  } catch (err) {
    next(err);
  }
};

module.exports = update;