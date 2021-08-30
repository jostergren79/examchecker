// Code here handles what how the page displays all of the results
// It pings the server. The server then pings the database and displays all of the results.

// make a get request to our api to grab every result
$.get("/api/results/", function(data) {

  // for each result that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var wellSection = $("<div>");
    // add a class to this div: 'well'
    wellSection.addClass("well");
    // add an id to the well to mark which well it is
    wellSection.attr("id", "result-well-" + i);
    // append the well to the well section
    $("#well-section").append(wellSection);

    // Now add all of our result data to the well we just placed on the page

    // make the inputTemperature an h3,
    $("#result-well-" + i).append("<h3>inputTemperature: " + data[i].inputTemperature + "</h4>");
    // the targetUnitOfMeasure an h3,
    $("#result-well-" + i).append("<h3>targetUnitOfMeasure: " + data[i].targetUnitOfMeasure + "</h4>");
    // the studentsResponse an h3,
    $("#result-well-" + i).append("<h3>studentsResponse: " + data[i].studentsResponse + "</h4>");
    // and the authoritativeAnswer an h3.
    $("#result-well-" + i).append("<h3>authoritativeAnswer: " + data[i].authoritativeAnswer + "</h4>");
    // and the result an h3.
    $("#result-well-" + i).append("<h3>result: " + data[i].result + "</h4>");
  }
});

