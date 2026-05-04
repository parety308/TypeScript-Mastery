//dynamicaally generalize

//generic in array
type GenericArray<T> = Array<T>

// const friends: string[] = ["Parvez", "yesrat", "ety", "hasan"];
const friends: GenericArray<string> = ["Parvez", "yesrat", "ety", "hasan"];

// const rollumbers: number[] = [1, 24, 5, 12];
const rollumbers: GenericArray<number> = [1, 24, 5, 12];

// const isEligibleList: boolean[] = [true, false, true, false];
const isEligibleList: GenericArray<boolean> = [true, false, true, false];
// console.log(friends);
// console.log(rollumbers);
// console.log(isEligibleList);

//generic in tuple

type Coordinates<X, Y> = [X, Y];
const coordinates1: Coordinates<string, string> = ["Parvez", "Ety"];
const coordinates2: Coordinates<number, number> = [20, 30];
console.log(coordinates1);
console.log(coordinates2);

//generic in object

const user: GenericArray<{ name: string; age: number }> = [{
    name: "Parvez",
    age: 21
}, {
    name: "Yesrat",
    age: 20
}]