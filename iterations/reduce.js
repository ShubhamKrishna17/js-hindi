let nums = [1,2,3,4,5]

let res = nums.reduce((acc,currVal)=>{
    console.log(`Accumulator val is ${acc} and current Value is ${currVal}`);
    
    return acc + currVal},0)
console.log(res);




let user = ['Shubham','Rohit','Juhi']

// let newName = user.reduce((acc, newVal)=>{
//     console.log(`Updated names are ${acc} ${newVal}`);
//     return acc, newVal},'Singh')

let newName = user.map((val)=>{return val + ' Singh'})

console.log(newName[1]);


