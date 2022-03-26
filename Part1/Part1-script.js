/* Primeira Aula
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.1415; // para variaveis que sabemos que sao constantes, o seu nome e todo em maiusculas

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
*/

/*Primeiro Exercicio pratico

let country = "Portugal";
let continent = "Europe";
let population = 10000000;
console.log(country);
console.log(continent);
console.log(population);
*/

/* Aula 2 Variaveis
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/* Aula let,const e var
let age = 30;
age = 31;

const birthYear = 1991;
// birthyear = 1990; // uma variavel constante nao pode ser alterada -> erro
//const job; // a usar const e necessario inserir um valor ao declarar.

var job = 'programmer';
job = 'teacher';
*/

/* Aula 3 - Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020; // era 2018, por isso linha 94 tem 2018
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//  2**3 significa 2 elevado a 3

const firstName = 'Jonas';
const lastName = 'Schmedtmann'
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10 // x = x + 10 = 25
x *= 4; // x = x * 4 = 25
x++; // x = x + 1
x--; // x= x - 1
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // a idade do jonas e maior que a da sara? true or false
// > , <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/* Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x= y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/


/* CODING CHALLENGE #1
const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

console.log(weightMark, heightMark, weightJohn, heightJohn);

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;

console.log(bmiMark, bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);
*/


/* Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old' + job + '!';

console.log(jonas);

const jonasNew = `I'm  ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);


console.log(`Just a regular string`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/


/* Taking decisions: if / else Statements

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/


/* CODING CHALLENGE #2
const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than Jhon's (${bmiJohn})!`);
} else {
    console.log(`Jhon's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

*/

/* Type conversion and Type coersion

//type conversion
const inputYear = '1991'; // converter a string de 1991 para numero utilizando a funcao (Number)
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // NaN = Not a Number
console.log(typeof NaN); // apesar de NaN ser um nnumero

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old'); // o '+' desencadeia a conversao de '23' para string
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3); // JavaScript converteu as strings para numero. o '-' desencadeou a conversao para numero
console.log('23' + '10' + 3); // JavaScript converteu o'3' para string. o '+' desencadeou a conversao e concatenou as strings
console.log('23' * '2'); // ambos convertidos para numeros
console.log('23' / '2') // ambos convertidos para numeros

let n = '1' + 1; // '11'
n = n - 1; // '11-1'
console.log(n);
*/

/* Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN - irao ser falsos quando convertidos para booleana
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 0;

if (money) { // o JavaScript vai tentar converter a variavel para numero, usando truthy and falsy values rules
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log("Height is undefined");
}
*/
/* Equality Operators == vs ===

const age = 18;
if (age === 18) console.log('You just became an adult (strict operator)'); // === operador comparacao que retorna booleana. nao faz type coersion, logo so retorna valores exatamente iguais
if (age == 18) console.log('You just became an adult (loose operator)'); // == o operador ja faz type coersion e podemos compara numeros e strings, por exemplo. EVITAR USAR

const favourite = Number(prompt("What is your favourite number?")); // por defeito, o prompt guarda strings. necessario converter para numero, neste caso
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}
// != operator loose version: !== operator strict version
if (favourite !== 23) console.log('Why not 23?');
*/

/* Logical Operators
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}
*/


// Task 1/2
// const scoreDolphins1 = 96;
// const scoreDolphins2 = 108;
// const scoreDolphins3 = 89;
// const scoreKoalas1 = 89;
// const scoreKoalas2 = 91;
// const scoreKoalas3 = 110;

// const scoreDolphins1 = 97;
// const scoreDolphins2 = 112;
// const scoreDolphins3 = 101;
// const scoreKoalas1 = 109;
// const scoreKoalas2 = 95;
// const scoreKoalas3 = 106;

// const averageDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
// const averageKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
// console.log(averageDolphins, averageKoalas);
//Task 2
// if (averageDolphins > averageKoalas) {
//     console.log(`Dolphins win with an average of ${averageDolphins} against an average of ${averageKoalas} from Koalas`);
// } else if (averageKoalas > averageDolphins) {
//     console.log(`Koalas win with an average of ${averageKoalas} against an average of ${averageDolphins} from Dolphins`);
// } else {
//     console.log("It's a draw");
// }

//Task 3 e 4 - Demasiado complexo

// const minimumScore = 100;
// let vitoriasDolphin = 0;
// let vitoriasKoala = 0;


// if (scoreDolphins1 >= minimumScore || scoreKoalas1 >= minimumScore) {
//     if (scoreDolphins1 > scoreKoalas1) {
//         console.log(`Dolphins vencem a ronda 1 com uma pontuacao de ${scoreDolphins1} contra ${scoreKoalas1}!`);
//         vitoriasDolphin++;

