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
}

// ###############################################################################################################################################
// ###############################################################################################################################################
function testArrays() {
  /* First we will create an array of arrays, similar to what you are getting back from AJAX */
  var outerArray = [];

  var innerArrayOne = [1, "Ollie", "Border Collie", "Greg Thomas", "Dog"];
  var innerArrayTwo = [2, "Bob", "Cat"];
  var innerArrayThree = [3, "Sue", "Cat"];

  outerArray[0] = innerArrayOne;
  outerArray[1] = innerArrayTwo;
  outerArray[2] = innerArrayThree;

  /* This will give us [[1, "Tom", "Dog"], [2, "Bob", "Cat"], [3, "Sue", "Cat"]] */
  // Array in an array
  //console.log(outerArray);

  var i, j;

  /* This loop will pick out each of the innerArrays in turn */
  // Shows each array
  for (i = 0; i < outerArray.length; i++) {
    //console.log(outerArray[i]);
  }

  /* This will pick out each of the individual data items in each of the innerArrays */
  // Displays all contents of each array
  for (i = 0; i < outerArray.length; i++) {
    for (j = 0; j < outerArray[i].length; j++) {
      console.log(outerArray[i][j]);
    }
  }
};

function testMe() {
  $(function () {
    $.getJSON("xml-get.php", {
      sourceName: "pets",
    }, function (data) {
      if (data["code"] == "error") {
        console.log(data["message"]);
      } else {
        $.each(data, function (index, element) {
          // Set variables for Loop
          var i, j;
          // varaible is an element
          var outerArray = data;
          var innerArray = Object.entries(outerArray);

          console.log(outerArray.ANIMAL.PETNO);
          console.log(innerArray.PETNO);

          for (const [key,values] of Object.entries(outerArray)) {
            console.log(`${key}: ${values}`);
          }
          // Below is closest so far.
          //Object.entries(outerArray).forEach(([key,values]) => console.log(`${key}: ${values}`));
          //console.log(Object.keys(outerArray));
          //console.log(Object.values(outerArray));
          //console.log(Object.entries(outerArray));

          //console.log(outerArray.PETNO);
          //console.log(innerArray.PETNO);

          for (i = 0; i < outerArray.length; i++) {
            //console.log(outerArray[i]);
          }

          for (i = 0; i < outerArray.length; i++) {
            for (j = 0; j < outerArray[i].length; j++) {
              // Thinks these are objects
              //console.log(outerArray[i][j]);
            } // End Loop 1
          } // End Loop 2
        })
      }
    })
  })
};