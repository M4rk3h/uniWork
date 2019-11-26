<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Retrieving Directory Contents</title>
  </head>
<body>

<h1>Retrieving Directory Contents</h1>

<p id="output"></p>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"   integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="   crossorigin="anonymous"></script>
	<script>
      window.jQuery || document.write('<script src="jquery-3.3.1.min.js "><\/script>')
    </script>

<script>
$(function() {
  $.getJSON("getXmlFilenames.php", function(data){
    if (data["code"] == "error"){
      console.log(data["message"]);
    }
    else{
      console.log(data);
    }
  });
});
</script>

<?php
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Retrieving Directory Contents</title>
  </head>
<body>

<h1>Retrieving Directory Contents</h1>

<p id="output"></p>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"   integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="   crossorigin="anonymous"></script>
	<script>
      window.jQuery || document.write('<script src="jquery-3.3.1.min.js "><\/script>')
    </script>

<script>
$(function() {
  $.getJSON("getXmlFilenames.php", function(data){
    if (data["code"] == "error"){
      console.log(data["message"]);
    }
    else{
      console.log(data);
    }
  });
});
</script>


<?php
$directory = 'xml';

if (!chdir($directory)){
  $error->code = "error";
  $error->message = "The directory cannot be found";
  echo json_encode($error);
  return;
}

$files = glob("*.xml");

if (empty($files)){
  $error->code ="error";
  $error->message = "no files";
  echo json_encode($error);
  return;
}

$output = array();
foreach($files as $filename){
  array_push($output, pathinfo($filename, PATHINFO_FILENAME));
}
echo json_encode($output);
?>
</body>
</html>
