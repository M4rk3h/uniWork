/*  
    Check boxes 
    When All are click, click them All
    If any are unchecked, uncheck All
    This is an 
    Immediately-Invoked Function Expression (IIFE)
*/
(function() {
    var form = document.getElementById('details');
    var elements = form.elements;
    var options = elements.subject;
    var all = document.getElementById('all');

    function updateAll() {
        for (var i = 0; i < options.length; i++) {
            options[i].checked = all.checked;
        }
    }
    all.addEventListener('change', updateAll, false);

    function clearAllOptions(e) {
        var target = e.target;
        if (!target.checked) {
            all.checked = false;
        }
    }
    for (var i = 0; i < options.length; i++) {
        options[i].addEventListener('change', clearAllOptions, false);
    }
    // Try to click All, 
    // when all the options are checked
    try{
        if (options.length == 3){
            updateAll();
            console.log('inside the if statement')
        }
        else {
        console.log('Jump out of the else')
        }
    }
    catch{
        console.log('There was an error in the try / catch ')
    }
} ());