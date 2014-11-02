<!DOCTYPE html>
<?php include 'functions.php'; ?>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title>MyStreets</title>
		<link rel="stylesheet" type="text/css" href="css/main.css">
		<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/smoothness/jquery-ui.css" />

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>

		<script type="text/javascript" src="js/jquery.csv-0.71.min.js"></script>
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>
		<script type="text/javascript" src="js/map-loader.js"></script>
		<script type="text/javascript" src="js/gmaps.js"></script>
		<script type="text/javascript" src='http://api.tiles.mapbox.com/mapbox.js/v1.4.0/mapbox.js'></script>
		<script type="text/javascript" src='js/tabletop1.3.4.js'></script>
		<script type="text/javascript" src='js/sheetsee.js'></script>
		<script type="text/javascript" src='js/leaflet.markercluster.js'></script>

		<link href='http://api.tiles.mapbox.com/mapbox.js/v1.4.0/mapbox.css' rel='stylesheet' />
	</head>
	<body>
		<div class="table">
			<div class="table-row">
				<div class="table-cell content-holder">
					<img src="images/logo.png" />
					<h1>About MyStreets</h1>
					<p>MyStreets allows citizens to take ownership and responsibility of their street or area to ensure its kept in perfect working order.<br/>
						It can also help people organise community events such as litter patrol and BBQs.</p>
					<div class="container">
					<?php
						if(isUserLoggedIn()) { 
							echo "TODO: Add in user management view";
						} else { ?>
							<form class="form-signin" role="form">
								<h2 class="form-signin-heading">Please sign in</h2>
								<input type="email" class="form-control" placeholder="Email address" required autofocus><br />
								<input type="password" class="form-control" placeholder="Password" required>
								<div class="checkbox">
									<label>
										<input type="checkbox" value="remember-me"> Remember me
									</label>
								</div>
								<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
							</form>
							<p>Not a member yet? <a href="#" onClick="displayRegFormDialog()">Click here to Register for free</a></p>
						<?php } ?>
					</div>
				</div>
				<div class="table-cell map-holder">
					<div id="map_canvas" />
				</div>
			</div>
		</div>
	</body>
</html>