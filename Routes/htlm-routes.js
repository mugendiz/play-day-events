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
        res.sendFile(path.join(__dirname, "../public/events.html"));
    });

    // bookstore route loads bookstore.html
    app.get("/bookstore", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/bookstore.html"));
    });

    // amusmementpark route loads amusmementpark.html
    app.get("/amusmementpark", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/amusmementpark.html"));
    });

    // library route loads library.html
    app.get("/library", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/library.html"));
    });

    // museum route loads museum.html
    app.get("/museum", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/museum.html"));
    });

    // waterpark route loads waterpark.html
    app.get("/waterpark", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/waterpark.html"));
    });

    // events route loads events.html
    app.get("/events", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/events.html"));
    });
};