var mongoose = require('mongoose');
var random = require('mongoose-random');

var PoemSchema = new mongoose.Schema({
    autor: {type: String, required: true},
    titel: {type: String, required: true},
    text: {type: String, required: true}
}, {
    collection: 'Tornoreanu'
});

PoemSchema.plugin(random, {path: 'r'});
module.exports = mongoose.model('Poem', PoemSchema);
