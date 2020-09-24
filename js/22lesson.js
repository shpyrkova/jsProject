"use strict";

// передача по значению 
let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);
// при работе с примитивными типами данных (числа, строки) присваивается значение (b = a)

const obj = {
    a: 5,
    b: 1
};

// а это передача по ссылке 
const copy = obj; // здесь мы передаем ССЫЛКУ, а не сам объект. кладется ссылка на уже существующий объект
copy.a = 10; // так работает со сложными типами данных (массивами, объектами)

// вернутся одинаковые значения, хоть и изменяли мы копию, а не оригинальный объект 
console.log(copy);
console.log(obj);

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
 
// функция, которая создаст все-таки копию объекта, а не ссылку на объект.
// но здесь создается "поверхностная" копия объекта. 
// вложенные в объект объекты все еще будут ссылкой (например вложенный c: {x: 7, y:4}) 
function copy2(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

// const newNumbers = copy2(numbers);
// newNumbers["a"] = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add)); // присоединили объекты друг к другу 

// создаем поверхностную копию через метод assign 
const clone = Object.assign({}, add);
clone.d = 20; // в изначальном объекте свойство не изменится
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // создает поверхностную копию массива 

newArray[1] = 'dfdf';
console.log(newArray);
console.log(oldArray);

// Spread-оператор (оператор разворота) - многоточие "..."
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; 

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num); // Spread переводит массив из трех цифр в три аргумента для функции 

const array = ["a", "b"];
const newArray2 = [...array]; // Spread создает поверхностную копию 

const q = {
    one: 1,
    two: 2
};

const newObj = {...q}; // Spread-оператор для объекта, появился в ES9 