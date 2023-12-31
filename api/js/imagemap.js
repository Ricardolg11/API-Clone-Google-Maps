let map;
function initMap() {

    let mapOptions = {
    
            center: {lat: -3.716816, lng: -38.519115},
            zoom: 8,
            mapTypeControlOptions: {
                mapTypeIds: ['osm']
            }
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    //ImageMapType

    let imageMapType = new google.maps.ImageMapType({
        tileSize: new google.maps.Size(256,256),
        getTileUrl: function(coord, zoom) {
            return 'https://tile.openstreetmap.org/'+ zoom  + ' /' + coord.x + '/'+ coord.y + '.png';

        },
        maxZoom: 18,
        name: 'Open Map'

    });

    map.mapTypes.set('osm', imageMapType); // setando opensteatmap osm
    map.setMapType('osm')

}