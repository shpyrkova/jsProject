/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const allAd = document.querySelector(".promo__adv"),
// genre = document.querySelector('.promo__genre'),
// back = document.querySelector('.promo__bg'),
// films = document.querySelector('.promo__interactive-list'),
// filmsList = films.querySelectorAll('li');

// allAd.remove();
// genre.textContent = 'ДРАМА';
// back.style.cssText = 'background:url("img/bg.jpg")';

// movieDB.movies.sort();
// filmsList.forEach(function(film, i) {
//     film.textContent = `${i+1}. ${movieDB.movies[i]}`;
// });

// console.log(filmsList);

// решение препода (закомментировать код выше)
const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(adItem => {
    adItem.remove();
});

genre.textContent = 'ДРАМА';
poster.style.backgroundImage = ('url("img/bg.jpg")');

movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((function(film, i) {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
    <div class="delete"></div>
</li>
    `;
}));