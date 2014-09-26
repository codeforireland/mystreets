var map;
var data;

$(document).ready(function() {
    map = new GMaps({
        el: '#map_canvas',
		//Centre map
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
			handleMapClick();
		},/*
		dragend: function(e){
		  alert('Drag Event');
		}*/
		
	  });

    map.setContextMenu({
        control: 'map',
        options: [{
                title: 'Adopt This Street',
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
	displayMarkers();
});

function displayMarkers() {
	var baseUrl = "https://spreadsheets.google.com/tq?tqx=out:csv&key=0Avj-ESJsQ-8rdHZqMS04QzY5MWJDSzRVczNKV3JuZ0E&tq=";
	var selectAll = "select%20*";

	var fullUrl = baseUrl+selectAll;

	$.ajax({
		type: "GET",
		url: fullUrl,
		dataType: "text",
		success: processData,
		error: function(){ alert("failed: " + fullUrl); }
	});
}

function processData(rawData) {
	var posOfTitle = 2;
	var posOfLat = 6;
	var posOfLng = 7;
	data = rawData.replace("// Data table response","");
	info = $.csv.toArrays(data.substring(178, data.length));

	// Loop through both dimensions
	var markers = []
	for (i = 0; i < info.length; ++i) {
		title = info[i][posOfTitle];
		lat = info[i][posOfLat];
		lng = info[i][posOfLng];
		marker = {
			lat: lat,
			lng: lng,
			infoWindow: {
				content: title
			}
		}
		markers.push(marker);
	}
	map.addMarkers(markers);
}

function handleMapClick() {
    //alert('Click event');
}