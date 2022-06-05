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

