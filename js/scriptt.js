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



// Hometask first 

//first task
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '')


//second task
const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        
    },
    actors: {

    },
    genres: [],
    privat: false
};

const q1 = prompt("Один из последних просмотренных фильмов?",'');
const q2 = prompt("На сколько оцените его ?",'');
personalMovieDB.movies[q1] = q2;
console.log(personalMovieDB);

//second task