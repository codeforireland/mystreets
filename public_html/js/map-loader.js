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
                    displayAdoptStreetDialog(lat, lng);
                    this.hideContextMenu();
                }
            }]
    });
	displayMarkers();
});

function handleMapClick() {
	//alert("handle map click");
}
//Pull data from database and display on map
function displayMarkers() {
		$.ajax({
		type: "GET",
		url: "functions.php?command=getmarkers",
		dataType: "text",
		success: processData,
		error: function(){ alert("failed: " + fullUrl); }
	});
}
function processData(rawData) {
	info = $.csv.toArrays(rawData);
	var posOfTitle = 2;
	var posOfLat = 6;
	var posOfLng = 7;

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
function displayAdoptStreetDialog(lat, lng) {
	var page = "addform.php?lat="+lat+"&lng="+lng;

	var $dialog = $('<div></div>')
		.html('<iframe style="border: 0px; " src="' + page + '" width="100%" height="100%"></iframe>')
		.dialog({
		   autoOpen: false,
		   modal: true,
		   height: 625,
		   width: 500,
		   title: "Adopt A Street"
		});
	$dialog.dialog('open');
}

//Popup a form asking user to fill in details to register
function displayRegFormDialog() {
	var page = "regform.php";

	var $dialog = $('<div></div>')
		.html('<iframe style="border: 0px; " src="' + page + '" width="100%" height="100%"></iframe>')
		.dialog({
		   autoOpen: false,
		   modal: true,
		   height: 625,
		   width: 500,
		   title: "Register with Adopt A Street"
		});
	$dialog.dialog('open');
}

function displayAdoptStreetDialogOLD() {

	var page = "https://docs.google.com/forms/d/1-jkcWa5Vccr0a2-PC5ZQqgHn_W-U6BoU_ucsdwnOzXo/viewform";

	var $dialog = $('<div></div>')
				   .html('<iframe style="border: 0px; " src="' + page + '" width="100%" height="100%"></iframe>')
				   .dialog({
					   autoOpen: false,
					   modal: true,
					   height: 625,
					   width: 500,
					   title: "Adopt A Street"
				   });
	$dialog.dialog('open');
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
	alert("TODO: Add to database");
}



///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
/////////////////OLD STUFF/////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//Download raw data and convert to markers
function displayMarkersOLD() {
	var baseUrl = "https://spreadsheets.google.com/tq?tqx=out:csv&key=0Avj-ESJsQ-8rdHZqMS04QzY5MWJDSzRVczNKV3JuZ0E&tq=";
	var selectAll = "select%20*";

	var fullUrl = baseUrl+selectAll;

	$.ajax({
		type: "GET",
		url: fullUrl,
		dataType: "text",
		success: processDataOLD,
		error: function(){ alert("failed: " + fullUrl); }
	});
}

//Process the raw data and add to map
function processDataOLD(rawData) {
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