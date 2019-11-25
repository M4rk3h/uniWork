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
    //Set your locations
    var middleGround = new Microsoft.Maps.Location(51.58959, -3.3279);
    // #map1 is the same as get element by id for bing map
    var map = new Microsoft.Maps.Map('#map', { 
        center: middleGround,
        zoom: 7,
    });
    // Create a GeoJSON
    // Create where you want the center of the map
    var middleGround = {lat: 54.231486, lng: -4.541848};
    // Create a variable for cardiff airport
    var cardiffAirport = {lat: 51.398139, lng: -3.345478};
    var dublinAirport = {lat: 53.426474, lng: -6.250049};
    var edinburghAirport = {lat: 55.950707, lng: -3.361507};
    var leedsAirport = {lat: 53.867943, lng: -1.661477 };
    var bangorAirport = {lat: 53.229635,lng:-4.130064};
    var southamptonAirport = {lat: 50.951510, lng:-1.357670};
    var stansteadAirport = {lat: 51.886005, lng: 0.238812};
    var exeterAirport = {lat: 50.734437, lng: -3.420336};
    
    var carduffToDublin = {
            "type": "Polygon",
            "coordinates": [[
                    [cardiffAirport],
                    [dublinAirport]
            ]]
        };
    //Load the GeoJson Module.
    Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function () {

        //Parse the GeoJson object into a Bing Maps shape.
    var shape = Microsoft.Maps.GeoJson.read(carduffToDublin, {
        polygonOptions: {
            fillColor: 'rgba(255,0,0,0.5)',
            strokeColor: 'black',
            strokeThickness: 5
        }
    });

    //Add the shape to the map.
    map.entities.push(shape);
    });
}