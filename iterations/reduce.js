let nums = [1,2,3,4,5]

let res = nums.reduce((acc,currVal)=>{
    console.log(`Accumulator val is ${acc} and current Value is ${currVal}`);
    
    return acc + currVal},0)
console.log(res);
