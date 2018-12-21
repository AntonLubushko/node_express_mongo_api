const config = require('../config');
const {
	mongoManager
} = require('./mongo');

const {
	server
} = require('./server/index');


(async () => {
	try {
		await mongoManager.connect();
		server.start();
	} catch (err) {
		return console.log(err)
	}
})();