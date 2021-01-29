/*
let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN!!');

console.log(40 + 8 + 23 - 10);

console.log('Sandeep');

let firstName = "Sandeep";
let first = "Sam"; // Variables are written in camelCase

console.log(firstName);
console.log(firstName);

let myFirstJob = 'Programmer';
let myCurrentJob = 'Full_Stack_Developer';

console.log(myCurrentJob);

let myCountry = 'Hindustan';
let myContinent = 'Asia';
let population = '1366 Million';

console.log(myCountry + ' is an awesome country in ' + myContinent + ' but has population of ' + population);
*/

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 30);
// console.log(typeof 'Sandeep');

// javaScriptIsFun = 'Yes!';
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1989;
// console.log(typeof year);
// console.log(typeof null);

/*
let age = 30;
age = 30;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'Programmer';
*/

const now = 2037;
const ageSandeep = now - 1989;
const ageShalini = now - 1993;
// console.log(ageSandeep, ageShalini);

// console.log(ageSandeep * 2, ageSandeep / 10, 2 ** 3);

// const firstName = 'Sandeep';
// const lastName = 'Pardeshi';

// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x*4;
// x++;
// x--;
// x--;
// console.log(x);

// // Comparison Operators

// console.log(ageSandeep > ageShalini); // >, <, >=, <=
// console.log(ageShalini >= 50);

// const isFullAge = ageShalini >= 50;

// console.log(now - 1989 > now - 1993);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageSandeep + ageShalini) / 2;
// console.log(ageSandeep, ageShalini, averageAge);

// let massMark = 78;
// let heightMark = 1.69;
// let bmiMark = massMark / (heightMark ** 2);
// console.log('BMI for Mark: ' + bmiMark);

// let massJohn = 92;
// let heightJohn = 1.95;
// let bmiJohn = massJohn / (heightJohn ** 2);
// console.log('BMI for John: ' + bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// let massMark = 95;
// let heightMark = 1.88;
// let bmiMark = massMark / (heightMark ** 2);
// console.log('BMI for Mark: ' + bmiMark.toFixed(2));

// let massJohn = 85;
// let heightJohn = 1.76;
// let bmiJohn = massJohn / (heightJohn ** 2);
// console.log('BMI for John: ' + bmiJohn.toFixed(2));

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// const firstName = 'Sandeep';
// const job = 'Project Manager Programmer';
// const birthYear = 1989;
// const year = 2037;

// const sandeep = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

// console.log(sandeep);

// const sandeepNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(sandeepNew);

// console.log(`Just a regular string...`);

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('Sarah can start driving licence 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years 😔`);
// }

// let century;
// const birthYear = 1989;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// let massMark = 78;
// let heightMark = 1.69;
// let bmiMark = massMark / (heightMark ** 2);
// console.log('BMI for Mark: ' + bmiMark);

// let massJohn = 92;
// let heightJohn = 1.95;
// let bmiJohn = massJohn / (heightJohn ** 2);
// console.log('BMI for John: ' + bmiJohn);

// // const markHigherBMI = bmiMark > bmiJohn;
// // console.log(markHigherBMI);

// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI (${bmiMark.toFixed(2)}) is heigher than John's (${bmiJohn.toFixed(2)})`);
// } else {
//     console.log(`John's BMI (${bmiJohn.toFixed(2)}) is heigher than Mark's (${bmiMark.toFixed(2)})`);
// }

// const inputYear = '1989';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Sandeep'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// let n = '2' + 1;
// n = n - 1;
// console.log(n);

// 5 falsy values: 0, '', undefined, null ,NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Sandeep'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//     console.log("Don't spend it all.");
// } else {
//     console.log("You should get a job!");
// }

// let height;
// if (height) {
//     console.log('Yah! Height is defined');
// } else {
//     console.log('Height is Undefined');
// }

// const age = '18';
// if (age === 18) console.log('You just became an adult :D (Strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your fav number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 7) {
//     console.log('Cool! 7 is an amazing number');
// } else if (favourite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 7 or 9');
// }

// if (favourite !== 7) console.log('Why not 7');

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// //     console.log('Sarah is able to drive!');
// // } else {
// //     console.log('Spmeone else should drive...');
// // }

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Spmeone else should drive...');
// }

/*
let firstDolph = Number(prompt('Score by Dolphins for the first match: '));
let secondDolph = Number(prompt('Score by Dolphins for the second match: '));
let thirdDolph = Number(prompt('Score by Dolphins for the third match: '));

console.log((firstDolph + secondDolph + thirdDolph) / 3);

let firstKoal = Number(prompt('Score by Koalas for the first match: '));
let secondKoal = Number(prompt('Score by Koalas for the second match: '));
let thirdKoal = Number(prompt('Score by Koalas for the third match: '));

console.log((firstKoal + secondKoal + thirdKoal) / 3);

let scoreDolph = (firstDolph + secondDolph + thirdDolph) / 3;
let scoreKoal = (firstKoal + secondKoal + thirdKoal) / 3;

if (scoreDolph >= 100 && scoreKoal >= 100 && scoreDolph === scoreKoal) {
    console.log("That's a tie!!!");
} else if (scoreDolph >= 100 && scoreDolph > scoreKoal) {
    console.log("Dolphins are the winners...");
} else if (scoreKoal >= 100 && scoreKoal > scoreDolph) {
    console.log("Koalas are the winners...");
} else {
    console.log(`Dolphins with score ${scoreDolph} and Koalas with score ${scoreKoal} doesn't meet the minimum requirement of 100 and are not qualified to be called as winners.`);
}
*/

/*
const day = 'wednesday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;

    case 'tuesday':
        console.log('Prepare theory videos');
        break;

    case 'wednesday':

    case 'thursday':
        console.log('Write code example');
        break;

    case 'friday':
        console.log("record videos");
        break;

    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!!!');
        break;

    default:
        console.log('Not a valid day');
}
*/

/*
const age = 19;
age >= 18 ? console.log('I like to drink milk... 🍼') : console.log('I like to drink water...💧');

const drink = age >= 18 ? 'Wine 🍷' : 'Water 💧';
console.log(drink);
*/

let bill = 430;
let tip;

(bill > 49 && bill < 301) ? console.log(`Bill amount is ${bill}, the tip value is ${tip = (bill * 15 / 100)}, and the final value is ${bill + tip}`) : console.log(`Bill amount is ${bill}, the tip value is ${tip = (bill * 20 / 100)}, and the final value is ${bill + tip}`);
