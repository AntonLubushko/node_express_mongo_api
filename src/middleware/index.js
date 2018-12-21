const {
	notFound
} = require('./not-found');
const {
	sendOne,
	sendList,
	sendCreated,
	sendUpdated,
	sendDeleted
} = require('./requests-helpers');

module.exports = {
	sendOne,
	sendList,
	sendCreated,
	sendUpdated,
	sendDeleted,
	notFound
};