function isOdd(num) {
    return num % 2 === 1;
}

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13];

//with named functions
const oddNumbers = nums.filter(isOdd);

console.log(oddNumbers);
console.log('\r\n');
//with anonymous functions
const evenNumbers = nums.filter((num) => num % 2 === 0);

console.log(evenNumbers);
console.log('\r\n');
console.log(nums);