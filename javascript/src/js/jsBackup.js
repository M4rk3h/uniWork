function placeStudentsB() {
    // Student Full Names
    student1FullName = student1.firstName + ' ' + student1.lastName;
    student2FullName = student2.firstName + ' ' + student2.lastName;
    student3FullName = student3.firstName + ' ' + student3.lastName;
    // Test in console logs
    //console.log(student1FullName, student2FullName, student3FullName);
    // Student Courses
    student1Course = student1.course;
    student2Course = student2.course;
    student3Course = student3.course;
    // Test in console logs
    //console.log(student1Course, student2Course, student3Course);
    // Student Results
    student1ModuleMarks = student1.moduleMarks;
    student2ModuleMarks = student2.moduleMarks;
    student3ModuleMarks = student3.moduleMarks;
    // Test in console logs
    //console.log(student1ModuleMarks, student2ModuleMarks, student3ModuleMarks);
    // Set student(n)Length to match their modules
    var student1Length = student1ModuleMarks.length;
    var student2Length = student2ModuleMarks.length;
    var student3Length = student3ModuleMarks.length;
    // Test in console logs
    //console.log(student1Length, student2Length, student3Length);
    // Set arrays for loop
    var i1 = 0;
    var n1 = 1;
    var i2 = 0;
    var n2 = 1;
    var i3 = 0;
    var n3 = 1;
    var student1ModuleMessage = '';
    var student2ModuleMessage = '';
    var student3ModuleMessage = '';

    // Start the loop for student1
    do {
        student1ModuleMessage = student1ModuleMessage + student1.moduleMarks[i1] + ' ' + student1.moduleMarks[n1] + '%' + '<br>';
        i1 += 2;
        n1 += 2;
    } while (i1 < student1Length) {
        // 
    }
    //Start the loop for student2
    do {
        student2ModuleMessage = student2ModuleMessage + student2.moduleMarks[i2] + ' ' + student2.moduleMarks[n2] + '%' + '<br>';
        i2 += 2;
        n2 += 2;
    } while (i2 < student2Length) {
        // 
    }
    // Start the loop for student3
    do {
        student3ModuleMessage = student3ModuleMessage + student3.moduleMarks[i3] + ' ' + student3.moduleMarks[n3] + '%' + '<br>';
        i3 += 2;
        n3 += 2;
    } while (i3 < student3Length) {
        // 
    }
    
    //Check they work in console log.
    // Display the data in the html
    // Student1 Name
    var finder = document.getElementById('studentOneName'); // Find class 'courseLevel' in html
    finder.innerHTML = student1FullName; // Change score to the value of courseLevel variable
    // Student1 Course
    var finder = document.getElementById('studentOneCourse'); // Find class 'courseLevel' in html
    finder.innerHTML = student1Course; // Change score to the value of courseLevel variable
    // Student1 Modules
    var finder = document.getElementById('studentOneModules'); // Find class 'courseLevel' in html
    finder.innerHTML = student1ModuleMessage; // Change score to the value of courseLevel variable

    // Student2 Name
    var finder = document.getElementById('studentTwoName'); // Find class 'courseLevel' in html
    finder.innerHTML = student2FullName; // Change score to the value of courseLevel variable
    // Student2 Course
    var finder = document.getElementById('studentTwoCourse'); // Find class 'courseLevel' in html
    finder.innerHTML = student2Course; // Change score to the value of courseLevel variable
    // Student2 Modules
    var finder = document.getElementById('studentTwoModules'); // Find class 'courseLevel' in html
    finder.innerHTML = student2ModuleMessage; // Change score to the value of courseLevel variable

    // Student3 Name
    var finder = document.getElementById('studentThreeName'); // Find class 'courseLevel' in html
    finder.innerHTML = student3FullName; // Change score to the value of courseLevel variable
    // Student3 Course
    var finder = document.getElementById('studentThreeCourse'); // Find class 'courseLevel' in html
    finder.innerHTML = student3Course; // Change score to the value of courseLevel variable
    // Student3 Modules
    var finder = document.getElementById('studentThreeModules'); // Find class 'courseLevel' in html
    finder.innerHTML = student3ModuleMessage; // Change score to the value of courseLevel variable
}
