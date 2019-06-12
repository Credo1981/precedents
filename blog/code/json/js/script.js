    // let options = {
    //     width: 1366,
    //     height: 768,
    //     background: 'red',
    //     font: {
    //         size: '16px',
    //         color: '#fff'
    //     }
    // };
    // console.log(JSON.stringify(options));

    // Конвертер валют
    let inputRub = document.getElementById('rub'),
        inputUsd = document.getElementById('usd');

    // Обработчик событий при вводе каждого символа
    inputRub.addEventListener('input',() => {
        // Создание объекта XMLHttpRequest
        let request = new XMLHttpRequest();

        // Настройка AJAX запроса (метод open)
        // request.open(method, url, async, login, pass);
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
        request.send();

        // status
        // statusText
        // responseText  /  response
        // readyState

        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);

                inputUsd.value = inputRub.value / data.usd;
            } else {
                inputUsd.value = "Нет данных";
            }
        });
    });