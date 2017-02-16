var db = require("./models")

var disasterList = [
  {
    date: "October 17, 1989",
    name: "1989 Loma Prieta",
    deathToll: 63,
    dmgCost: 6000000000,
  }
];

db.Disaster.create(disasterList, function(err, disasters){
  if(err) { return console.log (err); }
  console.log("created disaster");
});
