const mongoose = require('mongoose');
const {
	schema
} = require('./schema');

const Artist = mongoose.model('Artist', schema);

module.exports = {
	Artist
};