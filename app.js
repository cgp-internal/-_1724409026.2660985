const express = require('express');
const app = express();
const flightRouter = require('./controllers/flightController');
const mapRouter = require('./controllers/mapController');

app.use(express.json());
app.use('/requests', flightRouter);
app.use('/map', mapRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});