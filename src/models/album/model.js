const mongoose = require('mongoose');
const {
	schema
} = require('./schema.js');

const Album = mongoose.model('Album', schema);

module.exports = {
	Album
};