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
        text: 'PS'
    });
   
    //Add the pushpin to the map
    map.entities.push(libPin);
    map.entities.push(priPin);
}

// Map with Clickable Castles
function initMapClick(){

}

// Map With Flight Paths
function initMapFlight(){

}

// Map with Area's (Wind Farms)
function initMapWind(){

}