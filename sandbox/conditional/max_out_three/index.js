// Максимальное число из трёх
var first_number = prompt('enter first numbet');
var second_number = prompt('enter second numbet');
var third_number = prompt('enter third numbet');

console.log(first_number );
console.log(second_number);
console.log(third_number);


if (first_number > second_number && first_number > third_number) {
    console.log('first_number is BIG');
}

if (second_number > first_number && second_number > third_number) {
    console.log('second_number is BIG');
}

if (third_number > first_number && third_number > second_number) {
    console.log('third_number is BIG');
}
