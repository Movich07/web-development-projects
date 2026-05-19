<?php

// string id a sequence of character enclosed in a quote ('')

echo 'Hello';
echo "Hello";

$z = "Hello Davi(d";

echo 'Hello $z';
echo "<br>";
echo "Hello $z";
echo "<br>";

// Str len
echo (strlen($z));
// Str word count 
echo "<br>";
echo str_word_count($z);
echo "<br>";
// str pos
echo strpos($z, "David");
echo "<br>";
// str uppercase
echo strtoupper($z);
echo "<br>";
// str lowercase
echo strtolower($z);
echo "<br>";
// str replace
echo str_replace("David","Movich",$z);
// str rev
echo strrev($z);
echo "<br>";

// trim
echo trim("   Hello   david");
echo "<br>";

// convert string to array
$z = "Hello David";
$y = explode(" ",$z);

// print_r is used to outputan array expression
print_r($y);
echo "<br>";

// concatenation
$a = "Hello";
$b = "Movich";

echo $a ." ". $b;
echo "<br>";

// slicing
echo substr($z,6,3);
echo "<br>";

// Escape character is a backlash followed by the Character you want to insert
$x = "Welcome to our \"PHP\" class with david";
echo $x;

?>