Map-based Flight Request Application
=====================================

This is a map-based flight request application built using Node.js, Express, and Leaflet.js. The application allows users to request flights within specified polygon boundaries.

How to Run
----------

1. Install Node.js if you haven't already.
2. Run `run.sh` script to set up the project and install dependencies.
3. Start the server by running `node app.js` in the project directory.
4. Open `index.html` in your web browser to access the application.

Documentation
-------------

The application is divided into several modules:

* `app.js`: The main entry point, sets up the Express server and defines routes.
* `controllers`: Handles requests and interactions, divided into `flightController.js` and `mapController.js`.
* `services`: Provides functionality for processing flight requests and generating maps, divided into `flightService.js` and `mapService.js`.
* `models`: Represents the flight request model, including polygon boundaries and request data.
* `routes.js`: Defines API routes for the application.
* `index.html`: The main HTML file, utilizing Leaflet.js for interactive mapping.
* `styles.css`: Custom CSS styles for the application.

Note: This README provides basic documentation and a guide on how to run the application. For more information, please refer to the individual module documentation.