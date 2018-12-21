const {
	sendDeleted
} = require('../../middleware');

const remove = ({
	Artist
}) => async (req, res, next) => {
	try {
		const {
			id
		} = req.params;
		await Artist.remove({
			_id: id
		});
		return sendDeleted(res);
	} catch (err) {
		next(err);
	}
};

module.exports = remove;