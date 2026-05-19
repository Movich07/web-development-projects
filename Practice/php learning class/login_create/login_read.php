<?php include "db.php";

//use the Query to select the dates we have on our database

$query = "SELECT * from php_table ";

$result = mysqli_query($connection, $query);

if(!$result){
    die("Query FAILED".mysqli_error($connection));
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
</head>
<body>

<div class= "container">
    <div class= "col-md-6">
    
    <?php
        // Loop through the all data that has been selected on the database
        while($row = mysqli_fetch_row($result)){
    ?>

    <pre>
        <?php

        print_r($row);

        ?>


        </pre>

        <?php
        
    }
    ?>
    
    </div>

</div>
</body>
</html>