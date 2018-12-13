const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const schema = new Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},
	surname: {
		type: String
	}
}, {
	timestamps: true
});

schema.set("toJSON", {
	virtuals: true
});
mongoosePaginate.paginate.options = {
	lean: true,
	limit: 5
};
schema.plugin(mongoosePaginate);

module.exports = {
	schema
};