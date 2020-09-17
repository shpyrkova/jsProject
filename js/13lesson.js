"use strict";

// Операторы условия 

if (4 == 9) {
    console.log("Ok!");
} else {
    console.log("Error!");
}

const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Много!");
} else {
    console.log("Ok!");
}

// Условный (тернарный) оператор - условие ? выражение1 : выражение2 
(num === 50) ? console.log("Ok!") : console.log("Error!");

const num2 = 50;

// switch всегда проверяет на строгое равенство (===). 
// если не писать break - будет выполнять каждый кейс, а не выходить, когда условие подойдет. 
switch (num2) {
    case 49:
        console.log("Nooo");
        break;
    case 50:
        console.log("Yessss");
        break;
    case 100:
        console.log("Nooo again");
        break;    
    default:
        console.log("Not this time ;(");
        break;              
}