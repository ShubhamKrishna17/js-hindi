// FOR EACH

let coding = ['HTML','CSS','JS','React']

// coding.forEach(function (value){
//     console.log(`The stored value is ${value}`);
    
// })

// coding.forEach((val)=>{
//     console.log(`Tried to fetch ${val} using Arrow fnc`);
    
// })

function print(item, index, abc){ 
// console.log(item, index, abc);
}
coding.forEach(print);

//  foreach brings ITEM, index and array together

let newcode = [
    {value:'Shubham', sub:'JS'},
    {value:'Rathore', sub:'React'},
    {value:'Singh', sub :'HTML'}
]
newcode.forEach((item)=>{
    console.log(item.value);
    
})