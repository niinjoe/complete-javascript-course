let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
let first = "jonas"

console.log(firstName);

let javascriptIsFun = true
console.log(javascriptIsFun)

console.log(typeof true)
console.log(typeof javascriptIsFun)
console.log(typeof 23)

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun)













// Assignments Section

// Declare variables called country, continent and population and assign their values according to your own country (population in millions).
// let country = "Puerto Rico"
// let continent = "Caribbean"
let population = 3.2

// Log their values to the console.
// console.log(country)
// console.log(continent)
// console.log(population)

// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
let isIsland = true
let language = "Spanish"

// Log the types of isIsland, population, country and language to the console.
console.log(isIsland)
console.log(language)

// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// Try to change one of the changed variables now, and observe what happens.
language = 'Spanish';
const country = 'Puerto Rico';
const continent = 'Caribbean';
// const isIsland = false;
// isIsland = true;

// If your country split in half, and each half would contain half the population, then how many people would live in each half?
console.log(population/2)

// Increase the population of your country by 1 and log the result to the console.
console.log(population+1)

// Finland has a population of 6 million. Does your country have more people than Finland?
console.log(population>6)

// The average population of a country is 33 million people. Does you country have less people than the average country?
console.log(population<33)

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
let description1 = country+" is in "+continent+", and its "+population+" million people speak "+language+"."
console.log(description1)

// Recreate the description variable from the last assignment, this time using the template literal syntax.
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description)

// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
let string = `${country}'s population is ${33-population} million below average`
console.log(string)

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
population = 13
console.log(population)
population = 130
console.log(population)
population = 3.2
console.log(population)

// Example code
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}