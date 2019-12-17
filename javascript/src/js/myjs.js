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
// Dropdown JQuery Effects
function dropDown() {
  $('.dropdown-menu')
    .hide()
    .delay(100)
    .slideDown(200);
}
// Get the xml table with data
function getXML() {
  hidePHP();
  showXMLForm();
  loadXML();
  displayXML();
}
// Show XML Form
function showXMLForm(){
  $('form#xmlForm').show();
}
// Get the xml data and load it
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
// Load the above xml data into a table
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
// Try to save the xml data to an xml file
function saveToXML(){
  $(function () {
    var formData;
    formData = new Object();
    formData.PETNO = '5';
    formData.PETNAME = 'Susan Strong';
    formData.PETTYPE = 'Dog';
    formData.PETBREED = 'Samoyed';
    formData.PETOWNER = 'Dr Thomas';
    // Data For The XML using the XML Tags
    var jsonFormData = JSON.stringify(formData);
    // Convert JSON to String
    var sourceFile = 'pets';
    // the sourcefile to save to is called pets
    $.getJSON("xml-insert.php", {
      sourceName: sourceFile,
      sourceData: jsonFormData
    }, function (data) {
      console.log(data);
    });
  });
};

function xmlToHTTP(){
  // Create xml to http request
  const xhr = new XMLHttpRequest();
  // On load do this function
  xhr.onload = function(){
    const serverResponse = $("serverResponse");
  };
  xhr.open("POST", "xmlInsert.php");
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("PETNAME=");
}

function hideXML() {
  $('#xmlTable').hide();
  $('form#xmlForm').hide();
};

function getPHP() {
  hideXML();
  showPHPForm();
};
// Show PHP Form
function showPHPForm(){
  $('form#phpForm').show();
}

function hidePHP() {
  $('#phpTable').hide();
  $('form#phpForm').hide();
};

function clearTables(){
  hideXML();
  hidePHP();
}