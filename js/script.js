// Задача 1 (Done)

// Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

// Взял определение до десятой степени, можно и больше взять, поменяв в цикле for условие.

// const isPowerOfThree = number => {
//     let degree = 1;
//     for (degree; degree <= 10; degree ++) {
//         if (number === (3 ** degree)) {
//             return (true + " (3^" + degree +")");
//         }
//     }
//     return false;
// }
// console.log(isPowerOfThree(27));



// Задача 2 (Done)

// "Счастливым" называют билет с номером, в котором сумма первой половины цифр равна сумме второй половины цифр. Номера могут быть произвольной длины, с единственным условием, что количество цифр всегда чётно, например: 33 или 2341 и так далее.

// Билет с номером 385916 — счастливый, так как 3 + 8 + 5 = 9 + 1 + 6. Билет с номером 231002 не является счастливым, так как 2 + 3 + 1 != 0 + 0 + 2.

// Реализуйте функцию, проверяющую является ли номер счастливым (номер — всегда строка). Функция должна возвращать true, если билет счастливый, или false, если нет.

// Столкнулся со странным багом: Если число начинается  снуля, то длина строки от числа считается неверно.

// const isLucky = ticketNumber => {
//     const stringOfNumber = String(ticketNumber);
//     const centerOfTicketNumber = (stringOfNumber.length / 2);
//     let leftIteration = 0;
//     let leftResult = 0;
//     let rightIteration = centerOfTicketNumber;
//     let rightResult = 0;
//     for (;leftIteration < centerOfTicketNumber; leftIteration++) {
//         leftResult += Number(stringOfNumber[leftIteration]);
//     }
//     for (; rightIteration < stringOfNumber.length; rightIteration++) {
//         rightResult += Number(stringOfNumber[rightIteration]);
//     }
//     if (leftResult == rightResult) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isLucky(352721));

// Задача 3 (Done)

// Создайте функцию isPerfect(), которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.

// Совершенное число — положительное целое число, равное сумме его положительных делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.

// const isPerfect = number => {
//     divisor = 1;
//     result = 0;
//     for (; divisor < number; divisor++) {
//         if (number % divisor === 0) {
//             result += divisor;
//         }
//     }
//     if (result === number) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isPerfect(496));

// Задача 4

// Функция Аккермана — простой пример вычислимой функции, которая не является примитивно рекурсивной.

// Она обозначается A(m,n), принимает два неотрицательных целых числа в качестве параметров и возвращает натуральное число. Эта функция растёт очень быстро, например, число A(4,4) настолько велико, что количество цифр в порядке этого числа многократно превосходит количество атомов в наблюдаемой части Вселенной.

// const ackermannFunction = (m, n) => {
//     for (;;) {
//         if (m === 0) {
//             return n + 1;
//         } else if ((m > 0) && n === 0) {
//             return ackermannFunction(m-1, 1);
//         } if ((m > 0) && (n > 0)) {
//             return ackermannFunction(m - 1, ackermannFunction(m, n - 1));
//         }
//     }
// }
// console.log(ackermannFunction(3,1));