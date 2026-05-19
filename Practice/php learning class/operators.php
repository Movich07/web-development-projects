<?php

$a = 10;
$b = 20;

echo $a + $b;
echo "<br>";
echo (abs($a - $b));
echo "<br>";
echo (round($a / $b));
echo"<br>";
echo $a * $b;
echo"<br>";
echo $a ** $b;
echo"<br>";
echo $a % $b;
echo "<br>";

//comparispon operators comparing two values
//equal to
var_dump($a == $b);
echo "<br>";

// Identical
var_dump($a === $b);
echo"<br>";

//not equal to
var_dump($a !== $b);
echo"<br>";

// greater than
var_dump($a > $b);
echo"<br>";

// less than
var_dump($a < $b);
echo"<br>";

// greater and equal to
var_dump($a >= $b);
echo"<br>";

// less than equal to
var_dump($a <= $b);
echo"<br>";

// increment
echo ++$a;
echo"<br>";

// decrement
echo --$b;
echo"<br>";


// logical operators they are used to combine conditional statement
$c = 10;
$d = 20;

// and operator
if($c == 10 && $d == 20){
    echo "Hello World";
}
echo"<br>";

// OR operator
if($c == 10 || $d == 50){
    echo "Hello david";
}

echo"<br>";

// // NOT operator
if(!($c == 100)){
    echo "coded";
}

//String operator
$txt1 = "Hello";
$txt2 = "Movich";

echo $txt1 ." ". $txt2;
echo"<br>";

//array operator
$cars = ["a" => "benz", "b" => "Toyota"];
$trucks = ["c" => "Mark", "d" => "Iveco"];

//union of cars and trucks
print_r($cars + $trucks);
echo"<br>";

//equality
var_dump($cars == $trucks);

//identity
var_dump($cars === $trucks)
//not identical !==
//not equality !=














?>