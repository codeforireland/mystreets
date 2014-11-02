<!DOCTYPE html>
<?php include 'functions.php';?>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>MyStreets</title>
        <link rel="stylesheet" type="text/css" href="css/main.css">
		<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/smoothness/jquery-ui.css" />

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>

		<script type="text/javascript" src="JS/jquery.csv-0.71.min.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>
        <script type="text/javascript" src="JS/map-loader.js"></script>
        <script type="text/javascript" src="JS/gmaps.js"></script>
		<script type="text/javascript" src='http://api.tiles.mapbox.com/mapbox.js/v1.4.0/mapbox.js'></script>
		<script type="text/javascript" src='JS/tabletop1.3.4.js'></script>
		<script type="text/javascript" src='JS/sheetsee.js'></script>
		<script type="text/javascript" src='JS/leaflet.markercluster.js'></script>
		

		<link href='http://api.tiles.mapbox.com/mapbox.js/v1.4.0/mapbox.css' rel='stylesheet' />
    </head>
    <body>
        <div class="table">
            <div class="table-row">
                <div class="table-cell content-holder">
				<img src="images/logo.png" />
				<h1>About MyStreets</h1>
				<p>MYSTREETS MYSTREETS MYSTREETS MYSTREETS MYSTREETS MYSTREETS MYSTREETS MYSTREETS MYSTREETS MYSTREETS MYSTREETS 
				MYSTREETS MYSTREETS MYSTREETS MYSTREETS MYSTREETS MYSTREETS MYSTREETS MYSTREETS MYSTREETS MYSTREETS MYSTREETS</p>
                    Add Login/Register stuff here...
					<center>
					<form>
						<table>
						<tr><td><input type="text"></td></tr>
						<tr><td><input type="text"></td></tr>
						<tr><td><input type="checkbox" value="checked">Rememeber me</td></tr>
						<tr><td align="center"><input type="button" value="Login"><input type="button" value="Register"></td></tr>
						</table>
					</form>
					</center>
                </div>
                <div class="table-cell map-holder">
                    <div id="map_canvas">
                        
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>