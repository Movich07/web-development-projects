<?php //Get Method

if(isset($_GET['submit'])){

    $uname = $_GET['username'];
    $email = $_GET['email'];

    echo "Welcome". $uname;
    echo "Your email address is". $email;
}

?>