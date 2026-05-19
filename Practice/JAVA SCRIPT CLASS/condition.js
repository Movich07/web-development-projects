// conditions

// If statement

if(3 > 10){
    console.log("Three is less than Ten");
}else if(4 < 5){
    console.log("Four is less than Five");
}else if(5 > 3){
    console.log("Five is greater than Three");
}
else{
    console.log("Three is not greater than ten");
}

let colors = "Red";

switch(colors) {
    case "Red":
        console.log("The color is Red");
        break;
    case "Black":
        console.log("The color is Black");
        break;
    case "White":
        console.log("The color is White");
        break;
    case "Blue":
        console.log("The color is Blue");
        break;
    default:
        console.log("Color not Found");
        break;

}