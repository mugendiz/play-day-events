


  function runTableQuery() {

      // Here we get the location of the root page.
      // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
      var currentURL = window.location.origin;

      // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
      $.ajax({ url: currentURL + "/api/form", method: "GET" })
      .done(function(eventArray) {

        // Here we are logging the URL so we have access to it for troubleshooting
        console.log("------------------------------------");
        console.log("URL: " + currentURL + "/api/form");
        console.log("------------------------------------");

        // Here we then log the NYTData to console, where it will show up as an object.
        console.log(eventArray);
        console.log("------------------------------------");

        // Loop through and display each of the customers
        for (var i = 0; i < eventArray.length; i++) {

          // Create the HTML Well (Section) and Add the table content for each reserved table
          var eventSection = $("<div>");
          eventSection.addClass("well");
          eventSection.attr("id", "tableWell-" + i + 1);
          $("#eventSection").append(eventSection);

          var tableNumber = i + 1;


          // Then display the remaining fields in the HTML (Section Name, Date, URL)
          $("#tableWell-" + i + 1).append("<h2><span class='label label-primary'>" + tableNumber + "</span> | " + tableData[i].customerID + "</h2>");
        }
      });
    }







    // Here we get the location of the root page.
    // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.

  // This function resets all of the data in our tables. This is intended to let you restart a demo.
  // function clearEvent() {
  //
  //   var currentURL = window.location.origin;
  //   $.ajax({ url: currentURL + "/api/clear", method: "POST" });
  //
  // }

  // $("#clear").on("click", function() {
  //   alert("Clearing...");
  //   clearEvent();
  //
  //   // Refresh the page after data is cleared
  //   location.reload();
  //
  // });


  // Run Queries!
  // ==========================================
  runTableQuery();
