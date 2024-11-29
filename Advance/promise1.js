// let newPromise = new Promise(function(resolve,reject){

// setTimeout(function(){
// let error = true;
// if(!error){
//     console.log('Hello Shubham')
//     resolve();
// }else{
// reject('ERROR:Promise failed')
// }



// },1000)
// })
//.then(function(){
//     console.log('Promise resolved successfully')

// }).catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log('The promise is either solved or rejected')
// })


// Async Await
// async function test() {
//     try {
//         let promisedata = await newPromise
//         console.log(promisedata)
//     } catch (fail) {
//         console.log(fail)
//     }
   
// }
// test()

async function users() {
    try {
        let newdata = await fetch('https://jsonplaceholder.typicode.com/users');
   let response = await newdata.json()
   console.log(response);
    } catch (error) {
        console.log("E",error)
    }
   
}
users();

async function users() {
  
      fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
            return response.json()
        }).then((newdata)=>{
            console.log(newdata);
            
        }).catch((error)=>{
            console.log('Eror reported', error)
        })

    
   
}
users();