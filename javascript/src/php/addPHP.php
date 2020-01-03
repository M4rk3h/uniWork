<?php
    require_once('dbinfo.info.php');
    $result = 0;

    $guitarBrand = trim($_POST["guitarBrand"]);
    $guitarModel = trim($_POST["guitarModel"]);
    $guitarType = trim($_POST["guitarType"]);
    //prepare sql and bind parameters
    $stmt = $dbconn - > prepare(
        "INSERT INTO guitars (guitarBrand,guitarModel,guitarType) VALUES (:guitarBrand,:guitarModel,:guitarType)");

    $stmt - > bindParam(':guitarBrand', $guitarBrand);
    $stmt - > bindParam(':guitarModel', $guitarModel);
    $stmt - > bindParam(':guitarType', $guitarType);
    // insert a row
    if ($stmt - > execute()) {
        $result = 1;
    }
    echo $result;
    $dbconn = null;
?>