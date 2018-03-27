// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var sequelize = require("sequelize");
var mysql2 = require("mysql");
require('dotenv').config();

var app = express();
var PORT = process.env.PORT || 8080;

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql2.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql2.createConnection(
    {
      host: 'localhost',
      user:'root',
      password: '',
      database: 'events_DB'
    });
};

// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Static directory
app.use(express.static("public"));

require("./routes/post-api-routes")(app);
require("./routes/html-routes")(app);


// Routes
// =============================================================


// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
// });
