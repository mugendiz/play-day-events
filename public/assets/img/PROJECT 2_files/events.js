
// This .on("click") function will send you to the html pages

console.log("events.js connected!");

  $("#babyToddler").on("click", function(event) {
          location.href = "../layouts/museum.html";
      });

  // -----------------------------------------------------------------------

  $("#schoolaAge").on("click", function(event) {
    event.preventDefault();
    // Here we construct our URL
    var queryURL = "https://www.eventbriteapi.com/v3/events/?categories=family-and-education/&subcategory=school-age/&token=S6QQEW7L4B5Z4NSM6VOC";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      $(".card-body").text(JSON.stringify(response));
      });
  // -----------------------------------------------------------------------

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
