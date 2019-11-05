// Default Map
function initMap() {
  var myLatLng = {lat: 51.590046,lng: -3.328866};
  
  var map = new google.maps.Map(document.getElementById('gmapDefault'), {
    center: myLatLng,
    zoom: 16,
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
    disableDefaultUI: true
  });
  // Create a marker icon using local file.
  var markerIcon = 'icons/pushpinpink.png';
  
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
  var middleGround = {lat: 51.547992,lng: -3.277032};
  // Create an instance of your map
  var map = new google.maps.Map(document.getElementById('gmapClick'), {
    zoom: 11,
    center: middleGround,
    disableDefaultUI: true,
  });
  // Create an icon
  var markerIcon = 'icons/castleIcon.png';
  // Declare your content to appear on click
  var castellContent = 'Castell Coch, located on a prominent wooded hillside overlooking the Taff Valley.';
  var caerphillyContent = 'Caerphilly is the largest medieval castle in Wales and one of the most impressive in Europe.';
  var cardiffContent = 'Cardiff Castle was established within the walls of a mighty Roman fort by William I of England in about 1081.';
  var ruperraContent = 'Built c1626 by Sir Thomas Morgan, steward to the Earl of Pembroke, and the latest example of the Elizabethan and Jacobean court taste for castellated mansions.';
  var hensolContent = 'Hensol Castle (previously Hensol House) is a castellated mansion in the gothic architecture style dating from the late 17th century or early 18th century.';
  var llantrisantContent = 'Llantrisant Castle is a ruined castle in Llantrisant, Rhondda Cynon Taf, Glamorgan, Wales. The ruins are on a good elevation, commanding extensive views of the surrounding country.';
  // Create your info windows for each pin
  var castellInfo = new google.maps.InfoWindow({content: castellContent});
  var caerphillyInfo = new google.maps.InfoWindow({content: caerphillyContent});
  var cardiffInfo = new google.maps.InfoWindow({content: cardiffContent});
  var ruperraInfo = new google.maps.InfoWindow({content: ruperraContent});
  var hensolInfo = new google.maps.InfoWindow({content: hensolContent});
  var llantrisantInfo = new google.maps.InfoWindow({content: llantrisantContent});
  
  // Declare marker locations
  var markerCastell = new google.maps.Marker({position: castellCoch,map: map,title: 'Castell Coch', icon: markerIcon});
  var markerCaerphilly = new google.maps.Marker({position: caerphillyC,map: map,title: 'Caerohilly Castle', icon: markerIcon});
  var markerCardiff = new google.maps.Marker({position: cardiffC,map: map,title: 'Cardiff Castle', icon: markerIcon});
  var markerRuperra = new google.maps.Marker({position: ruperraC,map: map,title: 'Ruperra Castle', icon: markerIcon});
  var markerHensol = new google.maps.Marker({position: hensolC,map: map,title: 'Hensol Castle', icon: markerIcon});
  var markerLlantrisant = new google.maps.Marker({position: llantrisantC,map: map,title: 'Llantrisant Castle', icon: markerIcon});

  // Declare your 'On Click' functions
  markerCastell.addListener('click', function () {castellInfo.open(map, markerCastell);});
  markerCaerphilly.addListener('click', function () {caerphillyInfo.open(map, markerCaerphilly);});
  markerCardiff.addListener('click', function () {cardiffInfo.open(map, markerCardiff);});
  markerRuperra.addListener('click', function () {ruperraInfo.open(map, markerRuperra);});
  markerHensol.addListener('click', function () {hensolInfo.open(map, markerHensol);});
  markerLlantrisant.addListener('click', function () {llantrisantInfo.open(map, markerLlantrisant);});
}


// Styled Map
function initMapDark() {
  var myLatLng = {lat: 51.590046,lng: -3.328866};
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('gmapStyled'), {
    center: myLatLng,
    zoom: 16,
    disableDefaultUI: true,
    // Disable the gestures (Zooming and Moving)
    gestureHandling: 'none',
    zoomControl: false,
    styles: [{elementType: 'geometry',stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke',stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill',stylers: [{color: '#746855'}]},
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

function initMapFlight(){
  // Create where you want the center of the map
  var middleGround = {lat:54.231486,lng:-4.541848};
  // Create a variable for cardiff airport
  var cardiffAirport = {lat:51.398163, lng: -3.345564}
  var dublinAirport = {lat:51.398163, lng: -3.345564}
  var edinburghAirport = {lat:55.950707,lnt:-3.361507}
  var leedsAirport = {lat:53.867943, lnt:-1.661477 }
  var bangorAirport = {lat:44.808194,lnt:-68.816434}
  var southamptonAirport = {lat:50.951510,lnt:-1.357670}
  var stansteadAirport = {lat:51.886005,lnt:0.238812}
  var exeterAirport = {lat:50.734437,lnt:-3.420336}
  
  var map = new google.maps.Map(document.getElementById('gmapFlight'), {
    center: middleGround,
    zoom: 5,
    disableDefaultUI: false,
    // Zoom Control & Position
    zoomControl: false,
    zoomControlOptions: {
    position: google.maps.ControlPosition.LEFT_CENTER
    }
    });

    var my_path = [
       dublinAirport,
       edinburghAirport
    ];							
    var plotline = new google.maps.Polyline({
      path: my_path,
      strokeColor: '#0000FF',
      strokeOpacity: 0.7,
      strokeWeight: 12
    });
    plotline.setMap(map);
    

}