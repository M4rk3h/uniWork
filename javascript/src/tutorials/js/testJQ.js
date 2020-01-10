function testJQ() {
    window.onload = function () {
        if (window.jQuery) {
            // jQuery is loaded  
            alert("jQuery loaded correctly!");
        } else {
            // jQuery is not loaded
            alert("JQuery isn't loaded correctly!");
        }
    }
}

function ex1(){
    $('li')
    .attr('class', 'full')
    .hide()
    .delay(500)
    .slideDown(1000);
}

// SAVE TO XML
var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var FILENAME = 'G:\\CST2309 - Web Programming 1\\Copy of Take Home Exam - Copy\\PersonXML2.xml';

function SaveXML(UserData) 
{   
    var file = fso.CreateTextFile(FILENAME, true);
    file.WriteLine('<?xml version="1.0" encoding="utf-8"?>\n');
    file.WriteLine('<PersonInfo>\n');

    for (countr = 0; countr < UserData.length; countr++) {
        file.Write('    <Person ');
        file.Write('Usrname="' + UserData[countr][0] + '" ');
        file.Write('Pswd="' + UserData[countr][1] + '" ');
        file.Write('PersonID="' + UserData[countr][2] + '" ');
        file.Write('FirstName="' + UserData[countr][3] + '" ');
        file.Write('LastName="' + UserData[countr][4] + '" ');
        file.Write('Gender="' + UserData[countr][5] + '" ');
        file.Write('DOB="' + UserData[countr][6] + '" ');
        file.Write('Title="' + UserData[countr][7] + '"');
        file.WriteLine('></Person>\n');
    } // end for countr

    file.WriteLine('</PersonInfo>\n');
    file.Close();

} // end SaveXML function --------------------

function LoadXML(xmlFile) 
{
    xmlDoc.load(xmlFile);
    return xmlDoc.documentElement;
} //end function LoadXML()

function initialize_array() 
{
    var person = new Array();
    var noFile = true;
    var xmlObj;
    if (fso.FileExists(FILENAME)) 
    {
        xmlObj = LoadXML(FILENAME);
        noFile = false;
        } // if
    else 
    {
        xmlObj = LoadXML("PersonXML.xml");
        //alert("local" + xmlObj);
        } // end if

    var usrCount = 0;
    while (usrCount < xmlObj.childNodes.length) 
    {
        var tmpUsrs = new Array(xmlObj.childNodes(usrCount).getAttribute("Usrname"),
                                xmlObj.childNodes(usrCount).getAttribute("Pswd"),
                    xmlObj.childNodes(usrCount).getAttribute("PersonID"),
                                xmlObj.childNodes(usrCount).getAttribute("FirstName"),
                                xmlObj.childNodes(usrCount).getAttribute("LastName"),
                                xmlObj.childNodes(usrCount).getAttribute("Gender"),
                                xmlObj.childNodes(usrCount).getAttribute("DOB"),
                                xmlObj.childNodes(usrCount).getAttribute("Title"));
        person.push(tmpUsrs);
        usrCount++;
         }   //end while
    if (noFile == false)
        fso.DeleteFile(FILENAME);
    SaveXML(person);
}   // end function initialize_array()
  