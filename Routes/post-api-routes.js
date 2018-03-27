// Dependencies
// =============================================================

// Requiring our models
var eventArray = require("../models/format")
// var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("../public/layouts/form",function(req, res) {
    res.json(eventArray);
  });

  app.post("../public/layouts/form", function(req, res) {
      eventArray.push(req.body);
      res.json(true);
    });
};

//
  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   eventArray = [];
  //
  //   console.log(eventArray);
  // });


    // // GET route for getting all of the events
    // app.get("/api/events", function (req, res) {
    //     var query = {};
    //     if (req.query.id) {
    //         query.Event_Name = req.query.id;
    //     }
    //     // Here we add an "include" property to our options in our findAll query
    //     // We set the value to an array of the models we want to include in a left outer join
    //     // In this case, just db.Name
    //     db.events_DB.findAll({
    //         where: query,
    //         include: [db.events]
    //     }).then(function (dbevent) {
    //         res.json(dbevent);
    //     });
    // });
    //
    // // Get rotue for retrieving a single events
    // app.get("/api/events/:id", function (req, res) {
    //     // Here we add an "include" property to our options in our findOne query
    //     // We set the value to an array of the models we want to include in a left outer join
    //     // In this case, just db.Name
    //     db.events.findOne({
    //         where: {
    //             id: req.params.id
    //         },
    //         include: [db.events]
    //     }).then(function (events_DB) {
    //         res.json(events_DB);
    //     });
    // });
    //
    // // POST route for saving a new post
    // app.post("/api/events", function (req, res) {
    //     db.events.create(req.body).then(function (events_DB) {
    //         res.json(events_DB);
    //     });
    // });
    //
    // // DELETE route for deleting posts
    // app.delete("/api/events/:id", function (req, res) {
    //     db.events.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (events_DB) {
    //         res.json(events_DB);
    //     });
    // });
    //
    // // PUT route for updating posts
    // app.put("/api/events", function (req, res) {
    //     db.events.update(
    //         req.body,
    //         {
    //             where: {
    //                 id: req.body.id
    //             }
    //         }).then(function (events_DB) {
    //             res.json(events_DB);
    //         });
    // });




// Dependencies
// =============================================================

// Requiring our models
// var db = require("../models");

// Routes
// =============================================================
// module.exports = function (app) {

  // GET route for getting all of the comments
//   app.get("/api/comment", function (req, res) {
//       var query = {};
//       if (req.query.name_id) {
//           query.NameId = req.query.name_id;
//       }
//       // Here we add an "include" property to our options in our findAll query
//       // We set the value to an array of the models we want to include in a left outer join
//       // In this case, just db.Name
//       db.Post.findAll({
//           where: query,
//           include: [db.Name]
//       }).then(function (dbPost) {
//           res.json(dbPost);
//       });
//   });
//
//   // Get rotue for retrieving a single comment
//   app.get("/api/comment/:id", function (req, res) {
//       // Here we add an "include" property to our options in our findOne query
//       // We set the value to an array of the models we want to include in a left outer join
//       // In this case, just db.Name
//       db.Comment.findOne({
//           where: {
//               id: req.params.id
//           },
//           include: [db.Name]
//       }).then(function (dbComment) {
//           res.json(dbComment);
//       });
//   });
//
//   // POST route for saving a new post
//   app.post("/api/events", function (req, res) {
//       db.Event.create(req.body).then(function (event) {
//           res.json(event);
//       });
//   });
//
//   // DELETE route for deleting posts
//   app.delete("/api/comment/:id", function (req, res) {
//       db.Comment.destroy({
//           where: {
//               id: req.params.id
//           }
//       }).then(function (dbComment) {
//           res.json(dbComment);
//       });
//   });
//
//   // PUT route for updating posts
//   app.put("/api/comment", function (req, res) {
//       db.Comment.update(
//           req.body,
//           {
//               where: {
//                   id: req.body.id
//               }
//           }).then(function (dbComment) {
//               res.json(dbComment);
//           });
//   });
// };
// I changed models/comments.js to models/events.js
// event*
// This is the models/event.js
// module.exports = function (sequelize, DataTypes) {
//   var Event = sequelize.define("Event", {
//       eventName: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           validate: {
//               len: [1, 15]
//           }
//       },
//       eventLocation: {
//           type: DataTypes.STRING,
//           allowNull: false
//       },
//       eventDate: {
//           type: DataTypes.DATE,
//           validate:{
//               isNumeric: true,
//               len: [10]
//           }
//       }
//   });
//
//
//
//   // Event.associate = function (models) {
//   //     // We're saying that a Post should belong to an Name
//   //     // A Post can't be created without a Name due to the foreign key constraint
//   //     Event.belongsTo(models.Name, {
//   //         foreignKey: {
//   //             allowNull: false
//   //         }
//   //     });
//   // };
//
//   return Event;
// };
