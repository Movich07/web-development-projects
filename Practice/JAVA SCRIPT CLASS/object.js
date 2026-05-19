const person = {
    firstName: "bayo",
    lastName: "Ann",
    age: 16,
    eyeColor: "Black",
    height: 160,
    weight: 90,
    fullName: function(){
        return this.firstName + ""+this.lastName
    }
}

console.log(person.firstName),
console.log(person.lastName),
console.log(person.fullName());
