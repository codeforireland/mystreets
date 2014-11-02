<?php
$lat = htmlspecialchars($_GET["lat"]);
$lng = htmlspecialchars($_GET["lng"]);
?>
<form>
<p><b>Your contact details</b></p>
Twitter ID<br /><input type="text"><br /><br />
Email Address<br /><input type="text"><br /><br />
<p><b>Street Info</b></p>
Street Name<br /><input type="text"><br /><br />
Postcode<br /><input type="text"><br /><br />
latitude<br /><input type="text" value="<?php echo $lat; ?>"><br /><br />
longitude<br /><input type="text" value="<?php echo $lng; ?>"><br /><br />
<p><b>Tell us about your activities</b> eg "BBQ", "Litter duty" etc</p>
Activities<br /><input type="text"><br /><br />
When do you meet?<br /><input type="text"><br /><br />

<p><input type="submit" value="Submit" />
</form>