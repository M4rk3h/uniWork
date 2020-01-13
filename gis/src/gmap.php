<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- JavaScript Ref -->
    <link rel="stylesheet" href="css/mycss.css">
    <!-- CSS Ref -->
    <script src="js/gmaps.js"></script>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!-- Bootstrap JS-->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
    </script>
    <!-- Font Awesome Ref-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <!-- Added a Favicon.png-->
    <link rel="shortcut icon" type="image/png" href="favicon.icon" />
    <title>Mark James Baber</title>
</head>

<body>
    <?php include 'php/nav.php';?>
    <div class="jumbotron jumbotron-fluid text-center p-4" style="background-color: #343a40; border-top: solid 2px #fff;">
        <div class="container">
            <h1>Mark James Baber</h1>
            <p style="color: #fff;"> Default With Flag </p>
        </div>
    </div>
    <div class="centered">
        <p>Created a default Google Map with a flag, can also get users location.</p>
        <div id="gmapDefault" style="height:400px; width:100%;">
            Google Map
        </div>
        <br>
        Please use the buttons below, to see other maps
        <br>
        <a href="gmap.html" class="btn btn-dark disabled" aria-pressed="true"> Default Map</a>
        <a href="gmap1.html" class="btn btn-dark" aria-pressed="true"> Stadium Map</a>
        <a href="gmapClick.html" class="btn btn-dark" aria-pressed="true"> Click Map</a>
        <a href="gmapStyle.html" class="btn btn-dark" aria-pressed="true"> Styled Map</a>
        <a href="gmapFlight.html" class="btn btn-dark" aria-pressed="true"> Flight Map</a>
        <a href="gmapWind.html" class="btn btn-dark" aria-pressed="true" > Wind Map</a>
        <a href="gmapPins.html" class="btn btn-dark" aria-pressed="true" > KML Pins</a>
    </div>
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4b19Rf62isIVy20C-moot42kxl0xxY8Q&callback=defaultMap">
    </script>
</body>

</html>