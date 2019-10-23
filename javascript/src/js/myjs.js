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