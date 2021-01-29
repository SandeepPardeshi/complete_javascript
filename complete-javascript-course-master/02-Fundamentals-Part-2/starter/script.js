/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can Drive. ☺');

// const interface = 'Audio';
// const private = 534;
*/

/*
'use strict';

function logger() {
    console.log('My name is Sandeep');
}

// calling/ running/ invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} and oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
'use strict';

function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1989);
// console.log(age1);

// Anonymus function
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1989);

console.log(age1, age2);
*/

/*
'use strict';

const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2020 - birthyear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years...!`;
}

console.log(yearsUntilRetirement(1989, 'Sandeep'));
console.log(yearsUntilRetirement(1993, 'Shalini'));
*/

/*
'use strict';

function cutFruitPieces(fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    // console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of ${apples} apples and ${orangePieces} pieces of ${oranges} oranges.`;
    return juice;
};

console.log(fruitProcessor(2, 3));
*/

/*
'use strict';

// Test Data 1: 44 23 71, Test Data 2: 85 54 41
const firstDolph = Number(prompt("Dolphins' First Score"));
const secondDolph = Number(prompt("Dolphins' Second Score"));
const thirdDolph = Number(prompt("Dolphins' Third Score"));

// Test Data 1: 65 54 49, Test Data 2: 23 34 27
const firstKoal = Number(prompt("Koalas' First Score"));
const secondKoal = Number(prompt("Koalas' Second Score"));
const thirdKoal = Number(prompt("Koalas' Third Score"));

const calcAverage = (first, second, third) => {
    const avgScore = ((first + second + third) / 3);
    return avgScore;
}

const avgDolph = (calcAverage(firstDolph, secondDolph, thirdDolph));
// console.log(avgDolph);
const avgKoal = (calcAverage(firstKoal, secondKoal, thirdKoal));
// console.log(avgKoal);

const checkWinner = (dolph, koal) => {
    if (dolph >= (2 * koal)) {
        console.log(`Dolphins win (${avgDolph} vs. ${avgKoal})`);
        return;
    } else if (koal >= (2 * dolph)) {
        console.log(`Koalas win (${avgKoal} vs. ${avgDolph})`);
        return;
    } else {
        console.log(`No team wins, score are Dolphins: ${avgDolph} and Koalas: ${avgKoal}.`);
    }
}

checkWinner(avgDolph, avgKoal);
*/

/*
'use strict';

const friends = ['Tarun', 'Rituraj', 'Antriksha'];
console.log(friends);

const year = new Array(1991, 1984, 2008, 2020);
console.log(year);

console.log(friends[0]);

console.log(`Friends array has ${friends.length} elements.`);
console.log(friends[friends.length]);

friends[1] = 'Dude';
console.log(friends);

const sandeep = ['Sandeep', 'Pardeshi', 2020 - 1989, 'Programmer', friends];
console.log(sandeep);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
'use strict';

// Add elements
const friends = ['Tarun', 'Rituraj', 'Antriksha'];
const newLength = friends.push('Vishu');

console.log(friends);
console.log(newLength);

friends.unshift('Komal');
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Rituraj'));
console.log(friends.indexOf('Bob'));

friends.push(7);
console.log(friends.includes('Tarun'))
console.log(friends.includes('Bob'))
console.log(friends.includes(7))
*/

/*
let tip;

const calcTip = (bill) => {
    (bill > 49 && bill < 301) ? console.log(`Bill amount is ${bill}, the tip value is ${tip = (bill * 15 / 100)}, and the final value is ${bill + tip}`) : console.log(`Bill amount is ${bill}, the tip value is ${tip = (bill * 20 / 100)}, and the final value is ${bill + tip}`);
    return tip;
}

const bills = new Array(125, 555, 44);

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[bills.length - 1]);

console.log(tip1, tip2, tip3);

const tips = [tip1, tip2, tip3];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];
console.log(total);
*/

/*
'use strict';

const sandeepArray = [
    'Sandeep',
    'Pardeshi',
    2037 - 1989,
    'Software Developer',
    ['Tarun', 'Antriksha', 'Raj']
];

// console.log(sandeepArray);

const sandeep = {
    firstName: 'Sandeep',
    lastName: 'Pardeshi',
    age: 2037 - 1989,
    job: 'Software Developer',
    friends: ['Tarun', 'Antriksha', 'Raj']
};

console.log(sandeep);

console.log(sandeep.lastName);
console.log(sandeep['lastName']);

const nameKey = 'Name';
console.log(sandeep['first' + nameKey]);
console.log(sandeep['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Sandeep? Choose from firstName, lastName, age, job, and friends');

if (sandeep[interestedIn]) {
    console.log(sandeep[interestedIn]);
} else {
    console.log('Wrong Selection')
}

sandeep.location = 'Canada';
sandeep['twitter'] = '@sandeeppardeshi';
console.log(sandeep);

console.log(sandeep.firstName + ' has ' + sandeep.friends.length + ' friends, and his best friend is called ' + sandeep['friends'][0]);

console.log(`${sandeep.firstName} has ${sandeep.friends.length} friends, and his best friend is called ${sandeep.friends[0]}`);
*/

