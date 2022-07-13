'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
  
  
  
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  // with the enhanced JS object literals , the object created ooutside this code block cann just be called and included into this one by just writing the object name as below
  openingHours,

  orderDelivery({ staterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received ! ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


// MAPS
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Orgnic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :)')
//   .set(false, 'We are closed :(');

//   console.log(rest.get('name'));
//   console.log(rest.get(true));
//   console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size); // size of items in map

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again !'],
]);
// console.log(question); 

// // convert objects to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);


// Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = 3;
// console.log(answer);
// // done by me to determine if answer is correct or not and loggin the true/false value of the question map 👇
// // if (answer === 3) {
// //  console.log(question.get(true)); 
// // } else {
// //   console.log(question.get(false)); 
// // };
// // OR
// console.log(question.get(question.get('correct') === answer));

// Convert map to array
// console.log([...question]);


// WORKING WITH STRINGS (has the properties of an array)
// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'kAmaS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); // Kamas

// // Comparing emails
// const email = 'hello@kamas.com';
// const loginEmail = ' Hello@Kamas.Com \n';

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail); // hello@kamas.com

// // repplacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace(',', '.').replace('£', '$');
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 23 !';
// console.log(announcement.replaceAll('door', 'gate'));

//Booleans
// .includes(), .startsWith(), .endsWith()



// - SPLIT() and JOIN()

// console.log('a+very+nice+string'.split('+')); // ['a', 'very', 'nice', 'string']
// console.log('Nnadi Victory'.split(' ')); // ['Nnadi', 'Victory']

// const [firstName, lastName] = 'Nnadi Victory'.split(' ');

// const newName = ['Mr.', firstName, lastName].join(' ');
// console.log(newName); // Mr. Nnadi Victory

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// }
// capitalizeName('nnadi victory chikamagozi');
// capitalizeName('james smith paul');

// // PADDING 
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+'));

// const maskCreditCard = function (number) {
//   const str = number + ''; // to convert aa number to a string
//   const last = str.slice(-4) // getting the last 4 values of the string
//   return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard(12345678910));
// console.log(maskCreditCard(25364758273645432));
// console.log(maskCreditCard(1727722));

