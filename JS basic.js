let browser;
{
	if (browser == 'Edge') {
		alert("You've got the Edge!")
	}
	else if (browser == 'Chrome'
		|| browser == 'Firefox'
		|| browser == 'Safari'
		|| browser == 'Opera') {
		alert('Okay we support these browsers too')
	}
	else {
		alert('We hope that this page looks ok!');
	}
}

const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
	case 0:
		alert('Вы ввели число 0');
		break;
	case 1:
		alert('Вы ввели число 1');
		break;
	case 2:
	case 3:
		alert('Вы ввели число 2, а может и 3');
		break;
}

function checkAge(age) {
	return (age > 18) ?
		true : confirm('Родители разрешили?');
}

function min(a, b) {
	if (a >= b) {
		return (b);
	} else return (a);
}

function min(a, b) {
	return a < b ?
		a :; return b;
}
function pow(x, n) {
	if (n = x **) {
		return true;
	}
}

// степінь з простого числа  'b'(n)
function pow(x, n) {
	// n должна быть больше нуля и быть целым
	return (n > 0 && (n % 1 == 0)) ? alert(x ** n) : alert('Неверное число n');
}
var x = prompt('x');
var n = prompt('n');
pow(x, n);



function pow(a, b) {
	if (b > 0 && (b % 1 == 0)) {
		alert(a ** b);
	} else {
		alert(" неправильне число b");
	}
}
let a = prompt('a');
let b = prompt('b');
pow(a, b);


let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
	function () { alert("Привет!"); } :
	function () { alert("Здравствуйте!"); };

welcome(); // теперь всё в порядке

function ask(question, yes, no) {
	if (confirm(question)) yes();
	else no();
}

ask(
	"Вы согласны?",
	() => alert("Вы согласились."),
	() =;> alert("Вы отменили выполнение.");
)
function multiplyAll(arr) {
	var product = 1;
	// Only change code below this line
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			product = product * arr[i][j];
		}
	}
	// Only change code above this line
	return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

function multiplyAll(arr) {
	var product = 1;
	// Only change code below this line
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			console.log(product *= arr[i][j]);
		}
	}

	// Only change code above this line
	return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

function sum(arr, n) {
	// Only change code below this line

	return n >= 0 ? 0 : (arr * sum(arr, n - 1));
	// Only change code above this line
}
function sum(arr, n) {
	return (n <= 0) ? 0 : arr[n - 1] + sum(arr, n - 1);

}
alert(sum([2, 6], 7));

function pow(x, n) {
	if (n == 1) {
		return x;
	} else {
		return x * pow(x, n - 1);
	}
}

alert(pow(2, 3));

function lookUpProfile(name, prop) {
	for (var i = 0; i < contacts.length; i++) {
		if (contacts[i].firstName === name) {

			if (prop in contacts[i]) {

				return contacts[i][prop];

			} else return "No such property";
		}
	}
	return "No such contact";
}

const increment = (number, value = "1") =;> number + value;
consol.log(5, 2);

{

}
//regular expression
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // it's the answer!
let result = text.match(myRegex);


// для введення паролля
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
let result = userCheck.test(username);
/* Пояснення коду
     ^ - початок введення
		[a-z] - перший персонаж - лист
		[0-9][0-9]+ - закінчується двома чи більше цифрами
    | - або
		[a-z]+ - має одну чи більше літер поруч
    \d* - і закінчується нулем або більше чисел
    $ - кінець введення
    i - ігнорувати випадок введення
*/
Рішення; 2(Клацніть, щоб; показати / приховати;)
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
/*
^ - початок введення
[a-z] - перший персонаж - лист
[0-9]{2,0} - закінчується двома чи більше цифрами
| - або
[a-z]+ - має одну чи більше літер поруч
\d* - і закінчується нулем або більше чисел
$ - кінець введення
i - ігнорувати випадок введення
 */
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);


// кількість символів в рядку
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace).length;

//повторне використання шаблонів
let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\2\1$/; // Change this line
let result = reRegex.test(repeatNum);



