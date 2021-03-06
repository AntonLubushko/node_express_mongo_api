const {
  sendOne
} = require('../../middleware');
const {
  NotFound
} = require('rest-api-errors');

const get = ({
  Artist
}) => async (req, res, next) => {
  try {
    const {
      id
    } = req.params;

    const artist = await Artist.findOne({
      _id: id
    });

    if (!artist) {
      throw new NotFound(404, 'Artist not found');
    }

    return sendOne(res, artist);
  } catch (err) {
    next(err);
  }
};

module.exports = get;