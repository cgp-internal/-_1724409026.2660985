const sqlite3 = require('sqlite3').verbose();

class Database {
  constructor() {
    this.db = new sqlite3.Database('flight_request.db', (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Connected to the SQLite database.');
      }
    });
  }

  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS flight_requests (
        id INTEGER PRIMARY KEY,
        polygon_boundary TEXT,
        request_data TEXT
      );
    `;
    this.db.run(sql, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Flight requests table created.');
      }
    });
  }

  insertFlightRequest(polygonBoundary, requestData) {
    const sql = `
      INSERT INTO flight_requests (polygon_boundary, request_data)
      VALUES (?, ?);
    `;
    this.db.run(sql, polygonBoundary, requestData, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Flight request inserted.');
      }
    });
  }

  getFlightRequests() {
    const sql = `
      SELECT * FROM flight_requests;
    `;
    this.db.all(sql, [], (err, rows) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Flight requests retrieved.');
        console.log(rows);
      }
    });
  }
}

const db = new Database();
db.createTable();

module.exports = { db };