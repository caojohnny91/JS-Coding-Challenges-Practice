"use strict";

console.log("-------------------------------- JavaScript Fundamentals – Part 1");

// ---------------------------------------------------------------------------------

console.log("-------------------------------- Coding Challenge #1");
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
// GOOD LUCK😀

const calcBMI = function (weight, height) {
  return weight / height ** 2;
};

// Test Data 1:
const markBMIData1 = calcBMI(78, 1.69); // 27.31
const johnBMIData1 = calcBMI(92, 1.9); // 25.49

console.log("markBMI:", markBMIData1, "johnBMI:", johnBMIData1);

const markHigherBMI = function (markBMI, johnBMI) {
  return markBMI > johnBMI ? true : false;
};

console.log(markHigherBMI(markBMIData1, johnBMIData1)); // true

// Test Data 2:
const markBMIData2 = calcBMI(95, 1.88); // 26.88
const johnBMIData2 = calcBMI(85, 1.76); // 27.44
console.log("markBMI:", markBMIData2, "johnBMI:", johnBMIData2);

console.log(markHigherBMI(markBMIData2, johnBMIData2)); // false

//--------------------------------------------------------------------------------- 5

console.log("-------------------------------- Coding Challenge #2");
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMIvalues in the outputs. Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉 GOOD LUCK😀

const bmiDescription = function (markBMI, johnBMI) {
  if (markBMI > johnBMI) {
    return `Mark's BMI (${markBMI.toFixed(2)}) is higher than John's BMI (${johnBMI.toFixed(2)})!`;
  } else {
    return `John's BMI (${johnBMI})is higher than Mark's BMI (${markBMI})!`;
  }
};

console.log(bmiDescription(markBMIData1, johnBMIData1));

// --------------------------------------------------------------------------------- 6

console.log("-------------------------------- Coding Challenge #3");
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

// 4. Bonus2:Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK😀

const calcAverage = function (score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
};
// console.log(calcAverage(1, 2, 3));

let dolphinsAverage = calcAverage(96, 108, 89); // 97.67
let koalasAverage = calcAverage(88, 91, 110); // 96
console.log("dolphins:", dolphinsAverage, "koalas", koalasAverage);

const winner = function (dolphinsAvg, koalasAvg) {
  if (dolphinsAvg > koalasAvg) {
    return "Dolphins are the winners!";
  } else if (koalasAvg > dolphinsAvg) {
    return "Koalas are the winners!";
  } else {
    return "There was a tie!";
  }
};

console.log(winner(dolphinsAverage, koalasAverage));

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

// 4. Bonus2:Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

const winnerBonus = function (dolphinsAvg, koalasAvg) {
  if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    return "Dolphins are the winners!";
  } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    return "Koalas are the winners!";
  } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    return "There was a tie!";
  } else {
    return "No team wins the trophy!";
  }
};

// Test data:
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
dolphinsAverage = calcAverage(97, 112, 101); // 103.33
koalasAverage = calcAverage(109, 95, 123); // 109
// console.log("dolpBonus1:", dolphinsAverage, "koalasBonus1", koalasAverage);
console.log(winnerBonus(dolphinsAverage, koalasAverage));

// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
dolphinsAverage = calcAverage(97, 112, 101); // 103.33
koalasAverage = calcAverage(109, 95, 106); // 103.33
// console.log("dolpBonus1:", dolphinsAverage, "koalasBonus1", koalasAverage);
console.log(winnerBonus(dolphinsAverage, koalasAverage));

// --------------------------------------------------------------------------------- 7

console.log("-------------------------------- Coding Challenge #4");
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

// Test data:
// § Data 1: Test for bill values 275, 40 and 430 Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's >= 50 && <= 300😉
// GOOD LUCK😀



//  --------------------------------------------------------------------------------- 8
