'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
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
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 1; i++) {
        let genres = prompt(`Введите ваши любимые жанры через запятую с пробелом`).toLowerCase();
            if (genres == null || genres == "") {
                console.log("Вы ввели неправильно или не ввели вовсе!");
                i--;
            }
            else {
                personalMovieDB.genres = genres.split(", ");
                personalMovieDB.genres.sort();
            }
        } 
        personalMovieDB.genres.forEach((genre, i) => {
            console.log(`Любимый жанр ${i+1} - это ${genre}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) { // в if даже не указываем "== true", условие и так выполнится, если будет true
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};

// теперь можно обращаться к методам объекта прямо из консоли браузера: 
// консоль будет на каждый метод возвращать undefined - это норм, 
// это особенность консоли, если метод ничего не возвращает (нет слова return),а только делает какие-то действия внутри 
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();

