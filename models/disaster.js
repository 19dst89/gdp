var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DisasterSchema = new Schema({
  name: String,
  date: String,
  deathToll: Number,
  dmgCost: Number,
});

var Disaster = mongoose.model('Disaster', DisasterSchema);

module.exports = Song;