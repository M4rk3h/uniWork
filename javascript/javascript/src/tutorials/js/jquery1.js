function testJQuery(){
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