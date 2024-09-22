// FUNCTIONS

function add(a,b){
return a+b;


}
let result = add(5,6);
// console.log(typeof result);

// let user = {
//     username : "Shubham",
//     contact : 798245
// }

function userData(data){
return `Hello ${data.username}, your contact no. is ${data.contact}`;
}

console.log(userData({username:"Shubham",
    contact : 9891
}));


const newArray = [1,2,3,4,5];

function fetchArr(data){
    return data[2];
}

console.log(fetchArr(newArray));
