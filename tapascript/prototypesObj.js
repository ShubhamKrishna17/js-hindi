// let user = {
//     name:'Shubham',
//     age: 30
// }
// console.log(user.age);
// // let myAge = 'age'

// // console.log(user.myAge);
// // console.log(user[myAge]);

// //Constructor Function

// function Car(model, make, color, owner){
//     this.model= model
//     this.make=make
//     this.color = color
//     this.owner = owner
// }

// function Owner(name, age){
//     this.name= name
//     this.age = age
// }

// let own = new Owner('Shubham', 30)

// let carData = new Car('BMW', 2024, 'Red', own)
// console.log(carData);


 
// Object Create

let vehicle ={
   brand : 'TATA',
   color : 'Grey',

    showinfo : function(){
        return `The car that you own is ${this.brand} and the color is ${this.color}. This was previously owned by ${this.owner}`
    }
    }
    

let newCar = Object.create(vehicle)
newCar.owner = "Rathore"
console.log(newCar.showinfo());

// Using constructor approach

let car = function(color, brand){
    this.color=color
    this.brand = brand

  
}

car.prototype.details =function(){
    return `the car is owned by ${this.owner}. The brand is ${this.brand} and color is ${this.color}`
}

let newCar2 = new car('Red', 'Range Rover')
newCar2.owner = 'Shubham';
console.log(newCar2.details());

