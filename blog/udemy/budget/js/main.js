'use strict';

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;

// Кнопка, "Начать расчет" - Запуск всей программы
startBtn.addEventListener('click', function () {
    // time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    // money = +prompt ("Ваш бюджет на месяц?", "");

    let time = '2019-04-24',
        money = 56012;

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

// Кнопка, "Утвердить" - Введите обязательные расходы
expensesBtn.addEventListener('click', function () {
    // Проверка что нажата кнопка "Начать расчет", иначе запретить нажимать эту кнопку
        if(budgetValue.textContent == '') {
            budgetValue.textContent = 'Обновите страницу и нажмите кнопку "Начать расчет"';
            expensesBtn.disabled = true; 
        } else {
            let sum = 0;

        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
                console.log("Всё верно");
                appData.expenses[a] = b;
                sum += +b;
            } else {
                console.log("Не верный результат");
                i--;
            }
        }
        expensesValue.textContent = sum;
        console.log(sum);
        }
});
// Кнопка, "Утвердить" - Введите необязательные расходы
optionalExpensesBtn.addEventListener('click', function () {
    // Проверка что нажата кнопка "Начать расчет", иначе запретить нажимать эту кнопку
    if(budgetValue.textContent == '') {
        budgetValue.textContent = 'Обновите страницу и нажмите кнопку "Начать расчет"';
        optionalExpensesBtn.disabled = true; 
    } else {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
}
});

// Кнопка, "Расчитать" - Расчет дневного бюджета
countBtn.addEventListener('click', function () {
    // Проверка что нажата кнопка "Начать расчет", иначе запретить нажимать эту кнопку
    if(budgetValue.textContent == '') {
        budgetValue.textContent = 'Обновите страницу и нажмите кнопку "Начать расчет"';
        countBtn.disabled = true; 
    } else {
    if (appData.budget != undefined) {
        /**
        * Реализовать функционал: при расчете дневного бюджета учитывать сумму обязательных трат 
        * (т. e. от бюджета на месяц отнимаем общую сумму всех обяз. трат и ее делим на 30 дней)
        */
        // Из суммы обязательных трат выбрать значение, преобразовать его в число.
        appData.moneyPerDay = ((appData.budget - +expensesValue.innerText) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Это минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Это средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Это высокий уровень достатка!";
        } else {
            levelValue.textContent = "Ошибочка...!";
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
}
});

// Поле ввода,  Введите статьи возможного дохода через запятую
incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;

});

// Флаг, Есть ли накопления
checkSavings.addEventListener('click', function () {
    // Проверка что нажата кнопка "Начать расчет", иначе запретить нажимать эту кнопку
    if(budgetValue.textContent == '') {
        budgetValue.textContent = 'Обновите страницу и нажмите кнопку "Начать расчет"';
        optionalExpensesBtn.disabled = true; 
    } else {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
}
});

// Поле ввода, "Сумма"
sumValue.addEventListener('input', function () {

    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
}
});

// Поле ввода, "Процент"
percentValue.addEventListener('input', function () {

    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
}
});

// Объект в котором хранятся все данные и состояния
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

