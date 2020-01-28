function openLayersOne() {
    // Start the map
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({ //Lat & Long are flipped
            center: ol.proj.fromLonLat([-3.327511, 51.589611]),
            zoom: 10
        })
    });
};