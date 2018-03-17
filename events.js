
require("dotenv").config();
// Initialize Firebase

var keys = require('./keys');
console.log('keys');

var logs = (keys.log);
console.log(logs);
(function() {

  firebase.initializeApp(config);

// Get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin= document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');
const btnLogout= document.getElementById('btnLogout');

}());
