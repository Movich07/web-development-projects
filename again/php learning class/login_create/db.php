<?php

$db_host = "localhost";
$db_uname = "root";
$db_pass = "";
$db_name = "Php learning class";


$connection = mysqli_connect($db_host,$db_uname,$db_pass,$db_name);

if($connection){
    echo "Yes we are connected";
} else{
    echo "connection failed";
}

?>