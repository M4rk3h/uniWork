function testJQ() {
    window.onload = function () {
        if (window.jQuery) {
            // jQuery is loaded  
            alert("jQuery loaded correctly!");
        } else {
            // jQuery is not loaded
            alert("JQuery isn't loaded correctly!");
        }
    }
}

function ex1(){
    $('li')
    .attr('class', 'full')
    .hide()
    .delay(500)
    .slideDown(1000);
}


  