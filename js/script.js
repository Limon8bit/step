'use strict'
// Задача 1

// Реализуйте функцию, которая находит максимальное значение в массиве. Агрегацией называются любые вычисления, которые, как правило, строятся на основе всего набора данных, например, поиск максимального, среднего, суммы и так далее. 

// const calculateMax = someArray => {
//     let maxOfTwo = null;
//     for (let i = 0; i < someArray.length; i++) {
//         if (maxOfTwo < someArray[i]) {
//             maxOfTwo = someArray[i];
//         }
//     }
//     return maxOfTwo;
// }
// const arrayNull = [];
// const anyArray = [3, 2,-10, 38, 0];
// console.log(calculateMax(arrayNull));
// console.log(calculateMax(anyArray));

// Задача 2

// Реализуйте функцию, которая находит сумму значений в массиве.

// const calculateSum = someArray => {
//     let sumOfElements = 0;
//     for (let element of someArray) {
//         sumOfElements += element;
//     }
//     return sumOfElements;
// }
// const arrayNull = [];
// const anyArray = [3, 2,-10, 38, 0];
// console.log(calculateSum(arrayNull));
// console.log(calculateSum(anyArray));

// Задача 3 (WIP)

// Реализуйте функцию, которая принимает на вход в виде массива кошелёк с деньгами и название валюты и возвращает сумму денег указанной валюты.
// Реализуйте данную функцию используя управляющие инструкции.
// Параметры функции:
// * Массив, содержащий купюры разных валют с различными номиналами
// * Наименование валюты

// const getTotalAmount  = function(wallet, currency) { //Функция сортировки по валютам
//     let result = 0;
//     for (let i = 0; i < wallet.length; i++) {
//         if ((currency[0] === wallet[i][0]) && (currency[1] === wallet[i][1]) && (currency[2] === wallet[i][2])) {
//             result += Number(wallet[i].substring(4));
//         }
//     }
//     console.log(result);
// }

// const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
// const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200'];
// const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200'];

// getTotalAmount(money1, "usd"); // 16
// getTotalAmount(money2, 'eur'); // 135
// getTotalAmount(money3, 'rub'); // 270

// Задача 4

// Реализуйте и экспортируйте функцию. Эта функция принимает на вход массив и выпрямляет его: если элементами массива являются массивы, то функция сводит всё к одному массиву, раскрывая один уровень вложенности. В js эта функция реализована как метод flat() у массивов. Его использовать нельзя.

// const flatMassive = array => {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (typeof(array[i]) === "number") {
//             result.push(array[i]);
//         } else if (typeof(array[i]) === "object") {
//             for (let counter = 0; counter < array[i].length; counter++) {
//                 result.push(array[i][counter]);
//             }
//         }
//     }
//     return result;
// }
// const flatten1 = []; // [] 
// const flatten2 = [1, [3, 2], 9]; // [1, 3, 2, 9] 
// const flatten3 = [1, [[2], [3]], [9]]; // [1, [2], [3], 9] 
// console.log(flatMassive(flatten1));
// console.log(flatMassive(flatten2));
// console.log(flatMassive(flatten3));