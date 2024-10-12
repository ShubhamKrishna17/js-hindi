// for loop
let num = 5
for(number=1; number<=10;number++){
    let newno = num * number;
    console.log(newno);
}

for (let i = 1; i <= 10 ; i++) {
    console.log(`Value of outer i is ${i}`);
    for (let j = 1; j <=10 ; j++) {
        const res = i * j;
        console.log(`Multiplication of I and J is ${i} * ${j} = ${res}`);
        
        
    }
    
}
let myArr = ['Apple', 'Pomegranate', 'Grapes']
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

