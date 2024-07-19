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

javascript
Copy code
const calcAverageTemp = function(arr) {
  // Your code here
};

const temps = [17, 21, 23, 19, 22];
console.log(calcAverageTemp(temps)); // Output: 20.4*/

/*Challenge 2: Find the Hottest and Coldest Days
Given an array of temperatures, write a function that finds and returns an object with the hottest and coldest temperatures.

Example:

javascript
Copy code
const findExtremes = function(arr) {
  // Your code here
};

const temps = [17, 21, 23, 19, 22];
console.log(findExtremes(temps)); // Output: { hottest: 23, coldest: 17 }*/

/*Challenge 3: Temperature Converter
Write a function that takes an array of temperatures in Celsius and converts them to Fahrenheit. The formula to convert Celsius to Fahrenheit is: 𝐹 = 𝐶 × 9/5 + 32

Example:

javascript
Copy code
const convertToFahrenheit = function(arr) {
  // Your code here
};

const celsiusTemps = [0, 20, 30, 100];
console.log(convertToFahrenheit(celsiusTemps)); // Output: [32, 68, 86, 212]*/

/*Challenge 4: Count Temperature Above Threshold
Given an array of temperatures and a threshold, write a function that counts how many temperatures are above the threshold.

Example:

javascript
Copy code
const countAboveThreshold = function(arr, threshold) {
  // Your code here
};

const temps = [17, 21, 23, 19, 22];
const threshold = 20;
console.log(countAboveThreshold(temps, threshold)); // Output: 3*/

/*Challenge 5: Temperature Trend
Write a function that takes an array of temperatures and returns a string describing the trend (increasing, decreasing, or no trend).

Example:

javascript
Copy code
const tempTrend = function(arr) {
  // Your code here
};

const temps1 = [17, 19, 21, 23, 25];
const temps2 = [25, 23, 21, 19, 17];
const temps3 = [17, 21, 19, 23, 25];
console.log(tempTrend(temps1)); // Output: "increasing"
console.log(tempTrend(temps2)); // Output: "decreasing"
console.log(tempTrend(temps3)); // Output: "no trend"*/
