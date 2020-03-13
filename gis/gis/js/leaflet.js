// Default Leaflet Map 
// src = https://leafletjs.com/

function leafMapOne() {
    // Make a new map (L.map (getElementByID))
    var map = L.map('lmap').setView([51.589611, -3.327511], 15);
    // Leaflet TileLayer - {s} can ping each site in parallel.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar',attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
    // Leaflet Marker
    L.marker([51.589611, -3.327511]).addTo(map).bindPopup('USW Library - Leaflet.').togglePopup();
};

function leafMapTwo() {
    // Create the map
    var map = L.map('lmap').setView([52.5, -3.9], 6.5);
    // create a tileLayer which shows the map details
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/light-v9'
	}).addTo(map);

	function onEachFeature(feature, layer) {
        // Get each feature-properties-popupContent
        var popupContent = feature.properties.popupContent;
		layer.bindPopup(popupContent);
	}
    // Get all the features from the data file called Aba.js
	L.geoJSON([aberCrs], {
		style: function (feature) {
			return feature.properties && feature.properties.style;
        },
        // For each features in the JSON
		onEachFeature: onEachFeature,
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, {
				radius: 8,
				fillColor: "red",
				color: "#000",
				weight: 1,
				opacity: 0.5,
				fillOpacity: 0.8
			});
		}
	}).addTo(map);
};

function leafMapThree() {
    // Src = https://leafletjs.com/examples/layers-control/
    // LayerGroups
    // CASTLES
    var castles = L.layerGroup();
    // Create markers for the castles and assign them to the layerGroup Castles.
    L.marker([51.543765, -3.251874]).bindPopup('Castell Coch, located on a prominent wooded hillside overlooking the Taff Valley.').addTo(castles);
    L.marker([51.582942, -3.219495]).bindPopup('Caerphilly is the largest medieval castle in Wales and one of the most impressive in Europe.').addTo(castles);
    L.marker([51.482365, -3.181159]).bindPopup('Cardiff Castle was established within the walls of a mighty Roman fort by William I of England in about 1081.').addTo(castles);
    L.marker([51.575950, -3.125767]).bindPopup('Built c1626 by Sir Thomas Morgan, steward to the Earl of Pembroke, and the latest example of the Elizabethan and Jacobean court taste for castellated mansions.').addTo(castles);
    L.marker([51.500998, -3.373461]).bindPopup('Hensol Castle (previously Hensol House) is a castellated mansion in the gothic architecture style dating from the late 17th century or early 18th century.').addTo(castles);
    L.marker([51.541689, -3.374694]).bindPopup('Llantrisant Castle is a ruined castle in Llantrisant, Rhondda Cynon Taf, Glamorgan, Wales. The ruins are on a good elevation, commanding extensive views of the surrounding country.').addTo(castles);
    // WINDAREAS
    var windAreas = L.layerGroup();
    // Create areas for windAreas and add them to the group.
    L.polygon([[51.86,-3.95],[51.93,-3.85],[52.01,-3.72],[51.96,-3.65],[51.87,-3.60],[51.86,-3.76],[51.84,-3.91],[51.86,-3.95]]).bindPopup('Area 1').addTo(windAreas);
    L.polygon([[53.10,-3.90],[52.81,-3.59],[52.75,-3.82],[52.83,-4.05],[53.10,-3.90]]).bindPopup('Area 2').addTo(windAreas);
    // https://www.metoffice.gov.uk/weather/learn-about/weather/types-of-weather/wind/windiest-place-in-uk
    L.marker([55.843038, -5.094878]).bindPopup('Bute - 14.5 Knots').addTo(windAreas);
    L.marker([58.939164, -2.743361]).bindPopup('Orkney - 14.3 Knots').addTo(windAreas);
    L.marker([53.140699, -4.274115]).bindPopup('Caernarfon - 12.9 Knots').addTo(windAreas);
    L.marker([53.263237, -4.429744]).bindPopup('Anglesey - 11.9 Knots').addTo(windAreas);
    // FLIGHTS
    var flights = L.layerGroup();
    // Create PolyLines for each flight 
    // Create a variable for cardiff airport
    var carToDub = [[51.398139,-3.345478],[53.426474,-6.250049]];
    var carToEdi = [[51.398139,-3.345478],[55.950707,-3.361507]];
    var carToLee = [[51.398139,-3.345478],[53.867943,-1.661477]];
    var carToBan = [[51.398139,-3.345478],[53.229635,-4.130064]];
    var carToSou = [[51.398139,-3.345478],[50.951510,-1.357670]];
    var carToSta = [[51.398139,-3.345478],[51.886005,0.238812]];
    var carToExe = [[51.398139,-3.345478],[50.734437,-3.420336]];
    // Create the line between cardiff to the rest
    L.polyline(carToDub, {color: '#0E9C62', weight: 8}).bindPopup('Cardiff to Dublin').addTo(flights);
    L.polyline(carToEdi, {color: '#EB0029', weight: 8}).bindPopup('Cardiff to Dublin').addTo(flights);
    L.polyline(carToLee, {color: '#AC944D', weight: 8}).bindPopup('Cardiff to Dublin').addTo(flights);
    L.polyline(carToBan, {color: '#8CD663', weight: 8}).bindPopup('Cardiff to Dublin').addTo(flights);
    L.polyline(carToSou, {color: '#002E3B', weight: 8}).bindPopup('Cardiff to Dublin').addTo(flights);
    L.polyline(carToSta, {color: '#0D8EAD', weight: 8}).bindPopup('Cardiff to Dublin').addTo(flights);
    L.polyline(carToExe, {color: '#4B4E51', weight: 8}).bindPopup('Cardiff to Dublin').addTo(flights);
    // MapBox Attributes
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    // Create the 2 Layers
    var grayscale = L.tileLayer(mbUrl, {id: 'mapbox/light-v9',attribution: mbAttr});
    var streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11',attribution: mbAttr});
    // Create a map with settings
    var map = L.map('lmap', {
        center: [52.5, -3.9],
        zoom: 6.5,
        layers: [streets]
    });
    // Add the baseLayers
    var baseLayers = {
        "GreyS": grayscale,
        "Street": streets,
    };
    // Give the overLayers a name
    var overlays = {
        "Castles": castles,
        "Wind-A": windAreas,
        "Flights": flights
    };
    // Add it all to the map
    L.control.layers(baseLayers, overlays).addTo(map);
    console.log("Leaflet Version" + " - " + L.version);
};

