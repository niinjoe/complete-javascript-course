// if (day === 'monday') {
//     console.log('Plan course structure')
//     console.log('Go to coding meetup')
// } else if (day === 'tuesday'){
//     console.log('Prepare theory videos')
// } else if (day === 'wednesday' || day === 'tursday'){
//     console.log('Write code examples')
// } else if (day === 'friday'){
//     console.log('Record videos')
// } else if (day === 'saturday' || day === 'sunday'){
//     console.log('Enjoy the weekend')
// } else {
//     console.log('Not a valid day!')
// }

/* Assignments Section */
// Declare variables called country, continent and population and assign their values according to your own country (population in millions).
// let country = "Puerto Rico";
// let continent = "North America";
// let population = 3.2;
// Log their values to the console.
// console.log(country, continent, population);
// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
// let isIsland = true;
/*let language;
// Log the types of isIsland, population, country and language to the console.
// console.log(typeof isIsland, typeof population, typeof country, typeof language)
// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
language = "spanish";
// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// Try to change one of the changed variables now, and observe what happens.
const country = "Puerto Rico";
const continent = "North America";
let population = 3.2;
// const isIsland = true;
// If your country split in half, and each half would contain half the population, then how many people would live in each half?
console.log(population/2);
// Increase the population of your country by 1 and log the result to the console.
population ++;
console.log(population);
population --;
// Finland has a population of 6 million. Does your country have more people than Finland?
const finlandPopulation = 6;
console.log(population > finlandPopulation);
// The average population of a country is 33 million people. Does you country have less people than the average country?
const averagePopulation = 33;
console.log(population < averagePopulation);
// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
// Recreate the description variable from the last assignment, this time using the template literal syntax.
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);
// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
// population = 130
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`);
}

console.log('9' - '5'); // -> '4'
console.log('19' - '13' + '17'); // -> 23
console.log('19' - '13' + 17); // -> 617
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 72

// Declare a variable numNeighbours based on a prompt input like this:
// prompt('How many neighbour countries does your contry have?');
// const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));
// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).
// Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.
// Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).
// Test the code with different values of numNeighbours, including 1 and 0.
// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }
// Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?
// Finally, convert numNeighbours to a number, and watch what happens now when you input 1.
// Reflect on why we should use the === operator and type conversion in this situation.

// Comment out the previous code so the prompt doesn't get in the way.

// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.
const newCountry = "Australia"
const speaksEng = true
const population1 = 30
isIsland = false
// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
if (speaksEng === true && population1 < 50 && isIsland === false) {
  console.log(`You should live in ${newCountry} :)`)
} else {console.log(`${newCountry} does not meet your criteria :(`)}
// If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.
// Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).

// Use a switch statement to log the following string for the given language:

// chinese or mandarin: 'MOST number of native speakers!';

// spanish: '2nd place in number of native speakers';

// english: '3rd place';

// hindi: 'Number 4';

// arabic: '5th most spoken language';

// for all other simply log 'Great language too :D'.
*/

/* Use a switch statement to log the following string for the given language: */

// Switch statement example:
/*let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  default:
    console.log("Looking forward to the weekend!");
}

// Exercise code:
let language = "chinese";
switch (language) {
  case "chinese" || "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/

// ---------------Assignments Part 2----------------
/*Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.*/

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

console.log(describeCountry("Puerto Rico", 3.2, "San Juan"));
console.log(describeCountry("Dominican Republic", 4.4, "Santo Domingo"));
console.log(describeCountry("Cuba", 5.6, "La Havana"));

/*The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).*/
// function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
percentageColombia = percentageOfWorld1(8.9);
percentageVenezuela = percentageOfWorld1(11.3);
percentageBrazil = percentageOfWorld1(12.5);

console.log(percentageColombia, percentageVenezuela, percentageBrazil);

// function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
percentagePuertoRico = percentageOfWorld2(3.2);
percentageDominicanRepublic = percentageOfWorld2(4.4);
percentageCuba = percentageOfWorld2(5.6);

console.log(percentagePuertoRico, percentageDominicanRepublic, percentageCuba);

// arrow functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;

/* Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

Call describePopulation with data for 3 countries of your choice.*/
const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
};

console.log(describePopulation("China", 1441));

populations = [3.2, 11.4, 11.1, 2.8];
console.log(length.population === 3);
percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

/* Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'. */

neighbours = ["Venezuela", "Brazil", "Panama"];
neighbours.push("Utopia");
neighbours.pop();
console.log(neighbours);

for (let i = 0; i < 4; i++) {
  if (neighbours[i] === "Germany") {
    console.log("It's a central european country :D");
  } else if (neighbours[i] !== "Germany") {
    console.log("Probably not a central european country :D");
  }
}

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Venezuela")] = "Peru;";
console.log(neighbours);
