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
