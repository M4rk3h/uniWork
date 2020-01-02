function addRecords(){
    $(function () {
        /* Edit button ajax call */
        $('#saverecords').on('click', function () {
    
            var guitarNo = $('#guitarNo').val();
            var guitarBrand = $('#guitarBrand').val();
            var guitarModel = $('#guitarModel').val();
            var guitarType = $('#guitarType').val();
            // If any are empty
            if (!guitarBrand || !guitarModel || !guitarType) {
                $('.error').show(3000).html("All fields are required.").delay(3200).fadeOut(3000);
            } else {
                if (guitarNo) {
                    var url = 'editPHP.php';
                } else {
                    var url = 'addPHP.php';
                }
                $.post(url, {
                        guitarNo: guitarNo,
                        guitarBrand: guitarBrand,
                        guitarModel: guitarModel,
                        guitarType: guitarType
                    })
                    .done(function (data) {
                        if (data > 0) {
                            $('.success').show(3000).html("Record saved successfully.").delay(
                                2000).fadeOut(1000);
                        } else {
                            $('.error').show(3000).html(
                                    "Record could not be saved. Please try again.").delay(2000)
                                .fadeOut(1000);
                        }
                        $("#saverecords").val('Add Records');
                        setTimeout(function () {
                            window.location.reload(1);
                        }, 15000);
                    });
            }
        });
    });
}
