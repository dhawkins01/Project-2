var db = require("../models");

module.exports = function(app) {
  // Get all shelters
  app.get("/api/shelters", function(req, res) {
    db.Shelters.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/shelters/:id", function(req, res) {
    // Find one shelter with the id in req.params.id and return them to the user with res.json
    db.Shelters.findOne({
      where: {
        shelter_id: req.params.id
      }
    }).then(function(dbShelter) {
      console.log(req.params.id);
      res.json(dbShelter);
      console.log(dbShelter);
    });
  });
  app.post("/api/shelterSearch", function(req, res) {
    console.log(req.body);
    db.Shelters.findAll({
      where: {
        shelter_state: req.body.state,
        shelter_kill: req.body.type,
        shelter_rating: req.body.rating
        }
    }).then(function(data) {
      // We have access to the new todo as an argument inside of the callback function
      console.log(data);
      res.json(data);
    });
  });
};
