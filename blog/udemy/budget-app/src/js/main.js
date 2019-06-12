console.log('Credo');
'use strict';

/**
 *  Получить кнопку "Начать расчет" через id
 */
// Кнопка "Начать расчет"
let el_start = document.getElementById('start');
console.log(el_start);
/**
 *  Получить все блоки в правой части программы через классы (которые имеют класс название-value, 
    начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
 */
// Получение дочерних элементов класса result-table
let divValue = document.getElementsByClassName('result-table')[0].children;  
for(let i = 0; i < divValue.length; i++) {
    /** 
     * Получение значения для типа атрибута class, для каждого элемента псевдомассива result-table
     * Присвоение полученного наименования класса в переменную 
     */ 
    let x = ( divValue[i].getAttribute('class'));
    // Проверка, если в наименовании класса есть слово value, то вывести данное значение в консоль.
    if (~x.indexOf('value')) {
        console.log(x);
    }
}
/**
 * Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
 */
let el_input = document.getElementsByClassName('expenses-item');
// console.log(el_input);
for (let i = 0; i < el_input.length; i++){
    console.log(el_input[i]);
}
/**
 * Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
 */
/*
let el_buttons = document.getElementsByTagName('button');
// console.log(el_buttons);
for (let i = 0; i < el_buttons.length; i++){
    
    // Получить значение кнопок “Утвердить” и “Рассчитать”
    if(el_buttons[i].innerText == "Утвердить") {
        var approve = el_buttons[i]
        console.log(approve);
    }
    
}
*/
let expensesBtn = document.getElementsByTagName('button')[0];
console.log(expensesBtn);
let optionalExpensesBtn = document.getElementsByTagName('button')[1];
console.log(optionalExpensesBtn);
let countBtn = document.getElementsByTagName('button')[2];
console.log(countBtn);
/**
 * Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
 */
let el_input_optexpens1 = document.querySelectorAll('.optionalexpenses-item')[0];
console.log(el_input_optexpens1);
let el_input_optexpens2 = document.querySelectorAll('.optionalexpenses-item')[1];
console.log(el_input_optexpens2);
let el_input_optexpens3 = document.querySelectorAll('.optionalexpenses-item')[2];
console.log(el_input_optexpens3);
/**
 *  Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, 
 *  сумма, процент, год, месяц, день)
 */
// статьи возможного дохода
let choose_income = document.querySelector('.choose-income');
console.log(choose_income);
// есть ли накопления (флаг)
let savings = document.querySelector('#savings');
console.log(savings);
// сумма
let sum = document.querySelector('#sum');
console.log(sum);
// процент
let percent = document.querySelector('#percent');
console.log(percent);
// год
let year = document.querySelector('.year-value');
console.log(year);
// месяц
let month = document.querySelector('.month-value');
console.log(month);
// день
let day = document.querySelector('.day-value');
console.log(day);
/**
 * Как можно изменить размер шрифта элемента при помощи JS?
 */
// let font = document.getElementsByClassName('choose-income-label');
// font[0].style.fontSize = '2em';