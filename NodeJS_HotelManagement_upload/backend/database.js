const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./hotels.db', err => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the database.');


    db.run("DROP TABLE hotels", (err) => {
        if (err) {
            console.error('Error dropping test table:', err.message);
        } else {
            console.log('Test table dropped successfully.');
        }
    });

    // Create hotels table
    db.run(`CREATE TABLE IF NOT EXISTS hotels (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      location TEXT,
      rating REAL
    )`, (createErr) => {
      if (createErr) {
        console.error('Error creating hotels table', createErr.message);
      } else {
        console.log('Hotels table created successfully.');

        // Insert sample data
        // const insertQuery = `INSERT INTO hotels (name, location, rating) VALUES (?, ?, ?)`;
        // const sampleData = [
        //   ['Hotel A', 'Location A', 4.5],
        //   ['Hotel B', 'Location B', 3.8],
        //   ['Hotel C', 'Location C', 4.2]
        // ];

        // sampleData.forEach(data => {
        //   db.run(insertQuery, data, (insertErr) => {
        //     if (insertErr) {
        //       console.error('Error inserting sample data', insertErr.message);
        //     } else {
        //       console.log('Sample data inserted successfully.');
        //     }
        //   });
        // });
      }
    });
  }
});

module.exports = db;
