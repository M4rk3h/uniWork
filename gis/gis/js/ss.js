// Default Leaflet Map 
// src = https://leafletjs.com/

function ssOne() {
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