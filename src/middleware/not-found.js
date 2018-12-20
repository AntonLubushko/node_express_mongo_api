const notFound = function(req, res, next) {
	return res.status(404).json({
		code: 404,
		message: "Incorrect request"
	});
};

module.exports = {
	notFound
};