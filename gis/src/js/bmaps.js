// Default Map with GIS Location
function initMap() {
    //Set your locations
    var middleGround = new Microsoft.Maps.Location(51.58959, -3.3279);
    // #map1 is the same as get element by id for bing map
    var map = new Microsoft.Maps.Map('#map', { 
        credentials: "ArD-NZNSRKb6D0I49V9fCN7GKih8YY6tb34gp9BbZrNKe25y6FwzH4_vfXM8eSmq",
        center: middleGround,
        zoom: 16,
    });
    // Get the middle of the map
    // Here you can put pin locations
    var center = map.getCenter();

    //Create custom Pushpin
    var pin = new Microsoft.Maps.Pushpin(center, {
        color: 'orange',
        title: 'GIS',
        subTitle: 'Here',
        text: '♥'
    });

    //Add the pushpin to the map
    map.entities.push(pin);
}

// Map with 2 Pins (Stadiums)
function initMapPin() {
       //Set your locations
       var middleGround = new Microsoft.Maps.Location(51.58959, -3.3279);
       var libStadium = new Microsoft.Maps.Location(51.642895, -3.934575);
       var priStadium = new Microsoft.Maps.Location(51.478, -3.182);
       // #map is the same as get element by id for bing map
       var map = new Microsoft.Maps.Map('#map', {
           credentials: "ArD-NZNSRKb6D0I49V9fCN7GKih8YY6tb34gp9BbZrNKe25y6FwzH4_vfXM8eSmq",
           center: middleGround,
           zoom: 9,
       });
   
       //Create custom Pushpin
       var libPin = new Microsoft.Maps.Pushpin(libStadium, {
           color: 'black',
           title: 'Liberty',
           subTitle: 'Stadium',
           text: 'LS'
       });
       var priPin = new Microsoft.Maps.Pushpin(priStadium, {
        color: 'red',
        title: 'Principality',
        subTitle: 'Stadium',
        text: 'PS',
        icon: 'icons/castleIcon.png'
    });
   
    //Add the pushpin to the map
    map.entities.push(libPin);
    map.entities.push(priPin);
}

// Map with Clickable Castles
function initMapClick(){
    var castellCoch = new Microsoft.Maps.Location(51.543765, -3.251874);
    var caerphillyC = new Microsoft.Maps.Location(51.582942, -3.219495);
    var cardiffC = new Microsoft.Maps.Location(51.482365, -3.181159);
    var ruperraC = new Microsoft.Maps.Location(51.575950, -3.125767);
    var hensolC = new Microsoft.Maps.Location(51.500998, -3.373461);
    var llantrisantC =  new Microsoft.Maps.Location(51.541689, -3.374694);
    // Where to start the map
    var middleGround = new Microsoft.Maps.Location(51.58959, -3.3279);
    // Create an instance of your map
    var map = new Microsoft.Maps.Map('#map', { 
        credentials: "ArD-NZNSRKb6D0I49V9fCN7GKih8YY6tb34gp9BbZrNKe25y6FwzH4_vfXM8eSmq",
        center: middleGround,
        zoom: 11,
    });
    
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
    var markerCardiff = new Microsoft.Maps.Pushpin(cardiffC, {color: 'black',title: 'Liberty',subTitle: 'Stadium',text: 'LS', icon: 'icons/castleIcon.png'});
    var markerCastell = new google.maps.Marker({position: castellCoch,map: map,title: 'Castell Coch', icon: markerIcon});
    var markerCaerphilly = new google.maps.Marker({position: caerphillyC,map: map,title: 'Caerohilly Castle', icon: markerIcon});
    //var markerCardiff = new google.maps.Marker({position: cardiffC,map: map,title: 'Cardiff Castle', icon: markerIcon});
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
    //Add the pushpin to the map
    map.entities.push(markerCardiff);
    //map.entities.push(priPin);
}

// Map With Flight Paths
function initMapFlight(){

}

// Map with Area's (Wind Farms)
function initMapWind(){

}