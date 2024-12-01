let newPromise = new Promise(function(resolve,reject){

let error = true;
if(!error){
    console.log(`The promise is resolved`)
    resolve('SUCCESS')
}else{
    console.log(`The promise has failed`)
    reject(`ERROR`)
}

}).then(function(success){
    console.log(success);
    
}).catch(function(error){
    console.log(error);
    
})

