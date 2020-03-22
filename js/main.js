// задание 1.1: Типы данных и переменные

var name = "Артём";

alert(name);

name = "Катя";

alert(name);

// задание 1.2: Условный оператор if

if (2>2) {
	console.log("Истина");
} else {
	console.log("Ложь");
};

// задание 1.3: Циклический оператор for

for (let i = 0; i<10; i++) {
	console.log(i);
};

// задание 1.4: Функции

function sum(p1, p2, p3) {
	let summa = p1 + p2 + p3;
	return (summa);
};

sum(10, 20, 30);

var a = sum(10, 20, 30);

alert(a);

a = sum(20, 20, 30);

alert(a);

a = sum(10, 20, 190);

alert(a);

// задание 1.5: Массивы и объекты
// задание 1.5.1

let mas1 = ["Привет", "loftschool"];

mas1.push("я изучаю", "javascript");

console.log(mas1.length);

for (let a=0; a<mas1.length; a++) {
	console.log(mas1[a]);
};

// задание 1.5.2

let mas2 = [11, 234, 123, 23, 43, 22, 2134, 432, 1, 101];

for (let b=0; b<mas2.length; b++) {

	if (mas2[b] > 100) {

		console.log(mas2[b]);
	};
};

// задание 1.5.3

let obj1 = {
	name: "Artem",
	lastName: "Gotmanov",
	age: 32
};

console.log(obj1.name);
console.log(obj1.lastName);
console.log(obj1.age);

obj1.other = "Russia";

alert(obj1.other);

// задание 1.5.4

function hello(human) {
	return ("Привет, меня зовут " + human.name + " " + human.lastName + " и мне " + human.age + " лет!");
};

let hello1 = hello(obj1);

alert(hello1);