var map;

$(document).ready(function()
{
    map = new GMaps({
        el: '#map_canvas',
        lat: 53.346046,
        lng: -6.260094,
		zoom: 12,
		zoomControl : true,
		zoomControlOpt: {
			style : 'SMALL',
			position: 'TOP_LEFT'
		},
		panControl : false,
		click: function(e){
			addCustomMarkerToMap();
		},
		dragend: function(e){
		  alert('Drag Event');
		}
	  });

    map.setContextMenu({
        control: 'map',
        options: [{
                title: 'Add marker',
                name: 'add_marker',
                action: function(e) 
                {
                    console.log(e.latLng.lat());
                    console.log(e.latLng.lng());
                    this.addMarker({
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng(),
                        title: 'New marker'
                    });
                    this.hideContextMenu();
                }
            }]
    });
	/*
	GMaps.geolocate({
    success: function(position){
      map.setCenter(position.coords.latitude, position.coords.longitude);

      map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        title: 'You are here.',
        infoWindow: {
          content: '<p>You are here!</p>'
        }
      });
    },
    error: function(error){
      alert('Geolocation failed: '+error.message);
    },
    not_supported: function(){
      alert("Your browser does not support geolocation");
    }
  });*/

    map.setContextMenu({
        control: 'marker',
        options: [{
                title: 'Center here',
                name: 'center_here',
                action: function(e) 
                {
                    this.setCenter(e.latLng.lat(), e.latLng.lng());
                }
            }]
    });
});

function addCustomMarkerToMap() {
    alert('Click event');
}