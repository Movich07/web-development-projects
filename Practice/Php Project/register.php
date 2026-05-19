<?php include "db.php"; // Connect to the database

//using the global post method
if(isset($_POST['submit'])){
    // Get the form data
    $fullname = $_POST['fullname'];  // Fetching the data inserted in the form
    $email = $_POST['email'];
    $password = $_POST['password'];  

    // Sql query insert data into the database
    $query = "INSERT INTO user (username, email, password) ";
    $query .= "VALUES ('$fullname', '$email', '$password')";

    // Execute the query
    $result = mysqli_query($connection, $query);

    // Check if the query was successful
    if(!$result){
        // If it fails, show an error message
        die("QUERY FAILED" . mysqli_error($connection));
    } else {
        // If successful, redirect , passing the user's name in the URL
        header("Location: dashboard.php?name=" . urlencode($fullname));
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <h1>Registration</h1>
            <form action="register.php" method="post">
                <div class="form-group">
                    <label for="fullname">Full Name</label>
                    <input type="text" name="fullname" autocomplete="off" class="form-control" placeholder="Enter Name">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" autocomplete="off" class="form-control" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" autocomplete="off" class="form-control" placeholder="Enter password">
                </div>
                <button type="submit" name="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
</body>
</html>
