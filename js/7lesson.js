    "use strict";

    const result = confirm("Are you here?");
    console.log(result);

    const answer = prompt("Вам есть 18 лет?", "ДА");
    console.log(answer);
    console.log(typeof(answer));
    
// от юзера с UI всегда приходит строка, поэтому здесь прибавит к концу строки 5 (answer5)
    console.log(answer + 5); 

const answers = [];
answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

document.write(answers); // выводит текст на страницу, но команда устаревшая.

// убеждаемся, что массив - это объект 
console.log(typeof(answers));

// также выводит "object". но на самом деле это признанная бага, т.к. null - это тип данных, а не объект
console.log(typeof(null));