"use strict";

const box = document.getElementById('box'),
btns = document.getElementsByTagName('button'),
circles = document.getElementsByClassName('circle'),
wrapper = document.querySelector('.wrapper'),
hearts = wrapper.querySelectorAll('.heart'),
oneHeart = wrapper.querySelector('.heart');


console.dir(box); // выводит свойства и методы элемента (объекта)

// первый приоритет имеют инлайн-стили (которые прописаны в атрибутах элементов html)
// поэтому мы можем таким образом через js изменить стиль: 
box.style.backgroundColor = 'blue'; // обратились к свойству style и изменили background элемета 
box.style.width = '500px'; // все должно назначаться в том формате, в котором его понимает css (всегда строка)

// можно сразу несколько стилей прописать: 
box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';

// это работать не будет, т.к. обращаемся не к конкретному элементу, а к псевдомассиву (его свойства неизвестны)
// circles.style.backgroundColor = 'red';

// проставить стиль нескольким элементам можно в цикле, но так никто не делает: 
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'black';
} 

// вот так надо:
hearts.forEach(heart => {
    heart.style.backgroundColor = 'pink';
});

// создание элементов

const myDiv = document.createElement('div');
// const text = document.createTextNode('Тут был я'); - редко очень используют 

// назначаем стиль из css файла 
myDiv.classList.add('black');

// добавляем в тэг body последним элементом созданный myDiv
// document.body.append(myDiv);

// // добавляем в div с классом wrapper созданный myDiv
wrapper.append(myDiv); 
// wrapper.appendChild(myDiv);  - одно и то же 

// // добавить в начало родительского элемента
// wrapper.prepend(myDiv);

// добавить до или после элемента новый элемент 
// hearts[0].before(myDiv);
// hearts[0].after(myDiv);

// wrapper.insertBefore(myDiv, hearts[1]); - более старый вариант 

// удаление элемента из документа
// circles[0].remove();
// wrapper.removeChild(hearts[2]); - более старый вариант 

// заменить один элемент другим
// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); - более старый вариант 

// можно добавить внутрь элемента ещё HTML
myDiv.innerHTML = "<h2>Hello, World!</h2>";

// можно добавить текст textContent. (заменит верхний HTML)
// если использовать метод innerHTML и получать в него данные от юзера, то он может передать HTML и сломать страницу.
// myDiv.textContent = "Hi";

// вставить HTML в 4 разных варианта позиции относительно элемента myDiv.
// первый аргумент - один из четырех вариантов позиции
myDiv.insertAdjacentHTML("afterend", "<h2>Приветики</h2>");