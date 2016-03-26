var Poem = require('../model/poem');

exports.listAll = function (req, res, next) {
    Poem.find({}, function (err, poems) {
        if (err) {
            return next(err);
        } else {
            res.json(poems);
        }
    });
};

exports.getRandom = function (req, res, next) {
    Poem.findRandom().limit(10).exec( function (err, poems) {
        if (err) {
            return next(err);
        } else {
            res.json(poems);
        }
    });
};