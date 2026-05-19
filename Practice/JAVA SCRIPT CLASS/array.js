let cars = ["BMW", "BENZ", "TOYOTA", "KIA"];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

cars[1] = "Escalade";

console.log(cars);

console.log(cars.toString());

// Javascript sees an array as an object
console.log(typeof(cars));

// get the lenght of the array
console.log(cars.lenght);

// sort the array in an alphabetical order
console.log(cars.sort());

cars.forEach(function(car){
console.log("This is one of my favorite cars" + car);
})

// add a new value array
cars.push("Benz");
console.log(cars.length)
console.log(cars);

// remove last value from array
cars.pop();
console.log(cars);

console.log(cars.at(2));
console.log(cars.at[2]);

// join all the array with a character
console.log(cars.join("/"));

// Remove the first Element on the array
console.log(cars.shift());
console.log(cars);

console.log(cars.unshift('BMW'));
console.log(cars);

let names = ['Bola', 'Segun', 'Kinsley'];
console.log(cars.concat(names));

console.log(cars.splice(2,0, "Honda", "Bentley"));
console.log(cars);