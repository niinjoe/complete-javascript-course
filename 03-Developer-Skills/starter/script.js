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
console.log(findExtremes(temps2));

/*Challenge 3: Temperature Converter
Write a function that takes an array of temperatures in Celsius and converts them to Fahrenheit. The formula to convert Celsius to Fahrenheit is: 𝐹 = 𝐶 × 9/5 + 32

Example:
const convertToFahrenheit = function(arr) {
  // Your code here
};

const celsiusTemps = [0, 20, 30, 100];
console.log(convertToFahrenheit(celsiusTemps)); // Output: [32, 68, 86, 212]*/
const convertToFahrenheit = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    return console.log(arr[i] * (9 / 5) + 32);
  }
};

const celsiusTemps = [0, 20, 30, 100];
console.log(convertToFahrenheit(celsiusTemps));

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

/* Data Structures, Modern Operators and Strings */
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
