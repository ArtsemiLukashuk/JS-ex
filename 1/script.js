// =================Переменные=================

// объявлением переменную и сразу инициализируем
var name = "QWERTY";
var x = 42;
// переиницилизируем
name = "ASDFG"
// выводим переменную на экран
console.log(name, x);


// =================Типы данных=================

// undefined
var emptyVariable;
console.log(emptyVariable);

//string 
var greetings = "Hello, World"
console.log(greetings);

var i = 3;
var j = 8;
i = i * 2;
k = j % i;
console.log("Итоговый результат =", k);

var x = 5;
var y = x % 2;
var z = (y === 0) ? "Число четное" : "Число нечетное";
console.log(z);


function true_or_false(number) {
    return number % 2 === 0 ? "true" : "false"
}
console.log(true_or_false(3));
console.log(true_or_false(2));


var x = false;

if (typeof x === "boolean") {
    console.log("Переменная типа boolean");
}
else if (typeof x === "number") {
    console.log("Переменная типа number")
}
else if (typeof x === "string") {
    console.log("Переменная типа string")
}
else if (typeof x === "undefiend") {
    console.log("Переменная типа undefiend")
}


var a = "qwerty";

switch (a) {
    case "qwerty":
        console.log("qwerty");
        break;
    case "asdfgh":
        console.log("asdfgh");
        break;
    case "zxcvbn":
        console.log("zxcvbn");
        break;
    default:
        console.loge("default");
}

var a = "saturn";
switch (a) {
    case "earth":
        console.log("У меня 1 спутник");
        break
    case "mars":
        console.log("У меня 2 спутник");
        break
    case "jovian":
        console.log("У меня 79 спутник");
        break
    case "saturn":
        console.log("У меня 82 спутник");
        break
    case "uranus":
        console.log("У меня 27 спутник");
        break
    case "neptune":
        console.log("У меня 14 спутник");
        break
    default:
        console.loge("Я не планета");
};



function myName() {
    console.log("Aliaksei");
}
myName();

function add(a, b) {
    if (typeof a !== "number") {
        console.log("a должно быть числом");
        return
    }
    if (typeof b !== "number") {
        console.error("b должно быть числом")
        return
    }
    return a + b;
}

var result = add(2, "3");

console.log(result);





