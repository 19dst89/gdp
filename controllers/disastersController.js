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
  db.Disaster.save(function(err, disaster){
    if (err){
      console.log(err)
    }
    console.log("saved")
  })
}

// GET /api/disasters/:name
// function show(req, res) {
//   db.Disaster.findOne(req.params.name, function(err, oneDisaster){
//     res.json(oneDisaster);
//   });
// }

// REMOVE /api/disasters/:name
// function destroy(req, res) {
//   db.Disaster.findByOneAndRemove(req.params.name, function(err, disasterToDelete){
//     res.json(disasterToDelete);
//   });
// }

// UPDATE /api/disasters/:id
// function update(req, res) {
//   db.Disaster.
// }

// EXPORT methods
module.exports = {
  index: index,
  create: create
  // show: show,
  // destroy: destroy
  // update: update
};