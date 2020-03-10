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
        <p>I used my artistic eye for this one and created a beautiful and easy to read map. (Jokes, it's hideous.) 
        References: <a target="_blank" href="https://developers.google.com/maps/documentation/javascript/tutorial">Google Doc</a></p>
        <div id="gmapStyled" style="height:400px; width:100%;">
            Google Map
        </div>
        <!-- Include the google buttons -->
        <?php include 'php/gbuttons.php';?>
    </div>
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4b19Rf62isIVy20C-moot42kxl0xxY8Q&callback=initMapStyle2">
    </script>
</body>
</html>