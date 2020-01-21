// Default Leaflet Map 
// src = https://leafletjs.com/

function leafMapOne() {
    // Make a new map (L.map (getElementByID))
    var map = L.map('lmap').setView([51.589611, -3.327511], 15);
    // Leaflet TileLayer - {s} can ping each site in parallel.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
            foo: 'bar',
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
        })
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

function leafMapThree() {
    // Src = https://leafletjs.com/examples/layers-control/
    // LayerGroup
    var castles = L.layerGroup();
    // LayerMarkers
    L.marker([51.543765, -3.251874]).bindPopup('castellCoch').addTo(castles),
    L.marker([51.582942, -3.219495]).bindPopup('caerphillyC').addTo(castles),
    L.marker([51.482365, -3.181159]).bindPopup('cardiffC').addTo(castles),
    L.marker([51.575950, -3.125767]).bindPopup('ruperraC').addTo(castles),
    L.marker([51.500998, -3.373461]).bindPopup('hensolC').addTo(castles),
    L.marker([51.541689, -3.374694]).bindPopup('llantrisantC').addTo(castles)
    // MapBox Attributes
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    // Create the greyScale
    var grayscale = L.tileLayer(mbUrl, {
            id: 'mapbox/light-v9',
            attribution: mbAttr
        }),
        streets = L.tileLayer(mbUrl, {
            id: 'mapbox/streets-v11',
            attribution: mbAttr
        });
    // Create a map with settings
    var map = L.map('lmap', {
        center: [51.543765, -3.251874],
        zoom: 10,
        layers: [grayscale, castles]
    });

    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };

    var overlays = {
        "Castles In Wales": castles
    };

    L.control.layers(baseLayers, overlays).addTo(map);
};