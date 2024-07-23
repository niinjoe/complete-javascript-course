// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let neighbours = ['Venezuela', 'Brazil', 'Panama'];
neighbours.push('Utopia');
neighbours.pop();
console.log(neighbours);

for (let i = 0; i < 4; i++) {
  if (neighbours[i] === 'Germany') {
    console.log("It's a central european country :D");
  } else if (neighbours[i] !== 'Germany') {
    console.log('Probably not a central european country :D');
  }
}

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Venezuela')] = 'Peru;';
console.log(neighbours);

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console*/

const printForecast = function (arr) {
  let forecastString = '';
  for (let i = 0; i < arr.length; i++) {
    let day = i + 1;
    let tempString = `... ${arr[i]}ºC in ${day} days `;
    forecastString += tempString;
  }
  forecastString += '...';
  console.log(forecastString);
};

let arr = [17, 21, 23];
printForecast(arr);

// GPT Code:
const printForecast1 = function (arr) {
  // Create an array of formatted strings using map
  const forecastArray = arr.map(
    (temp, index) => `... ${temp}ºC in ${index + 1} days`
  );

  // Join the array elements into a single string
  const forecastString = forecastArray.join(' ');

  // Log the final string
  console.log(forecastString);
};

let arr1 = [17, 21, 23];
printForecast1(arr1);

/* --------------GPT Challenges--------------*/
/*Challenge 1: Calculate Average Temperature
Given an array of temperatures, write a function that calculates and returns the average temperature.

Example:
const calcAverageTemp = function(arr) {
  // Your code here
};

const temps = [17, 21, 23, 19, 22];
console.log(calcAverageTemp(temps)); // Output: 20.4*/
const calcAverageTemp = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const temps = [17, 21, 23, 19, 22];
console.log(calcAverageTemp(temps));

/*Challenge 2: Find the Hottest and Coldest Days
Given an array of temperatures, write a function that finds and returns an object with the hottest and coldest temperatures.

Example:
const findExtremes = function(arr) {
  // Your code here
};

const temps = [17, 21, 23, 19, 22];
console.log(findExtremes(temps)); // Output: { hottest: 23, coldest: 17 }*/
const findExtremes = function (arr) {
  let hottest = -Infinity;
  let coldest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < coldest) {
      coldest = arr[i];
    } else if (arr[i] > hottest) {
      hottest = arr[i];
    }
  }
  return console.log(`hottest: ${hottest}, coldest: ${coldest}`);
};

const temps2 = [17, 21, 23, 19, 22];
findExtremes(temps2);

/*Challenge 3: Temperature Converter
Write a function that takes an array of temperatures in Celsius and converts them to Fahrenheit. The formula to convert Celsius to Fahrenheit is: 𝐹 = 𝐶 × 9/5 + 32

Example:
const convertToFahrenheit = function(arr) {
  // Your code here
};

const celsiusTemps = [0, 20, 30, 100];
console.log(convertToFahrenheit(celsiusTemps)); // Output: [32, 68, 86, 212]*/
const convertToFahrenheit = function (arr) {
  let farenheitTemps = [];
  for (let i = 0; i < arr.length; i++) {
    farenheitTemps.push(arr[i] * (9 / 5) + 32);
  }
  return console.log(farenheitTemps);
};

const celsiusTemps = [0, 20, 30, 100];
convertToFahrenheit(celsiusTemps);

/* GPT improved code:
const convertToFahrenheit = function (arr) {
  // Use map to transform each Celsius temperature to Fahrenheit
  const fahrenheitTemps = arr.map(temp => temp * (9 / 5) + 32);
  return fahrenheitTemps; // Return the converted array
};

const celsiusTemps = [0, 20, 30, 100];
const fahrenheitTemps = convertToFahrenheit(celsiusTemps); // Store the result
console.log(fahrenheitTemps); // Log the result
*/

