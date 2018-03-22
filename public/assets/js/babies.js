
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
      var title = $('<h2>');
      var description = $('<p>');
      title.html(response.events[i].name.text);

      show.append(title)
    }
  });
}


window.onload = apiCall;
    //
