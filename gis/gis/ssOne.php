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
    // create a tileLayer with WMS which shows the map details
	L.tileLayer.wms('http://81.87.34.57:8080/geoserver/s01/wms',{
				opacity: 1.0,
				layers: 's01:outline',
				format: 'image/png',
				transparent: true,
				attribution: 'from CES-GIS GeoServer'
		}).addTo(map);

    
    </script>
</body>
</html>