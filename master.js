// "use strict";

// JavaScript Fundamentals – Part 1

// ---------------------------------------------------------------------------------
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Createa Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
// GOOD LUCK😀

//--------------------------------------------------------------------------------- 5

//  Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉 GOOD LUCK😀

// --------------------------------------------------------------------------------- 6

//  Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
// 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK😀

// --------------------------------------------------------------------------------- 7

//  Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430 Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's >= 50 && <= 300😉
// GOOD LUCK😀

//  --------------------------------------------------------------------------------- 8

// JavaScript Fundamentals – Part 2
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
// 2. Usethefunctiontocalculatetheaverageforbothteams
// 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
// 5. Ignoredrawsthistime
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉 GOOD LUCK😀

//  --------------------------------------------------------------------------------- 9

//  Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
// 3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
// 4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
// GOOD LUCK😀

// --------------------------------------------------------------------------------- 10

//  Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
// 2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
// 3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// GOOD LUCK😀

//--------------------------------------------------------------------------------- 11

//  Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays😉 Bonus:
// 4. Bonus:Writeafunction'calcAverage'whichtakesanarraycalled'arr'as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK😀

// --------------------------------------------------------------------------------- 12

// Developer Skills & Editor Setup
// ---------------------------------------------------------------------------------

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
// 2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12,5,-5,0,4]
// GOOD LUCK😀

// --------------------------------------------------------------------------------- 13

// JavaScript in the Browser: DOM and Events
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Selecttheelementwiththe'again'classandattachaclickeventhandler 2. Inthehandlerfunction,restoreinitialvaluesofthe'score'and
// 'secretNumber' variables
// 3. Restoretheinitialconditionsofthemessage,number,scoreandguessinput
// fields
// 4. Alsorestoretheoriginalbackgroundcolor(#222)andnumberwidth(15rem)
// GOOD LUCK😀

// --------------------------------------------------------------------------------- 14

// Data Structures, Modern Operators and Strings
// ---------------------------------------------------------------------------------

// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Createoneplayerarrayforeachteam(variables'players1'and 'players2')
// 2. Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
// 4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Basedonthegame.oddsobject,createonevariableforeachodd(called 'team1', 'draw' and 'team2')
// 6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// GOOD LUCK😀

//  --------------------------------------------------------------------------------- 15

//  const game = {
// team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [
// [
// 'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
// ], [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
// ], ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//   'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
// }, };
//   The Complete JavaScript Course 16

//  Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from before.
// Your tasks:
// 1. Loopoverthegame.scoredarrayandprinteachplayernametotheconsole, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Usealooptocalculatetheaverageoddandlogittotheconsole(Wealready studied how to calculate averages, you can go check if you don't remember)
// 3. Printthe3oddstotheconsole,butinaniceformattedway,exactlylikethis:
// Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names😉
// 4. Bonus:Createanobjectcalled'scorers'whichcontainsthenamesofthe players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
// }
// GOOD LUCK😀

// --------------------------------------------------------------------------------- 17

//  Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Createanarray'events'ofthedifferentgameeventsthathappened(no duplicates)
// 2. Afterthegamehasfinished,iswasfoundthattheyellowcardfromminute64 was unfair. So remove this event from the game events log.
// 3. Computeandlogthefollowingstringtotheconsole:"Aneventhappened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loopover'gameEvents'andlogeachelementtotheconsole,marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL GOOD LUCK😀
//    const gameEvents = new Map([ [17, '⚽ GOAL'],
//  🔁 Substitution'],
// [36, '
// [47, '⚽ GOAL'],
//   🔁 Substitution'], 🔶 Yellow card'], 🔴 Red card'],
// 🔁 Substitution'], 🔁 Substitution'],
// [61, '
// [64, '
// [69, '
// [70, '
// [72, '
// [76, '⚽ GOAL'], [80, '⚽ GOAL'],
//        [92, ' ]);
// 🔶 Yellow card'],

//--------------------------------------------------------------------------------- 18

//  Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs): underscoreCase ✅
// firstName ✅
// someVariable ✅
// calculateAge ✅
// delayedDeparture ✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data! GOOD LUCK😀
//  ✅
//   ✅
// ✅
// ✅
//    ✅
// ✅
// ✅
//     ✅
// ✅
// ✅
//           document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
//   The Complete JavaScript Course 19

