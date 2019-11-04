// Default Map
function initMap() {
  var myLatLng = {
    lat: 51.590046,
    lng: -3.328866
  };
  var map = new google.maps.Map(document.getElementById('gmapDefault'), {
    center: myLatLng,
    zoom: 15,
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
  var myLatLng = {
    lat: 51.642895,
    lng: -3.934575
  };
  var myLatLng1 = {
    lat: 51.478,
    lng: -3.182
  };
  var middleGround = {
    lat: 51.527402,
    lng: -3.583342
  };

  var map = new google.maps.Map(document.getElementById('gmapTutorial'), {
    center: middleGround,
    zoom: 10,
    mapTypeId: 'hybrid',
    disableDefaultUI: true,
  });
  // Create a marker icon using local file.
  var markerIcon = 'icons/flag2.png';
  
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
  var libStadium = {lat: 51.642895,lng: -3.934575};
  var priStadium = {lat: 51.478,lng: -3.182};
  var middleGround = {lat: 51.527402,lng: -3.583342};
  // Create an instance of your map
  var map = new google.maps.Map(document.getElementById('gmapClick'), {
    zoom: 9,
    center: middleGround,
    disableDefaultUI: false,
  });
  // Declare your content to appear on click
  var libContent = 'This is the Liberty Stadium.';
  var priContent = 'This is the Principality Stadium';
  // Create your info windows for each pin
  var libInfo = new google.maps.InfoWindow({
    content: libContent
  });
  
  var priInfo = new google.maps.InfoWindow({
    content: priContent
  });
  // Declare marker locations
  var markerLib = new google.maps.Marker({
    position: libStadium,
    map: map,
    title: 'Liberty Stadium'
  });
  var markerPri = new google.maps.Marker({
    position: priStadium,
    map: map,
    title: 'Liberty Stadium'
  });
  // Declare your 'On Click' functions
  markerLib.addListener('click', function () {
    libInfo.open(map, markerLib);
  });
  markerPri.addListener('click', function () {
    priInfo.open(map, markerPri);
  });
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