//     } else if (scoreKoalas1 > scoreDolphins1) {
//         console.log(`Koalas vencem a ronda 1 com uma pontuacao de ${scoreKoalas1} contra ${scoreDolphins1}!`);
//         vitoriasKoala++;

//     } else {
//         console.log('Empate ronda 1');
//     }
// } else {
//     console.log(`Nenhuma das equipas obteve a pontuacao minima de ${minimumScore}!`);
// }

// if (scoreDolphins2 >= minimumScore || scoreKoalas2 >= minimumScore) {
//     if (scoreDolphins2 > scoreKoalas2) {
//         console.log(`Dolphins vencem a ronda 2 com uma pontuacao de ${scoreDolphins2} contra ${scoreKoalas2}!`);
//         vitoriasDolphin++;

//     } else if (scoreKoalas2 > scoreDolphins2) {
//         console.log(`Koalas vencem a ronda 2 com uma pontuacao de ${scoreKoalas2} contra ${scoreDolphins2}!`);
//         vitoriasKoala++;

//     } else {
//         console.log('Empate ronda 2');
//     }
// } else {
//     console.log(`Nenhuma das equipas obteve a pontuacao minima de ${minimumScore}!`);
// }


// if (scoreDolphins3 >= minimumScore || scoreKoalas3 >= minimumScore) {
//     if (scoreDolphins3 > scoreKoalas3) {
//         console.log(`Dolphins vencem a ronda 3 com uma pontuacao de ${scoreDolphins3} contra ${scoreKoalas3}!`);
//         vitoriasDolphin++;

//     } else if (scoreKoalas3 > scoreDolphins3) {
//         console.log(`Koalas vencem a ronda 3 com uma pontuacao de ${scoreKoalas3} contra ${scoreDolphins3}!`);
//         vitoriasKoala++;

//     } else {
//         console.log('Empate ronda 3');
//     }
// } else {
//     console.log(`Nenhuma das equipas obteve a pontuacao minima de ${minimumScore}!`);
// }

// console.log(vitoriasDolphin, vitoriasKoala);

// if (vitoriasDolphin > vitoriasKoala) {
//     console.log(`Dolphins win the tournament with ${vitoriasDolphin} wins.`);
// } else if (vitoriasKoala > vitoriasDolphin) {
//     console.log(`Dolphins win the tournament with ${vitoriasKoala} wins.`);
// } else {
//     console.log("It's a draw. We need a 4th game");
// }
//Task 3 e 4 - mais simples
/*
const minimumScore = 100;

if (averageDolphins > minimumScore || averageKoalas > minimumScore) {
    if (averageDolphins > averageKoalas) {
        console.log(`Dolphins vencem com uma pontuacao de ${averageDolphins} contra ${averageKoalas}!`);
        vitoriasDolphin++;

    } else if (averageKoalas > averageDolphins) {
        console.log(`Koalas vencem com uma pontuacao de ${averageKoalas} contra ${averageDolphins}!`);
        vitoriasKoala++;

    } else {
        console.log('Empate :(');
    }
} else {
    console.log(`Nenhuma das equipas obteve a pontuacao minima de ${minimumScore}!`);
}
*/






/* The switch statement
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
        break; // O break impede o codigo de seguir para os outros casos, independentemente do dia da semana que venha a seguir. corre tudo ate achar o break seguinte
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend:D');
        break;
    default:
        console.log('Not a valid day!'); //caso nenhum ressultado se verifique
}

// O que o switch faz, e isto em condicoes if!!! mais simples de entender
/*
if (day === 'monday') {
    console.log('Plan my course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}
*/




// Expressions and Statements

// expression is a piece of code that produces value, 3 + 4, produz um valor, 1991 e uma expressao tambem, produz um valor em javascript

// statement nao produz valores. exemplo if

// if (23> 10{
//     const str = '23 is bigger';
// }

//console.log(`I'm ${2037 - 1991} years old.`); //2037-1991 e a expressao. e espera uma expressao quanto temos ${}, por exemplo. nao podemos colocar um if dentro disto





/* CONDITIONAL OPERATOR
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') :
//     console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧'; // com o conditional operator, nao e preciso declarar a variavel fora, como seria necessario num if. o conditional operator e uma expression!!!!
console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine 🍷';
// } else {
//     drink2 = 'water 💧';
// }
// console.log(drink2);

console.log(` I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`); // como conditional operator e uma expressao. podemos fazer isto
*/


// Coding Challenge #4

const bill = 275;

// usando switch
// switch (bill) {
//     case bill >= 50 && bill <= 300:
//         console.log(`The bill was ${bill}, the tip was ${bill * .15} and the total value ${bill * 1.15}`);
//         break;
//     default:
//         console.log(`The bill was ${bill}, the tip was ${bill * .2} and the total value ${bill * 1.2}`);
// }

//usando conditional operator
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);