// A Closer Look at Functions
// ---------------------------------------------------------------------------------

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.
// Your tasks:
// 1. Createamethodcalled'registerNewAnswer'onthe'poll'object.The method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this: What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Callthismethodwhenevertheuserclicksthe"Answerpoll"button.
// 3. Createamethod'displayResults'whichdisplaysthepollresults.The
// method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Runthe'displayResults'methodattheendofeach 'registerNewAnswer' method call.
// 5. Bonus:Usethe'displayResults'methodtodisplaythe2arraysinthetest data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?

//--------------------------------------------------------------------------------- 20

// Test data for bonus:
// § Data1:[5,2,3]
// § Data2:[1,5,3,9,6,1]
// Hints: Use many of the tools you learned about in this and the last section 😉 GOOD LUCK😀
//    const poll = {
// question: "What is your favourite programming language?", options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
// };
//   The Complete JavaScript Course 21

//  Coding Challenge #2
// This is more of a thinking challenge than a coding challenge 🤓 Your tasks:
// 1. TaketheIIFEbelowandattheendofthefunction,attachaneventlistenerthat changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!
// 2. Andnowexplaintoyourself(orsomeonearoundyou)whythisworked!Takeall the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example.
//   (function () {
// const header = document.querySelector('h1'); header.style.color = 'red';
// })();
// GOOD LUCK😀

//--------------------------------------------------------------------------------- 22

// Working With Arrays
// ---------------------------------------------------------------------------------

// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Juliafoundoutthattheownersofthefirstandthelasttwodogsactuallyhave cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. CreateanarraywithbothJulia's(corrected)andKate'sdata
// 3. Foreachremainingdog,logtotheconsolewhetherit'sanadult("Dognumber1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy   ")
// 4. Runthefunctionforbothtestdatasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉 GOOD LUCK😀
//  🐶

// --------------------------------------------------------------------------------- 23

//  Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
// 1. Calculatethedogageinhumanyearsusingthefollowingformula:ifthedogis <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
// 2. Excludealldogsthatarelessthan18humanyearsold(whichisthesameas keeping dogs that are at least 18 years old)
// 3. Calculatetheaveragehumanageofalladultdogs(youshouldalreadyknow from other challenges how we calculate averages 😉)
// 4. Runthefunctionforbothtestdatasets
// Test data:
// § Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
// GOOD LUCK😀
// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!
// Test data:
// § Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
// GOOD LUCK😀

//   --------------------------------------------------------------------------------- 24

//  Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loopoverthe'dogs'arraycontainingdogobjects,andforeachdog,calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. FindSarah'sdogandlogtotheconsolewhetherit'seatingtoomuchortoo little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Createanarraycontainingallownersofdogswhoeattoomuch ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Logastringtotheconsoleforeacharraycreatedin3.,likethis:"Matildaand Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Logtotheconsolewhetherthereisanydogeatingexactlytheamountoffood that is recommended (just true or false)
// 6. Logtotheconsolewhetherthereisanydogeatinganokayamountoffood (just true or false)
// 7. Createanarraycontainingthedogsthatareeatinganokayamountoffood(try to reuse the condition used in 6.)
// 8. Createashallowcopyofthe'dogs'arrayandsortitbyrecommendedfood portion in an ascending order (keep in mind that the portions are inside the array's objects😉)

// --------------------------------------------------------------------------------- 25

// Hints:
// § Use many different tools to solve these challenges, you can use the summary lecture to choose between them😉
// § Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
// Test data:
//   const dogs = [
// { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, { weight: 8, curFood: 200, owners: ['Matilda'] },
// { weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, { weight: 32, curFood: 340, owners: ['Michael'] },
// ];
// GOOD LUCK😀

//--------------------------------------------------------------------------------- 26

// Object Oriented Programming (OOP)
// ---------------------------------------------------------------------------------

// Coding Challenge #1
// Your tasks:
// 1. Useaconstructorfunctiontoimplementa'Car'.Acarhasa'make'anda 'speed' property. The 'speed' property is the current speed of the car in km/h
// 2. Implementan'accelerate'methodthatwillincreasethecar'sspeedby10, and log the new speed to the console
// 3. Implementa'brake'methodthatwilldecreasethecar'sspeedby5,andlog the new speed to the console
// 4. Create2'Car'objectsandexperimentwithcalling'accelerate'and 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK😀

// --------------------------------------------------------------------------------- 27

//  Coding Challenge #2
// Your tasks:
// 1. Re-createChallenge#1,butthistimeusinganES6class(callit'CarCl')
// 2. Addagettercalled'speedUS'whichreturnsthecurrentspeedinmi/h(divide
// by 1.6)
// 3. Addasettercalled'speedUS'whichsetsthecurrentspeedinmi/h(but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Createanewcarandexperimentwiththe'accelerate'and'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h GOOD LUCK😀
// Coding Challenge #3
// Your tasks:
// 1. UseaconstructorfunctiontoimplementanElectricCar(called'EV')asachild "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
// 2. Implementa'chargeBattery'methodwhichtakesanargument 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implementan'accelerate'methodthatwillincreasethecar'sspeedby20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
// 4. Createanelectriccarobjectandexperimentwithcalling'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23% GOOD LUCK😀

