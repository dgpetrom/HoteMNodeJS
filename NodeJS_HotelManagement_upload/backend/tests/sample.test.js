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

