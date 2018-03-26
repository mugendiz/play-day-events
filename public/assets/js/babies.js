function apiCall() {
  var show = $('#show');
  // Here we construct our URL
  var queryURL = "https://www.eventbriteapi.com/v3/events/search/?categories=115&subcategories=15004&location.address=district+of+columbia&token=S6QQEW7L4B5Z4NSM6VOC";

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

// API Call for search

function searchApiCall() {
  var show = $('#show');
  // Here we construct our URL
  var queryURL2 = 'https://www.eventbriteapi.com/v3/events/search/?location.address=district+of+columbia&categories=115&subcategories=2002%2C4003%2C4004%2C4005%2C5003%2C3016&token=S6QQEW7L4B5Z4NSM6VOC';

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

$('#searchBtn').click(searchApiCall());

window.onload = apiCall;
