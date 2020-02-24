<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Include the head info from a PHP file -->
  <?php include 'php/ihead.php';?>
</head>
<body>
  <!-- Include the nav bar from a PHP file -->
  <?php include 'php/nav.php';?>
  <!-- Include the nav bar from a PHP file -->
  <?php include 'php/jumbo.php';?>
  <div class="container text-center">
    <h3>Here you can see my previous work on <a style="color: #000;" href="https://github.com/M4rk3h" target="_blank">
        GitHub <i class="fab fa-github"></i></a></h3>
    <img class="imgPort" src="img/portrait.jpg" alt="portrait photo of Mark Baber">
    <h4>Below is some JavaScript</h4>
    <p>Insert the following numbers and see different results</p>
    <p>< 40, 40 +, & 70 </p> 
    <!-- Clear input on click - To clean number on click add onclick="this.value = ''" -->
    <input type="number" id="number" name="number" class="number">
    <button onclick="getVal();">Get Value</button>
    <br>
    <img id="myImage" src="" style="width:150px">
    <br>
    <script>
      inputText();
      getVal();
    </script>
  </div>
</body>
</html>