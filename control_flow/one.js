// If conditional 

// const temperature = 51;
// if(temperature <= 50){
// console.log('Temp is below 50');
// }
// else{
//     console.log('Temp shooted up');
// }


// const score = 200;
// if(score>100){
//     const power = "Fly";
//     console.log(`user power is to ${power}`);
// }
// else{
//     console.log(`user power not found`); 
// }

// const balance = 1000
// if(balance>500) console.log(`balance is greater than 500`) // IMPLICIT SCOPE
    
// const balance = 1000;
// if(balance<500){
//     console.log(`balance is less than 500`);
// }
// else if(balance<750){
//     console.log(`balance is less than 750`);
// }
// else if(balance<950){
//     console.log(`balance is less than 950`);
// }
// else{
//     console.log(`Balance is 1000 in account`);

// }

const userLogged = false;
const debitcard = true;
const LoggedFromGoogle = false;
const LoggedFromEmail = false;

if(userLogged && debitcard){
    console.log(`User is allowed for purchase`);
    
}
else{
    console.log(`User is not allowed for purchase`);
    
}


if(LoggedFromGoogle || LoggedFromEmail){
    console.log(`User Logged in`);
    
}
else{
    console.log(`User not Logged in`);
    
}
