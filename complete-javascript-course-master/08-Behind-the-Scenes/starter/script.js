// 'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Ohh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // console.log(add(2, 3));
  }
  printAge();
  return age;
}

const firstName = 'Sandeep';
calcAge(1989);
*/

/*
'use strict';

console.log(me);
console.log(job);
console.log(year);

var me = 'Sandeep';
let job = 'Software Engineer';
const year = 1989;
*/

/*
'use strict';

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// Functions
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

function deleteShoppingCart() {
  console.log('All products are deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

'use strict';

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1989);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1989);
*/

/*
var firstName = 'Matilda';

const sandeep = {
  firstName: 'Sandeep',
  year: 1989,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    // Solution 2
    // const self = this;
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    // console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

sandeep.greet();
sandeep.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(1, 2, 3, 4, 5, 6);

const addArrow = (a, b) => a + b;
*/

/*
'use strict';

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Sandeep',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me', me);
*/

'use strict';

let lastName = 'Kanchan';
let oldLastName = lastName;
lastName = 'Pardeshi';

console.log(lastName, oldLastName);

const Shalini = {
  firstName: 'Shalini',
  lastName: 'Kanchan',
  age: 26,
};

const marriedShalini = Shalini;
marriedShalini.lastName = 'Pardeshi';
console.log('Before marriage: ', Shalini);
console.log('After marriage: ', marriedShalini);

// Copying objects
const Shalini2 = {
  firstName: 'Shalini',
  lastName: 'Kanchan',
  age: 26,
  family: ['Alice', 'Bob'],
};

const shaliniCopy = Object.assign({}, Shalini2);
shaliniCopy.lastName = 'Pardeshi';

shaliniCopy.family.push('Mary');
shaliniCopy.family.push('John');

console.log('Before Marriage:', Shalini2);
console.log('After Marriage:', shaliniCopy);
