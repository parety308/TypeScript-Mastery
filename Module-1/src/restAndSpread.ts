//spread operators for arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2, 7, 8, 9];
console.log(combinedArr);

//spread operators for objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObj = { ...obj1, ...obj2, e: 5 };
console.log(combinedObj);

//rest parameters for functions
const sum = (...numbers: number[]): number => {
    // numbers.forEach(num => console.log(num));
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));