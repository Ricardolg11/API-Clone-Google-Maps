let map;
let button = document.querySelector('.satellite');
button.addEventListener('click', function(){
    map.setMapTypeId('satellite');
});

function initMap() {

    let mapOptions = {
    
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
            mapTypeId: 'terrain' // rodmap, satellite, hybrid, terrain
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

