// Using Leaflet
// Source = https://leafletjs.com/
// And GeoServer

function ssOne() {
    // Create the map
    var map = L.map('lmap').setView([52.5, -3.9], 6.5);
	// OpenStreetMap Layer
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar',attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
    // create a tileLayer with WMS which shows the map details
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s01/wms',{
				opacity: 1.0,
				layers: 's01:outline',
				format: 'image/png',
				transparent: true,
				attribution: 'from CES-GIS GeoServer'
		}).addTo(map);
};

function ssTwo(){
	// Create the map
    var map = L.map('lmap').setView([52.5, -3.9], 6.5);
	// OpenStreetMap Layer
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar',attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
    // create a tileLayer with WMS which shows the map details
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s01/wms',{
				opacity: 1.0,
				layers: 's01:outline',
				format: 'image/png',
				transparent: true,
				attribution: 'from CES-GIS GeoServer'
		}).addTo(map);
		
	// create a tileLayer with WMS which shows the map details
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s01/wms',{
				opacity: 1.0,
				layers: 's01:dentists',
				format: 'image/png',
				transparent: true,
				attribution: 'from CES-GIS GeoServer'
		}).addTo(map);
};

function ssThree(){
	// Create the map
    var map = L.map('lmap').setView([52.5, -3.9], 6.5);
	// OpenStreetMap Layer
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar',attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
    // create a tileLayer with WMS which shows the map details
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s01/wms',{
				opacity: 1.0,
				layers: 's01:outline',
				format: 'image/png',
				transparent: true,
				attribution: 'from CES-GIS GeoServer'
		}).addTo(map);
		
	// create a tileLayer with WMS which shows the map details
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s01/wms',{
				opacity: 1.0,
				layers: 's01:aonb',
				format: 'image/png',
				transparent: true,
				attribution: 'from CES-GIS GeoServer'
		}).addTo(map);
};

function ssFour() {
	// Src = https://leafletjs.com/examples/layers-control/
	// Make LayerGroup
    var outline = L.layerGroup();
    // Make Layer, Assign to LayerGroup.
    L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s01/wms',{opacity: 1.0,layers: 's01:outline',format: 'image/png',transparent: true,attribution: 'from CES-GIS GeoServer'}).addTo(outline);
    // Make LayerGroup
	var aonb = L.layerGroup();
	// Make Layer, Assign to LayerGroup.
    L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s01/wms',{opacity: 1.0,layers: 's01:aonb',format: 'image/png',transparent: true,attribution: 'from CES-GIS GeoServer'}).addTo(aonb);
    // Make LayerGroup
	var builtup = L.layerGroup();
	// Make Layer, Assign to LayerGroup.
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s01/wms',{opacity: 1.0,layers: 's01:builtupareas',format: 'image/png',transparent: true,attribution: 'from CES-GIS GeoServer'}).addTo(builtup);
	// Make LayerGroup
	var dentists = L.layerGroup();
	// Make Layer, Assign to LayerGroup.
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s01/wms',{opacity: 1.0,layers: 's01:dentists',format: 'image/png',transparent: true,attribution: 'from CES-GIS GeoServer'}).addTo(dentists);
	// Make LayerGroup
	var floodwatch = L.layerGroup();
	// Make Layer, Assign to LayerGroup.
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s01/wms',{opacity: 1.0,layers: 's01:floodwatch',format: 'image/png',transparent: true,attribution: 'from CES-GIS GeoServer'}).addTo(floodwatch);
	
    // MapBox Attributes
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    var streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11',attribution: mbAttr});
    // Create a map with settings
    var map = L.map('lmap', {center: [52.5, -3.9],zoom: 6.5,layers: [streets]});
    // Add the baseLayers
    var baseLayers = {"Street": streets};
    // Give the overLayers a name
    var overlays = {
        "Outline": outline,
		"AONB": aonb,
		"Builtup": builtup,
		"Dentist": dentists,
		"Floods": floodwatch,
    };
    // Add it all to the map
    L.control.layers(baseLayers, overlays).addTo(map);
    console.log("Leaflet Version" + " - " + L.version);
};