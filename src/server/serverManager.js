const express = require("express");
const routerConfig = require('../../router-config');
const api = require('../api');
const bodyParser = require("body-parser");
const config = require('../../config');

let app = express();

app.use(bodyParser.json({
	limit: routerConfig.bodyLimit
}));
app.use(bodyParser.urlencoded({
	extended: true
}));

// api routes
app.use('/', api(routerConfig));

class AppServer {
	constructor() {}

	start() {
		app.listen(config.PORT, () => {
			console.log(`API app started at port ${config.PORT}`);
		});
	}
}

let server = new AppServer();

module.exports = {
	server
};