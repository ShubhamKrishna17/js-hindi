// const promiseOne = new Promise(function(resolve,reject){
//     // DO Async tasks
//     setTimeout(function(){
        
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
  
//     console.log("promise consumed")
// })

// new Promise(function(resolve,reject){
// setTimeout(function(){
// console.log('Async task 2')
// resolve();
// },1000)
// }).then(function(){
//     console.log('Async 2 resolved')
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({user:'Shubham', role:'Developer'})
//     },1000)
// }).then(function(user){
//     console.log(user.role)
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error= false;
//         if(!error){
//             resolve({user:'Shubham', role:'Developer'})
//         }else{
//             reject('ERROR:Rejected')
//         }
        
//     },1000)
// }).then(function(user){
//     console.log(user.role)
// }).catch(function(error){
// console.log(error)
// })

// PROMISE 5

// let promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error= true;
//         if(!error){
//             resolve({user:'Rohit', role:'Manager'})
//         }else{
//             reject('ERROR:Rejected promise 5')
//         }
        
//     },1000)
// })

// async function consumeFive(){
   
//    try {
//     let response = await promiseFive;
//    console.log(response.role)
//    } catch (error) {
//     console.log('Error reported')
//    }
// }
// consumeFive()

async function test() {
    try {
        let newSet = await fetch('https://jsonplaceholder.typicode.com/users') ;
        let responseData = await newSet.json()
        console.log(responseData.name)
        
    } catch (error) {
        console.log('received incorrect data')
    }


}
test()

async function test() {
 

}

fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})