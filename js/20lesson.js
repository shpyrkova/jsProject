"use strict";

// JS - объектно-ориентированный язык, все сущности сводятся к объектам 
// также "прототипно-ориентированный"
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

// когда ставятся круглые скобки, это значит, что что-то запускается (функция или метод)
options.makeTest();

// Деструктуризация объекта. указываем, какие свойства в какие переменные должны «идти».
const {border, bg} = options.colors; // создали переменные border, bg 
console.log(border);

// console.log(options.name); 
// delete options.name; // delete - оператор удаления 
// console.log(options);

// для объектов нет метода "length", чтобы вывести количество свойств внутри. 
let counter = 0; // поэтому через каунтер 
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    }
    else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`); 
        counter++;
    }
}
console.log(counter);

// другой вариант посчитать количество свойств объекта - создать массив с ключами объекта и запросить его длину
console.log(Object.keys(options).length);   

console.log(options["colors"]["border"]); // значение свойства вложенного в объект объекта. но лучше так не делать