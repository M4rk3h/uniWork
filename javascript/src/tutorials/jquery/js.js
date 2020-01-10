function toFull() {
    $(function () {
        $('li')
            .attr('class', 'full')
            .hide()
            .delay(500)
            .slideDown(1000);
    })
};

function testAll() {
    $(function () {
        console.log($('li.new'));
        console.log($('li.running'));
        console.log($('li.running.new'));
        console.log($('li.new.running'));
        console.log($('li.new, li.running'));
        console.log($('li#five'));
        console.log($('li.new, li#four'));
        console.log($('li.new#four'));
        console.log($('li.new#five'));
    });
};

// Print li's which are not new
function test1() {
    console.log($('li:not(".new")'));
};
// Print li's which don't contain id of "four"
function test2() {
    console.log($('li:not("#four")'));
};
// Print li's which is the first new course
function test3() {
    console.log($('li:first("new")'));
};
// Print li's which contain string "at"
function test4() {
    console.log($('li:contains("at")'));
};
// Print li's which don't contain em
function test5() {
    // WRONG
    console.log($('li:has(em).not'));
};
// Print li's which are not empty
function test6() {
    console.log($('li:contains(" ")'));
};
// last course which doesn't include the string "at"
function test7() {
    // WRONG
    console.log($('li:contains("at")'));
};
// Count the HTML within the li with the ID of five 
// (Includes Spaces)
function getHTML(){
    $(function() {
        var myListItems = $('ul').html();
        console.log(myListItems.length);
        console.log(myListItems.charAt(3));
      });      
};
// Count the Text within the li with the ID of five 
// (Includes Spaces)
function getText(){
    $(function() {
        var myListItems = $('ul').text();
        console.log(myListItems.length);
        console.log(myListItems.charAt(3));
      });
};

function doHtml(){
    // Change li#three
    $(function() {$('li#three').html('<em>new</em> BA Games Design');});
    // Change all li's
    //$(function() {$('li').html('<em>new</em> BA Games Design');});      
    // Change ul to one 
    //$(function() {$('ul').html('<em>new</em> BA Games Design');});
};

function doText(){
    // Change li#three with text (which won't format the html)
    //$(function() {$('li#three').text('<em>new</em> BA Games Design');});
    // Change all li's to the text
    //$(function() {$('li').text('<em>new</em> BA Games Design');});
    // Change all li's to the text
    $(function() {$('ul').text('<em>new</em> BA Games Design');});
};

// Store our li#five in a varaible and replace with x 
function replaceMe(){
    $(function() {var oldContent;
        oldContent = $('li#five').replaceWith('<li><em>new</em> BA Games Design</li>');
        console.log(oldContent[0].textContent);});
};
// Remove the li which contains new
function removeMe(){
    $(function() {
        $('li.new').remove();
      });     
};
// Creates a new li after the last li.
function insertInto(){
    $(function() {
        var $newListItem = $('<li>BSc Operating Systems Design</li>');
        $('li:last').after($newListItem);});      
};
// Add newListItem onto last li
function getO(){
    $(function() {
        var $newListItem =  $('<b> with BSc Operating Systems Design</b>');
        $('li:last').append($newListItem);});      
};