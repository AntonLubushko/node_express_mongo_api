const {
  sendCreated
} = require('../../middleware');
const mogoose = require('mongoose');

const create = ({
  Album
}) => async (req, res, next) => {
  try {
    let albumData = req.body;
    const newAlbum = new Album(albumData);

    const album = await newAlbum.save();
    console.log(' new album ', album);

    return sendCreated(res, album);
  } catch (err) {
    next(err);
  }
};

module.exports = create;