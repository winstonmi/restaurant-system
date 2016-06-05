// prompt name
var yourName = prompt('Your name please!');
console.log('Welcome' + name + '.');

// prompt table numbers
var tableFor = prompt('Table for?');
console.log('Follow me to table for' + tableFor);

// choose starters
var starters = ['fries', 'calamari', 'salad'];
console.log('Would you like some starters?');
var startChoice = prompt('Please choose from' + starters);


while(startChoice !== 'fries' && startChoice !== 'calamari' && startChoice !=='salad'){
  startChoice = prompt('Please choose from' + starters);
  console.log('You have chosen' + startChoice);
}
console.log('Your order of starter is being sent to the kitchen!');

// choose drinks
var drinks = ['coke', 'water', 'tea'];
console.log('Would you like some drinks?');
var drinkChoice = prompt('Please choose from' + drinks);


while(drinkChoice !== 'coke' && drinkChoice !== 'water' && drinkChoice !=='tea'){
  drinkChoice = prompt('Please choose from' + drinks);
  console.log('You have chosen' + drinkChoice);
}
console.log('Your order of drink is being sent to the kitchen!');

// choose mains
var mains = ['chicken', 'pasta', 'steak'];
console.log('What would you like for mains?');
var mainChoice = prompt('Please choose from' + mains);


while(mainChoice !== 'chicken' && mainChoice !== 'pasta' && mainChoice !== 'steak'){
  mainChoice = prompt('Please choose from' + mains);
  console.log('You have chosen' + mainChoice);
}
console.log('Your order of mains is being sent to the kitchen!');

// choose desserts
var desserts = ['ice cream', 'cake', 'fruits'];
console.log('Would you like some dessert?');
var dessertChoice = prompt('Please choose from' + desserts);

while(dessertChoice !== 'ice cream' && dessertChoice !== 'cake' && dessertChoice !== 'fruits'){
  dessertChoice = prompt('Please choose from' + desserts);
  console.log('You have chosen' + dessertChoice);
}
console.log('Your order of dessert is being sent to the kitchen!');

console.log('Hope you enjoyed your meal?');

// payment by cash or credit
// var payment = ['cash', 'card'];
// var payChoice = prompt('Are you paying' + payment + '?');
//
//
// while(payChoice != 'cash' && paychoice != 'card'){
//   payChoice = prompt('We only accept cash or card');
//   console.log('Thanks for choosing to pay by' + payChoice);
// }
//
// console.log('Thanks for choosing to pay by' + payChoice);
// console.log('Thank you and see you again');
