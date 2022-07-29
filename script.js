"use strict";

/*****************************  
 
 JS Fundamentals PT 01

 ****************************/
/*
// Values and Variables
const country = "Brazil";
const continent = "Latin America";
let population = 25;

// Data Types

const isIsland = false;
let language;
language = "Portuguese";


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

/*****************************  
 
 JS Fundamentals PT 02

 ****************************/

// #01 Functions
/*
function userLogin() {
  console.log("My nickname is MthNogueira");
}

userLogin();

function fruitProcessor(oranges, apples) {
  console.log(oranges, apples);
  const juice = `O suco é feito com ${oranges} laranjas e ${apples} maças.`;
  return juice;
}

const orangeJuice = fruitProcessor(10, 0);

console.log(orangeJuice);
console.log(fruitProcessor(5, 2));

// #01 Lecture
function describeCountry(country, population, capitalCity) {
  const describe = `${country} tem ${population} milhões de habitantes e sua capital é ${capitalCity}`;
  return describe;
}

const brazil = describeCountry("Brazil", 220, "Brasília");
const venezuela = describeCountry("Venezuela", 50, "Caracas");
const uruguai = describeCountry("Uruguai", 30, "Montevideo");

console.log(brazil);
console.log(venezuela);
console.log(uruguai);

// #02 Functions Declarations vs Expressions

// Function Declaration (pode ser chamada antes de ser produzida)
function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age = calcAge1(1990);

// Function Expression (produces values)
const calcAge2 = function (birthYear) {
  return 2030 - birthYear;
};
const age2 = calcAge2(1994);

// #02 Lecture
// Function Declaration
function percentageOfWorld1(country, population) {
  const world = 7900;
  const percentage = (population / world) * 100;
  return `${country} tem ${percentage}% da população mundial`;
}

const brazilPercentage = percentageOfWorld1("Brazil", 220);
const venezuelaPercentage = percentageOfWorld1("Venezuela", 50);
const uruguaiPercentage = percentageOfWorld1("Uruguai", 30);

console.log(brazilPercentage, uruguaiPercentage, venezuelaPercentage);

// Function Expression

const percentageOfWorld2 = function (country, population) {
  const world = 7900;
  const percentage = (population / world) * 100;
  return `${country} tem ${percentage}% da população mundial`;
};

const brazilPercentage2 = percentageOfWorld2("Brazil", 220);
const venezuelaPercentage2 = percentageOfWorld2("Venezuela", 50);
const uruguaiPercentage2 = percentageOfWorld2("Uruguai", 30);

console.log(brazilPercentage2, uruguaiPercentage2, venezuelaPercentage2);

const percentageOfWorld3 = (country, population) => {
  const world = 7900;
  const percentage = (population / world) * 100;
  return `${country} tem ${percentage}% da população mundial`;
};
console.log(percentageOfWorld3("Brasil", 220));

// #03 Arrow Functions (functions shorter and faster to write)

const calcAge3 = (birthYear) => 2022 - birthYear;

const age3 = calcAge3(1994);
console.log(age3);

// Arrows functions mais complexas

const yearsUntillRetirement = (birthYear, firstName) => {
  const age4 = 2022 - birthYear;
  const retirement = 65 - age4;
  // return retirement;
  return `${firstName} vai se aposentar em ${retirement} anos`;
};

console.log(yearsUntillRetirement(1994, "Matheus"));
console.log(yearsUntillRetirement(1996, "Armando"));

// #03 Lecture - Arrow Function

const percentageOfWorld3 = (country, population) => {
  const world = 7900;
  const percentage = (population / world) * 100;
  return `${country} tem ${percentage}% da população mundial`;
};

const brazilPercentage3 = percentageOfWorld3("Brazil", 220);
const venezuelaPercentage3 = percentageOfWorld3("Venezuela", 50);
const uruguaiPercentage3 = percentageOfWorld3("Uruguai", 30);

console.log(brazilPercentage3, uruguaiPercentage3, venezuelaPercentage3);

// #04 Functions calling other functions

function fruitCut(fruit) {
  return fruit * 4;
}

function fruitProcessor(oranges, apples) {
  const orangesPieces = fruitCut(oranges);
  const applesPieces = fruitCut(apples);

  const juice = `O suco é feito com ${orangesPieces} pedaços de laranjas e ${applesPieces} pedaços de maças.`;
  return juice;
}

console.log(fruitProcessor(1, 2));

// #04 Lecture

function describePopulation(country, population) {
  const descPop = percentageOfWorld1(country, population); // chama outra função
  return descPop;
}

const brazilDescribePopulation = describePopulation("Brazil", 220);
const venezuelaDescribePopulation = describePopulation("Venezuela", 50);
const uruguaiDescribePopulation = describePopulation("Uruguai", 30);

console.log(
  brazilDescribePopulation,
  venezuelaDescribePopulation,
  uruguaiDescribePopulation
);

// #05 Review Functions
// Ver vídeo 037 em 10:48 -> fala sobre os tipos de funções

function calcAge(year) {
  return 2022 - year;
}

const yearsUntillRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} vai se aposentar em ${retirement} anos.`;
  } else {
    return `${firstName} já se aposentou.`;
  }
};

console.log(yearsUntillRetirement(1994, "Matheus"));
console.log(yearsUntillRetirement(1950, "Armando"));


// #01 Coding Challenge

// Average calculation
const calcAverage = (score1, score2, score3) => {
  const avg = (score1 + score2 + score3) / 3;
  return avg;
};

// Winner calculation
function checkWinner(avgDolphins, avgKoala) {
  let winner = "Nobody";
  let avgWinner = -1;
  let avgLoser = -1;

  if (avgDolphins >= avgKoala * 2) {
    winner = "Dolphins";
    avgWinner = avgDolphins;
    avgLoser = avgKoala;
  } else if (avgKoala >= avgDolphins * 2) {
    winner = "Koala";
    avgWinner = avgKoala;
    avgLoser = avgDolphins;
  }

  return `${winner} win (${avgWinner} vs ${avgLoser})`;
}

// Input
const avgDolphins2 = calcAverage(44, 23, 71);
const avgKoala2 = calcAverage(65, 54, 49);

const avgDolphins3 = calcAverage(85, 54, 41);
const avgKoala3 = calcAverage(23, 34, 27);

// Test Winner
const winner1 = checkWinner(avgDolphins2, avgKoala2);
const winner2 = checkWinner(avgDolphins3, avgKoala3);

// Output
console.log(avgDolphins2, avgKoala2);
console.log(avgDolphins3, avgKoala3);

console.log(winner1);
console.log(winner2);

*/
/*****************************  
 
 JS Fundamentals PT 02 - II

 ****************************/
