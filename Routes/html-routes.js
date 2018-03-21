// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads events.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // bookstore route loads bookstore.html
    app.get("/babies", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/babies.html"));
    });

    // amusmementpark route loads amusmementpark.html
    app.get("/children", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/children.html"));
    });

    // library route loads library.html
    app.get("/parents", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/parents.html"));
    });

    // museum route loads museum.html
    app.get("/museum", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/museum.html"));
    });

  
};
