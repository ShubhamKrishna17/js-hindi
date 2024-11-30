let user = {
    username : "Shubham",
    role: "Developer",

   getData : function userFnc(){
        //console.log(`hello ${this.username}`);
        console.log(this);
        
    }
}

console.log(user.username)
//console.log(user.getData())
console.log(this);


// let promise = new Promise() -- Here the keyword 'NEW' is a constructor

function check(data, data1, data2){
    this.data = data;
    this.data1 = data1;
    this.data2 = data2;

   
}

const user1 = new check('Rathore', 30, 1994)
const user2 = new check('Rohit', 34, 1990)

console.log(user1)
console.log(user2)

