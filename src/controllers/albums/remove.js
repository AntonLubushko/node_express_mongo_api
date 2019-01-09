const {
  sendDeleted
} = require('../../middleware');
const {
  NotFound
} = require('rest-api-errors');

const remove = ({
  Album
}) => async (req, res, next) => {
  try {
    const {
      id
    } = req.params;

    const album = await Album.remove({
      _id: id
    });

    console.log(' this is deleted album ', album)

    if (!album) {
      throw new NotFound(404, 'Album not found');
    }

    return sendDeleted(res);
  } catch (err) {
    next(err);
  }
};

module.exports = remove;