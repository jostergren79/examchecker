function validatedResult () {
  
    let studentAnswerInt = parseInt(newInput.studentAnswer)
    let authoritativeAnswerInt = parseInt(newInput.authoritativeAnswer)
    
    {

        if (studentAnswerInt == authoritativeAnswerInt)
        (resultValue = "Correct")

        else if (studentAnswerInt != authoritativeAnswerInt)
        (resultValue = "Incorrect")

        else 
        (resultValue = "Invalid")

    }
  
    console.log(studentAnswerInt);
    console.log(authoritativeAnswerInt); 
    console.log(resultValue);
}

  validatedResult ();
