<?php
require 'config.php';
foreach ($_GET as $key => $value) {
	switch ($value) {
		case 'getmarkers':
			getMarkersFromDB();
			break;
		case 'create' :
			createDatabaseTable();
			break;
		case 'populate' :
			populateDB();
			break;
		case 'register';
			registerUser();
			break;
		case 'adopt':
			adoptAStreet();
			break;
		default :
			echo 'Unknown command';
			break;
	}
}

function registerUser() {
	//TODO: Validate user input
	$twitter = htmlspecialchars($_POST["twitter"]); 
	$email = htmlspecialchars($_POST["email"]); 
	$password = htmlspecialchars($_POST["password"]); 
	echo "twitter: $twitter<br/>email: $email<br/>password: $password";
	//TODO: Add to database
}

function adoptAStreet() {
	//TODO: Validate user input
	$twitter = htmlspecialchars($_POST["twitter"]); 
	$email = htmlspecialchars($_POST["email"]);	
	$streetName = htmlspecialchars($_POST["streetName"]); 
	$postcode = htmlspecialchars($_POST["postcode"]);
	$lat = htmlspecialchars($_POST["lat"]); 
	$lng = htmlspecialchars($_POST["lng"]);
	$activities = htmlspecialchars($_POST["activities"]); 
	$nextMeet = htmlspecialchars($_POST["nextMeet"]);
	$action = htmlspecialchars($_POST["action"]);

	//TODO: validate and insert into DB
}

function isUserLoggedIn() {
	//TODO: 
	return false;
}

function getMarkersFromDB() {
	$db = mysqli_connect(DB_HOST,DB_USERNAME,DB_PASSWORD,DB_DATABASE);#// Check connection
	if (mysqli_connect_errno()) {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

	$query = "SELECT * FROM " . DB_MAIN_TABLE;
	# execute the query.
	$result = $db->query($query) or die("Connection error: " . mysqli_error($link));
	$row = $result->fetch_assoc();
	$returnArray = array();
	$index = 0;
	$tmpCsv = "";
	while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
		$tmpCsv = $row["username"];
		$tmpCsv .= "," .$row["name"];
		$tmpCsv .= "," .$row["address"];
		$tmpCsv .= "," .$row["city"];
		$tmpCsv .= "," .$row["state"];
		$tmpCsv .= "," .$row["postcode"];
		$tmpCsv .= "," .$row["lat"];
		$tmpCsv .= "," .$row["lng"];
		$tmpCsv .= "," .$row["country"];
		$tmpCsv .= "," .$row["next_meetup"];
		$tmpCsv .= "," .$row["activities"];

		$returnArray[$index] = $tmpCsv;
		$index++;
	}

	foreach($returnArray as $child) {
		echo $child . "\n";
	}

	return $returnArray;
}

function createDatabaseTable() {
	mysql_query("
				CREATE TABLE `mystreet` (
				  `id` int(11) NOT NULL AUTO_INCREMENT,
				  `username` varchar(255) DEFAULT NULL,
				  `name` varchar(255) DEFAULT NULL,
				  `address` varchar(255) DEFAULT NULL,
				  `city` varchar(255) DEFAULT NULL,
				  `state` varchar(255) DEFAULT NULL,
				  `postcode` varchar(255) DEFAULT NULL,
				  `country` varchar(255) DEFAULT NULL,
				  `lat` varchar(255) DEFAULT NULL,
				  `lng` varchar(255) DEFAULT NULL,
				  `next_meetup` varchar(255) DEFAULT NULL,
				  `activities` varchar(255) DEFAULT NULL,
				  PRIMARY KEY (`id`)
				) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;");
}

function populateDB() {
	mysql_query("INSERT INTO " + $main_table + " VALUES 
		( 'twitter001', 'Citizen 1', 'Carrow Road', 'Dublin', '','', 'Ireland', '53.33236', '-6.323961', '9/20/2014', 'Litter cleanup' ),
		( 'twitter002', 'Citizen 2', 'Landsdowne Valley Park', 'Dublin', '','',  'Ireland', '53.333707', '-6.325459', '9/20/2014', 'Litter cleanup' ),
		( 'twitter003', 'Citizen 3', 'Kilworth Road', 'Dublin', '','',  'Ireland', '53.332959', '-6.324742', '9/20/2014', 'Litter cleanup' ),
		( 'twitter004', 'Citizen 4', 'Cooley Road', 'Dublin', '','',  'Ireland', '53.329809', '-6.32705', '9/20/2014', 'Litter cleanup' ),
		( 'twitter005', 'Citizen 5', 'Sperin Road', 'Dublin', '','',  'Ireland', '53.334307', '-6.317527', '9/20/2014', 'Litter cleanup' ),
		( 'twitter006', 'Citizen 6', 'Mourne Road', 'Dublin', '','',  'Ireland', '53.332079', '-6.317434', '9/20/2014', 'Litter cleanup' ),
		( 'twitter007', 'Citizen 7', 'Ring St', 'Dublin', '','',  'Ireland', '53.3366515', '-6.3297139', '9/20/2014', 'Litter cleanup' ),
		( 'twitter008', 'Citizen 8', 'Tyrconnell Road', 'Dublin', '','',  'Ireland', '53.3372483', '-6.3244177', '9/20/2014', 'Litter cleanup' ),
		( 'twitter009', 'Citizen 9', 'Gratten Crescent Park', 'Dublin', '','',  'Ireland', '53.3406608', '-6.3191832', '9/20/2014', 'Litter cleanup' ),
		( 'twitter010', 'Citizen 10', 'Davitt Road', 'Dublin', '','',  'Ireland', '53.3353589', '-6.3175234', '9/20/2014', 'Litter cleanup' ),
		( 'twitter011', 'Citizen 11', 'James St', 'Dublin', '','',  'Ireland', '53.3429638', '-6.2916685', '9/20/2014', 'Litter cleanup' ),
		( 'twitter012', 'Citizen 12', 'Cork St', 'Dublin', '','',  'Ireland', '53.3377303', '-6.2847779', '9/20/2014', 'Litter cleanup' ),
		( 'twitter013', 'Citizen 13', 'Parnell St', 'Dublin', '','',  'Ireland', '53.3307307', '-6.2855929', '9/20/2014', 'Litter cleanup' ),
		( 'twitter014', 'Citizen 14', 'Rutland Avenue', 'Dublin', '','',  'Ireland', '53.3294324', '-6.2915006', '9/20/2014', 'Litter cleanup' ),
		( 'twitter016', 'Citizen 15', 'Keeper Road', 'Dublin', '','',  'Ireland', '53.331824', '-6.3018463', '9/20/2014', 'Litter cleanup')");
	Print "Your table has been populated"; 
}
?>