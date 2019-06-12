console.log('Credo1');

/**
 * Для создания игры "Стрельба из лука" требуется создать следующие функции
 * shoot() - имеет три аргумента: arrow - оружие,  получает функцию headshot - попал, и получает функцию fail - промазал.
 * win() - вызывается тогда когда срабатывает функция headshot
 * loose() - вызывается тогда когда срабатывает функция fail
 * buyBeer() - вызывается тогда когда срабатывает функция win
 * giveMoney() - вызывается тогда когда срабатывает функция win
 */


function shoot (arrow) {
    console.log('Вы сделали выстрел...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
        }, 3000);
    })
    
    return promise;

};

shoot({}).then(mark => console.log('Вы попали в цель!')).then(win)
        .catch(loose)
         

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