/* 
    Function like JS3
    but for radio buttons
*/
(function () {
    var form, options, other, otherText, hide;
    form = document.getElementById('publicity');
    options = form.elements.source;
    other = document.getElementById('other');
    otherText = document.getElementById('othertext');
    otherText.className = 'hide';
    
    for (var i = 0; i < options.length; i++) {
        options[i].addEventListener('click', radioChanged, false);
    }

    function radioChanged() {
        hide = other.checked ? '' : 'hide';
        otherText.className = hide;
        if (hide) {
            otherText.value = '';
        }
    }
}());