const harryPotterCharacters = [
	{
		name: "Harry Potter",
		alternate_names: [],
		species: "human",
		gender: "male",
		house: "Gryffindor",
		dateOfBirth: "31-07-1980",
		yearOfBirth: 1980,
		wizard: true,
		ancestry: "half-blood",
		eyeColour: "green",
		hairColour: "black",
		wand: {
			wood: "holly",
			core: "phoenix feather",
			length: 11,
		},
		patronus: "stag",
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: "Daniel Radcliffe",
		alternate_actors: [],
		alive: true,
		image: "http://hp-api.herokuapp.com/images/harry.jpg",
	},
	{
		name: "Hermione Granger",
		alternate_names: [],
		species: "human",
		gender: "female",
		house: "Gryffindor",
		dateOfBirth: "19-09-1979",
		yearOfBirth: 1979,
		wizard: true,
		ancestry: "muggleborn",
		eyeColour: "brown",
		hairColour: "brown",
		wand: {
			wood: "vine",
			core: "dragon heartstring",
			length: "",
		},
		patronus: "otter",
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: "Emma Watson",
		alternate_actors: [],
		alive: true,
		image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
	},
	{
		name: "Ron Weasley",
		alternate_names: ["Dragomir Despard"],
		species: "human",
		gender: "male",
		house: "Gryffindor",
		dateOfBirth: "01-03-1980",
		yearOfBirth: 1980,
		wizard: true,
		ancestry: "pure-blood",
		eyeColour: "blue",
		hairColour: "red",
		wand: {
			wood: "willow",
			core: "unicorn tail-hair",
			length: 14,
		},
		patronus: "Jack Russell terrier",
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: "Rupert Grint",
		alternate_actors: [],
		alive: true,
		image: "http://hp-api.herokuapp.com/images/ron.jpg",
	},
	{
		name: "Draco Malfoy",
		alternate_names: [],
		species: "human",
		gender: "male",
		house: "Slytherin",
		dateOfBirth: "05-06-1980",
		yearOfBirth: 1980,
		wizard: true,
		ancestry: "pure-blood",
		eyeColour: "grey",
		hairColour: "blonde",
		wand: {
			wood: "hawthorn",
			core: "unicorn tail-hair",
			length: 10,
		},
		patronus: "",
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: "Tom Felton",
		alternate_actors: [],
		alive: true,
		image: "http://hp-api.herokuapp.com/images/draco.jpg",
	},
	{
		name: "Sirius Black",
		alternate_names: ["Padfoot", "Snuffles"],
		species: "human",
		gender: "male",
		house: "Gryffindor",
		dateOfBirth: "03-11-1959",
		yearOfBirth: 1959,
		wizard: true,
		ancestry: "pure-blood",
		eyeColour: "grey",
		hairColour: "black",
		wand: {
			wood: "",
			core: "",
			length: null,
		},
		patronus: "hare",
		hogwartsStudent: false,
		hogwartsStaff: false,
		actor: "Gary Oldman",
		alternate_actors: ["James Walters", "Rohan Gotobed"],
		alive: false,
		image: "https://hp-api.herokuapp.com/images/sirius.JPG",
	},
];

for (let i = 0; i < harryPotterCharacters.length; i++) {
	// console.log(harryPotterCharacters[i]);

	if (harryPotterCharacters[i].name === "Harry Potter") {
		console.log("its harry potter,  100 points to Gryffindor");
	} else {
		console.log(harryPotterCharacters[i].name);
	}

	if (!harryPotterCharacters[i].alive) {
		console.log(harryPotterCharacters[i].name + "is dead");
	}
}

const firstCharacter = harryPotterCharacters[4];

if (firstCharacter.alive) {
	console.log(firstCharacter.alive);
}

if (firstCharacter.name === "Harry potter") {
	console.log(firstCharacter.name === "Harry Potter");
}

console.log(firstCharacter);

let price = 3000;

// if (price < 100) {
// 	console.log("delivery price = 30");
// } else {
// 	console.log("delivery price = 10");
// }

let deliveryPrice;

if (price < 100) {
	deliveryPrice = 30;
} else if (price >= 100 && price < 300) {
	deliveryPrice = 20;
} else if (price >= 300 && price < 1000) {
	deliveryPrice = 10;
} else {
	deliveryPrice = 0;
}

console.log("delivery price = " + deliveryPrice);

console.log(price);

let charName = "ron";

switch (charName) {
	case "ron":
		console.log("ron");
		break;
	case "harry":
	case "hary":
		console.log("harry");
		break;
	default:
		console.log("default");
		break;
}

if (charName === "harry") {
} else if (charName === "ron") {
} else {
}

for (let i = 0; i < 15; i++) {
	if (i === 5) {
		console.log("continue");
		continue;
	}

	if (i == 8) break;

	console.log(i);
}

// console.log(i);
console.log("after for loop");

let i = 0;
while (i < 20) {
	console.log(i);

	i += 2;
}

console.log("after while", i);

let j = 0;
do {
	console.log(j);
	j++;
} while (j < 10);

console.log("after do while", j);

for (let i = 0; i < 5; i++) {
	console.log("hello");
}