function leafMapFour(){
    // Create a map instance with view, zoom
    //var map = L.map('lmap').setView([52.5, -3.9], 6.5);
    var map = L.map('lmap', {
        center: [52.5, -3.9],
        zoom: 6.5,
        gestureHandling: true
    })
    // Add a tileLayer (OpenStreetMaps)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar',attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
    // Create consts for usw locations
    const theNorth = L.latLng(53.435109, -4.437037);
    const theSouth = L.latLng(51.377982, -3.121844);
    // Leaflet Plugin - Leaflet Routing Machine
    // http://www.liedman.net/leaflet-routing-machine/
    L.Routing.control({
        waypoints: [
          theNorth,
          theSouth
        ]
      }).addTo(map);
};

function leafMapFive(){
    // Create a layer group
    var unis = L.layerGroup();
    // Create a variable
    var trefToCar = ([[51.589930, -3.330830],[51.479758, -3.169233]]);
    // Create the line between cardiff to the rest
    L.polyline(trefToCar, {color: 'Green', weight: 8}).bindPopup('USW Trefforest & USW Cardiff').addTo(unis);
    // Att the layer group to the map
    var map = L.map('lmap', {
        center: [51.538041, -3.263105],
        zoom: 11,
        layers: [unis]
    })
    // Add an animation
    var line = L.polyline([[51.589930, -3.330830],[51.479758, -3.169233]]),
        animatedMarker = L.animatedMarker(line.getLatLngs());
    // Add it to the map
    map.addLayer(animatedMarker);
    // Add a tileLayer (OpenStreetMaps)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar',attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
};

function leafMapSix() {
    // Make a new map (L.map (getElementByID))
    var map = L.map('lmap').setView([51.589611, -3.327511], 15);

    var layer = new L.GIBSLayer('VIIRS_CityLights_2012', {
        date: new Date('2015/04/01'),
        transparent: true
    }).addTo(map);

        // Leaflet TileLayer - {s} can ping each site in parallel.
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar',attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
};