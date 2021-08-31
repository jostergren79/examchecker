// Code here handles what happens when a user submits a new input on the form.

// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newInput object
  const newInput = {

    // inputTemperature 
    inputTemperature: $("#inputTemperature").val().trim(),

    // targetUnitOfMeasure 
    targetUnitOfMeasure : $("#targetUnitOfMeasure ").val().trim(),
   
    // studentAnswer 
    studentAnswer: $("#studentAnswer").val().trim(),
   
    // authoritativeAnswer
    authoritativeAnswer: $("#authoritativeAnswer").val().trim(),

    // result
    // result: $("#result").val().trim()

  };

// This function validates the studentAnswer and authoritativeAnswer are parsed to the nearest integer and matched appropriately
  function validatedResult () {
  
    let studentAnswerInt = parseInt(newInput.studentAnswer)
    let authoritativeAnswerInt = parseInt(newInput.authoritativeAnswer)
    let resultValue = (newInput.result)
    
    {

        if (studentAnswerInt == authoritativeAnswerInt)
        (resultValue = "Correct")

        else if (studentAnswerInt != authoritativeAnswerInt)
        (resultValue = "Incorrect")

        else if (studentAnswerInt != INTEGER)
        (resultValue = "Invalid")

    }
  
    console.log(studentAnswerInt);
    console.log(authoritativeAnswerInt); 
    console.log(resultValue);
    alert((resultValue) + "Answer!");
}

  validatedResult ();

  // send an AJAX POST-request with jQuery
  $.post("/api/results/new", newInput)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a Input with an alert window
      alert(resultValue + "Answer!");
    });


  // empty each input box by replacing the value with an empty string
  $("#inputTemperature").val("");
  $("#targetUnitOfMeasure").val("");
  $("#studentAnswer").val("");
  $("#authoritativeAnswer").val("");
  $("#result").val("");
});
