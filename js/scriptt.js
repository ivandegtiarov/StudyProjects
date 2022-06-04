"use strict"


/* console.log(8*4 === '32'); */  //Строгое равенство

/* let isChecked = false;
let isClose = false;
 */


/* ! - оператор отрицания */ 
/* && - оператор И  */
/* || - оператор ИЛИ */

/* console.log(!isChecked && isClose);
console.log(isChecked || !isClose); */



function addition(personAge, personName, object, firstNum, secondNum) {
    if (personAge > 20) {
        console.log(`Welcome ${personName}, it's your time!`);
        if (object == '+') {
            console.log("The answer is : ", firstNum + secondNum);
        }
        else if (object == '-') {
            console.log("The answer is : ", firstNum - secondNum);
        }
        else {
            console.log("BUT...CALCULATOR IS NOT AVAILABLE")
        }
    }
    else {
        console.log("Your age is not good for this page!")
    }
}

addition(26, 'Ivan', '-', 14, 16);