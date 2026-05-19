<?php include "db.php"; //connect db to file // To include a row navigate to structure on the databse

if(isset($_POST['submit'])){
   
//    get the post record coming from the form
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // set up a Structured query language(sql) to insert the data into database
    $query = "INSERT into php_table(username,email,password)";
    $query .= " VALUES ('$username','$email','$password')";

    // connect query to database
    $result = mysqli_query($connection,$query);

    //Test incase of any error from the code
    if(!$result){
        die("QUERY FAILED" . mysqli_error($connection));
    }
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

<!-- form -->

<div class= "container">
<div class= "row">
    <div class="col-md-6">
    <h1>Crud Operation</h1>

<form action="login.create.php" method="post">
<div class="form-group">
    <label for="exampleInputUname">Username</label>
    <input type= "text" name="username" autocomplet="off" class="form-control" placeholder= "Enter username" >

</div>

<div class="form-group">
    <label for="exampleInputUname">Email</label>
    <input type= "email" name="email" autocomplet="off" class="form-control" placeholder= "Enter email">

</div>

<div class="form-group">
    <label for="exampleInputUname">Password</label>
    <input type= "text" name="password" autocomplet="off" class="form-control" placeholder= "password">

</div>

    <button type="submit" name="submit" class="btn btn-primary">Submit</button>

</form>

    </div>
</div>
</div>


</body>
</html>