// Task 1: Recursion

const sumOfNumbers = (begin, end) => {
    if (begin == end) {
        return end;
    } else if (begin > end) {
        console.log("Задана неверная строка.");
    } else {
        return (begin + sumOfNumbers(begin + 1, end));
    }
}
console.log(sumOfNumbers(2, 6));

// Task 2: Errors

// Type Error:
// const a = 1;
// const b = a(3);

// Reference error:
// const some = a;
// const b = a(5);
// console.log(b);

// Syntax error:
// const a = 5);

// Logic error:
// const a = 2 + 2 * 2; // = 6; Подразумевалось (2 + 2) * 2 = 8, но была допущена потеря скобок.
// console.log(a);