"use strict";

// Прототипно-ориентированное программирование - это один из стилей ООП.

let str = 'some'; // создаем примитивный тип данных
let strObj = new String(str); // создаем объект 

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);
// созданный массив - экземпляр прототипа __proto__ Array (экземпляр массива)

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello!");
    }
};

// const john = {
//     health: 100 
// };

// john.__proto__ = soldier; // назначаем Джона экземпляром прототипа Солдат. (устаревший формат, не надо так писать)

// Object.setPrototypeOf(john, soldier); // современный формат назначения прототипа 

const john = Object.create(soldier); // лучший вариант создания экземпляра прототипа. объявляем и сразу создаем 

console.log(john.armor); // Джон получает базовые свойства солдата 
john.sayHello(); 
