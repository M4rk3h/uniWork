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
        <p>Created a default Bing Map with a flag, can also get users location.
        References: <a target="_blank" href="https://docs.microsoft.com/en-us/bingmaps/getting-started/"> Bing Docs </a></p>
        <div id="map" style="height:400px; width:100%;"> </div>
        <!-- Include the bing buttons -->
        <?php include 'php/bbuttons.php';?>
    </div>
    <script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?callback=initMap&key=ArD-NZNSRKb6D0I49V9fCN7GKih8YY6tb34gp9BbZrNKe25y6FwzH4_vfXM8eSmq' async defer></script>
</body>

</html>