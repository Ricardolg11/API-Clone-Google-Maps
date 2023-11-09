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

class MeuMapa {
    constructor(tileSize) {
        this.tileSize = tileSize;
        this.maxZoom = 18;
        this.name = 'Meu Mapa';
        this.alt = 'O mapa não carregou';
    }

    getTile(coord, zoom, ownerDocument) {
        let div = ownerDocument.createElement('div');
        div.innerHTML = 'Ricardo';
        div.style.width = this.tileSize.width+'px';
        div.style.height = this.tileSize.height+'px';
        div.style.fontSize = '10px';
        div.style.backgroundColor = '#333';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px';
        div.style.borderColor = '#0000';
        return div;

    } 
}
let map;

function initMap() {

    let mapOptions = {
    
            center: {lat: 3.716816, lng: 38.519115},
            zoom: 8,
            mapTypeId: 'meumapa', // rodmap, satellite, hybrid, terrain
            mapTypeControlOptions: {
                mapTypeIds: ['roadmap', 'meumapa', 'satellite', 'hybrid']
            }
    };


    
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    map.mapTypes.set('meumapa', new MeuMapa(new google.maps.Size(256,256)));
}