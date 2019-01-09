const {
  sendCreated
} = require('../../middleware');
const mongoose = require('mongoose');

const create = ({
  Artist
}) => async (req, res, next) => {
  try {
    let artistData = req.body;
    const newArtist = new Artist(artistData);

    const artist = await newArtist.save();
    console.log('new artist ', artist);

    return sendCreated(res, artist);
  } catch (err) {
    next(err);
  }
};

module.exports = create;