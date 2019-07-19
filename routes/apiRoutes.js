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
      var obj = {
        data: data
      };
      res.render("example", obj);  
    });
  });

  app.post("/api/animalSearch", function(req, res) {
    db.Pets.findAll({
      where: {
        pet_species: req.body.species,
        // pet_state: req.body.state,
        pet_gender: req.body.gender,
        pet_age: req.body.age
      },
      include: [{
        model: db.Shelters,
        where: { 
        // shelter_id: shelter_id,
        shelter_state: req.body.state
        }
       }]
     }).then(function(data) {
       var animals = [];
        // console.log(data);
        console.log(data[0].dataValues.pet_name);
        console.log(data[0].dataValues.pet_species);
        console.log(data[0].dataValues.pet_age);
        console.log(data[0].dataValues.pet_gender);
        console.log(data[0].Shelter.shelter_state);

        for (var i = 0; i< data.length; i++){
          var animal = {
            petName: data[i].dataValues.pet_name,
            petSpecies: data[i].dataValues.pet_species,
            petAge: data[i].dataValues.pet_age,
            petGender: data[i].dataValues.pet_gender,
            petState: data[i].Shelter.shelter_state
          }
        animals.push(animal);
      }
        console.log(animals);
        // console.log(data.shelter_state);
          // res.json(data);
      res.json(animals);
 });
});
}