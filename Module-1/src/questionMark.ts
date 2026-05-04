//ternary operator
let age = 20;
let canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote yet.";
console.log(canVote);

//optional chaining

type User = {
    name: string;
    address?: {
        city: string;
        country: string;
    }
};
const user1: User = {
    name: "Alice",
    address: {
        city: "New York",
        country: "USA"
    }
}
const user2: User = {
    name: "Bob",
    // address:{
    //     city: "Los Angeles",
    //     country: "USA"
    // }
}

console.log(user1.address?.city); 
console.log(user2.address?.city); 

// nullish coalescing operator->if left falsey then return right value
let userName: string | null = "Sohag Hossain";
let defaultValue = "Md Parvez Hossain";
let result = userName ?? defaultValue;
console.log(result);