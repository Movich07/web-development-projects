let x = 100;
let y = 150;


console.log(x + y); 
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x++); 
console.log(x--);
console.log(x ** y);

let a = 100 + 50 * 3;
a += 100;

console.log(a);

//  comparison operators

let b = 5;
let c = 10;


// equal to 
console.log(b == c);
// not equal to
console.log(b != c);
// Identical
console.log(b === c);
// Not identical
console.log(b !== c);
// greater than
console.log(b > c);
// less than
console.log(b < c);
// greater than equal to
console.log(b >= c);
// less than equal to
console.log(b <= c);


// logical Operator
console.log(b > 1 && c < 20);
// or
console.log(b == 5 || c == 5);

let age = 38;

let voteable = (age < 18) ? "Too Young": "Too Old"; 

console.log(voteable)


// strings Operators
// *This is a sequence of character enclosed in a quotes

let text1 = "My name is";
let text2 = "Roquib";

console.log(text1 + " "+ text2);

console.log(typeof(age));
console.log(typeof(text1));

let text3; 

console.log(typeof(text3))
