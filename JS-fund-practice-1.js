"use strict";
console.log("-------------------------------- JavaScript Fund Practice – Part 1");

console.log("-------------------------------- Strings and Template Literals");

// Recreate the description variable from the last assignment, this time using the template literal syntax.
// 'Portugal is in Europe, and its 11 million people speak portuguese'.

let country = "Portugal";
let continent = "Europe";
let population = 11;
let language = "portuguese";
console.log(`${country} is in ${continent}, and it's ${population} million people speak ${language}.`);

console.log("-------------------------------- Taking Decisions: if / else Statements");

// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below the world average of 33 million" (the 22 is the average of 33 minus the country's population).

if (population > 33) {
  console.log(`${country}'s population is ${population - 33} million above the world average of 33 million.`);
} else {
  console.log(`${country}'s population is ${33 - population} million below the world average of 33 million.`);
}

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

console.log("-------------------------------- Strings vs Numbers");

// Predict the result of these 5 operations without executing them:

// "9" - "5" // 4
// "19" - "13" + "17" // "617"
// "19" - "13" + 17 // 23
// "123" < 57 // false
// 5 + 6 + "4" + 9 - 4 - 2 // 11 + "4" = "114" + 9 = "1149" - 4 = 1145 - 2 = 1143
// Execute the operations to check if you were right.

console.log("-------------------------------- Equality Operators: == vs. ===");

// Declare a variable numNeighbours based on a prompt input like this:
// prompt('How many neighbour countries does your contry have?');

// let numNeighbors = prompt("How many neighboring countries does your country have?");
// numNeighbors = Number(numNeighbors); // prompt inputs are initially strings, so we need to convert to number
// console.log(numNeighbors, typeof numNeighbors);

// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

// Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

// Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

// Test the code with different values of numNeighbours, including 1 and 0.

// if (numNeighbors === 1) {
// if we dont conververt input to Number, then we would have to use the loose equality comparison here
//   console.log("Only 1 border!");
// } else if (numNeighbors >= 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

// Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

// Reflect on why we should use the === operator and type conversion in this situation.

console.log("-------------------------------- Logical Operators");

// Comment out the previous code so the prompt doesn't get in the way.

// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

// If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.

// Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).

const countryObj = {
  name: "Portugal",
  language: "portuguese",
  population: 11,
  continent: "Europe",
  isIsland: false,
};

if (countryObj.language === "english" && countryObj.population < 50 && countryObj.isIsland === false) {
  console.log(`${countryObj.name} is your place to live!`);
} else {
  console.log(`${countryObj.name} does not meet your criteria :(`);
}

console.log("-------------------------------- The switch Statement");

// Use a switch statement to log the following string for the given language:

// chinese or mandarin: 'MOST number of native speakers!';
// spanish: '2nd place in number of native speakers';
// english: '3rd place';
// hindi: 'Number 4';
// arabic: '5th most spoken language';
// for all other simply log 'Great language too :D'.

// const languageRanking = "Enter Language Here";

console.log("-------------------------------- The Conditional (Ternary) Operator");

// If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
