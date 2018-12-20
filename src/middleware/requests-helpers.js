const {
	NotFoundError
} = require('rest-api-errors');

const STATUSES = {
	SUCCESS: 200,
	CREATED: 201,
	NOT_FOUND: 404
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
const sendCreated = (res, entity) => sendResponse(res, entity, STATUSES.CREATED);

module.exports = {
	sendOne,
	sendList,
	sendCreated
};