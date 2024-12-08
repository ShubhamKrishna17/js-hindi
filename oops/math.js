const data = Object.getOwnPropertyDescriptor(Math,'PI');
console.log(data);


const user = {
    name :"Shubham",
    Role: "Developer",

    mathObj : function(){
        console.log(`Code kharab hai`);
    }
    
}

for (const [key,value] of Object.entries(user)) {
    if(typeof value != 'function'){
        console.log(`the entries found are ${key} : ${value}`);
    }
  
    
}


// Object.defineProperty(user,'name',{
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(user,'name'));