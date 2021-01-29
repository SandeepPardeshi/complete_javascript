// Remember, we're gonna use strict mode in all scripts now!

/*
'use strict';

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));
*/

/*
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 23]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2: Providing 2 arrays to function and comparing the values.
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 0, 9], [5, 7, 0]);
console.log(amplitudeNew);
*/

/*
'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    //value: Number(prompt('Degree celcius:')),
    value: 10,
  };

  console.log(measurement);
  //   console.warn(measurement);
  //   console.error(measurement);
  //   console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/

'use strict';

// test data: 17, 21, 23
let temp1 = Number(prompt('Temp1'));
let temp2 = Number(prompt('Temp2'));
let temp3 = Number(prompt('Temp3'));

const temperatures = [temp1, temp2, temp3];

const temperatureDefault = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i <= arr.length - 1; i++) {
    str = str + `... ${arr[i]}\u00B0C in ${i + 1} days `;
  }
  console.log(str + '...');
};

printForecast(temperatures);
printForecast(temperatureDefault);
