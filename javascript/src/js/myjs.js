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
// ###############################################################################################################################################
// ###############################################################################################################################################
// Dropdown JQuery Effects
function dropDownXML() {
  $('#dropdown-xml').hide().delay(100).slideDown(250);
};

function dropDownPHP() {
  $('#dropdown-php').hide().delay(100).slideDown(250);
}
// ###############################################################################################################################################
// ###############################################################################################################################################
// Get the xml data and load it
function xmlPets() {
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
          //$('#xmlTable').html(table);
          $('#dataTable').html(table);
        });
      } //end else
    }); //end getJSON
  });
};

function xmlGuitars() {
  $(function () {
    $.getJSON("xml-get.php", {
      sourceName: "guitars"
    }, function (data) {
      if (data["code"] == "error") {
        console.log(data["message"]);
      } else {
        $.each(data, function (index, element) {
          // Set variables for Loop
          var i;
          var table = '<thead><tr><th scope="col">Guitar No</th><th scope="col">Guitar Brand</th><th scope="col">Guitar Model</th><th scope="col">Guitar Type</th></thead><tbody>';
          // set forEach
          Object.entries(data).forEach(entry => {
            let key = entry[0]; // Gets INSTRUMENTS
            let value = entry[1] // Gets array of guitarNo etc
          });
          // Traditional Loop Start
          let entries = Object.entries(data);
          for (let i = 0; i < entries.length; i++) {
            let key = entries[i][0]; // Gets INSTRUMENTS
            let value = entries[i][1]; // Gets array of guitarNo etc
            // Nested Loop Start
            for (let j = 0; j < value.length; j++) {
              table += '<tr><th>' +
                (value[j].GUITARNO) + "</td><td>" +
                (value[j].GUITARBRAND) + "</td><td>" +
                (value[j].GUITARMODEL) + "</td><td>" +
                (value[j].GUITARTYPE);
            } // Nested Loop Stop
          }; // Traditional Loop Stop
          // Put it into the table
          //$('#xmlTable').html(table);
          $('#dataTable').html(table);
        });
      } //end else
    }); //end getJSON
  });
};
// ###############################################################################################################################################
// ###############################################################################################################################################
// Get data from a database
function phpPets() {
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
          var table = '<thead><tr><th scope="col">Pet No</th><th scope="col">Pet Name</th><th scope="col">Pet Type</th><th scope="col">Pet Breed</th><th scope="col">Pet Owner</th></tr></thead><tbody>';
          // set forEach
          Object.entries(data).forEach(entry => {
            let key = entry[0]; // Gets INSTRUMENTS
            let value = entry[1] // Gets array of guitarNo etc
          });
          // Traditional Loop Start
          let entries = Object.entries(data);
          for (let i = 0; i < entries.length; i++) {
            let key = entries[i][0]; // Gets INSTRUMENTS
            let value = entries[i][1]; // Gets array of guitarNo etc
            // Nested Loop Start
            for (let j = 0; j < value.length; j++) {
              table += '<tr><th>' +
                (value[j].petNo) + "</td><td>" +
                (value[j].petName) + "</td><td>" +
                (value[j].petType) + "</td><td>" +
                (value[j].petBreed) + "</td><td>" +
                (value[j].petOwner);
            } // Nested Loop Stop
          }; // Traditional Loop Stop
          // Put it into the table
          //$('#phpTable').html(table);
          $('#dataTable').html(table);
        });
      }
    })
  })
};

// Get data from a database
function phpGuitars() {
  $(function () {
    $.getJSON("php-get.php", {
      tableName: "guitars"
    }, function (data) {
      if (data["code"] == "error") {
        console.log(data["message"]);
      } else {
        $.each(data, function (index, element) {
          // Set variables for Loop
          var i;
          var table = '<thead><tr><th scope="col">Guitar No</th><th scope="col">Guitar Brand</th><th scope="col">Guitar Model</th><th scope="col">Guitar Type</th></thead><tbody>';
          // set forEach
          Object.entries(data).forEach(entry => {
            let key = entry[0]; // Gets INSTRUMENTS
            let value = entry[1] // Gets array of guitarNo etc
          });
          // Traditional Loop Start
          let entries = Object.entries(data);
          for (let i = 0; i < entries.length; i++) {
            let key = entries[i][0]; // Gets INSTRUMENTS
            let value = entries[i][1]; // Gets array of guitarNo etc
            // Nested Loop Start
            for (let j = 0; j < value.length; j++) {
              table += '<tr><th>' +
                (value[j].guitarNo) + "</td><td>" +
                (value[j].guitarBrand) + "</td><td>" +
                (value[j].guitarModel) + "</td><td>" +
                (value[j].guitarType);
            } // Nested Loop Stop
          }; // Traditional Loop Stop
          // Put it into the table
          //$('#phpTable').html(table);
          $('#dataTable').html(table);
        });
      }
    })
  })
};

function phpGuitarsInsert() {
  // Create the data which will be added into the database
  var addData = new Object();
  addData.guitarBrand = $('#guitarBrand').val();
  addData.guitarModel = $('#guitarModel').val();
  addData.guitarType = $('#guitarType').val();
  // Add to JSON
  var jsonAddData = JSON.stringify(addData);
  // Get the json we want to save to
  $.getJSON("php-insert.php", {
      tableName: "guitars",
      appendData: jsonAddData
    },
    function (data) {
      if (data > 0) {
        $('.success').show(3000).html("phpGuitarsInserted correctly?!").delay(2000).fadeOut(1000);
        console.log(data);
      } else {
        $('.success').show(3000).html("Error with inserting gutiars into php?!").delay(2000).fadeOut(1000);
      }
    });
};

function xmlPetsInsert() {
  $(function () {
    var formData;
    formData = new Object();
    formData.PETNAME = $('#petName').val();
    formData.PETTYPE = $('#petType').val();
    formData.PETBREED = $('#petBreed').val();
    formData.PETOWNER = $('#petOwner').val();
    var jsonFormData = JSON.stringify(formData);
    var sourceFile = 'pets';
    $.getJSON("insertXml.php", {
      sourceName: sourceFile,
      sourceData: jsonFormData
    }, function (data) {
      console.log(data);
    });
  });
}