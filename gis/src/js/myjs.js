function inputText() {
    document.getElementById('number').value = "";
}

function getVal() {
    var number = document.getElementById('number').value;
    // If number is > 40 thumbs up, if below 50 thumbs down
    if (number < 40) {
        document.getElementById('myImage').src = 'img/thumbsDown.png';
    } else if (number >= 40) {
        document.getElementById('myImage').src = 'img/thumbsUp.png';
        alert('you passed');
    };

}
