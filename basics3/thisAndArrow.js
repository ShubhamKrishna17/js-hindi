const user={
    uname :"Shubham",
    price : 999,
    Welcome_msg : function(){
        // console.log(`${this.uname}, Welcome to website`);
        // console.log(this);
        
    }

}
// user.Welcome_msg();

user.uname = "Rathore"
// user.Welcome_msg();
// console.log(this);

// function chai(){
//     const uname = "Shubham"
//      console.log(this.uname);
// }
// chai();

// let chaitwo = function(){
//     const uname = "Shubham"
//      console.log(this.uname);
// }
// chaitwo();

// let chai3 = () => {
//     const uname = "Shubham"
//      console.log(this.uname);
// }
// chai3();


// const add = (num1, num2)=>{
// return num1 + num2;
// }
// console.log(add(3,4));

// const add = (num1, num2)=>  (num1 + num2);

const add = ()=>  ({username:"Krishna"})

    
    console.log(add.username);