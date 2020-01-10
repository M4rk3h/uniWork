<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP -> Table</title>
</head>

<body>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script>
        window.jQuery || document.write('<script src="jquery-3.3.1.min.js "><\/script>')
    </script>
    <table id="test"></table>

    <script>
            // Create the data which will be added into the database
            var addData = new Object();
            addData.guitarBrand = 'Added';
            addData.guitarModel = 'Via';
            addData.guitarType = 'getJSON';
            console.log('addData Done');
            // Add to JSON
            var jsonAddData = JSON.stringify(addData);
            //console.log('jsonAddData Done.');
            // Get the json we want to save to
            $.getJSON("task3.php", {
                    tableName: "guitars",
                    appendData: jsonAddData
                },
                function (data) {
                    console.log(Object.text(data));
                    console.log(data);
                });
    </script>

</body>

</html>