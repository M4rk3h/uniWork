// Default Map with GIS Location
function initMap() {
    //Set your locations
    var middleGround = new Microsoft.Maps.Location(51.58959, -3.3279);
    // #map1 is the same as get element by id for bing map
    var map = new Microsoft.Maps.Map('#map', { center: middleGround,zoom: 16,});
    // Get the middle of the map
    // Here you can put pin locations
    var center = map.getCenter();

    //Create custom Pushpin
    var pin = new Microsoft.Maps.Pushpin(center, {color: 'orange',title: 'GIS',subTitle: 'Here',text: '♥'});
    //Add the pushpin to the map
    map.entities.push(pin);
    //Request the user's location
    navigator.geolocation.getCurrentPosition(function (position) {
        var loc = new Microsoft.Maps.Location(position.coords.latitude,position.coords.longitude);
        //Add a pushpin at the user's location.
        var pin = new Microsoft.Maps.Pushpin(loc);
        map.entities.push(pin);
        //Center the map on the user's location.
        map.setView({ center: loc, zoom: 16 });
    });
}

// Map with 2 Pins (Stadiums)
function initMapPin1() {
    //Set your locations
    var middleGround = new Microsoft.Maps.Location(51.58959, -3.3279);
    var libStadium = new Microsoft.Maps.Location(51.642895, -3.934575);
    var priStadium = new Microsoft.Maps.Location(51.478, -3.182);
    // #map is the same as get element by id for bing map
    var map = new Microsoft.Maps.Map('#map', {center: middleGround,zoom: 9,});
    //Create custom Pushpin
    var libPin = new Microsoft.Maps.Pushpin(libStadium, {color: 'black',title: 'Liberty',subTitle: 'Stadium',text: 'LS', icon: 'icons/stadium.png'});
    var priPin = new Microsoft.Maps.Pushpin(priStadium, {color: 'red',title: 'Principality',subTitle: 'Stadium',text: 'PS', icon: 'icons/stadium.png'});
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
        center: middleGround,
        zoom: 10,
    });
    // Create an info box
    infobox = new Microsoft.Maps.Infobox(map.getCenter(),{visible: false});
    //Assign the infobox to a map
    infobox.setMap(map);
    // Create a Marker
    var markerCoch = new Microsoft.Maps.Pushpin(castellCoch, {text:'CC', color: 'black',title: 'Castle Coch', icon: 'icons/castleIcon.png'});
    var markercaerphilly = new Microsoft.Maps.Pushpin(caerphillyC, {text:'CC',color: 'black',title: 'Caerphilly Castle', icon: 'icons/castleIcon.png'});
    var markerCardiff = new Microsoft.Maps.Pushpin(cardiffC, {text:'CC',color: 'black',title: 'Cardiff Castle', icon: 'icons/castleIcon.png'});
    var markerRuperra = new Microsoft.Maps.Pushpin(ruperraC, {text:'RC',color: 'black',title: 'Ruperra Castle', icon: 'icons/castleIcon.png'});
    var markerHensol = new Microsoft.Maps.Pushpin(hensolC, {text:'HC',color: 'black',title: 'Hensol Castle', icon: 'icons/castleIcon.png'});
    var markerLlantrisant = new Microsoft.Maps.Pushpin(llantrisantC, {text:'LC',textcolor: 'black',title: 'Llantrisant Castle', icon: 'icons/castleIcon.png'});
    // Create the content
    markerCoch.metadata = { title: 'Castle Coch', description: 'This is Castle Coch'};
    markercaerphilly.metadata = { title: 'Caerphilly Castle', description: 'This is Caerphilly Castle'};
    markerCardiff.metadata = { title: 'Cardiff Castle', description: 'This is Cardiff Castle'};
    markerRuperra.metadata = { title: 'Ruperra Castle', description: 'This is Ruperra Castle'};
    markerHensol.metadata = { title: 'Hensol Castle', description: 'This is Hensol Castle'};
    markerLlantrisant.metadata = { title: 'Llantrisant Castle', description: 'This is Llantrisant Castle'};
    //Add a click event handler to the pushpin.
    Microsoft.Maps.Events.addHandler(markerCoch, 'click', pushpinClicked);
    Microsoft.Maps.Events.addHandler(markercaerphilly, 'click', pushpinClicked);
    Microsoft.Maps.Events.addHandler(markerCardiff, 'click', pushpinClicked);
    Microsoft.Maps.Events.addHandler(markerRuperra, 'click', pushpinClicked);
    Microsoft.Maps.Events.addHandler(markerHensol, 'click', pushpinClicked);
    Microsoft.Maps.Events.addHandler(markerLlantrisant, 'click', pushpinClicked);
    //Add pushpin to the map.
    map.entities.push(markerCoch);
    map.entities.push(markercaerphilly);
    map.entities.push(markerCardiff);
    map.entities.push(markerRuperra);
    map.entities.push(markerHensol);
    map.entities.push(markerLlantrisant);
}
// Function which checks if the user clicked on a castle.
function pushpinClicked(e) {
    //Make sure the infobox has metadata to display.
    if (e.target.metadata) {
        //Set the infobox options with the metadata of the pushpin.
        infobox.setOptions({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visible: true
        });
    }  
}

