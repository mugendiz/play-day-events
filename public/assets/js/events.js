
// This .on("click") function will trigger the AJAX Call

      $("#babyToddler").on("click", function(event) {
        event.preventDefault();

        // Here we construct our URL
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view

        //------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          $("#movie-view").text(JSON.stringify(response));
        });

        // -----------------------------------------------------------------------

      });
