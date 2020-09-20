// Методы и свойства у строк и чисел.
// Методы - вспомоогательные функции. Свойства - вспомогательные значения. 

"use strict";

const str = 'test';
const arr = [1, 2, 3, 4];

console.log(str.length); // length - это свойство строки. у строки вообще всего одно это свойство. 
console.log(str.toUpperCase()); // toUpperCase - метод строки. в методах всегда указывается ().  

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // "ПОИСК ПОДСТРОКИ". возвращает 5 - номер символа, с которого начинается искомый кусок строки. 
// если значения нет в строке, то всегда возвращается -1.  
console.log(fruit.indexOf("qq"));  // часто используется, чтобы выяснить есть ли искомое значение в строке. 

const logg = "Hello world";
console.log(logg.slice(6, 11)); // возвращает отрезанную строку с 6 по 11 символ - 'world'
console.log(logg.slice(6, 10)); // возвращает строку 'worl', потому что второй аргумент не включается.
console.log(logg.slice(6)); // отрезает с 6 символа и до конца. 
console.log(logg.substring(8, 1)); // отрезать с 7 символа до конца и 2 с начала. 
console.log(logg.substr(6, 5)); // вырезать 5 символов, начиная с 6 символа.

const num = 12.2;
console.log(Math.round(num));

 const test = '12.2px';
 console.log(parseInt(test));
 console.log(parseFloat(test));
 
 
 
 

