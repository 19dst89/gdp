var db = require("./models")

var disasterList = [
  {
    date: "October 17, 1989",
    name: "1989 Loma Prieta",
    location: "San Francisco",
    type: "Earthquake",
    deathToll: 63,
    dmgCost: 6000000000
  },
  {
    date: "March 22, 1957",
    name: "1957 San Francisco Earthquake",
    location: "San Francisco",
    type: "Earthquake",
    deathToll: 1,
    dmgCost: 1000000
  },
  {
    date: "October 21, 1868",
    name: "1868 Hayward Earthquake",
    location: "San Francisco",
    type: "Earthquake",
    deathToll: 30,
    dmgCost: 350000000
  },
  {
    date: "June 1838",
    name: "1838 San Andreas Earthquake",
    location: "San Francisco",
    type: "Earthquake",
    deathToll: 0,
    dmgCost: 0
  },
  {
    date: "April 24, 1984",
    name: "1984 Morgan Hill Earthquake",
    location: "San Francisco",
    type: "Earthquake",
    deathToll: 0,
    dmgCost: 8000000
  },
  {
    date: "August 6, 1979",
    name: "1979 Coyote Lake Earthquake",
    location: "San Francisco",
    type: "Earthquake",
    deathToll: 0,
    dmgCost: 500000
  },
  {
    date: "October 1, 1969",
    name: "1969 Santa Rosa Earthquake",
    location: "San Francisco",
    type: "Earthquake",
    deathToll: 1,
    dmgCost: 8350000
  },
  {
    date: "August 24, 2014",
    name: "2014 South Napa Earthquake",
    location: "San Francisco",
    type: "Earthquake",
    deathToll: 1,
    dmgCost: 1000000000
  },
  {
    date: "September 3, 2000",
    name: "2000 Yountville Earthquake",
    location: "San Francisco",
    type: "Earthquake",
    deathToll: 0,
    dmgCost: 50000000
  },
  {

    date: "October 1, 1969",
    name: "1969 Santa Rosa Earthquakes",
    location: "San Francisco",
    type: "Earthquake",
    deathToll: 1,
    dmgCost: 870000000
  }
];

db.Disaster.remove({}, function(err, disasters){
  console.log("removed previous disasters")
  db.Disaster.create(disasterList, function(err, disasters){
    if(err) { return console.log (err); }
    console.log("created new disasters");
    process.exit();
  });
});