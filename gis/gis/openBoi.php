<!DOCTYPE html>
<html>

<head>
    <!-- Include the head info from a PHP file -->
    <?php include 'php/ohead.php';?>
    <link rel="stylesheet" href="openBoi.9d1f77c1.css">
</head>

<body>
    <!-- Include the nav bar from a PHP file -->
    <?php include 'php/nav.php';?>
    <!-- Include the nav bar from a PHP file -->
    <?php include 'php/jumbo.php';?>

    <div class="centered">
        <p>OpenLayers 6 Default Map (Difficult to understand after "building"). <br>
        References: <a target="_blank" href="https://openlayers.org/en/latest/doc/quickstart.html">OpenLayers 6</a></p>
        <div id="map" class="map" style="height:400px;width:100%;"> </div>
        <?php include 'php/obuttons.php';?>
    </div>
    <script src="openBoi.751901f4.js"></script>

</body>

</html>