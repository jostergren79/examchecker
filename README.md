# examchecker

The examchecker application was designed as part of a developer challenge for Mednet.

The primary front end languages and libraries used in this application include.

JavaScript / jquery
HTML 
CSS / Bootsrap

The primary backend libraries used in examchecker include.

Node
Express
MySQL
Sequelize


## The Problem

Students will do problems to convert between: Kelvin, Celsius, Fahrenheit, and Rankine and their teachers want to be able to enter the questions and student responses into a computer to be graded.

## The Solution

examchecker is a simple API/service that will collect and grade these responses for the teachers.

Requirements/User Journey

1. Enter the inputTemperature into the GUI in the form of a string "72 Degrees Fahrenheit"

2. Select the targetUnitOfMeasure from the dropdown. 

3.	Enter a student's numeric response for each worksheet question.

4.	Enter the authoritative answer.

 after both the student's response and authoritative answer are rounded to the ones place. The system indicates that the response is correct, incorrect, or invalid
Submitting your response

1.	Create a public GitHub or BitBucket repo that will contain your code
2.	Include a README.md that explains how to install (or deploy) and run (or access) your program
3.	Include any supporting documentation or assumptions in the README. This may include, but is not limited to: 
1.	API documentation
2.	ERD or data model summary
4.	Notify the development manager (amolinasandoval@mednetsolutions.com) that you are ready and provide your repo URL or send a compressed archive containing the project files
Example Scenarios (not exhaustive):
Input Temperature	Target Units	Student Response	Grade
84.2 Fahrenheit	Rankine	543.5	correct
-45.14 Celsius	Kelvin	227.51	correct
317.33 Kelvin	Fahrenheit	110.5	incorrect
444.5 Rankine	Celsius	-30.9	incorrect
6.5 Fahrenheit	Rankine	cat	incorrect
bird	Celsius	45.32	invalid

