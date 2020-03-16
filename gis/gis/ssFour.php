<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Include the head info from a PHP file -->
    <?php include 'php/shead.php';?>
</head>
<body>
    <!-- Include the nav bar from a PHP file -->
 <?php include 'php/nav.php';?>
    <!-- Include the nav bar from a PHP file -->
    <?php include 'php/jumbo.php';?>
    <div class="centered">
        <p>Wales Outline & AONB from GeoServer
        References: <a target="_blank" href="http://ces-gis.usw.southwales.ac.uk:8080/geoserver/web/">GeoServer</a>
        <div id="lmap" style="height:400px; width:100%;">
            Leaflet Map
        </div>
        <!-- Include the server side buttons -->
        <?php include 'php/sbuttons.php';?>
    </div>

    <script>
    ssFour();    
    </script>
</body>
</html>