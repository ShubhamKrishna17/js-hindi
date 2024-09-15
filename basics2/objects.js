// Singleton - this is made through constructor
// Object literals

// Object.create(); // constructor method
const mySym = Symbol("anyvalue")

let user = {
    name:"Shubham",
    [mySym] : "newSymbol",
    age :28,
    designation :"Developer",
    loggedIn : "yes",
    logIndays :['Monday','Tuesday','Wednesday']

}

// console.log(typeof user[mySym]);

// Object.freeze(user);
// user.designation="Software";
// console.log(user.designation);


// console.log(user);

user.greeting = function(){

  // console.log("Welcome to JS course");
    
}

user.greeting2 = function(){

    // console.log(`Welcome to JS course, ${this.name}`);
    
}
// console.log(user.greeting2());


let newobj = Object.create(user);

// console.log(newobj.greeting());



let employee = {
name:"Rohit",
age: 34,
Designation : "Manager"
}

// console.log(employee.name);

employee.message = function(){
  // console.log(`Welcome to the coding world ${this.name}`);
  
}
// console.log(employee.message());



