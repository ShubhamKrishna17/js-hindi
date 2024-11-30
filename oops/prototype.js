// let myName = "Shubham.       "
// console.log(myName.truelength) 


// let heroes = ['Ram','Shyam','Laxman']
// let powers = {
//     Ram : 'Bow',
//     Shyam:'Gada',
//     Laxman:'Arrow',

//     ramPower : function (){
//         console.log(`Ram's power is ${this.Ram}`)
//     }
// }

// Object.prototype.newPower = function(){

// }
// powers.newPower()

// heroes.newPower()


let userData = "Shubham   "

String.prototype.thislength = function(){
    console.log(`${this}`)
    console.log(`The length of name is ${this.trim().length}`);
    
}
userData.thislength();
"Singh".thislength()

