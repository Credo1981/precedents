// Цельсий в Фарингейт и наоборот
var input_celsius = prompt('Введите температуру в Цельсиях');
var input_fahrenheit = prompt('Введите температуру в Фарингейтах');

var convert_celsius_in_fahrenheit = (input_celsius * (9 / 5) + 32);
var convert_fahrenheit_in_celsius = ((input_fahrenheit - 32) * (5 / 9));
    console.log(input_celsius + 'по цельсию' + ' = ' +  convert_celsius_in_fahrenheit + 'по фарингейту');
    console.log(input_fahrenheit + 'по фарингейту' + ' = ' + convert_fahrenheit_in_celsius + 'по цельсию');