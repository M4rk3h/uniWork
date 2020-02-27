<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Include the head info from a PHP file -->
    <?php include 'php/ghead.php';?>
</head>
<body>
    <!-- Include the nav bar from a PHP file -->
    <?php include 'php/nav.php';?>
    <!-- Include the nav bar from a PHP file -->
    <?php include 'php/jumbo.php';?>
    <div class="centered">
        <p>Added flight paths, on click information is shown, when the mouse hovers off the line, the info window closes.
            References: <a target="_blank" href="https://developers.google.com/maps/documentation/javascript/tutorial">Google Doc</a></p>
        <div id="gmapFlight" style="height:400px; width:100%;">
            <!-- Google Map-->
        </div>
        <!-- Include the google buttons -->
        <?php include 'php/gbuttons.php';?>
    </div>
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4b19Rf62isIVy20C-moot42kxl0xxY8Q&callback=initMapFlight">
    </script>
</body>

</html>