<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Include the head info from a PHP file -->
    <?php include 'php/lhead.php';?>
    
    <!-- Leaflet Plugin -->
    <!-- Leaflet Routing Machine -->
    <link rel="stylesheet" href="node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css">
    <script src="node_modules/leaflet-routing-machine/dist/leaflet.js"></script>
    <script src="node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>
    <script>console.log("Leaflet Routing Machine throws a lot of errors if used too much.");</script>
    
    <!-- Leaflet.GestureHandling -->
    <!-- Using UNPKG Method-->
    <link rel="stylesheet" href="//unpkg.com/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.css" type="text/css">
    <script src="//unpkg.com/leaflet-gesture-handling"></script>

</head>
<body>
    <!-- Include the nav bar from a PHP file -->
 <?php include 'php/nav.php';?>
    <!-- Include the nav bar from a PHP file -->
    <?php include 'php/jumbo.php';?>
    <div class="centered">
        <p>Leaflet Routing Machine - North Wales to South Wales + Leaflet.GestureHandling. <br>
        References: <a target="_blank" href=http://www.liedman.net/leaflet-routing-machine/>Routing Machine</a> - 
        <a target="_blank" href="https://github.com/elmarquis/Leaflet.GestureHandling/">Gesture Handling (Like Google)</a></p>
        <div id="lmap" style="height:400px; width:100%;">
            Leaflet Map
        </div>
        <!-- Include the google buttons -->
        <?php include 'php/lbuttons.php';?> 
    </div>

    <script>
        leafMapFour();
    </script>
</body>
</html>