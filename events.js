require("dotenv").config();
// Initialize Firebase
var keys = require('./keys');
console.log('keys');

var firebase = (keys.firebase);

// var config = {
//   apiKey: "apiKey",
//   authDomain: "",
//   databaseURL: "",
//   storageBucket: ""
// };

firebase.initializeApp(config);

// Create a variable to reference the database
// var database = firebase.database();
//
// // Initial Values
// var initialBid = 0;
// var initialBidder = "No one :-(";
// var highPrice = initialBid;
// var highBidder = initialBidder;
//
// require('dotenv').config();
//
// var keys_js = require('./keys.js')
// var Twitter = require('twitter');
// var Spotify = require('node-spotify-api');
// var fs = require('fs');
//
// // --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
// database.ref().on("value", function(snapshot) {
//
//   // If Firebase has a highPrice and highBidder stored (first case)
//   if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
//     // Set the variables for highBidder/highPrice equal to the stored values.
//     highBidder = snapshot.val().highBidder;
//     highPrice = parseInt(snapshot.val().highPrice);
//
//     // Change the text inside the HTML element to reflect the initial value
//     $("#highest-bidder").text(snapshot.val().highBidder);
//     $("#highest-price").text(re"$" + snapshot.val().highPrice);
//
//     // Print the data to the console.
//     console.log(snapshot.val().highBidder);
//     console.log(snapshot.val().highPrice);
//   }
