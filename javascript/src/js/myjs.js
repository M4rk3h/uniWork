// JQuery commands

// Get json files
function getJsonFiles() {
    $.getJSON('/json/articles.json', function (data) {
        console.log(data);
    })
};

// Get json files with more control
// the success function get them in a loop
function getJsonAjax() {
    $.ajax({
        url: '/json/articles.json', // file location
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function (data) {
            $(data.articles).each(function (index, value) {
                console.log(value.name)
            })
        }
    })
};

 /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 