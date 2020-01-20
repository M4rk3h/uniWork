<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Include the head info from a PHP file -->
    <?php include 'php/bhead.php';?>
</head>
<body>
    <!-- Include the nav bar from a PHP file -->
    <?php include 'php/nav.php';?>
    <!-- Include the nav bar from a PHP file -->
    <?php include 'php/jumbo.php';?>
    <div class="centered">
        <p>A map with 2 custom pins on the stadiums in south wales.</p>
        <div id="map" style="height:400px; width:100%;"> </div>
        <!-- Include the bing buttons -->
        <?php include 'php/bbuttons.php';?>
    </div>
    <script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?callback=initMapPin1&key=ArD-NZNSRKb6D0I49V9fCN7GKih8YY6tb34gp9BbZrNKe25y6FwzH4_vfXM8eSmq' async defer></script>
</body>
</html>