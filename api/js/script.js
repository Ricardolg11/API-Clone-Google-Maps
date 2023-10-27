// MapType

// Atributos
// MaxZoom*
// titleSize* 200
// name
// minZoom
// alt

// Metodos
// getTile(coord, zoom, document)
// releaseTile(tile)

// Meu mapa

class MeuMapa {
    constructor(tileSize) {
        this.tileSize = tileSize;
        this.maxZoom = 18;
        this.name = 'meumapa';
        this.alt = 'O mapa não carregou';
    }

    //criando blocos
    getTile(coord, zoom, ownerDocument){
        let div = ownerDocument.createElement('div');
        div.innerHTML = 'ricardo';
        div.style.width = this.tileSize.width+'px';
        div.style.height = this.tileSize.width+'px';
        div.style.fontSize = '10px';
        div.style.backgroundColor = '#ddd';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px'
        div.style.borderColor = '#333'
        return div;
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

    map.mapTypeId.set('meumapa', new Meumapa(new google.maps.Size(256, 256)))
}

