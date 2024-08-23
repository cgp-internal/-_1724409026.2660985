const express = require('express');
const router = express.Router();
const { generateMap, updateMap } = require('../services/mapService');

class MapController {
    async generateMap(req, res) {
        try {
            const id = req.params.id;
            generateMap(id);
            res.status(201).send(`Map generated successfully for id ${id}`);
        } catch (error) {
            res.status(500).send('Failed to generate map');
        }
    }

    async updateMap(req, res) {
        try {
            const lat = req.body.lat;
            const lng = req.body.lng;
            const message = req.body.message;
            updateMap(lat, lng, message);
            res.status(200).send('Map updated successfully');
        } catch (error) {
            res.status(500).send('Failed to update map');
        }
    }
}

const mapController = new MapController();
router.post('/map/:id', mapController.generateMap);
router.post('/map/update', mapController.updateMap);

module.exports = router;