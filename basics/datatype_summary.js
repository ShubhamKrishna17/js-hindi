/* 

Primitive data types - String, Number, Boolean, Symbol, Null, Undefined, BigInt

Non-Primitive / Reference - Arry, Function, Objects


// Stack - used with primitive data types
heap - with non-primitive
*/

let data = 2 //number
let nameData = "Shubham"; //string
let loggedIn = false //boolean
let randomData = null;
let random;

let bigNum = 125435621717737375726476784678567814781278n;

let num = Symbol('123');
let newNum = Symbol('123');


// console.log(num);
// console.log(newNum);



// console.log(typeof bigNum);

// Non primitive

let arr = ['Shubham','Rohit','Krishna'];

let obj = {
    name : "Shubham",
    age : 29,
    job : "development"

}

let fnc = function test(){
    console.log("I'm a function");
}
// console.log(typeof obj);

// console.log(typeof arr);
// console.log(typeof fnc);

//Stack example

let nme = "Shubham";
let newName = nme;
newName = "Rohit";

console.log(newName);
console.log(nme);

//Heap Example

let objOne = {
    name : "Shubham",
    age : 29,
    job : "development"

}

let objTwo = objOne;
objTwo.job = "Tester";

console.log(objTwo);
console.log(objOne);





