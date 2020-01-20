// Default Leaflet Map 
// src = https://leafletjs.com/

function leafMapOne() {
    // Make a new map (L.map (getElementByID))
    var map = L.map('lmap').setView([51.589611, -3.327511], 15);
    // Leaflet TileLayer - {s} can ping each site in parallel.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}',{foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
    .addTo(map);
    // Leaflet Marker
    L.marker([51.589611, -3.327511]).addTo(map)
        .bindPopup('USW Library - Leaflet.')
        .togglePopup();
};

function leafMapTwo() {
    // Make a new map (L.map (getElementByID))
    var map = L.map('lmap').setView([52.356437, -3.638490], 7);
    // Leaflet TileLayer - Nasa 
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png')
    .addTo(map);
    

        
};