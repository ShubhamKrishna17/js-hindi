let newPromise = new Promise(function(resolve,reject){

setTimeout(function(){
let error = false;
if(!error){
    console.log('Hello Shubham')
    resolve();
}else{
reject('ERROR:Promise failed')
}



},1000)
}).then(function(){
    console.log('Promise resolved successfully')

}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log('The promise is either solved or rejected')
})

