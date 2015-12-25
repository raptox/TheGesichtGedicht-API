/**
 * Created by alex on 24.12.15.
 */

var express = require("express");
var bodyParser = require("body-parser");
var colors = require("colors");
var mongoose = require("mongoose");
var app = express();

mongoose.connect('mongodb://localhost/gesichtgedicht');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'.red));
db.once('open', function () {
   console.log('connected to mongodb'.green);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function () {
    console.log("Listening on port %s...".green, server.address().port);
});