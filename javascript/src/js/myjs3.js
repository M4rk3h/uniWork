/*  
    Check boxes 
    When All are click, click them All
    If any are unchecked, uncheck All
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
} ());
