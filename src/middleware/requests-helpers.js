const {
	NotFoundError
} = require('rest-api-errors');

const STATUSES = {
	SUCCESS: 200,
	CREATED: 201,
	NO_CONTENT: 204,
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
const sendUpdated = (res, updatedEntity) => sendResponse(res, updatedEntity, STATUSES.SUCCESS);
const sendDeleted = res => sendResponse(res, null, STATUSES.NO_CONTENT);

module.exports = {
	sendOne,
	sendList,
	sendCreated,
	sendUpdated,
	sendDeleted
};