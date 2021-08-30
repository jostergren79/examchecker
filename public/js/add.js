// Code here handles what happens when a user submits a new input on the form.

// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newInput obj
  const newInput = {

    // inputTemperature 
    inputTemperature: $("#inputTemperature").val().trim(),

    // targetUnitOfMeasure 
    targetUnitOfMeasure : $("#targetUnitOfMeasure ").val().trim(),
   
    // studentsResponse 
    studentsResponse: $("#studentsResponse").val().trim(),
   
    // authoritativeAnswer
    authoritativeAnswer: $("#authoritativeAnswer").val().trim(),

    // result
    result: $("#result").val().trim()

  };

  // send an AJAX POST-request with jQuery
  $.post("/api/results/new", newInput)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a Input with an alert window
      alert("Adding Input...");
    });

  // empty each input box by replacing the value with an empty string
  $("#inputTemperature").val("");
  $("#targetUnitOfMeasure").val("");
  $("#studentsResponse").val("");
  $("#authoritativeAnswer").val("");
  $("#result").val("");
});
