"use strict";

console.log(4 + +"5"); // унарный плюс - превращает строку в число. то есть, выведет 9. 

// если подряд объявляешь несколько переменных, можно не писать let каждый раз, а через запятую. 
let incr = 10,
    decr = 10;

    incr++; //оператор инкремент - прибавление единицы. постфиксная форма записи 
    decr--; //оператор декремент - вычитание единицы

  // префиксная форма записи
    ++incr; 
    --decr; 

// при использовании постфиксной формы прямо при действии - сначала выполнится действие, а потом прибавление.
// вернется 10 (начальное значение)
// поэтому в таком случае нужно использовать префиксную. 
    console.log(incr++);
    console.log(decr++);
    
    console.log(5%2); // вернется остаток от деления. (вроде деление по модулю?)

    console.log(2*4 == 8); // оператор сравнения 
    console.log(2*4 == '8'); // вернется true, потому что этот оператор сравнивает ТОЛЬКО значения, без типа данных
    
    console.log(2*4 === '8'); // оператор строгого равенства, сравнивает тип данных тоже 
    
    const isChecked = true,
          isClose = true;

    console.log(isChecked && isClose); // логический оператор "И"   
    console.log(isChecked || isClose); // логический оператор "ИЛИ"   
    console.log(isChecked || !isClose); // оператор отрицания

    // приоритеты операторов 
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table 
    console.log(2 + 2 * 2 === 8);

    // отрицаем то, что строгое сравнение по типу данных 6 и "6" равны. (инвертируем ответ)
    // в ответе будет true, потому что при строгом сравнении через "===" было бы false 
    console.log(6 !== '6');

    // отрицаем то, что нестрогое сравнение 6 и "6" равны. (инвертируем ответ)
    // в ответе будет false, потому что при НЕстрогом сравнении через "==" было бы true 
    console.log(6 != '6');