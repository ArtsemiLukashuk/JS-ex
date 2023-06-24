// var colors = ["red", "blue", "green"];
//  function findIndex(array, value) {
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] === value) {
//            return i;
//         }
//     }
//     return -1;
// }

var arr = [2, 5, 9, 1];

function getFirstNElement(array, n) {

    if (!Array.isArray(array)) {
        console.error("Нужно передать массив.")
        return;
    }

    if (typeof n !== 'number') {
        console.error("N должно быть числом")
        return;
    }

    if (n > array.length) {
        console.erroe("N должно быть меньше либо равно количесву элементов массива")
        return;
    }

    var result = [];

    for (var i = 0; i < n; i++) {
        result.push(array[i]);
    }

    return result;
}

console.log(getFirstNElement(arr, 2)); // вернет [2,5]

console.log(arr);





function filter(array, value) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            result.push(array[i]);
        }
    }
}

// Сортировка пузырьком
var array = [2, 5, 9, 1];

function sort(array) {
    var min;

    for (var i = 0; i < array.length; i++) {
        min = i;

        for (var j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }

        if (min != i) {
            var temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    return;
}

sort(array);
console.log(array);



var products = {
    apple: 30,
    banana: 20,
    melon: 50,
};
for (var key in products) {
    console.log(key);
}
function calculateSum(productsObj) {
    var sum = 0;
    for (var key in productsObj) {
        if (typeof productsObj[key] === "number") {
            sum += productsObj[key];
        }
    }
    return sum;
}
console.log(calculateSum(products));




var product = {
    apple: 30,
    banana: 20,
    melon: 50,
};

for (var key in product) {
    console.log(key);
}

function findMax(productObj) {
    var max;
    for (var key in productObj) {
        if (max === undefined)
            max = key;
        if (productObj[key] > productObj[max])
            max = key;
    }

    return max;
}

console.log(findMax(product));

var product = {
    apple: 30,
    banana: 20,
    melon: 50,
};

function addProduct(product, name, price) {
    product[name] = price;
}

addProduct(product, 'orange', 15);
console.log(product);


function findName(productObj, productName) {
    for (var key in productObj) {
        if (key === productName) {
            return true;
        }

        return false;
    }
}

product.hasOwnProperty('banana'); // вернет true

var arr = [1, 2, 3, 1];

// set and map

var newSet = new Set(); // Создаем пустой Set

newSet.add(2);

console.log(newSet); // выведет 2 

newSet.add(8); // выведет 8 

console.log(newSet); // выведет 2 и 8 

newSet.add(2);

console.log(newSet); // выведет 2 и 8 еше одну 2 не выведет


var arrayWithDuplicates = [1, 3, 7, 2, 3, 7]; // создаем массив с дубликатами 

var set = new set(); // создаем пустой сет
// проходим по массиву и дабавляем в сет все значения
for (var i = 0; i < arrayWithDuplicates.length; i++) {
    set.add(arrayWithDuplicates[i]);
}

// сет из массива в одну строку
var set = new Set(arrayWithDuplicates);

var newArray = Array.from(set); // убираем из массива дубликат



var newArray = []; //создали новый пустой массив
// проходимся по всему сету и добавляем значения с сета в новый массив без дубликата
for (var value of set) {
    newArray.push(value);
}






// MAP!

// сет хранит значение

// мэп хранит ключ + значение


var map = new Map();

map.set('key', 'value'); // создаем мап ключ и его значение 



























