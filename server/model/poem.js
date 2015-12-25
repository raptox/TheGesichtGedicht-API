var mongoose = require('mongoose');

var PoemSchema = new mongoose.Schema({
    autor: {type: String, required: true},
    titel: {type: String, required: true},
    text: {type: String, required: true}
}, {
    collection: 'Tornoreanu'
});

module.exports = mongoose.model('Poem', PoemSchema);
