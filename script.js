/*****************************  
 
 JS Fundamentals PT 01

 ****************************/

// Values and Variables
const country = "Brazil";
const continent = "Latin America";
let population = 25;

// Data Types

const isIsland = false;
let language;
language = "Portuguese";

/*
// Let, const (ES6) and var (old)

//Let -> Can change later
//Const -> Cannote be changed

//Sempre usar 'Const', raramente 'Let', nunca 'Var'


console.log('Country: ', country);
console.log('Continent: ', continent);
console.log('Population: ', population);

console.log(isIsland);
console.log(typeof isIsland);

console.log(languague);


/*****************************

 JS Fundamentals PT 01 - II

 ****************************/
/*
// Basic Operators

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 =
  country +
  " is in " +
  continent +
  " and has " +
  population +
  " million people speaking " +
  language;

const description2 = `${country} is in ${continent} and has ${population} million people speaking ${language}`;

console.log(description1);
console.log(description2);

/********************
 Coding Challenge #1
 ********************/
/*
const marksWeight = 78;
const marksHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const marksBMI2 = marksWeight / marksHeight ** 2;
const johnBMI2 = johnWeight / johnHeight ** 2;
const higherBMI = marksBMI2 > johnBMI2;

console.log(marksBMI2, johnBMI2, higherBMI);

// Strings and Template Literals

const person = "Matheus Camargo";
const age2 = 27;
const job = "Copy writer";

const matheus = "I'm " + person + " a " + age2 + " years old working as " + job;

const matheusNew = `I'm ${person} a ${age2} years old working as ${job}`;

console.log(matheus);
console.log(matheusNew);

console.log("String with \n\
multiples \n\
lines");

//utilizar o formato de "template literals":
console.log(`String
multiple
lines`);


// Taking decisions {If-Else statments}

const driver = "Andrea";
const age = "15";

if (age >= 18) {
  console.log(`${driver} pode tirar sua carteira de motorista 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(
    `${driver} não pode tirar carteira de motorista nesse momento. Aguarde mais ${yearsLeft} anos para tirar a carteira. 🚗`
  );
}

const birthYear = 2021;
let century;

if (birthYear >= 2000) {
  century = 21;
} else {
  century = 20;
}

console.log(`Nasceu no século ${century}`);

if (population > 33) {
  console.log(`${country}'s population is above the average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}


/********************
 Coding Challenge #2
 ********************/

/*
const marksW = 78;
const marksH = 1.69;

const johnW = 92;
const johnH = 1.95;

const marksBMI = marksW / marksH ** 2;
const johnBMI = johnW / johnH ** 2;

if (johnBMI > marksBMI) {
        console.log(`O BMI do Jhon(${jhonBMI}) é maior que o do Marks(${marksBMI})`);
} else {
        console.log(`O BMI do marks(${marksBMI}) é maior que o do Jhon(${johnBMI})`);
}


// Type conversion and coercion

let n = "1" + 1;
n = n - 1;
console.log(n);
console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// Truthy and Falsy Values (021)
// falsy values: 0, '', undefined, null, NaN

const money = 50;

if (money) {
  console.log("Estamos com a moeda! 😜");
} else {
  console.log("Estamos quebrados 😣");
}

/*****************************

 JS Fundamentals PT 01 - III

 ****************************/


/*
Equality Operators == vs ===
== faz conversão entre string e number (evitar ao máximo)
!=
=== não faz conversão (estrito)
!==
*/
/*
const favNumber = Number(prompt("Digite seu número favorito"));
console.log(favNumber);

if (favNumber === 10) {
  console.log("Número é igual a dez");
}

if (favNumber !== 25) console.log("Não é 25");

// Lecture

const numNeighbours = Number(
  prompt("How many neighbours countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No border");
}

// Logical Operators (&&, ||, !)

const hasDriveLicence = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

if (hasDriveLicence && hasGoodVision && !isTired) {
  console.log("You can drive!");
} else {
  console.log("Someone else shoud drive!");
}
/*

// Lecture

if (population < 50 && language === "English" && !isIsland) {
  console.log(`Você deveria morar em ${country}.`);
} else {
  console.log(`${country} não bate com seus critérios`);
}

/********************
 Coding Challenge #3
 ********************/
/*
const doScore = (5 + 110 + 110) / 3;
const koScore = (110 + 110 + 110) / 3;

if (doScore > koScore && doScore > 100) {
  console.log("Dolphins Wins!🏆");
} else if (koScore > doScore && koScore > 100) {
  console.log("Koalas Wins! 🏆");
} else if (koScore === doScore && koScore > 100) {
  console.log("It's a draw! Both win 🏆");
} else {
  console.log("No one wins the trophy");
}


// Switch statement

const day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Fazer compras");
    break;
  case "Tuesday":
    console.log("Academia");
    break;
  case "Wednesday":
    console.log("Arrumar a casa");
    break;
  case "Thursday":
  case "Friday":
    console.log("Estudar");
    break;
  default:
    console.log("Não é um dia útil");
}


if (day === "Monday") {
  console.log("Fazer compras");
} else if (day === "Tuesday") {
  console.log("Academia");
} else if (day === "Wednesday") {
  console.log("Arrumar a casa");
} else if (day === "Thursday" || day === "Friday") {
  console.log("Estudar");
} else {
  console.log("Não é um dia útil");
}

// Lecture

const language2 = "Hindi";

switch (language2) {
  case "Chinese":
  case "Mandarin":
    console.log("A mais falada disparado!");
    break;
  case "Spanish":
    console.log("2º lugar em número de falantes");
    break;
  case "Hindi":
    console.log("número 4");
    break;
  case "Arabic":
    console.log("Quinta mais falada");
    break;
  default:
    console.log("É muito falada também");
    break;
}

// The Conditional (Ternary) Operator

const age = 19;

age >= 18
  ? console.log("Gosto de tomar vinho 🍷")
  : console.log("Gosto de beber água ");

const drink = age >= 18 ? "vinho 🍷" : "água";
console.log(drink);

console.log(`Gosto de beber ${age >= 18 ? "vinho 🍷" : "água"}`);

// Lecture

const avg = population > 10 ? "acima da média" : "abaixo da média";

console.log(
  `A população de ${country} está ${
    population > 10 ? "acima da média" : "abaixo da média"
  }`
);

/********************
 Coding Challenge #4
 ********************/
/*
const bill = 1000;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);

console.log(
  `A conta deu ${bill}, a gorjeta será de ${tip}, o total foi de ${bill + tip}`
);
*/

