var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/gdp");

var Disaster = require('./disaster');

module.exports.Disaster = Disaster;