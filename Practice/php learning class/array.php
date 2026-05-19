<?php
//an Array is a special variable that can hold many values under a single name, and you can access the values by referring to an index number or name

$cars = ["Toyota", "Benz", true, 10 , "Escalade"];
echo $cars[0]; //Toyota
echo "<br>";
echo $cars[1] = "KIA"; //BENZ
echo "<br>";
echo $cars[4]; //Escalade
echo "<br>";
echo $cars[] = "Benz";
array_push($cars, "Honda","Acura");
//remove item using unset
unset($cars[0]);
//remove multiple items
array_splice($cars,5,6);
//arraypop to remove last item in the array
array_pop($cars);
//array shift to remove first item in the array
array_shift($cars);

print_r($cars);
echo "<br>";

//Associative array
$car = ["brand" => "Toyota", "model" => "camry", "year" => 2020, "price" => 1.4];

$car['colors'] = "Red";
echo $car['price'];
echo "<br>";
echo $car["brand"];
echo "<br>";
echo $car["model"] = "Corolla";
echo "<br>";
var_dump($car);
echo "<br>";


$newArr = array_diff($car,["Toyota", 2010]);
var_dump($newArr);
echo "<br>";
forEach($car as $x => $y){
    echo "$x: $y <br>";
}




?>