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


function getXML() {
    $(function () {
        $.getJSON("getxmls.php", {
            sourceName: "pets"
        }, function (data) {
            if (data["code"] == "error") {
                console.log(data["message"]);
            } else {
                $.each(data, function (index, element) {
                    //document.getElementById("output").innerHTML = (index);
                    console.log(index);
                    console.log(element);
                    console.log(Array.isArray(element));
                    console.log(element.length);
                    var i;
                    for (i = 0; i < element.length; i++) {
                        $('table').innerHTML = (Object.values(element[i]));
                        console.log(element[i]);
                        console.log(Object.keys(element[i]));
                        console.log(Object.values(element[i]));
                    }
                });
            } //end else
        }); //end getJSON
    });
}

function getPHP() {
    //code
}