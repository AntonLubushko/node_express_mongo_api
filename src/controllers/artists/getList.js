const {
	sendList
} = require('../../middleware/index');

const getList = ({
	Artist
}) => async (req, res, next) => {
	try {

		const {
			limit,
			offset,
			artistId
		} = req.query;

		let query = {};
		let options = {
			sort: {
				createdAt: -1
			}
		};

		if (artistId) {
			query.artistId = artistId;
		}

		if (limit) {
			query.limit = parseInt(limit);
		}

		if (offset) {
			options.offset = parseInt(offset);
		}

		const artists = await Artist.paginate(query, options);
		return sendList(res, artists);
	} catch (err) {
		next(err);
	}
};

module.exports = getList;