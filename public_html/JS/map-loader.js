var map;

$(document).ready(function()
{
    map = new GMaps({
        el: '#map_canvas',
        lat: 53.346046,
        lng: -6.260094
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