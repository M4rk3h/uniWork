function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.58959, -3.3279),
        zoom: 15,
        mapTypeId: 'hybrid',
        disableDefaultUI: true
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}