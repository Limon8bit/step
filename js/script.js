'use strict'

// Таймер вызова функции проверки состояний полей ввода.
setInterval(disableButton, 500);
// Активация кнопки отправки.
function disableButton() {
    // Получение данных от пользователя. Done
    const userWeightCheck = document.getElementById("weight").value; 
    const userHeightCheck = document.getElementById("height").value; 
    const userAgeCheck = document.getElementById("age").value;
    if ((userWeightCheck != "") && (userAgeCheck != "") && (userHeightCheck != "")) {
        document.getElementById("submitButton").disabled = false;
    }
    // Получение данных от пользователя. Done
    if ((userWeightCheck != "") || (userAgeCheck != "") || (userHeightCheck != "")) {
        document.getElementById("resetButton").disabled = false;
    }
}

// Функция рассчёта и вывода результата.
function pushResult () {
    // Определение коэфф. активности.
    const activityСoefficient = () => {
        const minimalActivity = document.getElementById("activity-minimal");
        const lowActivity = document.getElementById("activity-low");
        const mediumActivity = document.getElementById("activity-medium");
        const highActivity = document.getElementById("activity-high");
        if (minimalActivity.checked === true) {
            return 1.2;
        } else if (lowActivity.checked === true) {
            return 1.375;
        } else if (mediumActivity.checked === true) {
            return 1.55; 
        } else if (highActivity.checked === true) {
            return 1.725;
        } else {
            return 1.9;
        }
    }
    // Определение актуальных данных пользователя.
    const userWeight = document.getElementById("weight").value; 
    const userHeight = document.getElementById("height").value; 
    const userAge = document.getElementById("age").value;
    const userGender = () => {
        const male = document.getElementById("gender-male");
        if (male.checked === true) {
            return "male";
        } else {
            return "female";
        }
    }
    // Рассчётно-условный блок.
    if (userGender() === "male") {
        const caloriesCalculatorForMen = function() {
            return Math.round(((10 * Number(userWeight)) + (6.25 * Number(userHeight)) + (5 * Number(userAge)) + 5) * activityСoefficient());
        }
        document.getElementById("calories-norm").textContent = Math.round(caloriesCalculatorForMen()); //Норма калорий
        document.getElementById("calories-minimal").textContent = Math.round(caloriesCalculatorForMen() * 0.85); // Минимум калорий (уменьшение веса)
        document.getElementById("calories-maximal").textContent = Math.round(caloriesCalculatorForMen() * 1.15); // Максимум калорий (увеличение веса)
    } else {
        const caloriesCalculatorForWomen = () => {
            return Math.round(((10 * Number(userWeight)) +(6.25 * Number(userHeight)) - (5 * Number(userAge)) - 161) * activityСoefficient());
        }
        document.getElementById("calories-norm").textContent = Math.round(caloriesCalculatorForWomen()); //Норма калорий
        document.getElementById("calories-minimal").textContent = Math.round(caloriesCalculatorForWomen() * 0.85); // Минимум калорий (уменьшение веса)
        document.getElementById("calories-maximal").textContent = Math.round(caloriesCalculatorForWomen() * 1.15); // Максимум калорий (увеличение веса)
    }
}

// Блок функций событий.
let submitButton = document.getElementById("submitButton");
let resetButton = document.getElementById("resetButton");
const resultPanel = document.getElementById("counterResult");

// Включени отображения результата.
function showResult() {
    resultPanel.style.opacity = "1";
    resultPanel.style.visibility = "visible";
}

// Функция событие отображения результата и рассчёта.
submitButton.onclick = function(event) {
    event.preventDefault();
    pushResult();
    showResult();
    document.getElementById("calories-norm").value = "5";
}
//Функция события обнуления полей.
resetButton.onclick = function(event) {
    event.preventDefault();
    resultPanel.style.opacity = "0";
    resultPanel.style.visibility = "hidden";
    document.getElementById("weight").value = "";
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";
    document.getElementById("gender-male").checked = true;
    document.getElementById("activity-minimal").checked = true;
}