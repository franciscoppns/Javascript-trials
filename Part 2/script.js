'use strict'; // tem que ser a primeira coisa no codigo, senao, nao e ativo

/* Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'; // o JavaScript guardou a palavra 'interface' para o futuro e strict mode deteta esta palavra e indica que esta reservada
//const private = 5; // mesma coisa que com interface. o strict mode tambem reserva palavras que possam possivelmente ser usadas no futuro
*/



/* Functions
function logger() {
    console.log('My name is Jonas');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

//appleJuice = fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0); // o return da funcao fica guardado na funcao. para haver output do return, e necessario guarda-lo numa variavel definida. tal como aqui, ou fazer um console.log da funcao
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); // aqui nao armazenamos o valor do retorno da funcao

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)
*/

/*Function Declarations vs Expressions

// Function declaration

function calcAge1(birthYear) { // Parametro 'birthYear'.
    return 2037 - birthYear;
}

// Function Expression
const age1 = calcAge1(1991); // Argumento e o que colocamos aqui, neste caso, 1991.
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991)
console.log(age1, age2);

// a Function declaration pode ser chamada antes de ser escrita, relembrar c++ onde as funcoes ficavam no fim e eram chamadas no inicio do codigo. function express nao consegue fazer isto
*/

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

/* Arrow functions

// Arrow function
// 1 parametro
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// multiplos parametros
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/



/* Functions calling other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/





/* Reviewing functions
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }


    //return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));

console.log(yearsUntilRetirement(1950, 'Mike'));

*/


/* CODING CHALLENGE #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const DolphinsAverage = calcAverage(85, 54, 41);
console.log(DolphinsAverage);

const KoalasAverage = calcAverage(23, 34, 27,);
console.log(KoalasAverage);

const checkWinner = function (DolphinsAvg, KoalasAvg) {
    if (KoalasAvg >= 2 * DolphinsAvg) {
        console.log(`Koalas win ${KoalasAvg} vs ${DolphinsAvg}`);
    } else if (DolphinsAvg >= 2 * KoalasAvg) {
        console.log(`Dolphins win ${DolphinsAvg} vs ${KoalasAvg}`);
    } else if (KoalasAvg === DolphinsAvg) {
        console.log("It's a tie.");
    } else {
        console.log('No team has a score the double of the other team. No winner');
    }
}

checkWinner(DolphinsAverage, KoalasAverage)
*/

/* Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']; //mais usual usar assim
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length) // indica a quantidade de elementos na array

console.log(friends[friends.length - 1]) // como ir buscar o ultimo elemento de uma array

friends[2] = 'Jay';
console.log(friends);

const firstname = 'Jonas';
const jonas = [firstname, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);


//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
//calcAge(years); // nao resulta para chamar a funcao com os argumentos da array
const age1 = (calcAge(years[0]));
const age2 = (calcAge(years[1]));
const age3 = (calcAge(years[years.length - 1]));
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

*/


/* Basic Array Operations
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newlength = friends.push('Jay'); // add elemento fim da array. como e uma funcao, retorna algo e esse algo e o comprimento da array
console.log(friends);
console.log(newlength);
//const check = friends[friends.length - 1] === 'Jay' ? 'Jay last' : 'not Jay'; // Test with conditional operator
//console.log(check);
friends.unshift('John'); // add elemento inicio array. tambem retorna length da array
console.log(friends);

//Remove elements
friends.pop(); // retirar ultimo elemento. este da return do elemento removido
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // retira primeiro elemento
console.log(friends);

console.log(friends.indexOf('Steven')); // indica em que posicao (index) 'Steve' esta armazenado
console.log(friends.indexOf('Bob')); // se n estiver na array, devolve -1

friends.push(23);
console.log(friends.includes('Steven')); // devolve true se o elemento estiver na array e false se nao. funcionaldiade ES6
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));// e feito com strict equality, logo nao faz type coersion

if (friends.includes('Steven')) { //o includes permite fazer coisas uteis
    console.log('You have a friend called Steven');
}
*/

/* Coding challenge #2
const bill = 100;

const calcTip = function (bill) {
    // const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
    // return tip;
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20; // mais simples assim
}

//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .20; // com arrow function
console.log(calcTip(bill));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(bills, tips, total);

*/

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}; // Objeto Jonas tem 5 properties