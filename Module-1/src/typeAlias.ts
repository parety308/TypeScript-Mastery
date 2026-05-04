//type aliases for objects
type Person = {
    name: {
        first: string;
        last: string;
    };
    age: number;
    gender: "male" | "female" | "other";
    address: {
        city: string;
        country: string;
    };
};

const person1: Person = {
    name: {
        first: "John",
        last: "Doe"
    },
    age: 30,
    gender: "male",
    address: {
        city: "New York",
        country: "USA"
    }
}

console.log(person1);

//type aliases for functions

type GreetFunction = (name: string) => string;
const greet: GreetFunction = (name) => {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));