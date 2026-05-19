<?php 

// Check if the name parameter is set in the URL
if(isset($_GET['name'])){
    $name = $_GET['name']; // Get the name from the URL
} else {
    $name = "Guest"; // it shows this if the name isn't registered
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <h1>Hello, <?php echo htmlspecialchars($name); ?>!</h1>
            <p>Welcome to your dashboard.</p>
        </div>
    </div>
</div>
</body>
</html>
