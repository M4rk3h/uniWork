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
// GET PETS XML
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
          var table = '<thead><tr><th scope="col">Pet Name</th><th scope="col">Pet Type</th><th scope="col">Pet Breed</th><th scope="col">Pet Owner</th></tr></thead><tbody>';
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
// GET GUITARS XML
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
          var table = '<thead><tr><th scope="col">Guitar Brand</th><th scope="col">Guitar Model</th><th scope="col">Guitar Type</th></thead><tbody>';
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
// GET Pets PHP
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
// GET Guitars PHP
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
          $('#dataTable').html(table);
        });
      }
    })
  })
};
// INSERT PETS XML
function xmlPetsInsert() {
  // Create the data which will be added into the database
  var formData = new Object();
  formData.PETNAME = $('#xmlPetName').val();
  formData.PETTYPE = $('#xmlPetType').val();
  formData.PETBREED = $('#xmlPetBreed').val();
  formData.PETOWNER = $('#xmlPetOwner').val();
  // Add to JSON
  console.log(formData);
  var jsonFormData = JSON.stringify(formData);
  console.log(jsonFormData);
  var sourceFile = 'pets';
  // Get the json we want to save to
  $.getJSON("xml-insert.php", {
      sourceName: sourceFile,
      sourceData: jsonFormData,
      success: function () {
        $('.success').show(2000).html("Record inserted correctly").delay(1000).fadeOut(1000);
      }
    },
    function (data) {
      console.log(data);
    });
};
// INSERT GUITARS XML
function xmlGuitarsInsert() {
    // Create the data which will be added into the database
    var formData = new Object();
    formData.GUITARBRAND = $('#xmlGuitarBrand').val();
    formData.GUITARMODEL = $('#xmlGuitarModel').val();
    formData.GUITARTYPE = $('#xmlGuitarType').val();
    // Add to JSON
    console.log(formData);
    var jsonFormData = JSON.stringify(formData);
    console.log(jsonFormData);
    var sourceFile = 'guitars';
    // Get the json we want to save to
    $.getJSON("xml-insert.php", {
        sourceName: sourceFile,
        sourceData: jsonFormData,
        success: function () {
          $('.success').show(2000).html("Record inserted correctly").delay(1000).fadeOut(1000);
        }
      },
      function (data) {
        console.log(data);
      });
  };
// INSERT PETS PHP
function phpPetsInsert() {
  // Create the data which will be added into the database
  var addData = new Object();
  addData.petName = $('#phpPetName').val();
  addData.petType = $('#phpPetType').val();
  addData.petBreed = $('#phpPetBreed').val();
  addData.petOwner = $('#phpPetOwner').val();
  // Add to JSON
  var jsonAddData = JSON.stringify(addData);
  // Get the json we want to save to
  $.getJSON("php-insert.php", {
      tableName: "pets",
      appendData: jsonAddData,
      success: function () {
        $('.success').show(2000).html("Record inserted correctly").delay(1000).fadeOut(1000);
      }
    },
    function (data) {
      console.log(data);
    });
};
// INSERT GUITARS PHP
function phpGuitarsInsert() {
  // Create the data which will be added into the database
  var addData = new Object();
  addData.guitarBrand = $('#phpGuitarBrand').val();
  addData.guitarModel = $('#phpGuitarModel').val();
  addData.guitarType = $('#phpGguitarType').val();
  // Add to JSON
  var jsonAddData = JSON.stringify(addData);
  // Get the json we want to save to
  $.getJSON("php-insert.php", {
      tableName: "guitars",
      appendData: jsonAddData,
      success: function () {
        $('.success').show(2000).html("Record inserted correctly").delay(1000).fadeOut(1000);
      }
    },
    function (data) {
      console.log(data);
    });
};