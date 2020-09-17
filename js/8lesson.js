"use strict";

const category = "toys";

console.log("https://someurl.com/" + category); // это конкатенация строк 
console.log(`https://someurl.com/${category}/5`); // интерполяция, работает только с `` (backtick/бэктик/обратные кавычки) 

const user = "Ivan";
alert(`Hello, ${user}!`);