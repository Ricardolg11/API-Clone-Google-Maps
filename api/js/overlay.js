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

class OverlayMap{
    constructor(tileSize) {
        this.tileSize = tileSize;
    }

    getTile(coord, zoom, ownerDocument) {
        let div = ownerDocument.createElement('div');
        div.style.width = this.tileSize.width+'px';
        div.style.height = this.tileSize.height+'px';
        div.style.fontSize = '10px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px';
        div.style.borderColor = '#333';
        return div;
    } 
}

let map;

function initMap() {

    let mapOptions = {
    
            center: {lat: 3.716816, lng: 38.519115},
            zoom: 8,
            mapTypeId: 'roadmap', // roadmap, satellite, hybrid, terrain
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    map.overlayMapTypes.insertAt(0, new OverlayMap(new google.maps.Size(256,256)));
}