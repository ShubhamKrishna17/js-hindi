// For Of loops

// let arr = [1,2,3,4,5]

// for (let val of arr) {
//     console.log(val);
    
// }


// let msg1 = "Hello Shubham";

// for (const i of msg1) {
//     console.log(i);
   
// }

// let msg = ["Hello Shubham",'cts','abc','xyz'];

// for (const i of msg) {
//     console.log(...i[1]);
    
// }


// MAps

// let map = new Map()

// map.set('IN',"India");
// map.set('DE',"German");
// map.set('RU',"Russian");
// map.set('RU',"Russian");

// // for(i=0;i<map.length;i++)
// //     {
// //         console.log(map[i]);
// //     }

//    for (const [key,value] of map) {
//     console.log(`${key} is ${value}`);
    
//    }

let game = {
    game1 : "GTA",
    game2 : "Candy Crush",
    game3 : "Asphalt"
}

for (const key in game) {
   // console.log(`${key}, ${game[key]}`);
    
}


let arr = ['script','html','css','react'];

for (const key in arr) {
    
//    console.log(`${key}, value is ${arr[key]}`);
   
}

let map = new Map();

map.set('NL','Dutch');
map.set('AR','Arabic');
map.set('PT','Portugese');

for (const [key,value] of map) {
   //console.log(`${key} , ${value}`);
   
}