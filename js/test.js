"use strict"

const studentName = prompt("Укажите ваше имя: ",'');

const studentInfo = { 
    name: studentName,
    groupName: {},
    favSub: {
        subject: 'none',
        sub: 'kuruk'
    },
    rate: []
};


const q1 = prompt('Укажите название вашей группы', '');
const q2 = prompt('Укажите номер курса', '');

studentInfo.groupName[q1] = q2;
studentInfo.favSub.subject = 'math';
studentInfo.rate[0] = '5'
console.log(studentInfo);


console.log(5 + '6');

//Условие 

const num = 111;

/* (num === 100) ? console.log("ok"): console.log("Erorr");

if (num === 100) {
    console.log("ok");
}
else {
    console.log("Error");
} */

switch (num) {
    case 99:
        console.log("its true number")
        break;
    case 100:
        console.log("Great its your number");
        break;
    default:
        console.log("try to do this later");
        break;
}



let firstNum = 10;
let secondNum = 22;

(firstNum != 20 && secondNum != 22) ? console.log("right") : console.log("isnt right");





console.log( NaN || 2 || undefined ); // 2
 
console.log( NaN && 2 && undefined ); //NaN
 
console.log( 1 && 2 && 3 ); // 3
 
console.log( !1 && 2 || !3 ); // false
 
console.log( 25 || null && !3 );// 25
 
console.log( NaN || null || !3 || undefined || 5); //5
 
console.log( NaN || null && !3 && undefined || 5); // 5
 
console.log( 5 === 5 && 3 > 1 || 5);// 5


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

