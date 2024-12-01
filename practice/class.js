
// let uname = "Shubham"

// class test{
//     constructor(username, age){
//         this.username = username
//         this.age = age
//     }

//  upperCase(){
//         return `${this.username.toUpperCase()}`
//     }

// }


// let user = new test('Shubham',28)
// console.log(user.upperCase());


const data = "SHubham"

String.prototype.uppercase = function() {
 return `${this.toUpperCase()}`
}

let ndata = data.uppercase()
console.log(ndata);
