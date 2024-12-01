// CLASS is JS

class User{
    constructor(username, email,pass){
        this.username = username
        this.email = email
        this.pass = pass
    }
    encryptPassword(){
        return `${this.pass}abc`
    }

    changeCase(){
        return `${this.username.toUpperCase()}`
    }
}

let data =new User('Rathore','abc@gmail.com',123)
console.log(data.changeCase())


//Behind the scene

function user1(username,role,pass){

    this.username = username
    this.role = role
    this.pass = pass
}

Object.prototype.upperCase = function(){
    return `${this.toUpperCase()}`
}
Object.prototype.encryptPass = function(){
    return `${this.pass}abc`
}

let userData = new user1('Singh','Dev','Rohini')

console.log(userData.username.upperCase())
console.log(userData.pass.encryptPass().toUpperCase())