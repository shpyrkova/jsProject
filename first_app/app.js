'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms == null || numberOfFilms == "") {
    prompt('Сколько фильмов вы уже посмотрели?', '');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

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

console.log(personalMovieDB);