// Map With Flight Paths
function initMapFlight(){
    // Create Locations  
    var cardiffAirport = new Microsoft.Maps.Location(51.398139,-3.345478);
    var dublinAirport = new Microsoft.Maps.Location(53.426474,-6.250049);
    var edinburghAirport = new Microsoft.Maps.Location(55.950707,-3.361507);
    var leedsAirport = new Microsoft.Maps.Location(53.867943,-1.661477);
    var bangorAirport = new Microsoft.Maps.Location(53.229635,-4.130064);
    var southamptonAirport = new Microsoft.Maps.Location(50.951510,-1.357670);
    var stansteadAirport = new Microsoft.Maps.Location(51.886005,0.238812);
    var exeterAirport = new Microsoft.Maps.Location(50.734437,-3.420336);
    // Set the middle of the map
    var middleGround = new Microsoft.Maps.Location(54.231486, -4.541848);
    // #map1 is the same as get element by id for bing map
    var map = new Microsoft.Maps.Map('#map', {
        center: middleGround, 
        zoom: 5,});
    // Create an info box
    infobox = new Microsoft.Maps.Infobox(map.getCenter(),{visible: false});
    //Assign the infobox to a map
    infobox.setMap(map);
    // Create array from Cardiff to Different Airports.
    var toDublin = [cardiffAirport, new Microsoft.Maps.Location(dublinAirport.latitude, dublinAirport.longitude)];
    var toEdin = [cardiffAirport, new Microsoft.Maps.Location(edinburghAirport.latitude, edinburghAirport.longitude)];
    var toLeeds = [cardiffAirport, new Microsoft.Maps.Location(leedsAirport.latitude, leedsAirport.longitude)];
    var toBangor = [cardiffAirport, new Microsoft.Maps.Location(bangorAirport.latitude, bangorAirport.longitude)];
    var toSouth = [cardiffAirport, new Microsoft.Maps.Location(southamptonAirport.latitude, southamptonAirport.longitude)];
    var toStans = [cardiffAirport, new Microsoft.Maps.Location(stansteadAirport.latitude, stansteadAirport.longitude)];
    var toExeter = [cardiffAirport, new Microsoft.Maps.Location(exeterAirport.latitude, exeterAirport.longitude)];
    // Create the Polylines
    var cToDublin = new Microsoft.Maps.Polyline(toDublin, {strokeColor: '#0E9C62', strokeThickness: 10});
    var ctoEdin = new Microsoft.Maps.Polyline(toEdin, {strokeColor: '#EB0029', strokeThickness: 10});
    var ctoLeeds = new Microsoft.Maps.Polyline(toLeeds, {strokeColor: '#AC944D', strokeThickness: 10});
    var ctoBangor = new Microsoft.Maps.Polyline(toBangor, {strokeColor: '#8CD663', strokeThickness: 10});
    var ctoSouth = new Microsoft.Maps.Polyline(toSouth, {strokeColor: '#800080', strokeThickness: 10});
    var ctoStans = new Microsoft.Maps.Polyline(toStans, {strokeColor: '#FFC0CB', strokeThickness: 10});
    var ctoExeter = new Microsoft.Maps.Polyline(toExeter, {strokeColor: '#4B4E51', strokeThickness: 10});
    // Add the shape to the map.
    map.entities.push(cToDublin);
    map.entities.push(ctoEdin);
    map.entities.push(ctoLeeds);
    map.entities.push(ctoBangor);
    map.entities.push(ctoSouth);
    map.entities.push(ctoStans);
    map.entities.push(ctoExeter);
    // Create the content
    cToDublin.metadata = {title: 'Cardiff to Dublin', description: 'This flight is from Cardiff to Dublin', airport: dublinAirport};
    ctoEdin.metadata = {title: 'Cardiff to Edinburgh', description: 'This flight is from Cardiff to Edinburgh', airport: edinburghAirport};
    ctoLeeds.metadata = {title: 'Cardiff to Leeds', description: 'This flight is from Cardiff to Leeds', airport: leedsAirport};
    ctoBangor.metadata = {title: 'Cardiff to Bangor', description: 'This flight is from Cardiff to Bangor', airport:bangorAirport};
    ctoSouth.metadata = {title: 'Cardiff to Southampton', description: 'This flight is from Cardiff to Southampton', airport:southamptonAirport};
    ctoStans.metadata = {title: 'Cardiff to stanstead', description: 'This flight is from Cardiff to Stanstead', airport:stansteadAirport};
    ctoExeter.metadata = {title: 'Cardiff to Exeter', description: 'This flight is from Cardiff to Exeter', airport:exeterAirport};
    // Add event listened for a Click on the flight
    Microsoft.Maps.Events.addHandler(cToDublin, "click", polylineClicked);
    Microsoft.Maps.Events.addHandler(ctoEdin, "click", polylineClicked);
    Microsoft.Maps.Events.addHandler(ctoLeeds, "click", polylineClicked);
    Microsoft.Maps.Events.addHandler(ctoBangor, "click", polylineClicked);
    Microsoft.Maps.Events.addHandler(ctoSouth, "click", polylineClicked);
    Microsoft.Maps.Events.addHandler(ctoStans, "click", polylineClicked);
    Microsoft.Maps.Events.addHandler(ctoExeter, "click", polylineClicked);
    // Function to check if clicked
    function polylineClicked(e){
        if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true,
                location: e.target.metadata.airport
            });
        }
        else {
            console.log('error with polyLineClicked.')
        }  
    }
}

