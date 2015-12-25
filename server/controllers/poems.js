var Poem = require('../model/poem');

exports.listAll = function (req, res, next) {
    Poem.find({}, function (err, poems) {
        if (err) {
            return next(err);
        } else {
            res.json(poems);
        }
    });
}