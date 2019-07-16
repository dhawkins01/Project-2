var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  // Animal Search Results Page
  app.get("/search/animals", function(req, res) {
    res.render("animal_search");
  });

  // Shelter Search Page
  app.get("/search/shelters", function(req, res) {
    db.
    res.render("shelter_search",);
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
