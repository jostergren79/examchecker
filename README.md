# examchecker 

## Problem:

- The examchecker application was designed as part of a developer challenge for Mednet. The applicable scenario is this, Students are converting temperature units as part of an exam and their teachers need a way to validate if answers are correct, incorrect, or if the student has provided and invalid answer.

## Solution:

- examchecker is a simple API service that will collect and grade these responses for the teachers.

## Using examchecker: 

- To access the examcheker application click this link: https://examchecker.herokuapp.com/

1. Click "add new" to begin entering student responses. 

2. Enter the inputTemperature into the GUI in the form of a string "72 Degrees Fahrenheit"

3. Select the targetUnitOfMeasure from the dropdown. 

4. Enter a student's numeric answer for each worksheet question.

5. Enter the numeric authoritative answer and click Submit.

- After clicking Submit the system will compare the numeric value of the student's answer (rounded to the nearest integer) and the authoritive answer (rounded to the nearest integer) and will assign the result value either correct if the values match, incorrect if the values do not match, or invalid if the answer supplied is invalid.

## The primary front end languages and libraries used in examchecker include.

- JavaScript / jquery / HTML / CSS / Bootsrap

## The primary backend libraries used in examchecker include.

- Node / Express / MySQL / Sequelize

## The examchecker application and database are fully hosted on Heroku and the code base is versioned on Github

- To access the full application click this link: https://examchecker.herokuapp.com/

- The application source code is accessible here: https://github.com/jostergren79/examchecker






