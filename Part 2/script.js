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

/* Introduction to Objects

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}; // Objeto Jonas tem 5 properties

*/

/* Dot vs Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas);

console.log(jonas.lastName); // so sabemos o que tem lastName. nao da pra inventar. so aceita o property name
console.log(jonas['lastName']); // permite fazer operacoes, como no exemplo abaixo. pode-se colocar qualquer expressao

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas[interestedIn]); // usando os brackets, podemos receber o input do utilizador como uma string e identificar a propertie no objeto


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! choose between firstName, lastName, age, job, and friends')
}

jonas.location = 'Portugal';
jonas['dog'] = 'maric';
console.log(jonas);

// Challenge
// "Jonas has 3 friends and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);
*/


/* Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) { //quando funcao attached a um objeto, chama-se metodo
    //     return 2037 - birthYear;
    // }
    // calcAge: function () {
    //     // console.log(this); // mostra todo o objeto jonas. e o objeto jonas que chama esta funcao
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear; // criamos uma propriedade chamada age
        return this.age;
    }
};

console.log(jonas.calcAge()); // jonas esta a chamar o metodo (jonas.)
//console.log(jonas['calcAge'](1991));

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    calcAge: function () {
        this.age = 2037 - this.birthYear; // criamos uma propriedade chamada age
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;

    }
};
console.log(jonas.getSummary());
*/

/* Coding Challenge #3
const marks = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(marks.calcBMI(), john.calcBMI());
if (marks.bmi > john.bmi) {
    console.log(`${marks.fullName}'s BMI (${marks.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > marks.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${marks.fullName}'s BMI (${marks.bmi})`);
}

*/

// for loop keeps runnin while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}