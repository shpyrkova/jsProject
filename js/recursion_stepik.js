// Дано натуральное число n. 
// Напишите рекурсивную функцию, которая возвращает строку чисел от 1 до n, разделенных пробелом.

function myFunction(n) {
    if (n>1) {
        return myFunction(n-1) + " " + n;
    }
    else {
        return n;
    }
    // или: 
    //return (n > 1 ? my_function(n-1)+" " : "") + n;
}

console.log(myFunction(5));


// (myFunction(4) + " " + 5)
// (myFunction(3) + " " + 4) + " " + 5
// (myFunction(2) + " " + 3) + " " + 4) + " " + 5
// (myFunction(1) + " " + 2) + " " + 3) + " " + 4) + " " + 5
// (1 + " " + 2) + " " + 3) + " " + 4) + " " + 5
// (1 2) + " " + 3) + " " + 4) + " " + 5
// (1 2 3) + " " + 4) + " " + 5
// (1 2 3 4) + " " + 5
// 1 2 3 4 5

function sum(num){
    if (num === 0) {
        return 0;
    } else {
        return num + sum(--num)
    }
}
 
console.log(sum(4));     //10

sum(4)
 4 + sum(3)
 4 + ( 3 + sum(2) )
 4 + ( 3 + ( 2 + sum(1) ))
 4 + ( 3 + ( 2 + ( 1 + sum(0) )))
 4 + ( 3 + ( 2 + ( 1 + 0 ) ))
 4 + ( 3 + ( 2 + 1 ) )
 4 + ( 3 +  3 ) 
 4 + 6 
 10


 function my_function(n) {
    // Тут нужно написать решение
    if (n == 1) return "1";
    var x = " ";
    x += my_function(n - 1) + " "+ n;
    return x.trim();
}

console.log(my_function(3));
