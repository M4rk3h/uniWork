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
    var elFeedback = document.getElementById('feedback');

    function checkUsername(minLength) {
        if (elUsername.value.length < minLength) {
            elFeedback.textContent = 'Username must be ' + minLength + ' characters or more ';
        } else {
            elMsg.textContent = '';
        }
    }
    function checkPassword(minLength){
        if (elPassword.value.length < minLength) {
            elFeedback.textContent = 'Password must be ' + minLength + ' characters or more ';
        } else { 
            elMsg.textContent = '';
        }
    }

    elUsername.addEventListener('blur', function () {
        checkUsername(5);
    }, false);

    elPassword.addEventListener('blur', function () {
        checkPassword(8);
    }, false);
}