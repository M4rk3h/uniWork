function toFull() {
    $(function () {
        $('li')
            .attr('class', 'full')
            .hide()
            .delay(500)
            .slideDown(1000);
    })
};

function test() {
    $(function () {
        //console.log($('li.new'));
        //console.log($('li.running'));
        //console.log($('li.running.new'));
        //console.log($('li.new.running'));
        //console.log($('li.new, li.running'));
        //console.log($('li#five'));
        //console.log($('li.new, li#four'));
        //console.log($('li.new#four'));
        //console.log($('li.new#five'));
    });
}

