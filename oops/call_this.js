function userData(username){
this.username = username;

}

function newUserData(username, role, address){
    userData.call(this,username)
  
    // this.username = new userData(username)
this.role = role
this.address = address
}
let data = new newUserData('Shubham','Developer','Rohini')
console.log(data) 