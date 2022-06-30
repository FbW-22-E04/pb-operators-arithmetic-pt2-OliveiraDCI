// 0
const snackServings = 100;
const guests = 10;
console.log(`0: ${snackServings}, ${guests}`);

// 1
console.log(`1: ${snackServings + guests}`);

// 2
console.log(`2: ${snackServings - guests}`);
console.log(`  ${guests - snackServings}`);

// 3
console.log(`3: ${snackServings * guests}`);

// 4
console.log(`4: ${snackServings / guests}`);

// 5
const drinks = 10;
const resultOne = (snackServings * guests) / drinks;
console.log(`5: ${resultOne}`);

// 6
const monkeys = 15;
const bananas = 9;
console.log(`6: ${monkeys / bananas}`);

// 7
const monkeyFights = 20;
const resultTwo = (monkeys + bananas) * monkeyFights;
console.log(`7: ${resultTwo}`);

// 8
let monkeyBusiness = 90;
monkeyBusiness++;
console.log(`8: ${monkeyBusiness}`);

// 9
let boredom = 13;
boredom--;
console.log(`9: ${boredom}`);

// 10
const happiness = monkeys - bananas;
console.log(`10: ${happiness + monkeyFights}`);

// 11
console.log(`11: ${resultOne % resultTwo}`);
