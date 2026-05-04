//nullable types
let nullableValue: string | null = null;
// console.log(nullableValue);
nullableValue = "Now I have a value!";
// console.log(nullableValue);

//unknown type
let discountPrice = (input: unknown): number => {
    if (typeof input === "number") {
        return input * 0.9;
    }
    else if (typeof input === "string") {
        const [priceString = "0"] = input.split(" ");
        return parseFloat(priceString) * 0.9;
    }
    return 0;
}

console.log(discountPrice(100));
console.log(discountPrice("100 USD"));

// never type
const throwError = (message: string): never => {
    throw new Error(message);
}