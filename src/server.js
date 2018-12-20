const express = require("express");
const routerConfig = require('../router-config');
const api = require('./ api/index');
const bodyParser = require("body-parser");
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const {
	Artist
} = require("./models/artist");

const config = require("../config.js");

let app = express();

mongoose.set("debug", !config.IS_PRODUCTION);

app.use(bodyParser.json({
	limit: routerConfig.bodyLimit
}));
app.use(bodyParser.urlencoded({
	extended: true
}));

// api routes
app.use('/', api(routerConfig));

(async function() {
	try {
		let client = await mongoose.connect(config.MONGO_URL, {
			useNewUrlParser: true
		});
		// console.log('Promise ', client);
		// db = client;
		app.listen(config.PORT, () => {
			console.log(`API app started at port ${config.PORT}`);
		});
	} catch (err) {
		return console.log(err)
	}
})();