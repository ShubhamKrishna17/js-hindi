class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

     static createId(){
        return `123`
    }
}

let data = new User('Shubham')

console.log(data.createId())
