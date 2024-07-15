"use strict";

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive.')

// Functions
function logger() {
    console.log('My name is John');
}

// Calling, running or invoking funtion
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2)

// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Bob'));*/

// Arrays Section

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", " Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years[0]));

// for age in years {
//     const age[age] = calcAge(years[age])
// }
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years.length - 1)];
console.log(ages);

// Add Elements
friends.push("Joe");
console.log(friends);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last
friends.pop();
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));


/* Objects Section */

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    return 2037 - this.birthYear;
  },

  checkLicense: function () {
    if (this.hasDriversLicense) {
      return "has a driver's license";
    } else {
      return "does not have a driver's license";
    }
  },
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const insterestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);
console.log(jonas.insterestedIn);

if (jonas[insterestedIn]) {
  console.log(jonas[insterestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
console.log(
  `Jonas has ${jonas["friends"].length} friends, and his best friend is called ${jonas["friends"][0]}`
);

// Challenge 2
// "Jonas is a 46-year old teacher, and he has a driver's license."

console.log(
  `${jonas.firstName} is a ${jonas.calcAge()}-year old ${
    jonas.job
  }, and he ${jonas.checkLicense()}.`
);
