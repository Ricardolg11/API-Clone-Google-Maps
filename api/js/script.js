let map;
function initMap() {

    let mapOptions = {
    
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
            mapTypeId: '' // rodmap, satellite, hybrid, terrain
    };

    

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

