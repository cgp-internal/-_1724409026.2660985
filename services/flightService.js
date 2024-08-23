const { FlightRequest } = require('./models/flightRequest');

async function calculateFlightRequests(polygonBoundary, requestData) {
  let flightRequests = await FlightRequest.getAll(db);
  let matchingRequests = flightRequests.filter((request) => {
    // Assume a function polyIntersects(poly1, poly2) that checks if two polygons intersect
    return polyIntersects(request.polygonBoundary, polygonBoundary);
  });
  return matchingRequests;
}

module.exports = { calculateFlightRequests };