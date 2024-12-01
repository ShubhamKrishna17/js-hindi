// Inheritance

class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends user{
    constructor(username,email,pass){
       
        super(username)
         this.email = email
        this.pass = pass
    }
        addCourse(){
            console.log(`New course was added`)
        
    }
}
let data1 = new Teacher('Kashish','kash@gmail.com',12345)

console.log(data1)



let data = new user('Kashish')
console.log(data.username);
