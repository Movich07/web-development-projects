// loops
// For loop


/*let a = 0;
let b = 1;
let c = 2;
let d = 3;
let e = 4;
let f = 5;
*/

for (let i = 0; i <= 5; i++){
    console.log("The number is" + i);
}

// For in lopp

let car = {
    carName: "Benz",
    carColor: "White",
    carOperation: "Automatic",
    carModel: "G65AMG",
}

console.log(typeof(car));

// for in will loop through the properties of the object

for(let x in car){
    console.log(car[x]);
}

// loops through array
let numbers = [10, 20, 30, 40, 50];

for(let a in numbers){
    console.log(numbers[a]);
}

// while loop

// initialised value
let counter = 0;

// condition
while(counter < 10){
    console.log("The counter value is" + counter);
    // increment
    counter++;
}

// class practice

for (let i = 10; i > 0; i--){
    console.log("The number is " + i);
}

for (let k = 0; k <= 100; k+=10){
    console.log("the number is" + k);
}
 




// incremented by 1 I++
for (let i = 0; i < 5; i++) {
    console.log('Hello Word');
    

}

for (let i = 5; i >= 0 ; i--)
console.log('Hello world');





// let figures = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

// for(let b in figures){
//     console.log(figures[b]);
// }