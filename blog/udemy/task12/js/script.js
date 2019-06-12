console.log('Credo');
'use strict';

// class Person {
//     constructor (name) {
//         this.name = name;
//     }

//     sayName() {
//         console.log(`Person ${this.name} said his name`);
//     }
// }

// const john = new Person ('John');
// john.sayName();

// class Options {
//     constructor (height, width, bg, fontSize, textAlign) {
//         this.height = height;
//         this.width = width;
//         this.bg = bg;
//         this.fontSize = fontSize;
//         this.textAlign = textAlign;
//     }

//     el_div() {
//         let 
//     }
// }

let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};

let j = JSON.stringify(options);
let server = JSON.parse(j);

console.log(j);
console.log(server);

console.log('Credo2');