// coding = ['Apple','orange','Banana'];

// let result = coding.forEach((val)=>{

//  console.log(val);
// return val;
// })

//  console.log(result);


//let nums = [1,2,3,4,5,6,7,8,9,10]

// let result = nums.filter((item)=>{
//     return item<5;
// })

// let res = []
// nums.forEach((val)=>{

//     if(val>5){
//         res.push(val)
//     }

// })

// console.log(res);


let books = [
    {
        genre:"Maths",
        publish :2004,
        author:'Shubham'
    },
    {
        genre:"Science",
        publish :1996,
        author:'Krishna'
    },
    {
        genre:"Maths",
        publish :1994,
        author:'Rohit'
    },
    {
        genre:"Physics",
        publish :2000,
        author:'Rathore'
    }
]

let record = books.filter((item)=> {
    
    return item.genre==='Maths' && item.publish>=2000

})
console.log(record)


