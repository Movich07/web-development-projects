<!-- The superglobal variable we will be workinmg on is POST -->
 <!-- POST contains an array of variablws received via the HTTP (Hypertext transfer protocol) POST METHOD -->
  <!-- the post receives the information submitted from the form-->

  <!-- Get Method -->
   <!-- Information sent from a form with the GET method is visible to everyone, all variable name and value are displayed in the URL. Also has limited amount of information that can be sent using the get method 2000 characters. The get method can be used for sending password or other sensitive information-->

   <!-- SERVER holds information about header, path, host and script location -->

   <?php
   
   echo $_SERVER['PHP_SELF']; //FILENAME OF THE CURRENT EXECUTING SCRIPT
   echo"<br>";
   echo $_SERVER['SERVER_NAME']; // The name of the host server

   ?>

<?php
  if(isset($_POST['submit'])){

    $username = $_POST['username'];
    $password = $_POST ['password'];

    echo "My username is" . $username;
    echo "My password is" . $password;
    echo "Yes it is submitted";
  }
  
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!-- This is for the post method -->
<!-- action helps to send data to another  -->
<!-- <form action="form_process.php" method="post"> 
        <input type="text" name="username" placeholder="Enter Username"><br>
        <input type="password" name="password" placeholder="Enter password"><br>
        <input type="submit" name="submit" value="Submit">
    </form> -->

<!-- This is for get method  -->
<form action="<? echo $_SERVER['PHP_SELF']; ?>" method="get"> 
        <input type="text" name="username" placeholder="Enter Username"><br>
        <input type="password" name="password" placeholder="Enter password"><br>
        <input type="submit" name="submit" value="Submit">
    </form>
    
</body>
</html>