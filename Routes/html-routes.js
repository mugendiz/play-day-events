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
        res.sendFile(path.join(__dirname, "../public/assets/layouts/index.html"));
    });

    // index route loads events.html
    app.get("/index", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/layouts/index.html"));
    });

    // bookstore route loads bookstore.html
    app.get("/babies", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/layouts/babies.html"));
    });

    // amusmementpark route loads amusmementpark.html
    app.get("/children", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/layouts/children.html"));
    });

    // library route loads library.html
    app.get("/parents", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/layouts/parents.html"));
    });

    app.get("/form", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/layouts/form.html"));
    });
};
