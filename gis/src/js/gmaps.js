// Default Map
function defaultMap() {
  // Set locations
  var gisLoc = {lat: 51.590046,lng: -3.328866};
  // Init Map
  var map = new google.maps.Map(document.getElementById('gmapDefault'), {
    center: gisLoc,
    zoom: 16,
    disableDefaultUI: true,
    // Zoom Control & Position
    /*zoomControl: true,
    zoomControlOptions: {
    position: google.maps.ControlPosition.LEFT_CENTER
    }*/
    });
  // Create a marker icon using local file.
  var markerIcon = 'icons/flag2.png';
  // Place the marker at my LatLng location
  var marker = new google.maps.Marker({
    position: gisLoc,
    map: map,
    icon: markerIcon,
    title: 'GIS!'
  });
    // Create an info window
    infoWindow = new google.maps.InfoWindow;
    // Try HTML5 geolocation in browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        // Get the location
        infoWindow.setPosition(pos);
        infoWindow.setContent('You are near here.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Display error Browser doesn't support Geolocation
      console.log('Error in the if statement')
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    }
  };

// initMap1 - Tutorial
function pinMap() {
  var myLatLng = {lat: 51.642895,lng: -3.934575};
  var myLatLng1 = {lat: 51.478,lng: -3.182};
  var middleGround = {lat: 51.527402,lng: -3.583342};

  var map = new google.maps.Map(document.getElementById('gmap1'), {
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
  var castellCoch = {lat: 51.543765, lng: -3.251874};
  var caerphillyC = {lat: 51.582942, lng: -3.219495};
  var cardiffC = {lat: 51.482365, lng: -3.181159};
  var ruperraC = {lat: 51.575950, lng: -3.125767};
  var hensolC = {lat: 51.500998, lng: -3.373461};
  var llantrisantC =  {lat: 51.541689, lng: -3.374694};
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
};

function initMapFlight(){
  // Create where you want the center of the map
  var middleGround = {lat: 54.231486, lng: -4.541848};
  // Create a variable for cardiff airport
  var cardiffAirport = {lat: 51.398139, lng: -3.345478};
  var dublinAirport = {lat: 53.426474, lng: -6.250049};
  var edinburghAirport = {lat: 55.950707, lng: -3.361507};
  var leedsAirport = {lat: 53.867943, lng: -1.661477};
  var bangorAirport = {lat: 53.229635,lng:-4.130064};
  var southamptonAirport = {lat: 50.951510, lng:-1.357670};
  var stansteadAirport = {lat: 51.886005, lng: 0.238812};
  var exeterAirport = {lat: 50.734437, lng: -3.420336};
  
  var map = new google.maps.Map(document.getElementById('gmapFlight'), {
    center: middleGround,
    zoom: 5.2,
    disableDefaultUI: true,
    });
    // Declare flights
    var toDublin = [cardiffAirport,dublinAirport];
    var toEdinburgh = [cardiffAirport,edinburghAirport];
    var toLeeds = [cardiffAirport,leedsAirport];
    var toBangor = [cardiffAirport,bangorAirport];
    var toSouthampton = [cardiffAirport,southamptonAirport];
    var toStanstead = [cardiffAirport,stansteadAirport];
    var toExeter = [cardiffAirport,exeterAirport];
    // Declare PolyLines (Flight Paths)
    var dubLine = new google.maps.Polyline({path: toDublin,strokeColor: '#0E9C62',strokeOpacity: 0.8,strokeWeight: 12});
    var edLine = new google.maps.Polyline({path: toEdinburgh,strokeColor: '#EB0029',strokeOpacity: 0.8,strokeWeight: 12});
    var leedLine = new google.maps.Polyline({path: toLeeds,strokeColor: '#AC944D',strokeOpacity: 0.8,strokeWeight: 12});
    var bangLine = new google.maps.Polyline({path: toBangor,strokeColor: '#8CD663',strokeOpacity: 0.8,strokeWeight: 12});
    var southLine = new google.maps.Polyline({path: toSouthampton,strokeColor: '#002E3B',strokeOpacity: 0.8,strokeWeight: 12});
    var stanLine = new google.maps.Polyline({path: toStanstead,strokeColor: '#0D8EAD',strokeOpacity: 0.8,strokeWeight: 12});
    var exeLine = new google.maps.Polyline({path: toExeter,strokeColor: '#4B4E51',strokeOpacity: 0.8,strokeWeight: 12});
    // Set the PolyLines ontop of the Map
    dubLine.setMap(map);
    edLine.setMap(map);
    leedLine.setMap(map);
    bangLine.setMap(map);
    southLine.setMap(map);
    stanLine.setMap(map);
    exeLine.setMap(map);
    // Create content
    var dubContent = 'This is Cardiff To Dublin.';
    var ediContent = 'This is Cardiff To Edinburgh.';
    var leeContent = 'This is Cardiff To Leeds.';
    var banContent = 'This is Cardiff To Bangor.';
    var souContent = 'This is Cardiff To Southampton.';
    var staContent = 'This is Cardiff To Stanstead.';
    var exeContent = 'This is Cardiff To Exeter.';
    // Create info Window
    var dubInfo = new google.maps.InfoWindow({content: dubContent,position: dublinAirport});
    var ediInfo = new google.maps.InfoWindow({content: ediContent,position: edinburghAirport});
    var leeInfo = new google.maps.InfoWindow({content: leeContent,position: leedsAirport});
    var banInfo = new google.maps.InfoWindow({content: banContent,position: bangorAirport});
    var souInfo = new google.maps.InfoWindow({content: souContent,position: southamptonAirport});
    var staInfo = new google.maps.InfoWindow({content: staContent,position: stansteadAirport});
    var exeInfo = new google.maps.InfoWindow({content: exeContent,position: exeterAirport});
    // Creare open alert on click
    dubLine.addListener('click', function() {dubInfo.close(map,dubLine);dubInfo.open(map,dubLine);});
    edLine.addListener('click', function() {ediInfo.close(map, edLine);ediInfo.open(map, edLine);});
    leedLine.addListener('click', function() {leeInfo.close(map, leedLine);leeInfo.open(map, leedLine);});
    bangLine.addListener('click', function() {banInfo.close(map, bangLine);banInfo.open(map, bangLine);});
    southLine.addListener('click', function() {souInfo.close(map, southLine);souInfo.open(map, southLine);});
    stanLine.addListener('click', function() {staInfo.close(map, stanLine);staInfo.open(map, stanLine);});
    exeLine.addListener('click', function() {exeInfo.close(map, exeLine);exeInfo.open(map, exeLine);});
    // Create close alert when mouse moves
    dubLine.addListener('mouseout', function() {dubInfo.close(map,dubLine);});
    edLine.addListener('mouseout', function() {ediInfo.close(map,edLine);});
    leedLine.addListener('mouseout', function() {leeInfo.close(map,leedLine);});
    bangLine.addListener('mouseout', function() {banInfo.close(map,bangLine);});
    southLine.addListener('mouseout', function() {souInfo.close(map,southLine);});
    stanLine.addListener('mouseout', function() {staInfo.close(map,stanLine);});
    exeLine.addListener('mouseout', function() {exeInfo.close(map,exeLine);});
}

function initMapWind() {
  // Declare your locations here
  var area1 = [
    {lat:51.86,lng: -3.95},
    {lat:51.93,lng: -3.85},
    {lat:52.01,lng: -3.72},
    {lat:51.96,lng: -3.65},					
    {lat:51.87,lng: -3.60},
    {lat:51.86,lng: -3.76},
    {lat:51.84,lng: -3.91},
    {lat:51.86,lng: -3.95}	
  ];		
  
  var area2 = [
    {lat:53.10,lng: -3.90},
    {lat:52.81,lng: -3.59},
    {lat:52.75,lng: -3.82},
    {lat:52.83,lng: -4.05},
    {lat:53.10,lng: -3.90}
  ];
  // Where to start the map
  var middleGround = {lat:52.364816,lng:-3.598322};
  // Create an instance of your map
  var map = new google.maps.Map(document.getElementById('gmapWind'), {
    zoom: 7.7,
    center: middleGround,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });
  // Content
  var areaOneContent = 'Wind Farms In Brecon';
  var areaTwoContent = 'Wind Farms In Snowdonia';
  // Info
  var areaOneInfo = new google.maps.InfoWindow({content: areaOneContent,position: {lat:52.01,lng: -3.72}});
  var areaTwoInfo = new google.maps.InfoWindow({content: areaTwoContent,position: {lat:53.10,lng: -3.90}});
  // Place Polylines on Map
  var polyAreaOne = new google.maps.Polygon({path: area1,strokeColor: '#e5e500',strokeOpacity:0.8, fillColor: '#e5e500',fillPoacity: 0.5,});
  var polyAreaTwo = new google.maps.Polygon({path: area2,strokeColor: '#e5e500',strokeOpacity:0.8, fillColor: '#e5e500',fillPoacity: 0.5,});
  // Declare your 'On Click' functions
  polyAreaOne.addListener('click', function () {areaOneInfo.open(map, polyAreaOne);});
  polyAreaTwo.addListener('click', function () {areaTwoInfo.open(map, polyAreaTwo);});
  // Smack them on the map son
  polyAreaOne.setMap(map);
  polyAreaTwo.setMap(map);
}

// Styled Map
function initMapDark() {
  
  var myStyle = [{
      featureType: "administrative",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]},{
      featureType: "poi",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]},{
      featureType: "water",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]},{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]}];
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('gmapStyled'), {
    center: myLatLng,
    zoom: 16,
    disableDefaultUI: true,
    // Disable the gestures (Zooming and Moving)
    //gestureHandling: 'none',
    zoomControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['mystyle', google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN]
    },
    mapTypeId: 'mystyle'
  });
}

function initMapStyle2(){
  // Set default location
  var myLatLng = {lat: 51.59,lng: -3.32};
  // create style in a variable
  var myStyle = [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "poi",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "water",
      elementType: "water",
      stylers: [
        { visibility: "on" },
        { color: '#d59563' }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { color: "#ff0000" }
      ]
    },{
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    }
  ];
  // Map declared below
  var map = new google.maps.Map(document.getElementById('gmapStyled'), {
    mapTypeControlOptions: {
      mapTypeIds: ['mystyle', google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN]
    },
    center: myLatLng,
    zoom: 9,
    mapTypeId: 'mystyle',
    disableDefaultUI: true,
  });
  map.mapTypes.set('mystyle', new google.maps.StyledMapType(myStyle, { name: 'My Style' }));
}