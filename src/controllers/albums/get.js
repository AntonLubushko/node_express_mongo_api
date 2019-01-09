const {
  sendOne
} = require('../../middleware');
const {
  NotFound
} = require('rest-api-errors');

const get = ({
  Album
}) => async (req, res, next) => {
  try {
    const {
      id
    } = req.params;

    const album = await Album.findOne({
      _id: id
    });

    if (!album) {
      throw new NotFound(404, 'Album not found');
    }

    return sendOne(res, album);
  } catch (err) {
    console.log("error is  ", err)
    next(err);
  }
};

module.exports = get;