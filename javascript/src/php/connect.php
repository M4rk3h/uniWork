<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>PDO Database Connect</title>
  </head>
<body>

<h2>PDO Database Connect</h2>

<p id="output"></p>

<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="   crossorigin="anonymous"></script>
                <script>
      window.jQuery || document.write('<script src="jquery-3.3.1.min.js "><\/script>')
    </script>

<script>
$(function() {

$.getJSON("getTables.php", function(data){
  if (data["code"] == "error"){
    console.log(data["message"]);
  }
  else{
    console.log(data);
  }

});

});

</script>

</body>
</html>