/* перевірка наявності елемента за допомогою indexOf (), так, щоб вона поверталася,
 true якщо переданий елемент існує в масиві, а falseякщо ні.
  */
function quickCheck(arr, elem) {
	// Only change code below this line

	if (arr.indexOf(elem) >= 0) {
		return Boolean(quickCheck);
	}

	return false;

	// Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


/*Ми визначили функцію, filteredArray яка приймає arr вкладений масив і elemяк аргументи,
 і повертає новий масив. elemявляє собою елемент, який може бути або не може бути
 присутнім на одному або декількох масивах, вкладених всередині arr. Зміна функції,
  використовуючи forпетлю, щоб повернути фільтровану версію переданого масиву, що
   будь-який масив , вкладений в arrмістить elemбув видалений.
*/
function filteredArray(arr, elem) {
	let newArr = [];
	// Only change code below this line
	for (let i = 0; i < arr.length; i++)
		if (arr[i].indexOf(elem) == -1) {
			newArr.push(arr[i]);
		}

	// Only change code above this line
	return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


let nestedArray = [ // top, or first level - the outer most array
	['deep'], // an array within an array, 2 levels of depth
	[
		['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
	],
	[
		[
			['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
		],
		[
			[
				['deepest-est?'] // an array nested 5 levels deep
			]
		]
	]
];


//щоб функція повертала trueтільки якщо usersоб'єкт містить всі чотири імені, Alan, Jeff, Sarah, і Ryan, як ключі,
// і в falseіншому випадку.
function isEveryoneHere(obj) {
	if (
		obj.hasOwnProperty("Alan") &&
		obj.hasOwnProperty("Jeff") &&
		obj.hasOwnProperty("Sarah") &&
		obj.hasOwnProperty("Ryan")
	) {
		return true;
	}
	return false;
}
//2 варіант
function isEveryoneHere(obj) {
	return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
		obj.hasOwnProperty(name);
)
}



// конвертація з ференгейта в цельсій
function convertToF(celsius) {
	let fahrenheit = celsius * (9 / 5) + 32;
	return fahrenheit;
}
convertToF(30);

let arr = [1, 2, 3, 4];
return arr[];
console.log(arr);

//з Сергієм працював цикл обєкта
function countOnline(usersObj) {
	// Only change code below this line
	let result = 0;
	for (let property in usersObj) {
		if (usersObj[property].online === true) {
			result++;
		}
	}
	return result;

	// Only change code above this line
}
}

// game elevator

init: function(elevators, floors) {
	var topFloor = floors.length - 1;
	// kept global for easier debugging
	var upFloors = {};
	var downFloors = {};
	for (var floorNum in floors) {
		upFloors[floorNum] = 0;
		downFloors[floorNum] = 0;
	}
	console.log(init);

	//oblect test
	function isEmpty(obj) {
		for (let key in ibj) {
			return false;
		}
		return true;
	}

	let salaries = {
		John: 100,
		Ann: 160,
		Pete: 130
	};
	for (let key in salaries) {
		sum += salaries[key];
	}
	//
	// до вызова функции
	let menu = {
		width: 200,
		height: 300,
		title: "My menu"
	};

	// перемножити кожен елемент обєкту на 2
	function multiplyNumeric(obj) {
		for (let key in obj) {
			if (typeof obj[key] === 'number') {
				obj[key] *= 2;
			}
		}
	}

	//цикл  #
	let arr = ["#", "##", "###"];
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
	// з підручника відповідь
	for (let line = "#"; line.length < 8; line += "#")
		console.log(line);
	for (let i = "#"; i.length < 8; i += "#") {
		console.log(i);
	}
	//2 c53
	for (let i = 0; i < 100; i++) {
		if (i === 3) {
			console.log("Fizz")
		}
		if (i !== 5) {
		} else {
			console.log("Buzz");
		}
		console.log([i])
			;
	}
	//  чисела которые делятся и на 3, и на 5
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0) {
			console.log(+= "Fizz")
		}
		if (i % 5 === 0) {
			console.log(+= "Buzz");
		}
		if (i % 3 && i % 5 === 0) {
			console.log("FizzBuzz");
		}
		else if (!(i % 5 === 0 || i % 3 === 0)) {
			console.log([i]);
		}
	}
	//відповідь книжка
	for (let n = 1; n <= 100; n++) {
		let output = "";
		if (n % 3 == 0) output += "Fizz";
		if (n % 5 == 0) output += "Buzz";
		console.log(output || n);
	}
	// 3 задача шахмати
	for (let i = 1; i <= 8; i++) {
		if (i % 2 === 0) console.log(" # # # #");
		if (i % 2 !== 0) console.log("# # # # ");
	}
	console.log(i);
	// 2 варіант з size = 8
	size = 8;
	for (let i = 1; i <= size; i++) {
		if (i % 2 === 0) console.log(" " + "#");
		if (i % 2 !== 0) console.log("#" + " ");
	}
	console.log(i);
	size = 8;
	board = " ";
	for (let i = 0; i < size; i++) {
		/* у зовнішній цикл додаємо новий рядок для окремих рядків */
		for (let y = 0; y < size; i++) {
			/* кожен внутрішній цикл розширює рядок і, альтернативно, додаючи або ""
			або "#" до рядка, який заповнюється */
			if ((i + y) % 2 === 0) {
				board += " ";
			} else {
				board += "#";
			}
		}
		board += "\n"; // переносить на новий рядок
	}
	console.log(board);
	size = 8;
	board = " ";
	for (let i = 0; i < size; i++) {
		/* у зовнішній цикл додаємо новий рядок для окремих рядків */
		for (let y = 0; y < size; i++) {
			/* кожен внутрішній цикл розширює рядок і, альтернативно, додаючи або ""
			або "#" до рядка, який заповнюється */
			if ((i + y) % 2 === 0) {
				board += " ";
			} else {
				board += "#";
			}
		}
		board += "\n"; // переносить на новий рядок
	}
	console.log(board);

	// цикл
	function sumTo(n) {
		let result = 0;
		for (let i = 0; i <= n; i++) {
			result += i;
		}
		return result;
	}

	alert(sumTo(100)); // 5050
	// рекрусія правильна
	function sumTo(n) {
		if (n == 1) {
			return 1
		} else {
			return n + sumTo(n - 1);
		}
	}

	alert(sumTo(100)); // 5050
	// арифметична прогресія
	function sumTo(n) {
		return n * (n + 1) / 2;
	}

	alert(sumTo(100)); // 5050
	// фрактал
	function factorial(n) {
		if (n == 1) {
			return n
		} else {
			return n * factorial(n - 1);
		}
	}

	alert(factorial(5)); // 120
	// відповідь learn book
	function factorial(n) {
		return (n != 1) ? n * factorial(n - 1) : 1;
	}

	alert(factorial(5)); // 120
	// число Фібоначі
	function fib(n) {
		let e = n - 1;
		for (let i = 1; i < (n - e); i++) {
			result
			for (let e = 1; i < e; i++) {
			}
		}
	}

	alert(fib(77)); // 5527939700884757
	function fib(n) {
		a = 1;
		b = 1;
		for (let i = 3; i <= n; i++) {
			let c = a + b;
			a = b;
			b = c;
		}
		return b
	}

	alert(fib(3)); // 2
	alert(fib(7)); // 13
	alert(fib(77)); // 5527939700884757
	// односвязаний список
	// рекрусія
	let list = {
		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: {
					value: 4,
					next: null
				}
			}
		}
	};

	function printList(list) {
		alert(list.value); // выводим текущий элемент
		if (list.next) {
			printList(list.next); // делаем то же самое для остальной части списка
		}
	}

	printList(list);
	// /цикл
	let list = {
		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: {
					value: 4,
					next: null
				}
			}
		}
	};

	function printList(list) {
		let tmp = list;
		while (tmp) {
			alert(tmp.value);
			tmp = tmp.next;
		}
	}

	printList(list);
	// true for a book
	let list = {
		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: {
					value: 4,
					next: null
				}
			}
		}
	};

	function printReverseList(list) {
		let arr = [];
		let tmp = list;
		while (tmp) {
			arr.push(tmp.value);
			tmp = tmp.next;
		}
		for (let i = arr.length - 1; i >= 0; i--) {
			alert(arr[i]);
		}
	}

	printReverseList(list);

	// виведення в зворотному порядку
	function reverseString(str) {
		for (var revers = "", i = str.length - 1; i >= 0; i--) {
			revers += str[i];
		}
		return revers;
	}

	reverseString("hello");

	//через let працює
	function reverseString(str) {
		let revers = "";
		for (let i = str.length - 1; i >= 0; i--) {
			revers += str[i];
		}
		return revers;
	}

	reverseString("hello");

	// 2 варіант
	function reverseString(str) {
		return str
			.split("")
			.reverse()
			.join("");
	}

	reverseString("hello"); // olleh
	function reverseString(str) {
		let str = "hello";
		alert(Array.from(str)); //
		alert(join(str));
		reverseString("hello");
	}

	// фракталізація
	function factorial(num) {
		if (num == 1) {
			return num
		} else {
			return num * factorial(num - 1);
		}
	}

	alert(factorial(5)); // 120
	//те саме лише хвостова рекруся (оптимізована)
	function factorialize(num, factorial = 1) {
		if (num == 0) {
			return factorial;
		} else {
			return factorialize(num - 1, factorial * num);
		}
	}

	factorialize(5);

	// інший варіант вирішення
	function factorialize(num, factorial = 1) {
		return num < 0 ? 1 : (
			new Array(num)
				.fill(undefined)
				.reduce((product, val, index) = > product * (index + 1), 1)
		)
			;
	}

	factorialize(5);

	//Сумма с помощью замыканий
	function sum(a) {
		return function (b) {
			return a + b; // берёт "a" из внешнего лексического окружения
		};
	}

	alert(sum(1)(2)); // 3
	alert(sum(5)(-1)); // 4
	//Фильтрация с помощью функции
	{
		let arr = [1, 2, 3, 4, 5, 6, 7];

		function inBetween(a, b) {
			return function (x) {
				return x >= a && x <= b;
			};
		}

		function inArray(arr) {
			return function (x) {
				return arr.includes(x);
			}
		}

		// 3,4,5,6
		alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
		alert(arr.filter(inArray([1, 2, 10])));
		// 1,2
	}
	//сортировать по полю
	let users = [
		{ name: "John", age: 20, surname: "Johnson" },
		{ name: "Pete", age: 18, surname: "Peterson" },
		{ name: "Ann", age: 19, surname: "Hathaway" }
	];

	function byField(field) {
		return (a, b) =
	>
				a[field] > b[field] ? 1 : -1;
	}

	users.sort(byField('name'));
	users.forEach(user = > alert(user.name)
	)
		; // Ann, John, Pete
	users.sort(byField('age'));
	users.forEach(user = > alert(user.name)
	)
		; // Pete, Ann,// John
	// while цикл для виходу умов без лічильника
	// do .. while цикл з постумовою, для виведення вікна користувачу до початку циклу
	let userInput = 0;
	do {
		userInput = prompt('Напиши номер 10');
		console.log(userInput);
		// Виконується до тих пір доки не null і не 10
	}
	while (userInput !== null && Number(userInput) !== = 10);
	// for цикл для перебору масивів працює із силкою на масив, може змінити його
	const products = ['Alex', 'Piter', 'Jimy'];
	for (let i = 0; i < products.length; i += 1) {
		console.log(products[i]);
	}
	// змінюю масив
	const numbers = [2, 5, 7];
	for (let i = 0; i < numbers.length; i += 1) {
		numbers[i] = numbers[i] * 2;
		console.log(numbers[i]);
	}
	// for ..of якщо нетреба лічильника лише для перебору масиву
	const products = ['Alex', 'Piter', 'Jimy'];
	for (const product of products) {
		console.log('product ', product);// 'product', для наглядності
	}
	// масив в масиві
	const matrix = [[1, 2, 2, 4], [3, 4, 5], [6, 7, 8]];
	for (let i = 0; i < matrix.length; i += 1) {
		console.group('Iteration ${i}');
		console.log('{i}', i);
		console.log('matrix[${i}]', matrix[i]);
		for (let j = 0; j < matrix[i].length; j += 1) {
			console.log('matrix[${i}][${j}]', matrix[i][j]);
			console.groupEnd('Iteration ${i}');
		}
	}
	//==================================================================================
	/* Задача, написати скріпт, який перевіряє строку
	зміну massager на найбільше слово, записуючи його longestWord
	 */
	// зробити із строки масив
	// перебрати всі слова
	//  цикл кожне слово
	//  змінну для збереження найдовшого  слова і робимо передбачення що це найловше слово це перше
	// на кожній ітерації порівняти, якщо є бльше перезаписати
	const message = "I got my own weed, suckers, so I ain't gotta hit yours";
	const word = message.split(' ');
	console.log(word);
	let longestWord = word[0];
	for (let i = 1; i < word.length; i += 1) {
		console.log(word[i]);              //розділило по словах
		if (word[i].length > longestWord.length) {
			longestWord = word[i];
		}
	}
	// інверіантні обчислення
	console.log(longestWord);
	//теж саме тльки через for..of
	const message = "I got my own weed, suckers, so I ain't gotta hit yours";
	const words = message.split(' ');
	let longestWord = words[0];
	for (let word of words) {  //розділило по словах
		if (word.length > longestWord.length) {
			longestWord = word;
		}
	}
	console.log(words);
	console.log(longestWord);
	//==============================================================================
	/* Задача 2: вибрати слово яке знаходиться поперед 4буквене слово,
	 після нього 5буквинни
	  */
	const message = "ddf hhh jj kkkk yy gfggg re";
	const words = message.split(' ');
	const leftCount = 4;
	const rightCount = 5;
	const max = words.length - 1;
	let target = words[1];
	for (let i = 1; i < max; i += 1) {
		console.log(words[i]);
		if (words[i - 1].length === leftCount && words[i + 1].length === rightCount) {
			target = words[i];
		}
	}
	console.log(target);
	//===============================================================================
	// Задача: знайти клієнта по імені
	const clients = ["Margo", "Poly", "Ajax"];
	let clientNameFind = "Poly";
	let message;

	for (let client of clients) {
		if (client === clientNameFind) {
			massage = "Знайдено";
			break; // Зупинняємо цикл коли знаходимо  співпадінння
		} else {
			massage = "Не знайдено";
		}
	}
	console.log(massage);

	// без break, Зворотній принцип

	const clients = ["Margo", "Poly", "Ajax"];
	let clientNameFind = "Poly";
	let message = "Не знайдено";

	for (let client of clients) {
		console.log('client', client)
		if (client === clientNameFind) {
			massage = "Знайдено";
		}
	}
	console.log(massage);

	//===============================================================================

	//безкінечний цикл

	let userChoise;

	while (true) { // краще такі уникати цикли
		userChoise = prompt('Виберіть варіанти доставки 1-самовивіз, 2- курєр, 3- почта');

		if (userChoise === null) {
			break;
		}

		userChoise = number(userChoise);

		const IsValid = userChoise >= 1 && userChoise <= 3;

		if (isValid) { /// помилка
			alert('Вам передзвонить менеджер');
			break;
		}
	}

	switch (userChoise) {
		case 1:
			alert('Самовивіз!');
			break;

		case 2:
			alert('Курєр');
			break;

		case 3:
			alert('Пошта');
			break;

		default:
			alert('Вам передзвонить менеджер');
	}
	//===============================================================================

	const numbers = [2, 3, 4, 5, 6];
	// console.log(numbers.includes(3));
	const numberToFind = 3;
	let result = false; // від зворотнього
	for (const number of numbers) {
		if (number === numberToFind) {
			result = true;
			break; // якщо знайшо, щоб дальше не виконувало
		}
	}
	console.log(result);

//=================================================================================== 
//defoult
// salary
