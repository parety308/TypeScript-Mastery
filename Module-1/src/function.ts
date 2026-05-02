//usage of function in typescript
//normal function
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 10));

//arrow function
const multiply = (a: number, b: number): number => {
    return a * b;
}

console.log(multiply(5, 10));

//function in object
const poorUser = {
    name: 'John',
    age: 30,
    balance: 1000,
    addBalance(amount: number): void {
        this.balance += amount;
    }

}
poorUser.addBalance(500);
console.log(poorUser.balance);

//callback function

const numbers: number[] = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num: number): number => num * num);
console.log(squaredNumbers);
