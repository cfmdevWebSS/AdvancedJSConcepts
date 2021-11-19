const isAdult = (person) => {
    return person.age >= 18;
}

const people = [
    {name: 'Cindy', age: 9},
    {name: 'Hortense', age: 88},
    {name: 'Candy', age: 11},
    {name: 'Debi', age: 68}
];

const firstAdult = people.find(isAdult);
console.log(firstAdult);