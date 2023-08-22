function isString(n) {
    return typeof n === 'string'
}


// Проверка на строку
var str = "";
function isBlank(str) {
    if (typeof str !== 'string') {
        console.log("Не строка!")
        return;
    }
    return str.length === 0;
}

console.log(isBlank(str));

var string = 'Hello, World!';
string.substring(0, 5); // "Hello"
string.substring(7); // "World"


function truncate(str, number) {
    if (typeof number !== 'number') {
        console.log('это не число');
    }
    if (number === 0) {
        console.log("не должно быть равно 0")
    }
    return str.substring(0, number);
}
console.log(truncate("Привет", 3));

var string = 'Hello, World';

string.toLowerCase();// Вернет hello world
string.toUpperCase(); // Вернет HELLO WORLD


function capitalizeFirst(str) {

    var firstChar = str[0]; // выбрали первый символ

    var firstCharUpperCase = firstChar.toUpperCase(); // сделали первый символ большим

    var strRest = str.substring(1); // выбрали остальную часть слова без 1 символа

    var result = firstCharUpperCase + strRest;

    return result;

    return str[0].toUpperCase() + str.substring(1); //решение в одну строку
}

var string = 'Hello, World';

string.split(','); //еврнет ['Hello', 'World']

var str = 'привет как дела'
function strUpperCase(str) {

    var st = str.split(' '); // получили массив из слов строки 
    var result = "";
    for (var i = 0; i < st.length; i++) {
        var newSt = capitalizeFirst(st[i]);

        result = result + newSt + " ";
    }

    return result;

}
console.log(strUpperCase(str));

var strings = ['Hellow', 'World'];

strings.join(', '); // вернет 'Hello, World';


function reverseCase(str) {
    var result = ''; // создаем пустую строку

    // проходим по каждому символу строки
    for (var i = 0; i < str.length; i++) {

        // Проверяем что текущий символ равен этому же символу в вехрнем регистре
        if (str[i] === str[i].toUpperCase()) {
            // если равен значит он уже в верхнем регистре а значит переводим в нижний
            result = result + str[i].toLowerCase();
        } else {
            result = result + str[i].toUpperCase();
        }
    }

    return result;
}

console.log(reverseCase('Hello, World')) // hELLO, wORLD!


function repeat(str) {
    return str.repeat(3)
}

console.log(repeat(3));

var count = 5;
function repeat(str, count) {
    var result = '';
    for (var i = 0; i < count; i++) {
        result += str;
    }
    return result;
}

console.log(repeat('HA', 3));


function insert(str1, str2, index) {
    var str1Before = str1.substring(0, index); // получили первую строку, до индекса
    var str1After = str1.substring(index); // получили первую строку после индекса
    return str1Before + str2 + str1After; // сложили первую часть, вторую строку и вторую часть
}

console.log(insert("Hellow Great", "World", 7))


var string = "string";
function chop(str, n) {
    var arrayLength = str.length / n;

    var result = [];

    for (var i = 0; i < arrayLength; i++) {
        var substr = str.substr(i * n, n);
        result.push(substr);
    }

    return result;
}

console.log(chop(string, 2))

function findStrn(str, strN) {
    var result = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === strN) {
            result++
        }
    }
    return result;
}
console.log(findStrn("Прривет", "р"))


function countEveryChar(str) {
    // создаем пустой мап!
    var resultMap = new Map();
    // в цикле проходимся по всем символам строки 
    for (var i = 0; i < str.length; i++) {
        // проверяем есть ли текущий символ в mape
        if (!resultMap.has(str[i])) {
            // если нет, добавляем его со значением 1
            resultMap.set(str[i], 1);
        } else {
            // если уже есть 
            var count = resultMap.get(str[i]); // получаем сколько раз он УЖЕ встретился
            count++; // увеличиваем это значение на 1
            resultMap.set(str[i], count); // Записываем в мап новое значение
        }
    }
    return resultMap;
}
console.log(countEveryChar('Привет как дела', 'Дела как'))

// Задание номер 1
var str1 = "Привет как дела, как жизнь?"
var str2 = "как"


function search(str1, str2) {
    var count = 0;

    for (var i = 0; i < str1.length; i++) {
        var tempStr = str1.substr(i, str2.length);

        if (tempStr === str2) {
            count++;
        }
    }

    return count;
}

console.log(search(str1, str2))


// var strSplit = "    Привет как дела что делаешь?       "

// function strip(str) {

// }

// console.log(strSplit.split(' ').join(' '));



var str = '   Привет как дела что делаешь?   ';
str = str.replace(/ +/g, ' ').trim();
console.log(str);

var str1 = "  Привет как дела что делаешь? "
var result = str1.trim()
console.log(result)

var str5 = '  Привет как дела что делаешь? ';
str5 = str5.substring(2, 30);
var length_of_str5 = str5.length
console.log(str5, length_of_str5);


var strStrip = "  Привет как дела что делаешь? ";

function strip(str) {
    var result = str;
    for (var i = 0; i < str.length; i++) {
        str[i] === " ";
        result = str.substring(++i);
    }
    return result;
}

console.log(strip(strStrip));


// Задание номер 3

var strСheckIfEndsOne = "Привет как дела?"
var strСheckIfEndsTwo = "ла?"

function checkIfEnds(str1, str2) {
    return strOne.substring(str1.length - str2.length) === str2;
}
console.log(checkIfEnds(strСheckIfEndsOne, strСheckIfEndsTwo));


// Задание номер 4

var strCompareOne = "привет как дела?"

var strCompareTwo = "ПРИВЕТ КАК ДЕЛА?"

function compare(str) {
    return strCompareOne.toLocaleLowerCase === strCompareTwo.toLocaleLowerCase;
}

console.log(compare(strCompareOne, strCompareTwo));