/*
// #01 Data Structure: Arrays

// Array 1
const supermercado = ["feijão", "arroz", "leite", "macarrão"];

console.log(supermercado);
console.log(supermercado[2]);

console.log(supermercado.length);
console.log(supermercado[supermercado.length - 1]);

supermercado[2] = "batata";
console.log(supermercado);

// Array 2
const firstName = "Matheus";
const matheus = [firstName, "copywriter", 2022 - 1994, supermercado];
console.log(matheus);

// Exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

//Array
const years = [1994, 1995, 1996, 1980, 1955];

//1st method
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

//2nd method
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


// #01 - Lecture: Introduction to Arrays

//Percentage of World
function percentageOfWorld1(country, population) {
  const world = 7900;
  const percentage = (population / world) * 100;
  return `${country} tem ${percentage}% da população mundial`;
}

//1
const populations = ["Irlanda", 50, "Inglaterra", 110, "Espanha", 25];
console.log(populations);
console.log(populations.length === 4);

//2
const percentages = [
  percentageOfWorld1(populations[0], populations[1]),
  percentageOfWorld1(populations[2], populations[3]),
  percentageOfWorld1(populations[4], populations[5]),
];
console.log(percentages);


// #02 Basic Array Operations (Methods)

// Add elements
const supermercado = ["feijão", "arroz", "leite", "macarrão"];
console.log(supermercado);

const novoSupermercado = supermercado.push("doce de leite"); // retorna o tamanho do array novo

console.log(supermercado);
console.log(novoSupermercado);

supermercado.unshift("banana");
console.log(supermercado);

// Remove elements
supermercado.pop();
const removido = supermercado.pop();

console.log(supermercado);
console.log(removido);

supermercado.shift();
console.log(supermercado);

// Index
console.log(supermercado.indexOf("arroz"));

// Include
console.log(supermercado.includes("leite")); // retorna um 'bolean'

if (supermercado.includes("leite")) {
  console.log("Tem leite na lista do mercado");
}

// #02 - Lecture: Basic Array Operations (Methods)
const neighbours = ["Portugal", "França"];

neighbours.push("Utopia");
neighbours.pop();

if (neighbours.includes("Germany")) {
  console.log("Tem a Alemanha como vizinho");
} else {
  console.log("Provavelmente não é um país da Europa central :D");
}

const change = neighbours.indexOf("França");
neighbours[change] = "Suécia";
console.log(neighbours);

// #02 Challenge

let bill;
let tip;

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return (tip = bill * 0.15);
  } else {
    return (tip = bill * 0.2);
  }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(tips);
console.log(total);
*/

