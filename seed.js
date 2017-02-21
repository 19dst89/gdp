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
  },
  {
    date: "March 1, 1938",
    name: "Los Angeles Flood of 1938",
    location: "Los Angeles",
    type: "Flood",
    deathToll: 115,
    dmgCost: 400000000
  },
  {
    date: "October 3, 1962",
    name: "California Flood in 1962",
    location: "San Francisco",
    type: "Flood",
    deathToll: 0,
    dmgCost: 4000000
  },
  {
    date: "February 24, 1986",
    name: "Northern California Floods of February 1986",
    location: "San Francisco",
    type: "Flood",
    deathToll: 13,
    dmgCost: 400000000
  },
  {
    date: "January 10, 2005",
    name: "Los Angeles County Flood of 2005",
    location: "Los Angeles",
    type: "Flood",
    deathToll: 3,
    dmgCost: 400000000
  },
  {
    date: "August 13, 2014",
    name: "2014 New York Flood",
    location: "New York",
    type: "Flood",
    deathToll: 0,
    dmgCost: 35000000
  },
  {
    date: "May 24, 2015",
    name: "2015 Oklahoma Flood",
    location: "Oklahoma City",
    type: "Flood",
    deathToll: 58,
    dmgCost: 0
  },
  {
    date: "May 24, 2015",
    name: "2015 Oklahoma Tornadoes",
    location: "Oklahoma City",
    type: "Tornado",
    deathToll: 58,
    dmgCost: 0
  },
  {
    date: "October 19, 1983",
    name: "Hurricane Tico",
    location: "Oklahoma City",
    type: "Hurricane",
    deathToll: 0,
    dmgCost: 84000000
  },
  {
    date: "October 2, 1986",
    name: "Hurricane Paine",
    location: "Oklahoma City",
    type: "Hurricane",
    deathToll: 6,
    dmgCost: 350000000
  },
  {
    date: "September 23, 1938",
    name: "1938 New England Hurricane",
    location: "New York",
    type: "Hurricane",
    deathToll: 682,
    dmgCost: 306000000
  },
  {
    date: "November 2, 2012",
    name: "Hurricane Sandy",
    location: "New York",
    type: "Hurricane",
    deathToll: 233,
    dmgCost: 75000000000
  },
  {
    date: "October 12, 1894",
    name: "Hurricane Five of 1894 Atlantic Hurricanes",
    location: "New York",
    type: "Hurricane",
    deathToll: 10,
    dmgCost: 1000000
  },
  {
    date: "August 21, 2011",
    name: "Hurricane Irene",
    location: "New York",
    type: "Hurricane",
    deathToll: 10,
    dmgCost: 296000000
  },
  {
    date: "September 19, 1999",
    name: "Hurricane Floyd",
    location: "New York",
    type: "Hurricane",
    deathToll: 2,
    dmgCost: 16000000
  },
  {
    date: "October 10, 2016",
    name: "Hurricane Matthew",
    location: "Miami",
    type: "Hurricane",
    deathToll: 12,
    dmgCost: 0
  },
  {
    date: "October 27, 2005",
    name: "Hurricane Wilma",
    location: "Miami",
    type: "Hurricane",
    deathToll: 61,
    dmgCost: 20600000000
  },
  {
    date: "August 25, 2005",
    name: "Hurricane Katrina",
    location: "Miami",
    type: "Hurricane",
    deathToll: 14,
    dmgCost: 623000000
  },
  {
    date: "April 5, 1925",
    name: "1925 Miami Tornado",
    location: "Miami",
    type: "Tornado",
    deathToll: 5,
    dmgCost: 300000
  },
  {
    date: "February 28, 2001",
    name: "2001 Nisqually Earthquake",
    location: "Seattle",
    type: "Earthquake",
    deathToll: 1,
    dmgCost: 4000000000
  },
  {
    date: "April 29, 1965",
    name: "1965 Puget Sound Earthquake",
    location: "Seattle",
    type: "Earthquake",
    deathToll: 7,
    dmgCost: 12500000
  },
  {
    date: "April 13, 1949",
    name: "1949 Olympia Earthquake",
    location: "Seattle",
    type: "Earthquake",
    deathToll: 8,
    dmgCost: 25000000
  },
  {
    date: "December 12, 1969",
    name: "Kent Tornado",
    location: "Seattle",
    type: "Tornado",
    deathToll: 0,
    dmgCost: 0
  },
  {
    date: "October 18, 1954",
    name: "Hurricane Hazel",
    location: "Toronto",
    type: "Hurricane",
    deathToll: 81,
    dmgCost: 125100000
  },
  {
    date: "July 8, 2013",
    name: "2013 Southern Ontario Flash Flood",
    location: "Toronto",
    type: "Flood",
    deathToll: 0,
    dmgCost: 0
  },
  {
    date: "May 2, 1983",
    name: "1983 Southern Ontario Tornadoes",
    location: "Toronto",
    type: "Tornado",
    deathToll: 0,
    dmgCost: 1200000
  },
  {
    date: "August 14, 1984",
    name: "1984 Toronto Tornado",
    location: "Toronto",
    type: "Tornado",
    deathToll: 0,
    dmgCost: 0
  },
];

db.Disaster.remove({}, function(err, disasters){
  console.log("removed previous disasters")
  db.Disaster.create(disasterList, function(err, disasters){
    if(err) { return console.log (err); }
    console.log("created new disasters");
    process.exit();
  });
});