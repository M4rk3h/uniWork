function checkUserDetails() {
    var elUsername = document.getElementById('username');
    var elFeedback = document.getElementById('feedback');

    function checkUsername(minLength) {
        if (elUsername.value.length < minLength) {
            elFeedback.textContent = 'Username must be ' + minLength + ' characters or more ';
        } else {
            elMsg.textContent = '';
        }
    }
    elUsername.addEventListener('blur', function () {
        checkUsername(5);
    }, false);
}