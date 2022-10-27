// 1. შექმენით 5 ელემენტიანი რიცვების მასივი, console.log-ით გამოიტანეთ ამ მასივის ელემენტების საშუალო არითმეტიკული;
const numbersArr = [2, 4, 60, 10, 20];

let sum = 0;

for (let i = 0; i < numbersArr.length; i++) {
	// console.log(numbersArr[i]);

	sum = sum + numbersArr[i];

	console.log(sum);
}

console.log(sum, "sum");

const numbersArrLength = numbersArr.length;
const numbersArrSum =
	numbersArr[0] + numbersArr[1] + numbersArr[2] + numbersArr[3] + numbersArr[4];

const numbersArrAvg = numbersArrSum / numbersArrLength;

// 2. შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი, რომელსაც გააჩნია name  და age property.

const students = [
	{
		name: "Dato",
		age: 20,
	},
	{
		name: "Nika",
		age: 25,
	},
	{
		name: "Nino",
		age: 22,
	},
	{
		name: "Tamar",
		age: 30,
	},
	{
		name: "Tea",
		age: 27,
	},
];

// console.log(students[3].age)

// 3. შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties):
// firstName - სტრინგ ტიპის მნიშვნელობა
// lastName - სტრინგ ტიპის მნიშვნელობა
// age - რიცხვითი მნიშვნელობა
// phoneNumbers - რიცხვითი მნიშვნელობების მასივი
// address - სტრინგ ტიპის მნიშვნელობა
// zipCode - რიცხვითი მნიშვნელობა

const person = {
	firstName: "Levan",
	lastName: "Gelovani",
	age: 30,
	phoneNumbers: [577123456, 598123456],
	address: ["tbilisi", "georgia"],
	zipCode: 1200,
};

// 4. console.log ში გამოიტანეთ სტრინგი "User name is (#3 დავალების firstName  მნიშვნელობა), user age is (#3 დავალების age-ის მნიშვნელობა),  user address is (#3 დავალების address-ის პირველი ელემენტის მნიშვნელობა)"

const text = `User name is ${person.firstName}, user age is ${person.age},  user address is ${person.address[0]}`;

console.log(text);
