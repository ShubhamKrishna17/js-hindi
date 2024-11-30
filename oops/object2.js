function multi(num){
return num * 5;
}
multi.power = 3
console.log(multi(5))
console.log(multi.power)
console.log(multi.prototype)


function createUser(user,score){
    this.user =user
    this.score = score
}
const user1 = new createUser('Shubham',30)
const user2 = new createUser('Rohit',35)

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function (){
    console.log(`Score is ${this.score}`)
}

console.log(user1);
console.log(user2);

user1.printMe()
user2.printMe()


