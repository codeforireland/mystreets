<?php
$lat = htmlspecialchars($_GET["lat"]);
$lng = htmlspecialchars($_GET["lng"]);
?>
<form method="POST" action="functions.php?command=adopt">
	<p><b>Your contact details</b></p>
	Twitter ID<br /><input type="text" name="twitterID"><br /><br />
	Email Address<br /><input type="text" name="email"><br /><br />
	<p><b>Street Info</b></p>
	Street Name<br /><input type="text" name="streetName"><br /><br />
	Postcode<br /><input type="text" name="postcode"><br /><br />
	County<br /><input type="text" name="county"><br /><br />
	latitude<br /><input type="text" value="<?php echo $lat; ?>" name="lat"><br /><br />
	longitude<br /><input type="text" value="<?php echo $lng; ?>" name="lng"><br /><br />
	<p><b>Tell us about your activities</b> eg "BBQ", "Litter duty" etc</p>
	Activities<br /><input type="text" name="activities"><br /><br />
	When do you meet?<br /><input type="text" name="nextMeet"><br /><br />
	<input type="hidden" name="action" value="adopt" >
	<p><input type="submit" value="Submit" />
</form>