function initMap() {
    var mapOptions = {
        credentials: "ArD-NZNSRKb6D0I49V9fCN7GKih8YY6tb34gp9BbZrNKe25y6FwzH4_vfXM8eSmq",
        center: new Microsoft.Maps.Location(51.58959, -3.3279),
        zoom: 15,
        mapTypeId: Microsoft.Maps.MapTypeId.road
    };
    var map = new Microsoft.Maps.Map(document.getElementById("map"),mapOptions);
}