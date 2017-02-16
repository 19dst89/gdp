var db = require("./models")

var disasterList = [
  {
    date: "October 17, 1989",
    name: "1989 Loma Prieta",
    deathToll: 63,
    dmgCost: 6000000000,
  },
  {
    date: "October 17, 1990",
    name: "1989 Loma Prieta",
    deathToll: 63,
    dmgCost: 6000000000,
  }
];

db.Disaster.remove({}, function(err, disasters){
  db.Disaster.create(disasterList, function(err, disasters){
    if(err) { return console.log (err); }
  });
});