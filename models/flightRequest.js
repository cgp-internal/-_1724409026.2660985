class FlightRequest {
  constructor(id, polygonBoundary, requestData) {
    this.id = id;
    this.polygonBoundary = polygonBoundary;
    this.requestData = requestData;
  }

  static async create(polygonBoundary, requestData, db) {
    return new Promise((resolve, reject) => {
      db.insertFlightRequest(polygonBoundary, requestData, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(new FlightRequest(null, polygonBoundary, requestData));
        }
      });
    });
  }

  static async getAll(db) {
    return new Promise((resolve, reject) => {
      db.getFlightRequests((err, rows) => {
        if (err) {
          reject(err);
        } else {
          const flightRequests = rows.map((row) => new FlightRequest(row.id, row.polygon_boundary, row.request_data));
          resolve(flightRequests);
        }
      });
    });
  }
}

module.exports = { FlightRequest };