/*****************************  
 

 JS Fundamentals PT 02 - III


 ****************************/
/*
//#03 Data Structure: Objects - usar para dados não estruturados (ordem não importa)

// Object
const matheus = {
  firstName: "Matheus",
  lastName: "Camargo",
  job: "Copywriter",
  age: 2022 - 1994,
  friends: ["Jordan", "Steven", "Mike"],
};

console.log(matheus);
console.log(matheus.job);
console.log(matheus["age"]);

const nameKey = "Name";
console.log(matheus["first" + nameKey]);
console.log(matheus["last" + nameKey]);

const interestedIn = prompt(
  "O que você quer saber sobre o Matheus? Escolha entre: firstName, lastName, job, age, friends"
);

// console.log(matheus.interestedIn); errado -> undefined

if (matheus[interestedIn]) {
  console.log(matheus[interestedIn]); // correto
} else {
  console.log("Digite um valor correto");
}

matheus.location = "Brasil";
matheus["email"] = "mthnog@gmail.com";

console.log(matheus);

// Small Challenge
console.log(
  `${matheus.firstName} tem ${matheus.friends.length} amigos seu melhor amigo é ${matheus.friends[0]} `
);


// Lecture: Introduction to Objects / Dot vs Bracket Notation
const myCountry = {
  country: "Brasil",
  capital: "Brasília",
  language: "Português",
  population: 220,
  neighbours: ["Uruguai", "Paraguai", "Argentina", "Colômbia", "Venezuela"],
};

myCountry.population = 222;
myCountry["population"] = 218;

console.log(
  `${myCountry.country} tem ${myCountry.population} de habitantes, fala ${myCountry["language"]}, sua capital é ${myCountry["capital"]} e possui ${myCountry.neighbours.length} vizinhos`
);

console.log(myCountry);


// Object Methods
const matheus = {
  firstName: "Matheus",
  lastName: "Camargo",
  job: "copywriter",
  birthYear: 1994,
  friends: ["Jordan", "Steven", "Mike"],
  hasDriveLicence: true,

  //#### 01
  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // ### 02
  // calcAge: function () {
  //   console.log(this);
  //   return 2022 - this.birthYear;
  // },

  // ### 03 ###
  calcAge: function () {
    console.log(this);
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};

console.log(matheus.calcAge());
console.log(matheus.age);
// console.log(matheus["calcAge"](matheus["birthYear"]));


// Small Challenge
const matheus = {
  firstName: "Matheus",
  lastName: "Camargo",
  job: "copywriter",
  birthYear: 1994,
  friends: ["Jordan", "Steven", "Mike"],
  hasDriveLicence: true,

  calcAge: function () {
    console.log(this);
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  summay: function () {
    return `${this.firstName} tem ${this.calcAge()} anos e trabalha como ${
      this.job
    } ${
      this.hasDriveLicence
        ? "tem carteira de motorista"
        : "não tem carteira de motorista"
    }`;
  },
};

console.log(matheus.summay());


// Lecture: Object Methods
const myCountry = {
  country: "Brasil",
  capital: "Brasília",
  language: "Português",
  population: 220,
  neighbours: ["Uruguai", "Paraguai", "Argentina", "Colômbia", "Venezuela"],

  describe: function () {
    return `${this.country} tem ${this.population} milhões de habitantes, falam ${this.language}, sua capital é ${this.capital} e possui ${this.neighbours.length} vizinhos `;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

/*
// Coding Challenge #3
const mark = {
  fullName: "Mark Miller",
  weights: 78,
  height: 1.69,

  calcBMI: function () {
    return this.weights / this.height ** 2;
  },
};

const johns = {
  fullName: "John Smith",
  weights: 92,
  height: 1.95,

  calcBMI: function () {
    return this.weights / this.height ** 2;
  },
};

const johnBMI = johns.calcBMI();
const markBMI = mark.calcBMI();

const higherBMI =
  johnBMI > markBMI
    ? `O BMI do John ${johnBMI} é mais alto que o do Mark ${markBMI}`
    : `O BMI do Mark ${markBMI} é mais alto que o do John ${johnBMI}`;

console.log(higherBMI);

/*****************************  
 
 JS Fundamentals PT 02 - IV

 ****************************/
