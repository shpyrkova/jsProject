const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; ")); // взяли массив и соединили его элементы через ; в строку 

// sort() сортирует массив всегда как строку. [1, 8, 16, 23] будет отсортирован как [1, 16, 23, 8]
// чтобы отсортировать по возрастанию чисел, надо передать в sort() callback-функцию
products.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}