const STATUSES = {
	SUCCESS: 200
};

const sendResponse = (res, data, status = STATUSES.SUCCESS) => {
	res.status(status).json(data).end();
}

const sendOne = (res, entity) => {
	if (!entity) {
		throw new NotFoundError();
	}

	return sendResponse(res, entity);
};
const sendList = (res, entityList) => sendResponse(res, entityList);

module.exports = {
	sendOne
};