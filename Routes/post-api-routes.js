// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the comments
    app.get("/api/comment", function (req, res) {
        var query = {};
        if (req.query.name_id) {
            query.NameId = req.query.name_id;
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Name
        db.Post.findAll({
            where: query,
            include: [db.Name]
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    // Get rotue for retrieving a single comment
    app.get("/api/comment/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Name
        db.Comment.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Name]
        }).then(function (dbComment) {
            res.json(dbComment);
        });
    });

    // POST route for saving a new post
    app.post("/api/comment", function (req, res) {
        db.Post.create(req.body).then(function (dbPost) {
            res.json(dbComment);
        });
    });

    // DELETE route for deleting posts
    app.delete("/api/comment/:id", function (req, res) {
        db.Comment.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbComment) {
            res.json(dbComment);
        });
    });

    // PUT route for updating posts
    app.put("/api/comment", function (req, res) {
        db.Comment.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbComment) {
                res.json(dbComment);
            });
    });
};