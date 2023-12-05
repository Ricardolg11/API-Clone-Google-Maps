let map;

function initMap() {

    let mapOptions = {
    
            center: {lat: 3.716816, lng: 38.519115},
            zoom: 8
    };


    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    //ImageMapType

    let imageMapType = new google.maps.ImageMapType({
        tileSize: new google.maps.Size(256, 256) ,
        getTileUrl: function(coord, zoom) {
            return '';

        },
        maxZoom: 18

    });

}