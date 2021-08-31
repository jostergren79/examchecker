# examchecker - answer validation tool

The examchecker application was designed as part of a developer challenge for Mednet. The purpose of the application is to accept input from a user and varify if that input is correct. The applicable scenario is this, Students are converting temperature units as part of an exam and the Professors need a way to validate the answers are correct, incorrect, or if the student has provided and invalid answer.

Example Quiz: 

A student is provided the following inputTemperature "30 degrees Celsius" and the targetUnitOfMeasure "Kelvin". The student is then required to convert the inputTemperarture to the targetUnitOfMeasure. In this case the studentAnswer is 303 (rounded to the nearest integer). The professer will confirm if the studentAnswer matches an authoritativeAnswer (the correct answer) an integer (incorrect answer) or an invalid value.

Once the student has provided their answer the professer will input the information

The studentAnswer is:

303 (rounded to the nearest integer)

The professer i an authoritativeAnswer.

303 (rounded to the nearest integer)

The examchecker


 inputTemperature: Sequelize.STRING,
  targetUnitOfMeasure: Sequelize.STRING,
  studentAnswer: Sequelize.INTEGER,
  authoritativeAnswer: Sequelize.INTEGER,
  result: Sequelize.STRING



## The primary front end languages and libraries used in examchecker include.

JavaScript / jquery / HTML / CSS / Bootsrap

## The primary backend libraries used in examchecker include.

Node / Express / MySQL / Sequelize

## The examchecker application is hosted on Heroku and the code base is housed on Github

To access the full application click this link: https://examchecker.herokuapp.com/

The application source cost is accessible here: https://github.com/jostergren79/examchecker


## The Problem

Students will do problems to convert between: Kelvin, Celsius, Fahrenheit, and Rankine and their teachers want to be able to enter the questions and student responses into a computer to be graded.

## The Solution

xamchecker is a simple API service that will collect and grade these responses for the teachers.

## Using the examchecker application

1. Click "add new" to begin entering student responses. 

2. Enter the inputTemperature into the GUI in the form of a string "72 Degrees Fahrenheit"

3. Select the targetUnitOfMeasure from the dropdown. 

4. Enter a student's numeric answer for each worksheet question.

5. Enter the numeric authoritative answer and click Submit.

After submitting the system will compare the numeric value of the student's answer (rounded up) and the authoritive answer (rounded up) and will assign the result value either correct if the values match, incorrect if the values do not match, or invalid if the answer supplied is invalid. 








