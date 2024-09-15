// Arrays in details

let marvel = ['Ironman', 'Hulk', 'Thor'];

let dc = ['superman','flash','batman'];

// marvel.push(dc)
// console.log(marvel[3][1]);

let newArr = marvel.concat(dc)
// console.log(newArr);
// console.log(marvel);

let newArr1 = [...marvel, ...dc]; //SPREAD operator
//console.log(newArr1);

let loopedArr = ['Shubham','Rohit','Krishna',['Vivek','hitesh',['Keshav','Manav']]];
// console.log(loopedArr);
let newLooped = loopedArr.flat(Infinity); // flat solved the situation if there is arrays inside array
// console.log(newLooped);


console.log(Array.from('SHUBHAM'));
console.log(Array.isArray('ROHIT'));


let a = 20;
let b = 30;
let c = 50;


console.log(Array.of(a,b,c));




