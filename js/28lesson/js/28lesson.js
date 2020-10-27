"use strict";

// более старые методы, но устоявшиеся

const box = document.getElementById('box');
console.log(box);

// получаем псевдомассив элементов кнопок на странице (HTMLCollection)
// даже если кнопка всего одна, вернется псевдомассив из одной
const btns = document.getElementsByTagName('button');
console.log(btns);  
console.log(btns[1]); // можно получить конкретную по индексу аналогично массиву

const circles = document.getElementsByClassName('circle');
console.log(circles);

// более современные методы 
// по разным селекторам  (тэги, id, классы, атрибуты)

// возвращается более крутой псевдомассив - NodeList. у него есть метод forEach, в отличие от HTMLCollection
// Nodelist всех элементов с данным селектором 
const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);  

const firstDiv = document.querySelector('div');
console.log(firstDiv);  