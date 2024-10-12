
// Named IFFE
(function test(){

    console.log(`test function`);
    
})
();


// Unnamed IFFE
( (uname) => {
    console.log(`test function two`);
    console.log(`Your name is ${uname}`);
})
(`Shubham`);