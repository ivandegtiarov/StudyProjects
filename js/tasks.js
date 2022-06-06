// У нас есть посетитель (клиент) у которого есть свои данные фамилия, имя и тд.
// А так же у нас есть объект Фильмы в котором хранится название фильмов, жанр, год выпуска, режиссер 

const companyName = "FuriousFilms";

let filmsInfo = {
    category: {
        horror: {
            f1: "it 2018",
            f2: "Paranormal 2012"
        },
        fantasy: {
            fan: "Harry potter 2001"
        }
    }
}

fantasyFilms = filmsInfo.category.fantasy;
console.log(fantasyFilms)

let clientInfo = {
    name: "Ivan",
    surname: "Dehtiarov",
    favfilms: fantasyFilms
};


console.log(`Welcome to our shop ! ${clientInfo.name} !`)

console.log(`${clientInfo.name} ${clientInfo.surname} your favorite film are:`, clientInfo.favfilms)