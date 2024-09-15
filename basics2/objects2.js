let user ={

}

user.id=12345;
user.nmae = "Shubham";
user.job = "Developer";
user.workday = ['mon','tue',"wed"];
// console.log(user);


let newUsr = {

    fullName:{
        userName :{
            firstName:"Rathore",
            lastName:"Singh"
        }
    }

}

// console.log(newUsr.fullName.userName.lastName);

let obj1 = {1:'a', 2:'b'};
let obj2 = {3:'c', 4:'d'};
let obj4 = {5:'e', 6:'f'};

// let objc = {obj1, obj2}
// let obj3 = Object.assign({},obj1, obj2, obj4)
// let obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty("nmae"));



// DESTRUCTURING

const course = {
    coursename:"JS courcse",
    price : "999",
    courseTeacher :"Shubham"
}

const {courseTeacher : teacher} = course
console.log(teacher);


