/**
 * Created by alex on 24.12.15.
 */

var restify = require("restify");
var colors = require("colors");
var mongoose = require("mongoose");
var poemController = require('./controllers/poems');

var server = restify.createServer();

mongoose.connect('mongodb://localhost/gesichtgedicht');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'.red));
db.once('open', function () {
   console.log('connected to mongodb'.green);
});

server.get("/poems", poemController.listAll);
server.get("/random", poemController.getRandom);

server.listen(3000, function () {
    console.log('server listening at port 3000'.green);
});