const leaflet = require('./leaflet');

class MapService {
    constructor() {
        this.leafletInstance = new leaflet();
    }

    generateMap(id) {
        this.leafletInstance.initializeMap(id);
    }

    updateMap(lat, lng, message) {
        this.leafletInstance.addMarker(lat, lng, message);
    }
}

module.exports = {
    generateMap: function(id) {
        let mapService = new MapService();
        mapService.generateMap(id);
    },
    updateMap: function(lat, lng, message) {
        let mapService = new MapService();
        mapService.updateMap(lat, lng, message);
    }
};