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
        <p>Places in Wales beginning with 'Aber. 
        References: <a target="_blank" href="https://leafletjs.com/reference-1.6.0.html#marker-togeojson">Leaflet geoJSON</a> -
        <a target="_blank" href="https://www.british-towns.net/wales/local-communities/a/ab">Places Called Aber</a></p>
        <script src="data/aba.js" type="text/javascript"></script>

        <div id="lmap" style="height:400px; width:100%;">
            Leaflet Map
        </div>
        <!-- Include the google buttons -->
        <?php include 'php/lbuttons.php';?> 
    </div>

    <script>
        leafMapTwo();
    </script>
</body>
</html>