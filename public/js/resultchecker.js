function resultChecker () {

    let studentAnswer = Math.ceil(studentAnswer)
    let authoritativeAnswer = Math.ceil(authoritativeAnswer)

    if (studentAnswer == authoritativeAnswer) {
        result = "Correct"
    } else if (studentAnswer != authoritativeAnswer) {
        result = "Incorrect" 
    } else {
        result = "Invalid"
    }
};