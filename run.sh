#!/bin/bash

# Install Node
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs

# Init a project
npm init -y

# Install Express
npm install express

# Install Leaflet
npm install leaflet

# Install required dependencies
npm installsqlite3

# Run the application
node app.js