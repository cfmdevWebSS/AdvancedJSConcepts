const fruits = ['banana', 'apple', 'peach', 'cherry'];
const veggies = ['squash', 'spinach', 'asparagus', 'peas'];

const foods = [];

//Attempt 1
foods.push(fruits);
foods.push(veggies);

console.log('Attempt 1: ');
console.log(foods);

//Clear foods...
foods.length = 0;

foods.push(...fruits);
foods.push(...veggies);

//Attempt 2: merge both arrays into one array
console.log('Attempt 2: merge both arrays into one');
console.log(foods);