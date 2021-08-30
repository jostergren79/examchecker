// view.js - this file includes functionality to serarch for specific records in the database through a search button and onclick

// Code here handles queries for specific results in the database
// In this case, the user submits a result's name... we then pass that result's name as a
// URL parameter. Our server then performs the search to grab that result from the Database.

// when user hits the search-btn
$("#search-btn").on("click", function() {
    // save the result they typed into the result-search input
    var searchedresult = $("#result-search")
      .val()
      .trim();
  
    // Using a RegEx Pattern to remove spaces from searchedresult
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    searchedresult = searchedresult.replace(/\s+/g, "").toLowerCase();
  
    // run an AJAX GET-request for our servers api,
    // including the user's result in the url
    $.get("api/results/:id" + searchedresult, function(data) {
      // log the data to our console
      console.log(data);
      // empty to well-section before adding new content
      $("#well-section").empty();
      // if the data is not there, then return an error message
      if (!data) {
        $("#well-section").append("<h2>Your result was not found. </h2>");
      }
      else {
    
        // otherwise
    // append the result 
    // the inputTemperature
    $("#well-section-" + i).append("<h3>inputTemperature: " + data[i].inputTemperature + "</h4>");
    // the targetUnitOfMeasure an h3,
    $("#well-section-" + i).append("<h3>targetUnitOfMeasure: " + data[i].targetUnitOfMeasure + "</h4>");
    // the studentsResponse an h3,
    $("#well-section-" + i).append("<h3>studentsResponse: " + data[i].studentsResponse + "</h4>");
    // and the authoritativeAnswer an h3.
    $("#well-section-" + i).append("<h3>authoritativeAnswer: " + data[i].authoritativeAnswer + "</h4>");
    // and the result an h3.
    $("#well-section-" + i).append("<h3>result: " + data[i].result + "</h4>");
      }
    });
  });
  