var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/events", function(req, res) {
    db.events.findAll({}).then(function(dbAuthor) {
      res.json(eventsDB);
    });
  });

  app.get("/api/events/:id", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.events.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbName) {
      res.json(dbName);
    });
  });

  app.post("/api/events", function(req, res) {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.Author.create(req.body).then(function(dbName) {
      res.json(dbName);
    });
  });

  app.delete("/api/events/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbName);
    });
  });
};
