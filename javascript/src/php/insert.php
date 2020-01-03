<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP -> Table</title>
    <!-- JavaScript Ref -->
    <script src="myjs.js"></script>
</head>

<body>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script>
        window.jQuery || document.write('<script src="jquery-3.3.1.min.js "><\/script>')
    </script>

    <form>
        <table>
            <tr>
                <td colspan="4" style="text-align: center">
                    <input type="hidden" id='guitarNo' value='' />
                    <input type='text' id='guitarBrand' placeholder='Fender' required />
                    <input type='text' id='guitarModel' placeholder='Telecaster' required />
                    <input type='text' id='guitarType' placeholder='Electric Guitar' required />
                    <input type='button' id='saverecords' value='Add Records'/></td>
            </tr>
        </table>
    </form>

    <!-- <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script> -->
    <script>
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
                    console.log('No guitarNo');
                    //var url = 'editPHP.php';
                } else {
                    console.log('addPHP.php added to url')
                    var url = 'addPHP.php';
                }
                // Now begin to post
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

    </script>


</body>

</html>