//object destructuring
const person = {
    name: {
        first: "John",
        last: "Doe"
    },
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

const { name: { first: firstName, last: LastName }, age, address: { city, country } } = person;
console.log("First:", firstName, "\nLast:", LastName, "\nAge:", age, "\nCity:", city, "\nCountry:", country);

//array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log("First:", first, "\nSecond:", second, "\nRest:", rest);