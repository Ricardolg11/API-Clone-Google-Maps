// Mapype
// Atributos
// MaxZoom*
// titleSize* 200
// name
// minZoom
// alt

// Metodos
// getTile(coord, zoom, document)
// releaseTile(tile)


class meumapa {
    constructor(tileSize) {
        this.tileSize = tileSize;
        this.maxZoom = 18;
        this.name = 'meumapa';
        this.alt = 'O mapa não carregou';
    }

    getTile(coord, zoom, ownerDocument) {
        let div = ownerDocument.createElement('div');

    } 
}


let map;
let button = document.querySelector('.satellite');
button.addEventListener('click', function(){
    map.setMapTypeId('satellite');
});

function initMap() {

    let mapOptions = {
    
            center: {lat: 3.716816, lng: 38.519115},
            zoom: 8,
            mapTypeId: 'roadmap' // rodmap, satellite, hybrid, terrain
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

