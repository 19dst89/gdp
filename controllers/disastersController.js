var db = require('../models');

// GET /api/disasters
function index(req, res) {
  db.Disaster.find({}, function(err, allDisasters){
    res.json(allDisasters);
  });
};

// POST /api/disasters
function create(req, res) {
  var newDisaster = new db.Disaster({
    date: req.body.date,
    name: req.body.name,
    location: req.body.location,
    type: req.body.type,
    deathToll: req.body.deathToll,
    dmgCost: req.body.dmgCost
  });

  newDisaster.save(function(err, disaster){
    if (err) {
        return console.log("save error: " + err);
    }
    console.log("saved", disaster);
    res.json(disaster);
  })
}

// GET /api/disasters/:location
function show(req, res) {
  db.Disaster.find({location: req.params.location}, function(err, disasters){
    if (err) { console.log("get disaster by location error"); }
    res.json(disasters);
  });
}


// REMOVE /api/disasters/:id
function destroy(req, res) {
  db.Disaster.findOneAndRemove({id: req.params.id}, function(err, disasterToDelete){
    if (err) { console.log("get disaster by location error"); }
    res.json(disasterToDelete);
  });
}

// GET /api/disasters/:id
function showByName(req, res) {
  db.Disaster.findOne({name: req.params.name}, function(err, foundDisaster){
    if (err) { console.log("get disaster by name error"); }
    res.json(foundDisaster);
  });
}

// UPDATE /api/disasters/:id
function update(req, res) {
  db.Disaster.findById(req.params.id, function(err, foundDisaster) {
    if(err) { console.log('disastersController.update error', err); }
    foundDisaster.date = req.body.date;
    foundDisaster.name = req.body.name;
    foundDisaster.location = req.body.location;
    foundDisaster.type = req.body.type;
    foundDisaster.deathToll = req.body.deathToll;
    foundDisaster.dmgCost = req.body.dmgCost;
    foundDisaster.save(function(err, savedDisaster) {
      if(err) { console.log('saving altered disaster failed'); }
      res.json(savedDisaster);
    });
  });
}

// Find disasters by location and type
function showByTypeAndLocation(req, res){
  db.Disaster.find({location: req.params.location, type: req.params.type}, function(err, disasters){
    if (err) { console.log("get disaster by type error"); }
    res.json(disasters);
  });
}

// EXPORT methods
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update,
  showByName: showByName,
  showByTypeAndLocation: showByTypeAndLocation
};







