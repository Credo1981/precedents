// Высокосный год
var year_number = prompt('enter favorite year');

console.log(year_number);

var zero = year_number % 4;
if(zero == 0) {
    console.log('leap year');
}else {
    console.log('!leap year');
}