const {
	sendOne
} = require('../../middleware');

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

		console.log('artist id', id)

		if (!artist) {
			throw new NotFound(404, 'Artist not found');
		}
		console.log('artist ', artist)

		return sendOne(res, artist);
	} catch (err) {
		next(err);
	}
};

module.exports = get;