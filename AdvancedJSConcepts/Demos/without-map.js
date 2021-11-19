const cube = (num) => num * num * num;

const nums = [1,2,3,4,5,6,7,8,9,10];

const cubes = [];

for (let num of nums) {
    cubes.push(cube(num));
}

console.log(cubes);

console.log(...cubes);

console.log(nums); //original array is unchanged...