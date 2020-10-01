"use strict";

// Динамическая типизация

// To String
// 1) оператор String. пользуются редко
console.log(typeof(String(null)));

// 2) конкатенация (сложение строк с чем-то)
console.log((typeof(5 + "")));
const num = 5;
console.log("https://vk.com/catalog/" + num);

// To Number
// 1) оператор Number. пользуются очень редко
console.log(typeof(Number("4")));

// 2) унарный плюс
console.log(typeof((+"4")));

// 3) не особо часто пользуются 
console.log(typeof((parseInt("15px", 10))));

// To Boolean 
// 0, null, undefined, '', NaN - эти все значения всегда false 
// все остальное, что есть в JS - это true. пустые массивы, объекты, строки, числа и т.д... всё - true 

// 1) 
let switcher = null; // пример того, что null - это false 
if (switcher) {
    console.log("Working...");
}
switcher = 1; // уже что-то есть, то есть true
if (switcher) {
    console.log("Working...");
}

// 2) 
console.log(typeof(Boolean("4")));

// 3) оч редко используется 
console.log(typeof(!!"4"));