console.log('Credo1');

/**
 * Для создания игры "Стрельба из лука" требуется создать следующие функции
 * shoot() - имеет три аргумента: arrow - оружие,  получает функцию headshot - попал, и получает функцию fail - промазал.
 * win() - вызывается тогда когда срабатывает функция headshot
 * loose() - вызывается тогда когда срабатывает функция fail
 * buyBeer() - вызывается тогда когда срабатывает функция win
 * giveMoney() - вызывается тогда когда срабатывает функция win
 */


function shoot (arrow, headshot, fail) {
    console.log('Вы сделали выстрел...');

    setTimeout(() => {
        Math.random() > .5 ? headshot({}) : fail('Вы промахнулись');
    }, 3000);
};

shoot({}, 
        function (mark) {
            console.log('Вы попали в цель!');
            win(mark, buyBeer, giveMoney);
        },
        function (miss) {
            console.error(miss);
            loose();
        }  
    );

function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyBeer() : giveMoney(); 
}

function loose() {
    console.log('Вы проиграли!');
}


let drink = 0;

function buyBeer() {
    console.log('Вам купили пиво!');
}

function giveMoney() {
    console.log("Вам заплатили.");
}