const {
	sendOne
} = require();

const get = ({
	Artist
}) => async (req, res, next) => {
	try {
		const {
			id
		} = req.params;
		const artist = Artist.findOne({
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