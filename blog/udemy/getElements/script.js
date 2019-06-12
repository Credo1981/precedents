let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper .heart'),
    one_heart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// Поменять цвет первого квадрата
box.style.backgroundColor = 'blue';

// Сделать у второй кнопки вид элипса (закруглить углы)
btn[1].style.borderRadius = '100%';

// Поменять цвет кругов (светофор)
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';
/*
// Поменять цвет кругов на желтый в цикле 
for(var i = 0; i < circle.length; i++) {
    circle[i].style.backgroundColor = 'yellow';
}

// Поменять цвет сердец на синий в цикле forEach
heart.forEach(function(item, i, heart) {
    item.style.backgroundColor = 'blue';
});
*/

// Создание элементов на лету
let div = document.createElement('div');

// Создание текстового элемента
let text = document.createTextNode('Credo');

/**
 * При значительном изменении стилей элемента, требуется не писать кучу кода для изменения стелей, 
 * а использовать класс модификатор из CSS, т.е. просто у элемента заменить один класс на другой с требуемыми стилями.
 */

// Добавление класса к элементу
// .toggle() - переключает классы от каких-то действий
div.classList.add('black');

// Вставить элемент на страницу (в конец)
document.body.appendChild(div);

// Вставить элемент на страницу в определенный div (в конец)
// wrapper.appendChild(div);

// Вставить элемент на страницу (перед требуемым элементом)
// document.body.insertBefore(div, circle[1]);

// Удаление дочернего элемента
// document.body.removeChild(circle[1]);

// Удаление дочернего элемента в div
// wrapper.removeChild(heart[1]);

heart[0].style.backgroundColor = 'red';
heart[1].style.backgroundColor = 'yellow';
heart[2].style.backgroundColor = 'green';



// Замена одного элемента другим
// document.body.replaceChild(btn[1], circle[1]);
console.log(wrapper);
// wrapper.replaceChild(heart[1], heart[0]);


// Добавление HTML кода на страницу  innerHTML
// div.innerHTML = '<h3>Credo</h3>';

// Добавление текста в элемент на страницу innerText
div.innerText = 'Credo';
