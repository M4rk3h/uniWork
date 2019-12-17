// Test if JQuery is enabled
function testJQ() {
  if (window.jQuery) {
    // jQuery is loaded  
    alert("jQuery loaded correctly!");
  } else {
    // jQuery is not loaded
    alert("JQuery isn't loaded correctly!");
  }
}

// Hide tables until clicked
function hideTables() {
  $('#tableXML').hide();
}

// Dropdown JQuery Effects
function dropDown() {
  $('.dropdown-menu')
    .hide()
    .delay(100)
    .slideDown(1000);
}

function getXMLS() {
  loadXML();
  displayXML();
  demo();
}

function loadXML() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      displayXML(this);
    }
  };
  xhttp.open("GET", "pets.xml", true);
  xhttp.send();
}

function displayXML(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table = '<thead><tr><th scope="col">Pet No</th><th scope="col">Pet Name</th><th scope="col">Pet Type</th><th scope="col">Pet Breed</th><th scope="col">Pet Owner</th></tr></thead><tbody>';
  var x = xmlDoc.getElementsByTagName("ANIMAL");
  for (i = 0; i < x.length; i++) {
    table += '<tr><th>' +
      x[i].getElementsByTagName("PETNO")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("PETNAME")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("PETTYPE")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("PETBREED")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("PETOWNER")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
  document.getElementById("xmlTable").innerHTML = table;
}

function saveToXML(){
  $(function () {
    var formData;
    formData = new Object();
    formData.PETNAME = 'Susan Strong';
    formData.PETTYPE = 'Dog';
    formData.PETBREED = 'Samiesamoyed';
    formData.PETOWNER = 'Dr Thomas';
    var jsonFormData = JSON.stringify(formData);
    var sourceFile = 'pets';
    $.getJSON("../insertXml.php", {
      sourceName: sourceFile,
      sourceData: jsonFormData
    }, function (data) {
      console.log(data);
    });
  });
}

function hideXML() {
  $('xmlTable')
    .hide()
}

function getPHP() {
  hideXML();
}