
// callback - выполнение кода только после завершения выполнения другого кода 
// https://learn.javascript.ru/callbacks 

"use strict";

function first() {
    // Do something
    setTimeout(function() {
        console.log("Таймаут прошел");
    }, 500);
}

function second() {
    console.log(2);
}

// Несмотря на то, что функция 2 вызывается после функции 1, из-за задержки в 1 вторая выполнится быстрее.
first();
second();

// в качестве второго аргумента передаем функцию 
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback(); // вызываем функцию-аргумент 
}

// передается "анонимная" функция в аргументе
learnJS('JavaScript', function() {
    console.log("Я прошел этот урок!");
}); 

function done() {
    console.log("Я прошел этот урок!");
}

// можно передать уже объявленную функцию. круглые скобки не нужны. но обычно вызывается анонимная 
learnJS('JavaScript', done); 