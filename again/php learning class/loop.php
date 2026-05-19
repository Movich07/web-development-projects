<?php
//while loop
// the while loop through a block of code as long as the condition is true.

//initialised value
$x = 0;

//condition
while($x <= 100){
    if($x == 50) break;
    echo "The counter value is ".$x ."<br>";
//increment
$x+=10;
}

while($x <= 100){
    $x += 10;
    if($x == 50) continue;
    echo "The counter value is ". $x . "<br>";
}

//for loop
//loops through a block code a specific number of times

for ($counter = 0; $counter < 10; $counter++){
    echo "The number value is $counter". "<br>";
}

//for each 
//loops through a block of code for each element or value in an array or property or in an object

$cars = ["Toyota", "Benz" , true , 10 , "Escalade"];

foreach ($cars as $car){
    echo $car . "<br>";
}
?>