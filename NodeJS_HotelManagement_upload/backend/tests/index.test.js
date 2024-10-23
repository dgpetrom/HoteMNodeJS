const { app } = require('../index');
const sqlite3 = require('sqlite3').verbose();
const request = require('supertest');

const db = require("../database");

function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

beforeAll(async () => {
    process.env.NODE_ENV = "test";
    await delay(4000);
});

beforeEach(async () => {
    await delay(1000);
});

describe('ADD /hotels/', () => {
    it('Add a hotel', async() => {

        const bd = {
            location: "Test location",
            name: "Unit test",
            rating: 4
        };

        await request(app).post('/api/hotels')
            .expect(200)
            .send(bd)
            .then((res) => {
                
                expect(res.body).toEqual({
                    "message": "Hotel created successfully",
                    "hotel": {
                        "id": 1, "location": "Test location", "name": "Unit test", "rating": 4
                    }
                });
            });
        
    });
});

describe('Get /hotels', () => {
    it('Get all hotels', (done) => {
        request(app).get('/api/hotels')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{"id": 1, "location": "Test location", "name": "Unit test", "rating": 4}]);
               
                done();
            });
    });


});

describe('Get /hotels/id', () => {
    it('Get hotel by id', (done) => {
        request(app).get('/api/hotels/1')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual({
                    "id": 1, "location": "Test location", "name": "Unit test", "rating": 4
                    }
                );
                done();
            });
    });
});

describe('UPDATE /hotels/', () => {
    it('Update a hotel', async() => {

        const bd = {
            name: "New name",
        };

       await request(app).patch('/api/hotels/1')
            .expect(200)
            .send(bd)
            .then((res) => {
    
                expect(res.body).toEqual({
                    "message": "Hotel updated successfully"
                });
            });
    });
});

describe('Delete /hotels/id', () => {
    it('Delete hotel by id ', (done) => {
        request(app).delete('/api/hotels/1')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual({
                    "message": "Hotel deleted successfully"
                });
                done();
            });
    });
});

describe('Pagination /hotels', () => {
    beforeAll(async () => {
        process.env.NODE_ENV = "test";
        await delay(4000);
    
        // Add hotels to the database
        const hotels = [
            { name: "Hotel A", location: "Location A", rating: 5 },
            { name: "Hotel B", location: "Location B", rating: 4 },
            { name: "Hotel C", location: "Location C", rating: 3 }
        ];
    
        // Insert hotels into the database
        for (const hotel of hotels) {
            await db.run('INSERT INTO hotels (name, location, rating) VALUES (?, ?, ?)', [hotel.name, hotel.location, hotel.rating]);
        }
    });

    it('Get paginated hotels', (done) => {
        request(app).get('/api/hotels?page=1&limit=2') // Assuming we want 1 hotel per page
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // Assuming we have more than 1 hotel in the database
                expect(res.body.length).toBe(2); // Check if only 1 hotel is returned
                done();
            });
    });
});