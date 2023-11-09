// Criando blocos de imagem
// usando classe imageMapType
let map;

function initMap() {

    let mapOptions = {
    
            center: {lat: 3.716816, lng: 38.519115},
            zoom: 8,
            mapTypeId: 'roadmap', // roadmap, satellite, hybrid, terrain
    };

    // chamando mapas

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    map.overlayMapTypes.insertAt(0, new OverlayMap(new google.maps.Size(256,256)));
}