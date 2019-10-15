/*  This is a function which we can call 
    within our html, which prints Hello
*/
function sayHelloWorld() {
    document.write('Hello World'); // Write (print) Hello World.
}

function sayGoodbyeWorld() {
    document.write('Goodbye World'); // Write (print) Goodbye World.
}

function calculateModulePercent() {
    var courseworkMark; // mark in the coursework
    var courseworkContribution; // contribution to the module
    var modulePercent; // contribution to overall mark

    courseworkMark = 30;
    courseworkContribution = 50;
    modulePercent = courseworkMark * (courseworkContribution / 100);

    var finder = document.getElementById('percent'); // Find class in html
    finder.textContent = 'Which is ' + modulePercent + '% overall.'; // print this
    modulePercentPass(courseworkMark); // Call function below
}

function modulePercentPass(studentMark) {
    var studentName = 'Mark'; // Student name
    var message; // message to student

    var finder = document.getElementById('score'); // Find class 'score' in html
    finder.textContent = 'You scored' + ' ' + studentMark + '%'; // Change score to the value of studentMark variable

    if (studentMark < 40) {
        message = 'Sorry ' + studentName + ' you failed.';
    } else if (studentMark < 49) {
        message = 'Well done ' + studentName + ' you passed.';
    } else if (studentMark < 59) {
        message = 'Well done ' + studentName + ' you got a good pass.';
    } else if (studentMark < 70) {
        message = 'Well done ' + studentName + ' you got a merit.';
    } else {
        message = 'Well done ' + studentName + ' You got a distinction';
    }

    var finder = document.getElementById('message'); // Find class 'message' in html
    finder.textContent = message; // Change class 'message' to the value of message

}


function switchCourse(courseLevel) {
    var courseLevel = 6;
    var courseText;

    switch (courseLevel) {
        case 4:
            courseText = "First year";
            break;
        case 5:
            courseText = "Second year";
            break;
        case 6:
            courseText = "Third year";
            break;
        default:
            courseText = "Please set a course level";
    }
    var finder = document.getElementById('courseLevel'); // Find class 'courseLevel' in html
    finder.textContent = courseLevel; // Change score to the value of courseLevel variable

    var finder = document.getElementById('courseYears'); // Find class 'courseYears' in html
    finder.textContent = courseText; // Change score to the value of courseYears variable
}


function showModules() {
    var modules = ['Maths', 'Programming', 'Web Development'];
    var marks = [45, 98, 65]
    var arrayLength = modules.length;
    var modulesMessage = '';
    var i;

    for (i = 0; i < arrayLength; i++) {
        modulesMessage = modulesMessage + modules[i] + ' ' + marks[i] + "%" + '<br>';
    }

    var finder = document.getElementById('modulesMessage'); // Find class 'courseLevel' in html
    finder.innerHTML = modulesMessage; // Change score to the value of courseLevel variable
}

function showModulesAll() {
    var modules = ['Maths', 45, 'Programming', 98, 'Web Development', 65];
    var arrayLength = modules.length;
    var modulesMessage = '';
    var i = 0;
    var n = 1;

    do {
        modulesMessage = modulesMessage + modules[i] + ' ' + modules[n] + '%' + '<br>';
        i += 2;
        n += 2;
    }
    while (i < arrayLength) {
        // Check they work on html
    }

    var finder = document.getElementById('modulesMessageAll'); // Find class 'courseLevel' in html
    finder.innerHTML = modulesMessage; // Change score to the value of courseLevel variable
}

function whileExample() {
    var modules = ['Maths', 'Programming', 'Web Development'];
    var marks = [45, 98, 65]
    var arrayLength = modules.length;
    var modulesMessage = '';
    var i = 0;

    do {
        modulesMessage = modulesMessage + modules[i] + ' ' + marks[i] + "%" + '<br>';
        i++;
    } while (i < arrayLength) {
        // Nothing
    }

    var finder = document.getElementById('whileExample'); // Find class 'courseLevel' in html
    finder.innerHTML = modulesMessage; // Change score to the value of courseLevel variable
}

function student() {
    // Declare Variables 
    var student = new Object();
    student.firstName = 'Chris';
    student.lastName = 'Jones';
    student.course = 'Bsc Computing'
    studentModuleMarks = ['Maths', 45, 'Programming', 98, 'Web Development', 65];
    studentResults = '';
    // Calculate array length
    var arrayLength = studentModuleMarks.length;
    var i = 0;
    var n = 1;

    // Combine the students names to make full name.
    fullName = student.firstName + ' ' + student.lastName;
    // Display the full name in html
    var finder = document.getElementById('fullName'); // Find class in html
    finder.innerHTML = fullName; // Change score to the value of courseLevel variable
    // Display course in html
    var finder = document.getElementById('course'); // Find class in html
    finder.innerHTML = student.course; // Change score to the value of courseLevel variable
    // Create a do while loop to get studentModuleMarks
    do {
        studentResults = studentResults + studentModuleMarks[i] + ' ' + studentModuleMarks[n] + '%' + '<br>';
        i += 2;
        n += 2;
    }
    while (i < arrayLength) {
        // Check they work on html
    }
    // 
    var finder = document.getElementById('results'); // Find class in html
    finder.innerHTML = studentResults; // Change score to the value of courseLevel variable
}

// Set up the Object Constructor (Template)
function Students(firstName, lastName, course, moduleMarks) {
    // Declare student as a new object 
    var student = new Object();
    // create this.firstNames etc
    this.firstName = firstName;
    this.lastName = lastName;
    this.course = course;
    this.moduleMarks = moduleMarks;
}
// Create new students which uses the Students template.
var student1 = new Students('Chris', 'Jones', 'Bsc Computing', ['Maths', 45, 'Programming', 98, 'Web Development', 65]);
var student2 = new Students('Tom', 'Jenkins', 'BSc Computing', ['Maths', 55, 'Programming', 87, 'Web Development', 65]);
var student3 = new Students('Mary', 'Evans', 'BSc Computer Networking', []);
// Test that they're being saved correctly.
// console.log(student1, student2, student3);

function placeStudents() {
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
    // Test in console logs
    //console.log(student1Length, student2Length, student3Length);
    // Set arrays for loop
    var i = 0;
    var n = 1;
    var student1ModuleMessage = '';
    var student2ModuleMessage = '';
    var student3ModuleMessage = '';

    // Start the loop for student1
    do {
        student1ModuleMessage = student1ModuleMessage + student1.moduleMarks[i] + ' ' + student1.moduleMarks[n] + '%' + '<br>';
        student2ModuleMessage = student2ModuleMessage + student2.moduleMarks[i] + ' ' + student2.moduleMarks[n] + '%' + '<br>';
        student3ModuleMessage = student3ModuleMessage + student3.moduleMarks[i] + ' ' + student3.moduleMarks[n] + '%' + '<br>';
        i += 2;
        n += 2;
    } while (i < student1Length) {
        // 
    }
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
    //var finder = document.getElementById('studentThreeModules'); // Find class 'courseLevel' in html
    //finder.innerHTML = student3ModuleMessage; // Change score to the value of courseLevel variable
}