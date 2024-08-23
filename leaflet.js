function leaflet() {
    // Implementation of Leaflet.js library for interactive mapping
    this.map = null;

    this.initializeMap = function(id) {
        this.map = L.map(id).setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
            subdomains: ['a', 'b', 'c']
        }).addTo(this.map);
    };

    this.addMarker = function(lat, lng, message) {
        L.marker([lat, lng]).addTo(this.map).bindPopup(message);
    };

    this.getBounds = function() {
        return this.map.getBounds();
    };
}

module.exports = leaflet;