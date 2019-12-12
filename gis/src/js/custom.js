// Create a map
function aberPins() {
    // Declare map starting position
    var middleGround = {lat: 51.527402,lng: -3.583342};
    // Create src
    var src = "https://ces-web2.southwales.ac.uk/students/17076749/gis/kmls/aberExport.kml";
    // Create a map with the middle, zoom & UI
    var map = new google.maps.Map(document.getElementById('gmapCustom'), {
      center: middleGround,
      zoom: 10,
      disableDefaultUI: true
    });
    // // Added a KML Layer
    var kmlLayer = new google.maps.KmlLayer(src, {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: map
      });
    // Add A Click Function
    /*
    kmlLayer.addListener('click', function(event) {
        var content = event.featureData.infoWindowHtml;
        var testimonial = document.getElementById('capture');
        testimonial.innerHTML = content;
      });
      */
};

// Create a map
function areaKML() {
  // Declare map starting position
  var middleGround = {lat: 51.527402,lng: -3.583342};
  // Create src
  var src = "http://lle.gov.wales/catalogue/item/AreaOfOutstandingNaturalBeautyAONB.kml";
  // Create a map with the middle, zoom & UI
  var map = new google.maps.Map(document.getElementById('gmapCustom'), {
    center: middleGround, 
    zoom: 10,
    disableDefaultUI: true
  });
  // // Added a KML Layer
  var kmlLayer = new google.maps.KmlLayer(src, {
      suppressInfoWindows: true,
      preserveViewport: false,
      map: map
    });
  // Add A Click Function
  };
