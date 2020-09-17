
console.log(something); // тип данных - null (переменная something не существует)

let empty; // не присваиваем значение переменной 
console.log(empty); // тип данных - undefined (empty существует, но значение не определено)

console.log("string" * 5); //NaN - Not a Number 

const obj = { // объект со свойствами 
    name: "John",
    age: 25,
    isMarried: false 
};

console.log(obj.isMarried); // через точку обращаемся к свойству объекта 
console.log(obj["isMarried"]); // аналогичное действие, но лучше писать через точку 

// - массив частный случай объекта, комплексный тип данных, может содержать разные типы данных в себе.
let arr = ["plum.png", "orange.jpg", "apple.bmp"]; 
console.log(arr[1]);

//bigInt - новый тип данных в JS (с 2018г.)
//чтобы отличить bigInt от Number нужно добавить суффикс n. 
console.log(typeof 123);
console.log(typeof 123n); 