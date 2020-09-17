'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '0');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

let lastFilmFirst = prompt('Один из последних просмотренных фильмов?', ''),
    firstFilmRate = prompt('На сколько оцените его?', '0'),
    lastFilmSecond = prompt('Один из последних просмотренных фильмов?', ''),
    secondFilmRate = prompt('На сколько оцените его?', '0');

personalMovieDB.movies[lastFilmFirst] = firstFilmRate;
personalMovieDB.movies[lastFilmSecond] = secondFilmRate;

console.log(personalMovieDB);