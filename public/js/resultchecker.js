function resultChecker () {

    let studentsResponse = Math.ceil(studentsResponse)
    let authoritativeAnswer = Math.ceil(authoritativeAnswer)

    if (studentsResponse == authoritativeAnswer) {
        result = "Correct"
    } else if (studentsResponse != authoritativeAnswer) {
        result = "Incorrect" 
    } else {
        result = "Invalid"
    }
};