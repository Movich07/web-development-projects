<?php

//if statement will be executed when the condition is true
if(3 < 10){
    echo "three is less than 10";
}
echo"<br>";

$a = 14;

if($a < 10){
    echo "Have a good day";
} else{
    echo "Have a good night";
}
echo"<br>";

if(3 > 10){
    echo "3 is less than 10";
} elseif(4 > 5){
    echo "4 is less than 5";
} elseif(5 > 6){
    echo "5 is greater than 6";
} else {
    echo "value not found";
}

echo"<br>";

// Nested if statement

$x = 13;

if($x > 10){
    echo "Above 10";
    if($x > 20){
        echo "and also above 20";
    } else{
        echo "but not above 20";
    }
}
echo"<br>";

$favcolor = "blue";

switch($favcolor){
    case "red";
        echo "Your Favoutite color is red";
        break;
    case "black";
        echo "Your Favoutite color is black";
        break;
    case "green";
        echo "Your Favoutite color is green";
        break;
    default:
    echo "color not found";



}
?>