function initMapWind() {
    var pointsOne = [
        new Microsoft.Maps.Location(51.86,-3.95),new Microsoft.Maps.Location(51.93,-3.85),
        new Microsoft.Maps.Location(52.01,-3.72),new Microsoft.Maps.Location(51.96,-3.65),
        new Microsoft.Maps.Location(51.87,-3.60),new Microsoft.Maps.Location(51.86,-3.76),
        new Microsoft.Maps.Location(51.84,-3.91),new Microsoft.Maps.Location(51.86,-3.95)
    ];
    var pointsTwo = [
        new Microsoft.Maps.Location(53.10, -3.90),
        new Microsoft.Maps.Location(52.81, -3.59),
        new Microsoft.Maps.Location(52.75, -3.82),
        new Microsoft.Maps.Location(52.83, -4.05),
        new Microsoft.Maps.Location(53.10, -3.90)
    ];
    //Set your middle starting area
    var middleGround = new Microsoft.Maps.Location(52.401302, -3.475913);
    // #map is the same as get element by id for bing map
    var map = new Microsoft.Maps.Map('#map', {center: middleGround,zoom: 7,});
    // Create an info box
    infobox = new Microsoft.Maps.Infobox(map.getCenter(),{visible: false});
    //Assign the infobox to a map
    infobox.setMap(map);
    // create a polygon
    var polyOne = new Microsoft.Maps.Polygon(pointsOne, {
        fillColor: 'rgba(0, 255, 0, 0.5)',
        strokeColor: 'Blue',
        strokeThickness: 2
    });
    var polyTwo = new Microsoft.Maps.Polygon(pointsTwo, {
        fillColor: 'rgba(0, 255, 0, 0.5)',
        strokeColor: 'Blue',
        strokeThickness: 2
    });
      // Content
    polyOne.metadata = {title: 'Brecon', description: 'Wind Farms In Brecon', loclong: new Microsoft.Maps.Location(52.01,-3.72)};
    polyTwo.metadata = {title: 'Snowdonia', description: 'Wind Farms In Snowdonia', loclong: new Microsoft.Maps.Location(53.10, -3.90)};
    // Create event handler (CLICK)
    Microsoft.Maps.Events.addHandler(polyOne, "click", areaClicked);
    Microsoft.Maps.Events.addHandler(polyTwo, "click", areaClicked);
    //Add the pushpin to the map
    map.entities.push(polyOne);
    map.entities.push(polyTwo);
    // Function to check if clicked
    function areaClicked(e){
        if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true,
                location: e.target.metadata.loclong
            });
        }
        else {
            console.log('error with areaClicked.')
        }  
    }
}


function initMapStyle(){
    // Set your middle starting area
    var middleGround = new Microsoft.Maps.Location(51.58959, -3.3279);
    // Set some styles
    var myStyle = {
        "elements": {
            "water": { "fillColor": "#a1e0ff" },
            "waterPoint": { "iconColor": "#a1e0ff" },
            "transportation": { "strokeColor": "#aa6de0" },
            "road": { "fillColor": "#b892db" },
            "railway": { "strokeColor": "#a495b2" },
            "structure": { "fillColor": "#ffffff" },
            "runway": { "fillColor": "#ff7fed" },
            "area": { "fillColor": "#f39ebd" },
            "political": { "borderStrokeColor": "#fe6850", "borderOutlineColor": "#55ffff" },
            "point": { "iconColor": "#ffffff", "fillColor": "#FF6FA0", "strokeColor": "#DB4680" },
            "transit": { "fillColor": "#AA6DE0" }
        },
        "version": "1.0" 
    };
    // Set map
    var map = new Microsoft.Maps.Map('#map', {
        center: middleGround,
        zoom: 9,
        customMapStyle: myStyle,
    });
}