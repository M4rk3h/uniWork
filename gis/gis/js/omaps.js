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

function openLayersTwo() {
    // Create the map
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
    // Make a marker
    var marker = new ol.Feature({
        geometry: new ol.geom.Point(
            ol.proj.fromLonLat([-3.327511, 51.589611])
        ),
    });
    // Add it to a vectorSource
    var vectorSource = new ol.source.Vector({
        features: [marker]
    });
    var markerVectorLayer = new ol.layer.Vector({
        source: vectorSource,
      });
    // Add the vector to the map
    map.addLayer(markerVectorLayer);
};

function openLayersThree(){
    var baseMapLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
      });
      var map = new ol.Map({
        target: 'map',
        layers: [ baseMapLayer],
        view: new ol.View({
          center: ol.proj.fromLonLat([-74.006,40.7127]), 
                zoom: 20 //Initial Zoom Level
              })
      });
      
      var marker = new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([-74.006,40.7127])
        ),  // Cordinates of New York's City Hall
      });
      
      marker.setStyle(new ol.style.Style({
        image: new ol.style.Icon( ({
          color: '#ffcd46',
          crossOrigin: 'anonymous',
          src: 'icons/dot.png'
        }))
      }));
      
      var vectorSource = new ol.source.Vector({
        features: [marker]
      });
      var markerVectorLayer = new ol.layer.Vector({
        source: vectorSource,
      });
      map.addLayer(markerVectorLayer);
      
      var north = 40.7127;
      var south = 40.7129;
      var east = -74.0059;
      var west = -74.0061;
      var extent = ol.proj.transformExtent([east, north, west, south], 'EPSG:4326', 'EPSG:3857');
      var imageLayer = new ol.layer.Image({
        source: new ol.source.ImageStatic({
                      url: 'icons/toot.png',
                      imageExtent: extent
                    })
      });
      map.addLayer(imageLayer);
}