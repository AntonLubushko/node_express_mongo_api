const _ = require('lodash');
const {
	sendCreated
} = require('../../middleware/index');
const mongoose = require('mongoose');

const create = ({
	Artist
}) => async (req, res, next) => {
	try {
		let artistData = req.body;
		// artistData.artistId = mongoose.Types.ObjectId(artistData.artistId);
		const newArtist = new Artist(artistData);

		const artist = await newArtist.save();
		console.log('new artist ', artist);

		return sendCreated(res, artist);
	} catch (err) {
		next(err);
	}
};

module.exports = create;