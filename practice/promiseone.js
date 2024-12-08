// let test =  new Promise(function(resolve,reject){



// if(data is correct){
//     console.log(`Datw fetched`)
//     resolve()
// }
// else{
//     reject(Error)
// }


// })


let responseData = fetch(`https://randomuser.me/api/`).then(function(){

let data = responseData.json()


}).then(function(data){
console.log(data)
}).catch(function(error){
console.log(error);

})