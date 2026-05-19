function greetings(){
    console.log("Hello david");
}
greetings();

function addNumbers(){
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log(c);
}
addNumbers();


// Calling two function into a new Function

function init(){
    greetings();
    addNumbers();
}

init();

// Parameters in function
function family(brother, sister, uncle){
    console.log("My brother name is " + brother + "and i have a sister whose name is "+ sister +" and a lovely uncle called"+ uncle);
}
family("David", "Cynthia" , "Uncle Bode");

// return function... purpose is to make the function more flexible

function myfunction(a,b){
    return a * b;
}

let x = myfunction(10 , 10);
console.log(x);
x = myfunction(100, x);
console.log(x);

let z = myfunction(6,9);
console.log(z);


// Parameter in function on cars + 5cars, car model, price and colors
function cars(carname,carmodel,carprice,carcolor){
    
    console.log(" The name of my car is " +carname+ " and the model is " +carmodel+ " it is valued " +carprice+ " and also has a beautiful color "+carcolor);

    }
    cars("toyota","sport","$2000","black");
    cars("benz","sport","$2000","black");
    cars("honda","sport","$2000","black");
    cars("lexus","sport","$2000","black");
    cars("acura","sport","$2000","black");


