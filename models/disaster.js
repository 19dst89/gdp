var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DisasterSchema = new Schema({
  date: String,
  name: String,
  location: String,
  type: String,
  deathToll: Number,
  dmgCost: Number
});

var Disaster = mongoose.model('Disaster', DisasterSchema);

module.exports = Disaster;