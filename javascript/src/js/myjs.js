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
  goGetXML();
  showXMLForm();
  //loadXML();
  //displayXML();
}
// Show XML Form
function showXMLForm() {
  $('form#xmlForm').show();
}

// Get the xml data and load it
function goGetXML() {
  $(function () {
    $.getJSON("xml-get.php", {
      sourceName: "pets"
    }, function (data) {
      if (data["code"] == "error") {
        console.log(data["message"]);
      } else {
        $.each(data, function (index, element) {
          // Set variables for Loop
          var i;
          var table = '<thead><tr><th scope="col">Pet No</th><th scope="col">Pet Name</th><th scope="col">Pet Type</th><th scope="col">Pet Breed</th><th scope="col">Pet Owner</th></tr></thead><tbody>';
          for (i = 0; i < element.length; i++) {
            // Begin building the table structure
            table += '<tr><th>' +
              // Add table data
              Object.values(element[i]) + "</td><td>" +
              Object.values(element[i]) + "</td><td>" +
              Object.values(element[i]) + "</td><td>" +
              Object.values(element[i]) + "</td><td>" +
              Object.values(element[i]);
          } // End loop
          // Print table in the div xmlTable
          document.getElementById("xmlTable").innerHTML = table;
          // THIS DOESN'T WORK FOR SOME REASON?!
          //$(".xmlTable").innerHTML = table;
          
        });
      } //end else
    }); //end getJSON
  });
}


// Try to save the xml data to an xml file
function saveToXML() {
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

function hideXML() {
  $('#xmlTable').hide();
  $('form#xmlForm').hide();
};

function getPHP() {
  hideXML();
  showPHPForm();
};
// Show PHP Form
function showPHPForm() {
  $('form#phpForm').show();
}

function hidePHP() {
  $('#phpTable').hide();
  $('form#phpForm').hide();
};

function clearTables() {
  hideXML();
  hidePHP();
}