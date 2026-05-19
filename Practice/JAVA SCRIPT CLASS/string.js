let txt = "Hello  World";

let text = "It is a good thing to always find yourself in a \"leadership\" position";
console.log(text);
console.log(text.length);


let txt1 = 'it\'s alright';

console.log(txt.concat(txt));
console.log(txt.replace("World", "David"));

let text1 = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, quis`;

console.log(text1);
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());
console.log(text1.slice(5,11));

console.log(text);

console.log(txt.length);
console.log(txt.charAt(1));
console.log(txt.charAt(1));

// interpolation in string template literals

let firstName = "David";
let lastName  = "doe";

let result = `welcome ${firstName} ${lastName} `;
console.log(result);

let price = 100;
let VAT = 0.25;

let result1 = `Total: ${(100 * (1 + VAT)).toFixed(2)}`;

console.log(result1);
