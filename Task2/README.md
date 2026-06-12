Student Management REST API

Project Overview

This is a simple REST API built using Node.js and Express.js.
It manages student data using basic GET and POST operations.
The project demonstrates backend development concepts like routing, request handling, JSON data handling, and basic validation.

Features
Retrieve all students
Add a new student
Basic input validation
JSON-based request and response handling

 Technologies Used
Node.js
Express.js

 Project Structure
project/
│
├── server.js
└── README.md

 How to Run the Project
1️. Install dependencies
npm init -y
npm install express
2️. Start the server
node server.js

3️. Server will run at:
http://localhost:3000
 API Endpoints

 GET all students
GET /students

URL:

http://localhost:3000/students

 POST add a new student
POST /students

Request Body (JSON):

{
  "name": "Rahul",
  "course": "BSc"
}

 Sample Responses

 GET Response
[
  {
    "id": 1,
    "name": "Anudeepa",
    "course": "BTech"
  }
]

 POST Response
{
  "id": 2,
  "name": "Rani",
  "course": "BSc"
}

 Validation Rules
name is required
course is required
If missing → returns:
{
  "message": "Name and Course required"
}


Learning Outcomes
Built REST APIs using Express.js
Handled HTTP GET and POST requests
Worked with JSON request/response
Implemented basic backend validation

Author

Anudeepa Ejjagiri