/*
'use strict';

const sandeep = {
    firstName: 'Sandeep',
    lastName: 'Pardeshi',
    birthYear: 1989,
    job: 'Software Developer',
    friends: ['Tarun', 'Antriksha', 'Raj'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    isDriver: function () {
        return this.hasDriversLicense ? 'a' : 'no';
    }
};

// console.log(sandeep.calcAge());

console.log(sandeep.age);
console.log(sandeep.age);
console.log(sandeep.age);
console.log(sandeep.age);

// console.log(sandeep['calcAge']());

console.log(`${sandeep.firstName} is ${sandeep.calcAge()}-years old ${sandeep.job}, and he has ${sandeep['isDriver']()} driver's license.`);
*/

/*
'use strict';

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    BMI: function () {
        return (this.mass / (this.height ** 2)).toFixed(2);
    }
}

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    BMI: function () {
        return (this.mass / (this.height ** 2)).toFixed(2);
    }
}

console.log(`${(john.BMI() > mark.BMI()) ? john.firstName + ' ' + john.lastName : mark.firstName + ' ' + mark.lastName}'s BMI (${(john.BMI() > mark.BMI()) ? john.BMI() : mark.BMI()}) is heigher than ${(john.BMI() < mark.BMI()) ? john.firstName + ' ' + john.lastName : mark.firstName + ' ' + mark.lastName}'s (${(john.BMI() < mark.BMI()) ? john.BMI() : mark.BMI()})!`);
*/

/*
'use strict';

for (let rep = 1; rep <= 10; rep += 2) {
    console.log('Lifting weight repetition ' + rep + ' 🏋️‍♀️');
}
*/

/*
'use strict';

const sandeep = [
    'Sandeep',
    'Pardeshi',
    2037 - 1989,
    'Software Developer',
    ['Tarun', 'Antriksha', 'Raj'],
    true
];

const types = [];

for (let i = 0; i <= sandeep.length - 1; i++) {
    console.log(sandeep[i], typeof sandeep[i]);

    // Filling types array
    // types[i] = typeof sandeep[i];

    types.push(typeof sandeep[i]);
}

console.log(types);

const years = [1989, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// Continue and Break
console.log('---- ONLY STRING ----')
for (let i = 0; i <= sandeep.length - 1; i++) {
    if (typeof sandeep[i] !== 'string') continue;
    console.log(sandeep[i], typeof sandeep[i]);
}

console.log('---- BREAK WITH NUMBER ----')
for (let i = 0; i <= sandeep.length - 1; i++) {
    if (typeof sandeep[i] === 'number') break;
    console.log(sandeep[i], typeof sandeep[i]);
}
*/

/*
'use strict';

const sandeep = [
    'Sandeep',
    'Pardeshi',
    2037 - 1989,
    'Software Developer',
    ['Tarun', 'Antriksha', 'Raj']
];

for (let i = sandeep.length - 1; i >= 0; i--) {
    console.log(i, sandeep[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
    }
}
*/

/*
'use strict';

// for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weight repetition ${rep} 🏋️‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;

//     if (dice === 6) console.log('Loop ended at 6');
// }
*/

'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function () {
    for (let i = 0; i < bills.length; i++) {
        (bills[i] > 49 && bills[i] < 301) ? console.log(`Bill amount is ${bills[i]}, the tip value is ${tips[i] = (bills[i] * 15 / 100)}, and the final value is ${bills[i] + tips[i]}`) : console.log(`Bill amount is ${bills[i]}, the tip value is ${tips[i] = (bills[i] * 20 / 100)}, and the final value is ${bills[i] + tips[i]}`);

        // tips.push(tips[i]);
        totals.push(bills[i] + tips[i]);
    }
}

calcTip();

console.log(tips, totals);

let sum = 0;
let average = 0;
const calcAverage = function (arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i];
    }
    console.log(`Total Sum is ${sum}`);
    return average = sum / (arr.length);
}

const averageValue = calcAverage(totals);

console.log(`Average of ${totals} is ${averageValue}`);