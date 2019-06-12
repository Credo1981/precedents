console.log('Hi!');
// Создание объекта View
var view = {
    //  метод получает строковое сообщение и выводит его 
    //  вы области сообщений
    displayMessage: function(msg) {                                 //  Метод displayArea получает один аргумент - текст сообщения
        var messageArea = document.getElementById("messageArea");   //  Мы получаем элемент messageArea из страницы
        messageArea.innerHTML = msg;                                //  ...и обновляем текст элемента messageArea, задавая его 
                                                                    //  свойству innerHTML содержимое msg
    },
    displayHit: function(location) {
        var cell = document.getElementById(location);               //  Идентификатор, созданный по введённым пользователем координатам, используется для получения обновляемоо элемента
        cell.setAttribute("class", "hit");                          //  Элементу назначается класс "hit", который мгновенное отображает корабль :)
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");                         //  Элементу назначается класс "miss", который отображает промах пользователя :(
    }
};

// Создание объекта Model
var model = {
    boardSize: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,

    ships: [
        { locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] },
        { locations: ["10", "11", "12"], hits: ["", "", ""] }
    ],

    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            locations = ship.locations;
            var index = locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },

    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

// Создание объекта Controller
var controller = {
    guesses: 0,

    processGuess: function(guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    }
};

//  Получение и обработка координат выстрела (например, A0 или B1)
function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		var firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);
		
		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= model.boardSize ||
		           column < 0 || column >= model.boardSize) {
			alert("Oops, that's off the board!");
		} else {
			return row + column;
		}
	}
	return null;
}





// ТЕСТИРОВАНИЕ
// Тестирование методов displayHit, displayMiss
// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");

// //  Тестирование метода displayMessage
// view.displayMessage("Tap, tap, is this thing on?");

// Тестирование метода fire
// model.fire("53");
// model.fire("06");
// model.fire("16");

//  Тестирование контроллера
controller.processGuess("A0");
