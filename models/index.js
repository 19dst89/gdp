var mongoose = require("mongoose");
mongoose.connect("mongod://localhost/gdp");

var Disaster = require('./disaster');

module.exports.Disaster = Disaster;