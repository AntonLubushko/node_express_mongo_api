let express = require("express");
let bodyParser = require("body-parser");
let MongoClient = require("mongodb").MongoClient;
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const {
	Artist
} = require("./models/artist");

const config = require("../config.js");

let app = express();

let routes = require("./routes");

mongoose.set("debug", !config.IS_PRODUCTION);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use("/api/auth", routes.auth);
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.send({
		message: err.message,
		err: !config.IS_PRODUCTION ? err : {},
		title: "Ooops.."
	})
});

app.get("/", (req, res) => {
	res.send("You are on a private territory, bitch");
});

app.get("/artists", async (req, res) => {
	try {
		let result = await Artist.find({});
		res.send(result);
	} catch (err) {
		res.sendStatus(500);
	}
});

app.get("/artists/:id", async (req, res) => {
	try {
		const {
			id
		} = req.params;


		let result = await Artist.findOne({
			_id: id
		});
		res.send(result);
	} catch (err) {
		res.sendStatus(404);
	}
});

app.post("/artists", async (req, res) => {
	try {
		let {
			name,
			surname
		} = req.body;
		let artist = {
			name: name,
			surname: surname
		};
		let result = await Artist.create(artist);
		res.send(result);
	} catch (err) {
		res.sendStatus(500);
	}
});



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