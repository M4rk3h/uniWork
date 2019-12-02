// Default Map with GIS Location
function initMap() {
    //Set your locations
    var middleGround = new Microsoft.Maps.Location(51.58959, -3.3279);
    // #map1 is the same as get element by id for bing map
    var map = new Microsoft.Maps.Map('#map', { 
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
    var map = new Microsoft.Maps.Map('#map', {credentials: "ArD-NZNSRKb6D0I49V9fCN7GKih8YY6tb34gp9BbZrNKe25y6FwzH4_vfXM8eSmq",center: middleGround,zoom: 9,});
    //Create custom Pushpin
    var libPin = new Microsoft.Maps.Pushpin(libStadium, {color: 'black',title: 'Liberty',subTitle: 'Stadium',text: 'LS'});
    var priPin = new Microsoft.Maps.Pushpin(priStadium, {color: 'red',title: 'Principality',subTitle: 'Stadium',text: 'PS'});
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
        zoom: 10,
    });
    
    // Create an info box
    infobox = new Microsoft.Maps.Infobox(map.getCenter(),{visible: false});
    //Assign the infobox to a map
    infobox.setMap(map);
    // Create a Marker
    var markerCoch = new Microsoft.Maps.Pushpin(castellCoch, {color: 'black',title: 'Liberty',subTitle: 'Stadium',text: 'LS', icon: 'icons/castleIcon.png'});
    var markercaerphilly = new Microsoft.Maps.Pushpin(caerphillyC, {color: 'black',title: 'Liberty',subTitle: 'Stadium',text: 'LS', icon: 'icons/castleIcon.png'});
    var markerCardiff = new Microsoft.Maps.Pushpin(cardiffC, {color: 'black',title: 'Liberty',subTitle: 'Stadium',text: 'LS', icon: 'icons/castleIcon.png'});
    var markerRuperra = new Microsoft.Maps.Pushpin(ruperraC, {color: 'black',title: 'Liberty',subTitle: 'Stadium',text: 'LS', icon: 'icons/castleIcon.png'});
    var markerHensol = new Microsoft.Maps.Pushpin(hensolC, {color: 'black',title: 'Liberty',subTitle: 'Stadium',text: 'LS', icon: 'icons/castleIcon.png'});
    var markerLlantrisant = new Microsoft.Maps.Pushpin(llantrisantC, {color: 'black',title: 'Liberty',subTitle: 'Stadium',text: 'LS', icon: 'icons/castleIcon.png'});
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
    // Create array from Cardiff to Different Airports.
    var toDublin = [cardiffAirport, new Microsoft.Maps.Location(dublinAirport.latitude, dublinAirport.longitude)];
    var toEdin = [cardiffAirport, new Microsoft.Maps.Location(edinburghAirport.latitude, edinburghAirport.longitude)];
    var toLeeds = [cardiffAirport, new Microsoft.Maps.Location(leedsAirport.latitude, leedsAirport.longitude)];
    var toBangor = [cardiffAirport, new Microsoft.Maps.Location(bangorAirport.latitude, bangorAirport.longitude)];
    var toSouth = [cardiffAirport, new Microsoft.Maps.Location(southamptonAirport.latitude, southamptonAirport.longitude)];
    var toStans = [cardiffAirport, new Microsoft.Maps.Location(stansteadAirport.latitude, stansteadAirport.longitude)];
    var toExeter = [cardiffAirport, new Microsoft.Maps.Location(exeterAirport.latitude, exeterAirport.longitude)];
    // Create the Polylines
    var cToDublin = new Microsoft.Maps.Polyline(toDublin, {strokeColor: '#0E9C62', strokeThickness: 3, strokeDashArray: [4, 4]});
    var ctoEdin = new Microsoft.Maps.Polyline(toEdin, {strokeColor: '#EB0029', strokeThickness: 3, strokeDashArray: [4, 4]});
    var ctoLeeds = new Microsoft.Maps.Polyline(toLeeds, {strokeColor: '#AC944D', strokeThickness: 3, strokeDashArray: [4, 4]});
    var ctoBangor = new Microsoft.Maps.Polyline(toBangor, {strokeColor: '#8CD663', strokeThickness: 3, strokeDashArray: [4, 4]});
    var ctoSouth = new Microsoft.Maps.Polyline(toSouth, {strokeColor: '#002E3B', strokeThickness: 3, strokeDashArray: [4, 4]});
    var ctoStans = new Microsoft.Maps.Polyline(toStans, {strokeColor: '#0D8EAD', strokeThickness: 3, strokeDashArray: [4, 4]});
    var ctoExeter = new Microsoft.Maps.Polyline(toExeter, {strokeColor: '#4B4E51', strokeThickness: 3, strokeDashArray: [4, 4]});
    //Add the shape to the map.
    map.entities.push(cToDublin);
    map.entities.push(ctoEdin);
    map.entities.push(ctoLeeds);
    map.entities.push(ctoBangor);
    map.entities.push(ctoSouth);
    map.entities.push(ctoStans);
    map.entities.push(ctoExeter);
};