const {
  sendList
} = require('../../middleware');

const getList = ({
  Album
}) => async (req, res, next) => {
  try {

    const {
      limit,
      offset,
      albumId
    } = req.query;

    let query = {};
    let options = {
      sort: {
        createdAt: -1
      }
    };

    if (albumId) {
      query.albumId = albumId;
    }

    if (limit) {
      query.limit = parseInt(limit);
    }

    if (offset) {
      options.offset = parseInt(offset);
    }

    const albums = await Album.paginate(query, options);
    return sendList(res, albums);
  } catch (err) {
    next(err);
  }
};

module.exports = getList;