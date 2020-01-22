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
    // Create markers for the castles and assign them to the layerGroup Castles.
    L.marker([51.543765, -3.251874]).bindPopup('castellCoch').addTo(castles);
    L.marker([51.582942, -3.219495]).bindPopup('caerphillyC').addTo(castles);
    L.marker([51.482365, -3.181159]).bindPopup('cardiffC').addTo(castles);
    L.marker([51.575950, -3.125767]).bindPopup('ruperraC').addTo(castles);
    L.marker([51.500998, -3.373461]).bindPopup('hensolC').addTo(castles);
    L.marker([51.541689, -3.374694]).bindPopup('llantrisantC').addTo(castles);

    var windAreas = L.layerGroup();
    // Create areas for windAreas and add them to the group.
    L.polygon([[51.86,-3.95],[51.93,-3.85],[52.01,-3.72],[51.96,-3.65],[51.87,-3.60],[51.86,-3.76],[51.84,-3.91],[51.86,-3.95]]).bindPopup('Area 1').addTo(windAreas);
    L.polygon([[53.10,-3.90],[52.81,-3.59],[52.75,-3.82],[52.83,-4.05],[53.10,-3.90]]).bindPopup('Area 2').addTo(windAreas);

    // MapBox Attributes
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    // Create the 2 Layers
    var grayscale = L.tileLayer(mbUrl, {
        id: 'mapbox/light-v9',
        attribution: mbAttr
    });
    var streets = L.tileLayer(mbUrl, {
        id: 'mapbox/streets-v11',
        attribution: mbAttr
    });
    // Create a map with settings
    var map = L.map('lmap', {
        center: [51.543765, -3.251874],
        zoom: 10,
        layers: [grayscale, castles]
    });
    // Add the baseLayers
    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets,
    };
    // Give the overLayers a name
    var overlays = {
        "Castles In Wales": castles,
        "Wind Areas In Wales": windAreas
    };
    // Add it all to the map
    L.control.layers(baseLayers, overlays).addTo(map);
};