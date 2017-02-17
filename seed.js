var db = require("./models")

var disasterList = [
  {
    date: "October 17, 1989",
    name: "1989 Loma Prieta",
    deathToll: 63,
    dmgCost: 6000000000,
  },
  {
    date: "March 22, 1957",
    name: "1957 San Francisco earthquake",
    deathToll: 1,
    dmgCost: 1000000
  },
  {
    date: "October 21, 1868",
    name: "1868 Hayward earthquake",
    deathToll: 30,
    dmgCost: 350000000
  },
  {
    date: "June 1838",
    name: "1838 San Andreas earthquake",
    deathToll: 0,
    dmgCost: 0
  },
  {
    date: "April 24, 1984",
    name: "1984 Morgan Hill earthquake",
    deathToll: 0,
    dmgCost: 8000000
  },
  {
    date: "August 6, 1979",
    name: "1979 Coyote Lake earthquake",
    deathToll: 0,
    dmgCost: 500000
  },
  {
    date: "October 1, 1969",
    name: "1969 Santa Rosa earthquake",
    deathToll: 1,
    dmgCost: 8350000
  },
  {
    date: "August 24, 2014",
    name: "2014 South Napa earthquake",
    deathToll: 1,
    dmgCost: 1000000000
  },
  {
    date: "September 3, 2000",
    name: "2000 Yountville earthquake",
    deathToll: 0,
    dmgCost: 50000000
  }
];

db.Disaster.remove({}, function(err, disasters){
  db.Disaster.create(disasterList, function(err, disasters){
    if(err) { return console.log (err); }
  });
});