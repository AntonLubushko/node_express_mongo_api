const _ = require('lodash');
const {
	sendUpdated
} = require('../../middleware');
const {
	NotFound
} = require('rest-api-errors');
const mongoose = require('mongoose');

const update = ({
	Artist
}) => async (req, res, next) => {
	try {
		let artistData = req.body;

		const {
			id
		} = req.params;
		const updatedArtist = await Artist.findOne({
			_id: id
		});

		if (!updatedArtist) {
			throw new NotFound(404, "Artist not found");
		}

		_.extend(updatedArtist, artistData);

		let artist = await updatedArtist.save();
		return sendUpdated(res, artist);
	} catch (err) {
		next(err);
	}
};

module.exports = update;