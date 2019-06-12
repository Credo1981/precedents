// Четное не четное
var input_number = prompt('enter number');

console.log(input_number);

var zero = (input_number % 2);
if(zero === 0) {
    console.log('even');
}else {
    console.log('odd');
}