const isAdult = (person) => {
    return person.age >= 18;
}

const people = [
    {name: 'Cindy', age: 9},
    {name: 'Hortense', age: 22},
    {name: 'Candy', age: 11},
    {name: 'Debi', age: 68},
    {name: 'Suzie', age: 28}
];

const firstAdult = people.find(isAdult);
console.log(firstAdult);