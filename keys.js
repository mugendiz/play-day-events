console.log("This is loaded");

// var keys_js = require('./keys.js')
// var Eventbrite = require('eventbrite');

var log = {
  apikey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID
};

module.exports = {
 log:log,
};
