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