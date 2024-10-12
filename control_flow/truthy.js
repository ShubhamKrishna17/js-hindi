const email =[]

// if (email) {
//     console.log(`Correct email address`);
    
// }
// else{
//     console.log(`Wrong email type`);
    
// }

// if (email.length === 0) {
//     console.log(`Array is empty`);
    
// }
// else{
//     console.log(`Wrong email type`);
    
// }


const empytyObj={name:"Shubham"}
    if (Object.keys(empytyObj).length===0) {
        console.log(`Object is empty`);
        
    }
    else{
        console.log(`Object has some values`);
        
    }





// Nullish coalescing operator - It is designed for null and undefined only

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10

val1 = undefined ?? 15
console.log(val1);

// Ternary operator

//condition?true_statement:false

const price = 100;

price<=80?console.log(`price is less than 80`): console.log(`Price is more`);





// Falsy values are 
// false, 0, -0, Bigint 0n, "", null, Nan, undefined

// Truthy Values
// "0", 'false', {}, [], function(){}