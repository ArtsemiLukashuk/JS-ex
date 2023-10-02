// function y(x) {
//     return x * x;
// }



// var variable = 42;

// function y2(x) {
//     return x * x + variable;
// }


// function sayHello() {
//     console.log('Hello, World');
// }
// // Все фунции должны быть чистыми в функциональном програмировании

// // мемолизация процесс сохранения параметров

// // в функциональном програмировании нет циклов, 
// // поэтому используются рекурсию(когда функция вызывает сама себя)

// function recursion() {
//     recurssion();
// }


// function printNumbers(n) {
//     console.log(n);
//     if (n < 6) {
//         printNumbers(n + 1);
//     }
// }
// printNumbers(0);

// // Фактареал это 5 = 1+2+3+4+5


// function factorial(n) {
//     if (n < 0) {
//         return;
//     }
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1)
// }

// console.log(factorial(2));


// var number = 472; // = 13

// function sumOfDigits(n) {
//     if (n === 0) {
//         return 0;
//     }
//     return n % 10 + sumOfDigits(Math.floor(n / 10));

//     // что бы измежать безконечной рекурсии обязательно должно быть условие выхода! тоесть if
// }


// неизменяемость переменных 


// let letVar;
// const constVar; // const нельзя переинициализировать тоесть поменять 

// const constVar = 42;

// constvar = 56 //нельзя! 

// Object.freeze(obj); как только вызвали этот метод больше не может изменять обект!

// функции первого класса это абсолютно любая простая функция
// функции высшего порядка 

// function y(x) {
//     return x * x;
// }



// function HOF(func) {
//     return func(2);
// }

// HOF(y);

// function HOF2(n) {
//     return function (m) {
//         return n * m;
//     }
// }

// HOF(8)(2);

const array = [4, 8, 3, 5, 2]
function filterEvenNumber(item) {
    return item % 2 === 0;
}

const newArray = array.filter(filterEvenNumber);
console.log(newArray);
console.log(array);


const arrayN = [01, 02, 03, 04]
function filterNumber(item) {
    return item !== 0;
}
const newArrayN = arrayN.filter(filterNumber);
console.log(newArrayN);
console.log(arrayN);



const newArray2 = array.map(square);
function square(item) {
    return item * item;
}
console.log(newArray2);


const numbersStrings = ['2', '6', '9', '3'];
function stringsnumbers(item) {
    return parseInt(item, 10);
}
const newArray3 = array.map(stringsnumbers);
console.log(newArray3);


const numbers = [1, 4, 8];
function sum(result, currentIteam) {
    return result + currentIteam;
}
const sumOfNumbers = numbers.reduce(sum, 0);
console.log(sumOfNumbers);


const vector1 = [1, 5, 8];
const vector2 = [6, 8, 3];

// скалярное произведение векторов х1 * х2 + y1 * y2 + z1 * z2;

function dot(vec1, vec2) {
    function getSum(result, currentIteam, index) {
        return result + (currentIteam * vec2[index]);
    }
    return vec1.reduce(getSum, 0);
}


// Каррирование
function dot2(vec1) {
    return function (vec2) {
        function getSum(result, currentIteam, index) {
            return result + (currentIteam * vec2[index]);
        }
        return vec1.reduce(getSum, 0);
    }
}

const sum1 = dot2(vector1);

console.log(sum1(vector2));

const vector3 = [3, 6, 7];

console.log(sum1(vector3));
