Description
Problem name
[NodeJS] Hotel management system
Problem statement
Build an API for a hotel management system in the Node web app. The API should support features like getting all hotel details, creating a new hotel, updating the existing details of a hotel, and deleting a hotel by ID.

Technical specifications

Tech stack 
Backend: NodeJS
Database: SQLite
Database model parameters
hotels: [id: integer, name: string, location: string, rating: integer]
Ports 
Backend: 8000
Implementation details

API Endpoints

GET /api/hotels?page=1&limit=10 would return all hotels in the database with pagination.
GET api/hotels/{id} would return a single hotel. If the hotel with ID is not found, return status 404 with an error message. 
POST api/hotels would add a new hotel.
PATCH api/hotels/{id} would update a hotel with {id}. If the hotel with ID is not found, return status 404 with an error message. The endpoint should allow the partial update of the hotel object.
DELETE api/hotels/{id} would delete hotel with {id}. If the hotel with ID is not found, return status 400 with an error message. 
Testing instructions

To run any additional commands, use the Terminal. For example, navigate to the '/backend' directory in the Terminal and use the command: npm run test.
To test backend API endpoints, follow these steps:
Navigate to the ‘/backend’ folder in the terminal.
Use the CURL command to test the different endpoint requests. For example: curl -X GET http://localhost:8000/api/endpoint will check if your GET request for the endpoint is working or not.
Upon clicking the Run code or Submit code buttons, access the Build log or Execution log to review comprehensive details pertaining to the test outcomes.
Submission instructions

Clicking Run code compiles and runs your code against sample tests, but it will not generate scores.
Clicking Submit code runs your code against multiple test cases, assessing different scenarios holistically, and the score will be assigned accordingly.

**Project source**
backend
**Build commands**
npm install
**Deploy commands**
npm start
**Sample Evaluation commands**
npm run sample_tests
**Evaluation commands**
npm run main_tests
**Evaluation report path**
xunittest-report.xml
