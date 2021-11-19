//Return a random integer
function randInt(low, high) {
    var rndDec = Math.random();
    var randInt = Math.floor(rndDec * (high - low + 1) + low);
    return randInt;
}

//Return a random president as an array: [firstName, lastName]
function randPresident() {
    presidents = [
        'George Washington',
        'Thomas Jefferson',
        'Abraham Lincoln',
        'Teddy Roosevelt',
        'Richard Nixon',
        'Barack Obama',
        'Joe Biden'
    ];

    const i = randInt(0, presidents.length - 1);
    return presidents[i].split(' ');
}

const [firstName, lastName] = randPresident();
console.log('first name: ', firstName);
console.log('last name: ', lastName);