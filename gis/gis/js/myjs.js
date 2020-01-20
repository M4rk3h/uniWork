function inputText() {
    document.getElementById('number').value = "";
}

function getVal() {
    var number = document.getElementById('number').value;
    // If number is > 40 thumbs up, if below 40 thumbs down
    if (number >= 1 && number <= 39) {
        document.getElementById('myImage').src = 'img/thumbsDown.png';
    } else if (number == 40) {
        document.getElementById('myImage').src = 'img/thumbsUp.png';
        alert('you passed');
    } else if (number > 40 && number < 69) {
        document.getElementById('myImage').src = 'img/thumbsUp.png';
    } else if (number == 69){
        document.getElementById('myImage').src = 'img/gotEm.png';
    } else if (number == 70){
        document.getElementById('myImage').src = 'img/goldThumb.png';
    } else if (number == 9000){
        document.getElementById('myImage').src = 'img/superSayian.png';
    };
}