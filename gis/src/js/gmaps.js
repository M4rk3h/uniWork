// Default Map
function initMap() {
  var myLatLng = {lat: 51.590046,lng: -3.328866};
  
  var map = new google.maps.Map(document.getElementById('gmapDefault'), {
    center: myLatLng,
    zoom: 16,
    // Use 1 MapType
    mapTypeId: 'hybrid',
    disableDefaultUI: false,
    // Zoom Control & Position
    zoomControl: true,
    zoomControlOptions: {
    position: google.maps.ControlPosition.LEFT_CENTER
    }
    });
  // Create a marker icon using local file.
  var markerIcon = 'icons/flag2.png';
  // Place the marker at my LatLng location
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: markerIcon,
    title: 'GIS!'
  });
}

// initMap1 - Tutorial
function initMap1() {
  var myLatLng = {lat: 51.642895,lng: -3.934575};
  var myLatLng1 = {lat: 51.478,lng: -3.182};
  var middleGround = {lat: 51.527402,lng: -3.583342};

  var map = new google.maps.Map(document.getElementById('gmapTutorial'), {
    center: middleGround,
    zoom: 10,
    mapTypeId: 'hybrid',
    disableDefaultUI: true
  });
  // Create a marker icon using local file.
  var markerIcon = 'icons/pushpin1.png';
  
  // Maker for Liberty Stadium
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: markerIcon,
    title: 'Liberty Stadium'
  });
  // Marker for Principality Stadium
  var marker1 = new google.maps.Marker({
    position: myLatLng1,
    map: map,
    icon: markerIcon,
    title: 'Principality Stadium'
  });

  
}

function initMapClick() {
  // Declare your locations here
  var castellCoch = {lat: 51.543765,lng: -3.251874};
  var caerphillyC = {lat:51.582942,lng:-3.219495};
  var cardiffC = {lat:51.482365,lng:-3.181159};
  var ruperraC = {lat:51.575950,lng:-3.125767};
  var hensolC = {lat:51.500998,lng:-3.373461};
  var llantrisantC =  {lat:51.541689,lng:-3.374694};
  // Where to start the map
  var middleGround = {lat: 51.527402,lng: -3.583342};
  // Create an instance of your map
  var map = new google.maps.Map(document.getElementById('gmapClick'), {
    zoom: 9,
    center: middleGround,
    disableDefaultUI: false,
  });
  // Declare your content to appear on click
  var castellContent = 'This is Castell Coch';
  var caerphillyContent = 'This is Caerphilly Castle';
  var cardiffContent = 'This is Cardiff';
  var ruperraContent = 'This is Ruperra Castle';
  var hensolContent = 'This is Hensol Castle';
  var llantrisantContent = 'This is Llantrisant Castle';
  // Create your info windows for each pin
  var castellInfo = new google.maps.InfoWindow({content: castellContent});
  var caerphillyInfo = new google.maps.InfoWindow({content: caerphillyContent});
  var cardiffInfo = new google.maps.InfoWindow({content: cardiffContent});
  var ruperraInfo = new google.maps.InfoWindow({content: ruperraContent});
  var hensolInfo = new google.maps.InfoWindow({content: hensolContent});
  var llantrisantInfo = new google.maps.InfoWindow({content: llantrisantContent});
  
  // Declare marker locations
  var markerCastell = new google.maps.Marker({position: castellCoch,map: map,title: 'Castell Coch'});
  var markerCaerphilly = new google.maps.Marker({position: caerphillyC,map: map,title: 'Caerohilly Castle'});
  var markerCardiff = new google.maps.Marker({position: cardiffC,map: map,title: 'Cardiff Castle'});
  var markerRuperra = new google.maps.Marker({position: ruperraC,map: map,title: 'Ruperra Castle'});
  var markerHensol = new google.maps.Marker({position: hensolC,map: map,title: 'Hensol Castle'});
  var markerLlantrisant = new google.maps.Marker({position: llantrisantC,map: map,title: 'Llantrisant Castle'});

  // Declare your 'On Click' functions
  markerCastell.addListener('click', function () {castellInfo.open(map, markerCastell);});
  markerCaerphilly.addListener('click', function () {castellInfo.open(map, markerCastell);});
  markerCardiff.addListener('click', function () {castellInfo.open(map, markerCastell);});
  markerRuperra.addListener('click', function () {castellInfo.open(map, markerCastell);});
  markerHensol.addListener('click', function () {castellInfo.open(map, markerCastell);});
  markerLlantrisant.addListener('click', function () {castellInfo.open(map, markerCastell);});
  
}


// Styled Map
function initMapDark() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('gmapStyled'), {
    center: {
      lat: 51.58959,
      lng: -3.3279
    },
    zoom: 16,
    disableDefaultUI: true,
    // Disable the gestures (Zooming and Moving)
    gestureHandling: 'none',
    zoomControl: false,
    styles: [{
        elementType: 'geometry',
        stylers: [{
          color: '#242f3e'
        }]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#242f3e'
        }]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#746855'
        }]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{
          color: '#263c3f'
        }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#6b9a76'
        }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#38414e'
        }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#212a37'
        }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9ca5b3'
        }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#746855'
        }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#1f2835'
        }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#f3d19c'
        }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          color: '#2f3948'
        }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#17263c'
        }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#515c6d'
        }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#17263c'
        }]
      }
    ]
  });
}