<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Get Php Tables</title>
</head>

<body>
	<div>

		<?php

if(!isset($error)){
  $error = new stdClass();
}

include "dbinfo.info.php";

try {
	$pdo = new PDO("mysql:host=$host;dbname=$database;charset=utf8", $username, $password, [PDO:: ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false]);
	} catch (PDOException $e) {
		$error->code = "error";
		$error->message = "There was a problem connecting to the database";
		echo json_encode($error);
		$pdo = null;
		return;
	}
	// Different version found online
	$sth = $pdo->prepare("SELECT * FROM guitars");
	$sth->execute();
	$result = $sth->fetchAll();
	$pdo = null; 

	// Create some error checking here
?>

	<div>
		<table>
			<tr>
				<th>Guitar No</th>
				<th>Guitar Brand</th>
				<th>Guitar Model</th>
				<th>Guitar Type</th>
			</tr>
			<?php 
				if($sth->rowCount()):
					foreach($result as $row){ ?>
			<tr>
				<td><?php echo $row['guitarNo']; ?></td>
				<td><?php echo $row['guitarBrand']; ?></td>
				<td><?php echo $row['guitarModel']; ?></td>
				<td><?php echo $row['guitarType']; ?></td>
			</tr>
			<?php }  ?>
   			<?php endif; ?>
		</table>
	</div>

</body>

</html>