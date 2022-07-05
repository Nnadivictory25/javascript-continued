'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ staterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received ! ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
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
  },
};






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

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu); // just like before, it will list the items in the spread array and add 'Gnocci' to the list also -  ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu];

// JOIN 2 OR MORE ARRAYS
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
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

const x = [23, 5, 7];
add(...x); // using spread to perform a rest function

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

// ==== SHORT CIRCUTING WITH "||" OPERATOR
// 1. it accepts any data types, return ANY data types