var map;
var data;

var lat;
var lng;

$(document).ready(function() {
	map = new GMaps({
		el: '#map_canvas',
		//Centre map
		lat: 53.346046,
		lng: -6.260094,
		zoom: 14,
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
                    lat = e.latLng.lat();
                    lng = e.latLng.lng();
                    console.log(lat + "," + lng);
                    displayAdoptStreetDialog();
                    /*
                    this.addMarker({
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng(),
                        title: 'New marker'
                    });*/
                    this.hideContextMenu();
                }
            }]
    });
	displayMarkers();
});

//Download raw data and convert to markers
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

//Process the raw data and add to map
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

//Popup a form asking user to fill in details to adopt a street
function displayAdoptStreetDialog() {

	$("body").append ( '\
		<div id="dialog" title="Adopt a Street">\
		<form method="post" id="adoptForm" onSubmit="captureForm()">\
		<fieldset>\
		  <label for="twitter-id">Twitter ID</label>\
		  <input type="text" name="twitter-id" id="twitter-id" placeholder="eg, @michael" class="text ui-widget-content ui-corner-all">\
		  <label for="name">Name</label>\
		  <input type="text" name="name" id="name" placeholder="eg, Michael Murphy" class="text ui-widget-content ui-corner-all">\
		  <label for="address">Address</label>\
		  <input type="text" name="address" id="address" placeholder="eg, 1 Country Road" class="text ui-widget-content ui-corner-all">\
		  <label for="city">City/Town</label>\
		  <input type="text" name="city" id="city" placeholder="eg, Dublin" class="text ui-widget-content ui-corner-all">\
		  <label for="state">State</label>\
		  <input type="text" name="state" id="state" placeholder="Optional" class="text ui-widget-content ui-corner-all">\
		  <label for="postcode">postcode</label>\
		  <input type="text" name="postcode" id="postcode" placeholder="Optional" class="text ui-widget-content ui-corner-all">\
		  <label for="country">Country</label>\
		  <input type="text" name="country" id="country" placeholder="eg, Ireland" class="text ui-widget-content ui-corner-all">\
		  <label for="next-meetup">Next Meetup</label>\
		  <input type="text" name="next-meetup" id="next-meetup" placeholder="eg, 05/10/2015" class="text ui-widget-content ui-corner-all">\
		  <label for="activities">Activities</label>\
		  <input type="text" name="activities" id="activities" placeholder="eg, litter patrol, gardening, painting" class="text ui-widget-content ui-corner-all">\
		  <input type="submit" value="Adopt">\
		</fieldset>\
	  </form>\
	</div>\
	');
	$( "#dialog" ).dialog();
}

//Get the values from the form
function captureForm() {
	var twitter    = document.getElementById("twitter-id").value;
	var name       = document.getElementById("name").value;
	var address    = document.getElementById("address").value;
	var city       = document.getElementById("city").value;
	var state      = document.getElementById("state").value;
	var postcode   = document.getElementById("postcode").value;
	var country    = document.getElementById("country").value;
	var nextMeetup = document.getElementById("next-meetup").value;
	var activities = document.getElementById("activities").value;
	addToDatabase(twitter, name, address, city, state, postcode, lat, lng, country, nextMeetup, activities);
	return false;
}

function addToDatabase(twitter, name, address, city, state, postcode, lat, lng, country, nextMeetup, activities) {
//TODO: Add code in here to add to database
	alert("TODOL Add to database");
}