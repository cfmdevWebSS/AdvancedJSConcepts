function addNums(...nums) {
    let total = 0;
console.log(nums);

const [a,b,...rest] = nums;
console.log(a);
console.log(b);
console.log(rest);
    for (let num of nums) {
        total += num;
    }

    const equation = nums.join(' + ') + ' = ' + String(total);
    console.log(equation);
}

addNums(1,2,3,4,5,6,7,8,9,11,12);