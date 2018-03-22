
// This .on("click") function will send you to the html pages


          // location.href = "../layouts/museum.html";

  // ----------------------------------------------------


function apiCall() {
  var show = $('#show');
  // Here we construct our URL
  var queryURL = "https://www.eventbriteapi.com/v3/events/search/?categories=115&subcategories=15004&location.address=new%20york&token=S6QQEW7L4B5Z4NSM6VOC";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    for (var i = 0; i < response.events.length; i++) {
      console.log(response.events[i].name.text);
      var html = "<div class ='card_container'>"
          html += "<div class ='title'>"
          html += response.events[i].name.text
          html += "</div>"
          // html += "<div class ='description'>"
          // html += response.events[i].description.text
          // html += "</div>"
          html += "<div class = 'image_container'>"
          html += "<img src = "+response.events[i].logo.original.url+">"
          html += "</div>"
          html += "<div class = 'image_url'>"
          html += "<href = "+response.events[i].url+">"


          html += "</div>"
          html += "</div>"

      show.append(html)
    }
  });
}


window.onload = apiCall;
    //

// $( document ).ready(function() {
//
//   $( apiCall () {
//
//     // Here we construct our URL
//     var queryURL = "https://www.eventbriteapi.com/v3/events/?categories=family-and-education/&subcategory=school-age/&token=S6QQEW7L4B5Z4NSM6VOC";
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).done(function(response) {
//       console.log(response);
//       $(".card-body").text(JSON.stringify(response));
//       });
//
// });
//
// });
  // $("#tweens").on("click", function(event) {
  //   event.preventDefault();
  //     location.href = "../layouts/museum.html";
  //   });
  //
  // // -----------------------------------------------------------------------
  //
  // // API call for Parks and Recreation JSON response
  //
  //   $("#babyToddler").on("click", function(event) {
  //     event.preventDefault();
  //     location.href = "../layouts/parks_rec.html.html";
  //     });
  //   // -----------------------------------------------------------------------
  //
  //   $("#schoolaAge").on("click", function(event) {
  //     event.preventDefault();
  //     location.href = "../layouts/parks_rec.html.html";
  //     });
  //   // -----------------------------------------------------------------------
  //
  //   $("#tweens").on("click", function(event) {
  //     event.preventDefault();
  //     location.href = "../layouts/parks_rec.html.html";
  //     });
  //   // -----------------------------------------------------------------------
  //
  //
