<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Include the head info from a PHP file -->
    <?php include 'php/lhead.php';?>
</head>
<body>
    <!-- Include the nav bar from a PHP file -->
 <?php include 'php/nav.php';?>
    <!-- Include the nav bar from a PHP file -->
    <?php include 'php/jumbo.php';?>
    <div class="centered">
        <p>Created a default Leaflet Map with a toggled pin.
        References: <a target="_blank" href="https://leafletjs.com/">Leaflet Docs</a>
        <div id="lmap" style="height:400px; width:100%;">
            Leaflet Map
        </div>
        <!-- Include the google buttons -->
        <?php include 'php/sbuttons.php';?>
    </div>

    <script>
    // Create the map
    var map = L.map('lmap').setView([52.5, -3.9], 6.5);
    // create a tileLayer which shows the map details
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/light-v9'
    }).addTo(map);
    
    $(document).ready(function(){
    console.log("OK Document has finished loading");
    
    //define two JS objects:
    //	"data" will hold GeoJSON data
    //	"dataLayer" for Leaflet’s rendering into layer objects for the map
    
    var data = {};
    var dataLayer;
    
    //GeoJson data are added to the map by this function
    function addData(){
    
        console.log("File load has completed, can now build map using retrieved data...");
        console.log(" ");
        console.log(data);
            
        //parse GeoJSON to create a layer to be added to the map
        dataLayer = L.geoJson(data, {
        
            //show features as circles rather than use default markers -->
             pointToLayer: function(feature, latlng){ 
                 return L.circleMarker(latlng, { 
                    radius: 4,	color: '#000', fillColor: '#000', 	fillOpacity: 1
                 }) 
            } 
        }).addTo(map);

    };

    //load data asynchronously using AJAX
    $.when(    
        //place deferred AJAX requests here
        $.getJSON('data/aba.js', function(result){
            data = result;
        })
        
    //the callback function "addData" is called only when finished  
    ).then(addData);
    });				
    </script>
</body>
</html>