var db = require('../models');

// GET /api/disasters
function index(req, res) {
  db.Disaster.find({}, function(err, allDisasters){
    res.json(allDisasters);
  });
};

// POST /api/disasters
function create(req, res) {
  db.Disaster.create(req.body, function(err, newDisaster){
    if (err){
      console.log(err)
    }
    res.json(newDisaster)
  });
}

// GET /api/disasters/:location
function show(req, res) {
  db.Disaster.find({location: req.params.location}, function(err, disasters){
    if (err) { console.log("get disaster by location error"); }
    res.json(disasters);
  });
}


// REMOVE /api/disasters/:name
function destroy(req, res) {
  db.Disaster.findOneAndRemove({name: req.params.name}, function(err, disasterToDelete){
    if (err) { console.log("get disaster by location error"); }
    res.json(disasterToDelete);
  });
}

// GET /api/disasters/:name
function showByName(req, res) {
  db.Disaster.findOne({name: req.params.name}, function(err, foundDisaster){
    if (err) { console.log("get disaster by name error"); }
    res.json(foundDisaster);
  });
}

// UPDATE /api/disasters/:name
function update(req, res) {
  db.Disaster.findOne({name: req.params.name}, function(err, foundDisaster) {
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

// EXPORT methods
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update,
  showByName: showByName,
};