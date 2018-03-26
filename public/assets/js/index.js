// LOGIN MODAL
$(document).ready(function(){

var db = require("./models");

});
function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    });
    $('.error').removeClass('alert alert-danger').html('');
}
function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');
        });

        $('.modal-title').html('Login with');
    });
     $('.error').removeClass('alert alert-danger').html('');
}
function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');
    }, 230);

}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');
    }, 230);
}
function loginAjax(){

     shakeModal();
}
function shakeModal(){
    $('#loginModal .modal-dialog').addClass('shake');
             $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
             $('input[type="password"]').val('');
             setTimeout( function(){
              $('#loginModal .modal-dialog').removeClass('shake');
    }, 1000 );
}

// function submitEvent() {
//   $('.registerBox').fadeOut('fast');
//       console.log(db.eventName);
//       var html = "<div class ='card_container'>"
//       html += "<div class ='title'>"
//       html += db.eventName
//       html += "</div>"
//       html += "<div class ='description'>"
//       html += db.eventLocation
//       html += db.eventDate
//       html += db.eventTime
//       html += "</div>"
//       html += "</div>"
//     show.append(html)
// };

///////////////////////

module.exports = async function(sequelizeInstance, DataTypes){
    const Event = sequelizeInstance.define('event', {
      eventName: Sequelize.TEXT,
      eventLocation: Sequelize.STRING[30],
      eventDate: Sequelize.DATE,
      eventTime: Sequelize.TIME
    });

    return sequelizeInstance.sync().then(() => {

      return Event.create({
        eventName: '',
        eventLocation: '',
        eventDate: '',
        eventTime: ''
      });
    })
    .then(() => {
      return Event.findAll().then(entries => {
        console.log(events.map(e => e.get({ plain: true })));
        return Event;
      })
    });
  };

////////////////////////


///////////////////////

// module.exports = async function(sequelizeInstance, DataTypes){
//     const Event = sequelizeInstance.define('event', {
//       eventName: Sequelize.TEXT,
//       eventLocation: Sequelize.STRING[30],
//       eventDate: Sequelize.DATE,
//       eventTime: Sequelize.TIME
//     });
//
//     return sequelizeInstance.sync().then(() => {
//
//       return Event.create({
//         eventName: '',
//         eventLocation: '',
//         eventDate: '',
//         eventTime: ''
//       });
//     })
//     .then(() => {
//       return Event.findAll().then(entries => {
//         console.log(events.map(e => e.get({ plain: true })));
//         return Event;
//       })
//     });
//   };

////////////////////////


// API Call for search

function searchApiCall() {
  var show = $('#show');
  // Here we construct our URL
  var queryURL2 = 'https://www.eventbriteapi.com/v3/events/search/?categories=115&subcategories=15004&location.address=district+of+columbia&token=S6QQEW7L4B5Z4NSM6VOC';

  var searchQuery = $('#search').val().trim();

  $.ajax({
    url: queryURL2,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    for (var i = 0; i < response.events.length; i++) {
      console.log(response.events[i].name.text);
      var html = "<div class ='card_container'>"
      html += "<div class ='title'>"
      html += response.events[i].name.text
      html += "</div>"
      html += "<div class ='description'>"
      // html += response.events[i].description.html
      html += "Click image for more information and to register"
      html += "<a href=" + response.events[i].url + ">"
      html += "<div class = 'image_container'>"
      html += "<img src = " + response.events[i].logo.original.url + ">"
      html += "<div class = 'image_url'>"
      html += "<href = " + response.events[i].url + ">"
      html += "</div>"
      html += "</div>"

      show.append(html)
    }
  });
}
$('#eventBtn').click(submitEvent());
$('#searchBtn').click(searchApiCall());
/////////////////////////////////////////////////////////////////
