// While and Do While loop
// let num = 0;
// while(num<=5){
//     console.log(`The number is less than 10`)
//     num = num + 2
// }

// let myArr = ['Hanuman','Shaktiman','Krishna']
// let i = 0;
// while(i<=myArr.length-1){
//     console.log(`The inptsts in array are ${myArr[i]}`);
//     i++;
// }

let myArr1 = ['Hanuman', 'Shaktiman', 'Krishna'];
let j = 0;

// while(j < myArr1.length){
//     console.log(`The inputs in the array are ${myArr1[j]}`);
//     j++; // Increment index
// }

do {
    console.log(`the number input depends on ${myArr1[j]}`);
    j++;
} while (j<=myArr1.length-1);

let num = 1;
do {
    console.log(`5 * ${num} is ${num*5}`);
    num++;
} while (num<=10);