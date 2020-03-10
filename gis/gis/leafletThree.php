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
        References: <a target="_blank" href="https://leafletjs.com/examples/layers-control/">Layer Controls</a></p>
        <div id="lmap" style="height:400px; width:100%;">
            Leaflet Map
        </div>
        <!-- Include the google buttons -->
        <?php include 'php/lbuttons.php';?> 
    </div>

    <script>
        leafMapThree();
    </script>
</body>
</html>