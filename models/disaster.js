var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DisasterSchema = new Schema({
  date: String,
  name: String,
  deathToll: Number,
  dmgCost: Number,
  //type:
  location: String
});

var Disaster = mongoose.model('Disaster', DisasterSchema);

module.exports = Disaster;