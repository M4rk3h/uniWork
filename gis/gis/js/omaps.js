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
            zoom: 17
        })
    });
    // Make a marker
    var marker = new ol.Feature({
        geometry: new ol.geom.Point(
            ol.proj.fromLonLat([-3.327511, 51.589611])
        ),
    });
    marker.setStyle(new ol.style.Style({
      image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        color: '#8959A8', // Purple
        crossOrigin: 'anonymous',
        src: 'https://openlayers.org/en/v4.6.5/examples/data/dot.png'
      }))
    }));
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
  // src https://openlayers.org/en/v4.6.5/examples/navigation-controls.html?q=image+layer
  var map = new ol.Map({
    controls: ol.control.defaults({
      attributionOptions: {
        collapsible: false
      }
    }).extend([
      new ol.control.ZoomToExtent({
        extent: [ //Switzerland
          813079.7791264898, 5929220.284081122,
          848966.9639063801, 5936863.986909639
        ]
      })
    ]),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: 'map',
    view: new ol.View({ //Lat & Long are flipped
      center: ol.proj.fromLonLat([-3.327511, 52.559611]),
      zoom: 7
    })
  });
};

function openLayersFour(){
  // src https://openlayers.org/en/v4.6.5/examples/static-image.html?q=image+layer
  // Map views always need a projection.  Here we just want to map image
      // coordinates directly to map coordinates, so we create a projection that uses
      // the image extent in pixels.
      var extent = [0, 0, 1024, 968];
      var projection = new ol.proj.Projection({
        code: 'xkcd-image',
        units: 'pixels',
        extent: extent
      });

      var map = new ol.Map({
        layers: [
          new ol.layer.Image({
            source: new ol.source.ImageStatic({
              url: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
              projection: projection,
              imageExtent: extent
            })
          })
        ],
        target: 'map',
        view: new ol.View({
          projection: projection,
          center: ol.extent.getCenter(extent),
          zoom: 8,
          maxZoom: 8
        })
      });
};