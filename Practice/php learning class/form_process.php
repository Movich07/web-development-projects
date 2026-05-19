<?php  //form validation


if(isset($_POST['submit'])){

    $username = $_POST['username'];
    $password = $_POST ['password'];
    $names = ["David", "Movich","Moses","Benita","Peter", "Samuel", "James"];

  }

  if(strlen($username) < 5){
    echo "<small style='color:red';>username has to be longer than five </small>";
  }
  
  if(strlen($username) < 10){
    echo "<small style='color:red';>username can not be longer than 10 </small>";
  }

  if(!in_array($username, $names)){
    echo "Sorry you are not allowed";
  }else {
    echo "Welcome to the page";
  }
?>
