const {
	notFound
} = require('./not-found');
const {
	sendOne,
	sendList,
	sendCreated
} = require('./requests-helpers');

module.exports = {
	sendOne,
	sendList,
	sendCreated,
	notFound
};