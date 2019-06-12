let age = document.getElementById('age');

function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
// showUser('Big', 'Credo');
showUser.call(age, 'Big', 'Credo');