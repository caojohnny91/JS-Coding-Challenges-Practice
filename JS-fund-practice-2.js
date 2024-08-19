"use strict";
console.log("-------------------------------- JavaScript Fund Practice – Part 2");

console.log("-------------------------------- Functions Calling Other Functions");

// Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

// Call describePopulation with data for 3 countries of your choice.

console.log("-------------------------------- Introduction to Arrays");

// Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

// Log to the console whether the array has 4 elements or not (true or false).

// Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.

console.log("-------------------------------- Basic Array Operations (Methods)");

// Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

// Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

// If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

// Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

console.log("-------------------------------- Introduction to Objects");

// Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).

console.log("-------------------------------- Dot vs. Bracket Notation");

// Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

// Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

console.log("-------------------------------- Object Methods");

// Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// Call the describe method.

// Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

// myCountry.describe = `${this.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`;

console.log("-------------------------------- Iteration: The for Loop");

// There are elections in your country! in a small town, there are only 5 voters. Use a for loop to simulate the 5 people voting, by logging a string like this to the console (for numbers 1 to 5): 'Voter number 1 is currently voting'.

console.log("-------------------------------- Looping Arrays, Breaking and Continuing");

// Let's bring back the populations array from a previous assignment.

// Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

// Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.

// const populations = [1441, 333, 8.8, 10];

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentages = [
//   percentageOfWorld1(populations[0]), // 18.241
//   percentageOfWorld1(populations[1]), // 4.215
//   percentageOfWorld1(populations[2]), // 0.111
//   percentageOfWorld1(populations[3]), // 0.127
// ];

console.log("-------------------------------- Looping Backwards and Loops in Loops");

// Store this array of arrays into a variable called listOfNeighbours:

// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.

// You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

console.log("-------------------------------- The while Loop");

// Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

// Reflect on what solution you like better for this task: the for loop or the while loop?

// const populations = [1441, 333, 8.8, 10];

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentages = [
//   percentageOfWorld1(populations[0]), // 18.241
//   percentageOfWorld1(populations[1]), // 4.215
//   percentageOfWorld1(populations[2]), // 0.111
//   percentageOfWorld1(populations[3]), // 0.127
// ];

// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]));
//   // console.log(percentages2); // if you add this log inside the loop it will show every iteration and not just the final result
// }
// console.log(percentages2);
