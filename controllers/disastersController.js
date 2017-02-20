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
  // db.Disaster.save(function(err, disaster){
  //   if (err){
  //     console.log(err)
  //   }
  //   console.log("saved")
  // })
}

// GET /api/disasters/:location
function show(req, res) {
  db.Disaster.find({location: req.params.location}, function(err, disasters){
    if (err) { console.log("get disaster by location error"); }
    res.json(disasters);
  });
}

// GET all from one location
// function showSome(req, res) {
//   db.Disaster.find({location: req.params.location}, function(err, someDisasters){
//     if (err) { console.log("get disaster by name error"); }
//     res.json(someDisasters);
//   });
// }

// REMOVE /api/disasters/:name
function destroy(req, res) {
  db.Disaster.findOneAndRemove({name: req.params.name}, function(err, disasterToDelete){
    if (err) { console.log("get disaster by location error"); }
    res.json(disasterToDelete);
  });
}

// UPDATE /api/disasters/:id
// function update(req, res) {
//   db.Disaster.
// }

// EXPORT methods
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy

  // update: update
};