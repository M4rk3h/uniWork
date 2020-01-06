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

// ###############################################################################################################################################
// ###############################################################################################################################################
// Get the xml table with data
function getXML() {
  hidePHP();
  goGetXML();
  //showXMLForm();
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

          // set forEach
          Object.entries(data).forEach(entry => {
            let key = entry[0]; // Gets Animal
            let value = entry[1] // Gets array of petNo, petName etc
          });
          
          // Traditional Loop Start
          let entries = Object.entries(data);
          for (let i = 0; i < entries.length; i++) {
            let key = entries[i][0]; // Gets Animal
            let value = entries[i][1]; // Gets array of petNo, petName etc
            // Nested Loop Start
            for (let j = 0; j < value.length; j++) {
              table += '<tr><th>' +
              (value[j].PETNO) + "</td><td>" +
              (value[j].PETNAME) + "</td><td>" +
              (value[j].PETTYPE) + "</td><td>" +
              (value[j].PETBREED) + "</td><td>" +
              (value[j].PETOWNER);
            } // Nested Loop Stop
          }; // Traditional Loop Stop
          // Put it into the table
          //document.getElementById("xmlTable").innerHTML = table;
          $('#xmlTable').html(table);
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

// ###############################################################################################################################################
// ###############################################################################################################################################
function getPHP() {
  hideXML();
  goGetPHP();
  //showPHPForm();
};

// Get data from a database
function goGetPHP() {
  $(function () {
    $.getJSON("php-get.php", {
      tableName: "pets"
    }, function (data) {
      if (data["code"] == "error") {
        console.log(data["message"]);
      } else {
        $.each(data, function (index, element) {
          // Set variables for Loop
          var i;
          var j;
          var table = '<thead><tr><th scope="col">Pet No</th><th scope="col">Pet Name</th><th scope="col">Pet Type</th><th scope="col">Pet Breed</th><th scope="col">Pet Owner</th></tr></thead><tbody>';
          for (i = 0; i < element.length; i++) {
            // Begin building the table structure
            table += '<tr><th>' +
              // Add table data
              // LOOK AT JQUERY GET A PROPERTY??
              Object.values(element[i]) + "</td><td>" +
              Object.values(element[i]) + "</td><td>" +
              Object.values(element[i]) + "</td><td>" +
              Object.values(element[i]) + "</td><td>" +
              Object.values(element[i]);
          } // End loop
          for (i = 0; i < element.length; i++) {
            for (j = 0; j < element[i].length; j++) {
              console.log(element[i][j]);
            }
          }
          // Print table in the div xmlTable
          document.getElementById("phpTable").innerHTML = table;
          // THIS DOESN'T WORK FOR SOME REASON?!
          //$(".phpTable").innerHTML = table;
        });
      } //end else
    }); //end getJSON
  });
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
};