// // REPEAT
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes waiting in line ${'✈️'.repeat(n)}`);
// }
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);












// const plane = 'A320';

// console.log(plane[0]); // A 
// console.log(plane[1]); // 3
// console.log(plane[2]); // 2

// console.log(airline.length); // 16

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.slice(4)); // Air Portugal -- counting the string from left to right , it logs the 4th value and all the rest of the following value too
// console.log(airline.slice(4, 7)); // Air -- starts at 4 ends at 7 therefore value  = last - first .

// console.log(airline.slice(0, airline.indexOf(' '))); // TAP
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// console.log(airline.slice(-2)); // al - will start extracting from the last
// console.log(airline.slice(1, -1)); 

// const checkMiddleSeat = function (seat) {
//   // B AND E ARE MIDDLE SEATS
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E')
//     console.log('You got the middle seat 🤦‍♂️');
//   else console.log('You got lucky 😊');
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');






// LOOPING OBJECTS: PROPERTY NAMES
// const properties = Object.keys(openingHours);
// console.log(openingHours);

// let openStr = `We are open on ${properties.length} days:`;
// for (const day of properties) {
//   openStr += ` ${day},`
// }
// console.log(openStr);

// PROPERTY VALUES
// const values = Object.values(openingHours)
// console.log(values); // this gets the value of each object property

// // ENTIRE OBJECT
// const entries = Object.entries(openingHours);
// console.log(entries); // this stores the objects into an array

// // [key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }





// - THE OPTONAL CHAINING
// console.log(restaurant.openingHours.mon?.open); // undefined

// // usage on methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // will return the foods as it exists
// console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method does not exist'); // will return 'Method does not exist' because the '?.' optional chaining operator returns the value of restaurant.orderRissotto as undefined therefore the nullish operator now executes the next line of code in the code block.

// // usage on arrays
// const users = [{ name: 'Kamas', email: 'kamas@email.com' }];
// console.log(users[0]?.name ?? 'User array is empty');




// LOOPING ARRAYS:THE FOR-OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // getting the index of an array element when using the for-of loop method
// for (const item of menu.entries()) {
//   console.log(item);
// };
// // destructing method (confused as hell here)
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// };

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via deel sole, 12',
//   mainIndex: 2,
//   staterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via deel sole, 12',
//   staterIndex: 1,
// })

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);


// // setting default value incase a property is undefined

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 888;
// const obj = { a: 23, b: 29, c: 12 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const { fri: { open, close } } = openingHours;
// console.log(open,close);



// ===== Spread operator =====

// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr];  // this will concate the old arrray items into the new array
// console.log(newArr);   --  // [1, 2, 7, 8, 9]

// console.log(...newArr); --- // this will pick up the array items one by one and log into the console - 1 2 7 8 9

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu); // just like before, it will list the items in the spread array and add 'Gnocci' to the list also -  ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// COPY ARRAY
// const mainMenuCopy = [...restaurant.mainMenu];/

// JOIN 2 OR MORE ARRAYS
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// real world example
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // - old manual way
// restaurant.orderPasta(...ingredients); // new better method using the spread operator

// OBJECTS 
const newRestaurant = { foundedIn: 1995, ...restaurant, founder: 'kamas' };
// console.log(newRestaurant);
// the above example collects all the properties of the spread object and adds it to the newly declared ones.


// reassigning object properties 
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'New Copy Restaurant';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// - //

// ====== REST PATTERN ===== //


// 1) DESTRUCTURING .....


// -- SPREAD, because on the RIGHT side of = //
const arr = [1, 2, ...[3, 4]];

// -- REST, because on the LEFT side of = //
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, , risotto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherfood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); // - {thu: {…}, fri: {…}}

// 1) FUNCTIONS .....
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)
    sum += numbers[i];
  // console.log(sum); 
};
add(2, 11, 5);
add(32, 1, 5, 8, 89, 4);
add(72, 91, 5, 1, 55, 3, 92);

// const x = [23, 5, 7];
// add(...x); // using spread to perform a rest function

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinash');



// //  ====== array destructuring ====== //

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // dealing with a nested array
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);





// // ==== SHORT CIRCUTING WITH "||" OPERATOR
// // 1. it accepts any data types, return ANY data types
// console.log(3 || 'Kamas'); // 3 - this returns the first value if true , but returns the next if the first is falsy
// console.log('' || 'Jonas'); // Jonas - because the first value is falsy , therefore the second is being returned

// console.log(undefined || 0 || '' || 55 || null); // 55 

// const guest1 = restaurant.newGuests || 10;
// console.log(guest1); // 10

// console.log('----- && OPERATOR ------');
// // the && operator does the opposite of the || operator as it reeturns the first value once it's false
// // example ...
// console.log(0 && 'Kamas'); // 0 - cause 0 is falsy
// console.log(8 && 'Kamas'); // Kamas - cause the first value is truthy,it returns the next value
// console.log('Hello' && 43 && null && 'Kamas'); // Null - cause the first value is truthy,it returns the next value, the next value is still truthy so it keeps running and returns the next falsy value or the last value in the block


// // ASSIGNMENT OPERATORS
// const rest1 = {
//   name: 'Capri',
//   numbGuests: 0,
// };
// const rest2 = {
//   name: 'La pizza',
//   owner: 'Kamas Ltd.',
// };

// // OR assignnment operator
// // rest1.numbGuests = rest1.numbGuests || 10;
// // rest2.numbGuests = rest2.numbGuests || 10;
// // rest1.numbGuests ||= 10; // shorter method compared to the code above
// // rest2.numbGuests ||= 10;

// // NULLISH ?? assignment operator (null 0r undefined)
// rest1.numbGuests ??= 10;
// rest2.numbGuests ??= 10;


// //  AND assignment operator
// // rest1.owner = rest1.owner && '<Anonymous>'; // returns undefined because the fist value is undefined and falsy too 
// // rest2.owner = rest2.owner && '<Anonymous>'; // returns anonymous because the fist value is true . [shorter way to write it 👇]
// rest1.owner &&= '<Anonymous>';
// rest2.owner &&= '<Anonymous>';

// console.log(rest1); // 0 - because it is neither null nor undefined
// console.log(rest2); // returns 10 cause it's undefined




// - CHALLENGE #1
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

// 
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
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
//     ],
//     [
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
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };


// // MY SOLUTION 👇

// // 1.
// const players1 = game.players[0];
// console.log(players1);
// const players2 = game.players[1];
// console.log(players2);

// // 2.
// const [gk, ...otherPlayers] = [...players1];
// console.log(gk, otherPlayers);
// const [gk2, ...otherPlayers2] = [...players2];
// console.log(gk2, otherPlayers2);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);


// // 5. (coudn't solve it... here was the solution from jonas)
// const { odds: { team1, x: draw, team2 } } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...playerNames) {
//   console.log(playerNames, `${playerNames.length} goals were scored!🎉`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');

// // 7.
// team1 < team2 && console.log('Team 1 is likely to win !');
// team1 > team2 && console.log('Team 2 is likely to win !');


///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
};
  
// MY SOLUTION 👇

// 1.
// for (const [i, goalScorer] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} : ${goalScorer}`);
// }
// // 2.
// const oddsProperties = Object.keys(game.odds);
// console.log(oddsProperties);
// const oddsValue = Object.values(game.odds);
// console.log(oddsValue);


// let sum = 0;
// for (const odds of oddsValue) {
//   sum += odds;
// };
// console.log(sum);

// const averageOdds = sum / 3;
// console.log(averageOdds);

// console.log(`Odd of victory ${game.team1}: ${oddsValue[0]}`);
// console.log(`Odd of draw: ${oddsValue[1]}`);
// console.log(`Odd of victory ${game.team2}: ${oddsValue[2]}`);

// // 3.
// let scorers = game.scored.reduce(function (goalScorer, numberOfGoals) {
//   if (typeof goalScorer[numberOfGoals] === 'undefined') {
//     goalScorer[numberOfGoals] = 1;
//   } else {
//     goalScorer[numberOfGoals] += 1;
//   }

//   return goalScorer;
// }, {});
// console.log(scorers);



///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// my solution 👇
// 1.
// const events = ['⚽️ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card'];
// OR
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2.
// gameEvents.delete(64);
// console.log(gameEvents);

// //3.
// const time = [...gameEvents.keys()].pop()
// console.log(time);

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes
//   `
// );

// //4.
// for (const [key, value] of gameEvents) {
//   key <= 45 ? console.log(`[FIRST HALF]`,key,`${value}`) : console.log(`[SECOND HALF]`,key,`${value}`); 
// }




///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
    
//     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// })

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  // 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase(); // gets only the first 3 values of a str and also converts them to uppercase

for (const flight of flights.split('+')) {
  // console.log(flight);
  const [type, from, to, time] = flight.split(';');

  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(54);
  console.log(output);
}