function doEvents() {
    // Find element 'two'
    var finder = document.getElementById('two');
    // Run function below called toggleStatus;
    finder.addEventListener('click', toggleStatus, false);
    console.log(finder);
}

function toggleStatus() {
    // If it is full, change it to running
    if (this.className === 'full') {
        this.className = 'running';
        // If it is running, change it to full.
    } else if (this.className === 'running') {
        this.className = 'full';
    }
}

function checkUserDetails() {
    var elUsername = document.getElementById('username');
    var elPassword = document.getElementById('password');
    var chkSeePw = document.getElementById('seePassword')
    var userFeedback = document.getElementById('userFeedback');
    var passFeedback = document.getElementById('passFeedback');
    var submitForm = document.getElementById('submit');
    var buttonDis = document.getElementById('subFeedback');
    var passExpo = document.getElementById('passExpo')

    function checkUsername(minLength) {
        if (elUsername.value.length < minLength) {
            userFeedback.textContent = 'Username must be ' + minLength + ' characters or more ';
            submitForm.disabled = true;
            buttonDis.textContent = 'Button is disabled because of username length';
        } else {
            userFeedback.textContent = '';
            submitForm.disabled = false;
            buttonDis.textContent = ''
        }
    }

    function checkPassword(minLength) {
        if (elPassword.value.length < minLength) {
            passFeedback.textContent = 'Password must be ' + minLength + ' characters or more ';
            submitForm.disabled = true;
            buttonDis.textContent = 'Button is disabled because of the password length.';
        } else {
            passFeedback.textContent = '';
            submitForm.disabled = false;
            buttonDis.textContent = '';
        }
    }

    elUsername.addEventListener('input', function () {
        checkUsername(5);
    }, false);

    elPassword.addEventListener('input', function () {
        checkPassword(8);
    }, false);

    chkSeePw.addEventListener('change', function (e) {
        var target = e.target;
        try {
            if (target.checked) {
                elPassword.type = 'text';
                passExpo.textContent='PASSWORD IS EXPOSED';
            } else {
                elPassword.type = 'password';
            }
        } catch (error) {
            alert('This browser cannot switch type');
        }
    }, false);
}