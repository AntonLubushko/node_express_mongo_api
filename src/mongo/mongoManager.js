const config = require('../../config');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;
mongoose.set("debug", !config.IS_PRODUCTION);

class MongoManager {
	constructor() {}

	connect() {
		return mongoose.connect(config.MONGO_URL, {
			useNewUrlParser: true
		});
	}
}

const mongoManager = new MongoManager();

module.exports = {
	mongoManager
};