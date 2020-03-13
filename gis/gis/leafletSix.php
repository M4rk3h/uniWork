<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Include the head info from a PHP file -->
    <?php include 'php/lhead.php';?>
    <!-- Include Leaflet Plugins Here -->
    <script src="node_modules/leaflet-GIBS/src/GIBSMetadata.js"></script>
    <script src="node_modules/leaflet-GIBS/src/GIBSLayer.js"></script>
</head>
<body>
    <!-- Include the nav bar from a PHP file -->
 <?php include 'php/nav.php';?>
    <!-- Include the nav bar from a PHP file -->
    <?php include 'php/jumbo.php';?>
    <div class="centered">
        <p>Leaflet Plugin Animation. 
        References: <a target="_blank" href="https://github.com/openplans/Leaflet.AnimatedMarker">Animation</a></p>
        <div id="lmap" style="height:400px; width:100%;">
            Leaflet Map
        </div>
        <!-- Include the google buttons -->
        <?php include 'php/lbuttons.php';?> 
    </div>

    <script>
        leafMapSix();
    </script>
</body>
</html>