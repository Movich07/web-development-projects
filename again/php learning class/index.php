<?php

echo "<h1 style ='background-color: black;color:white';>Hello world</h1>";

// PHP Keywords, functions,classes are not case senseitive

ECHO "Hello David";
echo "<br>";
echo "Hello David";
echo "<br>";
Echo "Hello David";

// variables is a container for storing values or informations

$greetings = "Hello Good day";
$Greetings = "Hello Good day David";
echo "<br>";
$x = 10;
$y = 10.5;
$test = true;
$arr = ["Movich", 10 , true];
$d = null;

echo $greetings;
echo "<br>";
echo $Greetings;
echo $x;
echo "<br>";

// PHP is a loosely typed Language
var_dump($greetings);
echo "<br>";

var_dump($x);
echo "<br>";

var_dump($y);
echo "<br>";

var_dump($test);
echo "<br>";

var_dump($arr);
echo "<br>";

var_dump($d);

// Variable scope this is the part of the script were the variable can be accessed or referenved or use 

// Global scope : is declared outside a function and can only be accessed or used outside the function
echo "<br>";

// Globally declared variable
$z = 30;

function myTest(){
    echo "This is the inside global scope variable $z";
}
myTest();
echo "<br>";

echo "This is the outside global scope variable $z";


// Local scope: A local scope is declard within the function and can only be accessed within that function

function myTest1(){
    $a = 10; //local storage
    echo "<h1>This is the outside local scope variable $a </h1>";
}
myTest1();
echo "<br>";
echo "<h1>This is the outside local scope variable $a </h1>";

function myTest2(){
    global $a;  //making our local scope to be accesible globally using the global keyword
    $a = 10; //local scope
    echo "<h1>This is the inside local scope variable $a </h1>";
    
}
myTest2();
echo "<br>";
echo "<h1>This is the outside local scope variable $a </h1>";

?>