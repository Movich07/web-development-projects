<?php

$db_host = "localhost";
$db_uname = "root";
$db_pass = "";
$db_name = "php project";

// to establish a connection to the MySQL
$connection = mysqli_connect($db_host,$db_uname,$db_pass,$db_name);

if($connection){
    echo "We are connected";
} else{
    echo "connection failed";
}

?>