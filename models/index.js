var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/gdp" );

var Disaster = require('./disaster');

module.exports.Disaster = Disaster;