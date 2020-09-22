'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let f = prompt('Один из последних просмотренных фильмов?', ''),
            r = prompt('На сколько оцените его?', '0');
        if (f != "" && f != null && f.length < 50 && r != null && r != '') {
            personalMovieDB.movies[f] = r;
            console.log('done!');
        }
        else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
// не можем использовать switch, потому что в нем только прямое строгое сравнение, а не > <   
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов!");
    } else if (10 <= personalMovieDB.count <= 30) {
        alert("Вы классический зритель!");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман!");
    } else { 
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
        personalMovieDB.genres[i] = genre;
    }
}

writeYourGenres();
showMyDB();