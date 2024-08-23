const express = require('express');
const app = express();
const flightRouter = require('./controllers/flightController');
const mapRouter = require('./controllers/mapController');

app.use('/requests', flightRouter);
app.use('/map', mapRouter);

module.exports = app;