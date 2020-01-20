<?php
echo 
'<nav class="navbar navbar-expand-md bg-dark p-2 navbar-dark">

    <a class="navbar-brand" href="#">MjB</a>

    <btn btn-dark class="navbar-toggler" type="btn btn-dark" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </btn btn-dark>

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="index.php">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="gmap.php">Google Maps</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="bmap.php">Bing Maps</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="leafletOne.php">Leaflet Maps</a>
            </li>
        </ul>
    </div>
</nav>
'

?>