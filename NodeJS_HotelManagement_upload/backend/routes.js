const express = require("express");
const router = express.Router();
let db = require("./database.js");


/*
POST @ /api/hotels
Add a hotel
Req body Example:
{
    name: "Unit test",
    location: "Unit test",
    rating: 5
}
Response:
{
    "message": "Hotel created successfully",
    "hotel": 
        {
            "id": 1,
            "name": "Test name",
            "location": "Test location",
            "rating": 5
        }
}
*/
router.post('/hotels', (req, res) => {
  //Your code goes here
});

/*
GET @ /api/hotels
Returns all hotels with pagination
Query Parameters:
- page: (optional) The page number of results to return (default: 1)
- limit: (optional) The maximum number of hotels per page (default: 10)
Expected format:
  [
    {
        "id": 1,
        "name": "Test name",
        "location": "Test location",
        "rating": 4
    },
    .
    .
  ]
*/
router.get('/hotels', (req, res) => {
  //Your code goes here
});

/*
GET @ /api/hotels/id
Returns single hotel
Expected Format:
    {
        "id": 1,
        "name": "Test name",
        "location": "Test location",
        "rating": 4
    }
NOTE: If the hotel with id is not found, return status 404 with message 'Hotel not found'
*/

router.get('/hotels/:id', (req, res) => {
  //Your code goes here
});


/*
PATCH @ /api/hotels/id
Updates single hotel

Req body:
{
  name: "Update name",
  location: "Update location",
  rating: 5
}

[Partial update should be allowed]

Response:

    {
        "id": 1,
        "name": "Update name",
        "location": "Update location",
        "rating": 5
    }
NOTE: If the hotel with id is not found, return status 404 with error message.
*/

router.patch('/hotels/:id', (req, res) => {
  //Your code goes here
});

/*
DELETE @ api/hotels/id
Delete a hotel
Response:
{
    "message": "Hotel deleted successfully"
}
NOTE: If the hotel with id is not found, return status 400 with error message.

*/
router.delete('/hotels/:id', (req, res) => {
  //Your code goes here
});

module.exports = router;