//   --------------------------------------------------------------------------------- 28

//  Coding Challenge #4
// Your tasks:
// 1. Re-createChallenge#3,butthistimeusingES6classes:createan'EVCl' child class of the 'CarCl' class
// 2. Makethe'charge'propertyprivate
// 3. Implementtheabilitytochainthe'accelerate'and'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23% GOOD LUCK😀

//--------------------------------------------------------------------------------- 29

// Asynchronous JavaScript
// ---------------------------------------------------------------------------------

// Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country only based on GPS coordinates. For that, you will use a second API to geocode coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
// Your tasks:
// PART 1
// 1. Createafunction'whereAmI'whichtakesasinputsalatitudevalue('lat') and a longitude value ('lng') (these are GPS coordinates, examples are in test data below).
// 2. Do“reversegeocoding”oftheprovidedcoordinates.Reversegeocodingmeans to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do not use the 'getJSON' function we created, that is cheating😉
// 3. Onceyouhavethedata,takealookatitintheconsoletoseealltheattributes that you received about the provided location. Then, using this data, log a message like this to the console: “You are in Berlin, Germany”
// 4. Chaina.catchmethodtotheendofthepromisechainandlogerrorstothe console
// 5. ThisAPIallowsyoutomakeonly3requestspersecond.Ifyoureloadfast,you will get this error with code 403. This is an error with the request. Remember, fetch() does not reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message
// PART 2
// 6. Nowit'stimetousethereceiveddatatorenderacountry.Sotaketherelevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Renderthecountryandcatchanyerrors,justlikewehavedoneinthelast lecture (you can even copy this code, no need to type the same code)

//    --------------------------------------------------------------------------------- 30

// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude) § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474
// GOOD LUCK😀

//--------------------------------------------------------------------------------- 31

//  Coding Challenge #2
// For this challenge you will actually have to watch the video! Then, build the image loading functionality that I just showed you on the screen.
// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by yourself. Pretend you're working on your own 😉
// PART 1
// 1. Createafunction'createImage'whichreceives'imgPath'asaninput. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path
// 2. Whentheimageisdoneloading,appendittotheDOMelementwiththe 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image (listen for the'error' event), reject the promise
// 3. Ifthispartistootrickyforyou,justwatchthefirstpartofthesolution
// PART 2
// 4. Consumethepromiseusing.thenandalsoaddanerrorhandler
// 5. Aftertheimagehasloaded,pauseexecutionfor2secondsusingthe'wait'
// function we created earlier
// 6. Afterthe2secondshavepassed,hidethecurrentimage(setdisplayCSS
// property to 'none'), and load a second image (Hint: Use the image element returned by the 'createImage' promise to hide the current image. You will need a global variable for that😉)
// 7. Afterthesecondimagehasloaded,pauseexecutionfor2secondsagain
// 8. Afterthe2secondshavepassed,hidethecurrentimage
// Test data: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to “Fast 3G” in the dev tools Network tab, otherwise images load too fast
// GOOD LUCK😀

//  --------------------------------------------------------------------------------- 32

// Coding Challenge #3
// Your tasks:
// PART 1
// 1. Writeanasyncfunction'loadNPause'thatrecreatesChallenge#2,thistime using async/await (only the part where the promise is consumed, reuse the 'createImage' function from before)
// 2. Comparethetwoversions,thinkaboutthebigdifferences,andseewhichone you like more
// 3. Don'tforgettotesttheerrorhandler,andtosetthenetworkspeedto“Fast3G” in the dev tools Network tab
// PART 2
// 1. Createanasyncfunction'loadAll'thatreceivesanarrayofimagepaths 'imgArr'
// 2. Use.maptoloopoverthearray,toloadalltheimageswiththe 'createImage' function (call the resulting array 'imgs')
// 3. Checkoutthe'imgs'arrayintheconsole!Isitlikeyouexpected?
// 4. Useapromisecombinatorfunctiontoactuallygettheimagesfromthearray😉
// 5. Addthe'parallel'classtoalltheimages(ithassomeCSSstyles)
// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img- 3.jpg']. To test, turn off the 'loadNPause' function
// GOOD LUCK😀
