function manipulateDOM1() {
    var el = document.getElementById('one');
    el.textContent = 'BSc Big Data';
}

function manipulateDOM2() {
    var el = document.querySelector('li.running');
    el.className = 'full';
}

function manipulateDOM3() {
    var els = document.getElementsByClassName('running');
    var noOfElements = els.length;

    if (noOfElements >= 1) {
        var el = els[noOfElements - 1];
        el.className = 'full';
    }
}

function manipulateDOM4() {
    var els = document.getElementsByTagName('li');
    var noOfElements = els.length;

    if (noOfElements >= 1) {
        var el = els[noOfElements - 1];
        el.className = 'full';
    }
}

function manipulateDOM5() {
    var els = document.querySelectorAll('li.running');
    var noOfElements = els.length;

    for (var i = 0; i < noOfElements; i++) {
        els[i].className = 'full';
    }
}

function manipulateDOM6() {
    var el = document.querySelector('li.running');
    var els = document.querySelectorAll('li.running');

    /* set class of first element to full */
    el.className = 'full';

    /* set class of first element to full */
    els[0].className = 'full';
}

function manipulateDOM7() {
    var el = document.querySelector('li.running');

    /* set class of first element to full */
    el.className = 'full';

    var els = document.querySelectorAll('li.running');

    /* set class of first element to full */
    els[0].className = 'full';
}

function manipulateDOM8() {
    var els = document.getElementsByClassName('running');

    els[1].textContent = 'BA Social Media Studies';

    /*
    var el = document.getElementById('two');
    el.className = '';
    */

    els[1].className = 'full';
}

function manipulateDOM9() {
    var el = document.getElementById('one');
    var parel = el.parentNode;
    parel.className = 'rounded';
}

// Change the next two items in the DOM-Tree to class full
function manipulateDOM10() {
    var el = document.getElementById('two');
    var preSib = el.previousSibling; //Select previous
    var nexSib = el.nextSibling; // Select next

    if (preSib !== null) {
        preSib.className = 'full';
    }
    if (nexSib) {
        nexSib.className = 'full';
    }
}

function manipulateDOM11() {
    var findUL = document.getElementsByTagName('ul'); // Find all UL's (Only 1)
    console.log(findUL);
    if (findUL.length >= 1) {

        var firChi = findUL[0].firstChild;
        var lasChi = findUL[0].lastChild;
        if (firChi) {
            firChi.className = 'full';
        }
        // console.log(firChi); // Check if it got the first li
        if (lasChi) {
            lasChi.className = 'full';
        }
        // console.log(lasChi); // Check if it got the last li
    }
}

function manipulateDOM11Up() {
    var findAllLI = document.getElementsByTagName('li'); // Find all LI's
    // If the LI's are great than 1 do this
    if (findAllLI.length > 1) {
        for (var i = 0; findAllLI.length > 1; i++)
        var findRunning = findAllLI[0];
        
        if (findRunning) {
            findRunning.className = 'full'
            console.log(findRunning);
        }

    } else if (findAllLI !== null) {
        console.log("Shit son");
    };


}