/*Challenge 4: Count Temperature Above Threshold
Given an array of temperatures and a threshold, write a function that counts how many temperatures are above the threshold.

Example:
const countAboveThreshold = function(arr, threshold) {
  // Your code here
};

const temps = [17, 21, 23, 19, 22];
const threshold = 20;
console.log(countAboveThreshold(temps, threshold)); // Output: 3*/

const countAboveThreshold = function (arr, threshold) {
  let aboveThreshold = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= threshold) {
      aboveThreshold += 1;
    }
  }
  return aboveThreshold;
};

const temps3 = [17, 21, 23, 19, 22];
const threshold = 20;
console.log(countAboveThreshold(temps3, threshold)); // Output: 3

/* GPT improved code:
const countAboveThreshold = function (arr, threshold) {
  let aboveThreshold = 0;
  for (const temp of arr) {
    if (temp > threshold) { // Use `>` if strictly above threshold
      aboveThreshold += 1;
    }
  }
  return aboveThreshold;
};

const temps3 = [17, 21, 23, 19, 22];
const threshold = 20;
console.log(countAboveThreshold(temps3, threshold)); */

/*Challenge 5: Temperature Trend
Write a function that takes an array of temperatures and returns a string describing the trend (increasing, decreasing, or no trend).

Example:
const tempTrend = function(arr) {
  // Your code here
};*/

const tempTrend = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] && arr[i + 1] > arr[i + 2]) {
      return 'decreasing';
    } else if (arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2]) {
      return 'increasing';
    } else {
      return 'no trend';
    }
  }
};

const tempsA = [17, 19, 21, 23, 25];
const tempsB = [25, 23, 21, 19, 17];
const tempsC = [17, 21, 19, 23, 25];
console.log(tempTrend(tempsA)); // Output: "increasing"
console.log(tempTrend(tempsB)); // Output: "decreasing"
console.log(tempTrend(tempsC)); // Output: "no trend"

/*
GPT improved code:
const tempTrend = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] && arr[i + 1] > arr[i + 2]) {
      return 'decreasing';
    } else if (arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2]) {
      return 'increasing';
    } else {
      return 'no trend';
    }
  }
};

const tempsA = [17, 19, 21, 23, 25];
const tempsB = [25, 23, 21, 19, 17];
const tempsC = [17, 21, 19, 23, 25];
console.log(tempTrend(tempsA)); // Output: "increasing"
console.log(tempTrend(tempsB)); // Output: "decreasing"
console.log(tempTrend(tempsC)); // Output: "no trend"
*/

/*
Challenge 1: Object Manipulation
Write a function that takes an array of student objects and returns an array of student names who have scored above a certain threshold.
*/
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 79 },
  { name: 'Dave', score: 95 },
];

const getTopStudents = function (students, threshold) {
  let topStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > threshold) {
      topStudents.push(students[i].name);
    }
  }
  return topStudents;
};

console.log(getTopStudents(students, 80)); // Output: ['Alice', 'Bob', 'Dave']

/*Challenge 2: Higher-Order Array Methods
Write a function that takes an array of numbers and returns the sum of all even numbers using the filter and reduce methods.

Example:
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvens = function (numbers) {
  return numbers
    .filter((num) => num % 2 === 0) // Filter even numbers
    .reduce((acc, current) => acc + current, 0); // Sum the filtered values
};

console.log(sumOfEvens(numbers)); // Output: 30
/*
Challenge 3: Closures
Write a function that returns another function. The returned function should increment a counter each time it is called.

Example:
*/
let COUNT = 0;
const createCounter = function () {
  const counter = function () {
    COUNT += 1;
  };
  return counter;
};

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
/*
Challenge 4: Promises
Write a function that returns a promise that resolves after a given number of milliseconds.

Example:
*/
const delay = function (ms) {
  // Your code here
};

delay(1000).then(() => console.log('1 second has passed')); // Output: "1 second has passed" (after 1 second)

/*Challenge 5: Asynchronous Functions
Write an asynchronous function that fetches data from a public API and logs the result.

Example:
*/
const fetchData = async function () {
  // Your code here
};

fetchData(); // Output: Logs data from the API