/*

// Interation: "For" loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Esse é o for loop ${rep} `);
}

// Lecture: The for loop
for (let voter = 1; voter <= 50; voter++) {
  console.log(`O eleitor número ${voter} está votando nesse momento`);
}

// Lopping Arrays (Break / Cotinuing)
const matheus = [
  "Matheus",
  "Camargo",
  "Copywriter",
  2022 - 1994,
  ["Jordan", "Steven", "Mike"],
  false,
];

const types = [];

for (let i = 0; i < matheus.length; i++) {
  //Lendo a array "matheus"
  console.log(matheus[i], typeof matheus[i]);

  //Preenchendo um array
  types[i] = typeof matheus[i];

  //Outra forma de preencher o array
  //types.push(typeof matheus[i]);
}

console.log(types);

//Criando, percorrendo e adicionando elementos no array com "for" - IMPORTANTE -
const years = [1994, 1992, 1980, 1970];
let ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

// Continue and Break
const matheus = [
  "Matheus",
  "Camargo",
  "Copywriter",
  2022 - 1994,
  ["Jordan", "Steven", "Mike"],
  false,
];

console.log("####### SOMENTE STRINGS ####### ");
for (let i = 0; i < matheus.length; i++) {
  if (typeof matheus[i] !== "string") continue;

  console.log(matheus[i], typeof matheus[i]);
}

console.log("####### NÚMEROS / BREAK ####### ");
for (let i = 0; i < matheus.length; i++) {
  if (typeof matheus[i] === "number") break;

  console.log(matheus[i], typeof matheus[i]);
}

// Lecutre: Looping Arrays, Breaking and Continuing

//Função anteriormente feita
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// Arrays
const populations = [20, 50, 90];
const percentage2 = [];

// For looping
for (let i = 0; i < populations.length; i++) {
  percentage2.push(percentageOfWorld1(populations[i]));
}

// #################################

// Comprar com isso:
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const brazilPercentage = percentageOfWorld1(220);
const venezuelaPercentage = percentageOfWorld1(50);
const uruguaiPercentage = percentageOfWorld1(30);

console.log(brazilPercentage, uruguaiPercentage, venezuelaPercentage);

// #################################

// Looping backwards and loops in loops
const matheus = [
  "Matheus",
  "Camargo",
  "Copywriter",
  2022 - 1994,
  ["Jordan", "Steven", "Mike"],
];

for (let i = matheus.length - 1; i >= 0; i--) {
  console.log([i], matheus[i]);
}

//Loop inside of a loop
for (let x = 1; x <= 3; x++) {
  console.log(`----------- Exercício número ${x}`);
  for (let i = 1; i <= 5; i++) {
    console.log(`Exerício: ${x} # Repetição:${i} 🟣`);
  }
}


//Lecutre: Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let x = 0; x < listOfNeighbours[i].length; x++) {
    console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
  }
}

/*****************************  
 
 JS Fundamentals PT 02 - V


 ****************************/
/*

// While Loop
let rep = 1;

while (rep <= 10) {
  console.log(`${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6) + 1;
}


//Lecture: The While loop
//Função anteriormente feita
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// Arrays
const populations = [20, 50, 90];
const percentage3 = [];

// #01 - For looping
for (let i = 0; i < populations.length; i++) {
  percentage3.push(percentageOfWorld1(populations[i]));
}

// #02 - While looping
let x = 0;
while (x < populations.length) {
  percentage3.push(percentageOfWorld1(populations[x]));
  x++;
}

console.log(percentage3);


// Coding challenge #4

// Função anteriormente escrita
let tip;

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  return tip;
}

// Arrays
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tipArray = [];
let totalValues = [];

// For looping
for (let i = 0; i < bills.length; i++) {
  tipArray.push(calcTip(bills[i]));
  totalValues.push(bills[i] + tipArray[i]);
}

// Output
console.log(bills);
console.log(tipArray);
console.log(totalValues);

// Coding bonus: Calcular a média de um array

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
}

console.log(calcAverage(bills));
console.log(calcAverage([25, 45, 105]));
*/
