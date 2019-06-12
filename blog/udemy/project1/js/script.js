console.log('Credo');
'use strict';
/* 
    Расчет расходов на один день
*/

let money, time; // Объявление глобальных переменных для получение от пользователя бюджета и даты

// Функция start() запрашивает у пользователя значения бюджета и даты до тех пор пока пользователь не введет бюджет
function start() {
    money = +prompt("Ваш бюджет на месяц", '');
    time = prompt('Введите дату в формате, YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", '');
    }
}

start();

/* Объект appData предназначен для хранения данных о следующих параметрах:
 */
let appData = {
    budget: money, // бюджет
    expenses: {}, // расходы
    optionalExpenses: {}, // дополнительные расходы
    income: [], // доход
    timeData: time, // дата, введенная пользователем
    saving: true, // сбережения
    /* Методы */
    // Функция chooseExpenses() запрашивает у пользователя наименование статьи расходов, а также количество денег
    // которые планируется потратить на данную статью.
    // Если пользователь дважды ввёл не верные данные на вопросы, то программа игнорирует ввод и выполняется далее.
    chooseExpenses: function () {
        for (var i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце ", ''),
                b = prompt("Во сколько обойдётся? ", '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },

    // Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    // Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    // Накопления с депозита если он есть
    checkSaving: function () {
        if (appData.saving == true) {
            let save = prompt('Какова сумма накоплений? '),
                percent = prompt('Под какой процент? ');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome.toFixed(2));
        }
    },
    /*
3) Создать функцию для определения необязательных расходов (chooseOptExpenses):
Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
Записать ответы в объект optionalExpenses в формате Номер - Ответ.
optionalExpenses: {
1 : “ответ на вопрос”
}*/
    chooseOptExpenses: function () {
        for (var i = 0; i < 3; i++) {
            answer = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = answer;
            console.log(appData.optionalExpenses);
        }
    },
    // Что принесёт дополнительный доход
    chooseIncome: function() {
        /*
        1) Написать проверку, что пользователь может:
·        Ввести в дополнительных доходах (chooseIncome) только строку
·        Не может оставить строку пустой
·        Не может отменить вопрос
        */

        /*
         * 2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " 
        и полученные способы (внутри chooseIncome)
        Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.
         */
        let items = +prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        // console.log(typeof(items));
        while(items == '' || items == null || typeof(items) != 'string') {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
       }
        
        
        /* функция split используется для преобразования строки в массив,
        определение границ объектов осуществляется на основании разделителя ', ' */
        appData.income = items.split(', ');
        /* функция push добавляет элемент в конец массива */
        appData.income.push(prompt('Может что-то ещё?'));
        // Функция сортировки
        appData.income.sort();
    }
};