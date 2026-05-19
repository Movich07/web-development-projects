<?php

//block of statement that can be used repeatedly in a program
//function name
function saySomething(){
    //fucntion statement
    echo "heeelloooo Friends";
}
//fucntion caller
saySomething();
echo "<br>";

//function argument
//information can be passed to the function through arguments. Argument are just like variables.we can have as many arguments passed into the function as possible.

function familyName($fname, $lname){
    echo "My First name is $fname and my lastname is $lname <br>";
}
familyName("Olatunde", "Ewaorun");
familyName("Kazeem", "Roquib");
familyName("Kazeem", "Hafiz");

//function return
//using teh return to make the function flexible to use

function sum($x,$y){
    $z = $x + $y;
    return $z;
}

echo sum(5,10);
echo "<br>";
echo sum(7,20);
echo "<br>";
echo sum(50,9);
?>