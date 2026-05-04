const NumberArray: number[] = [1, 34, 54, 21];
const StringArray: string[] = ["Parvez", "hasan", "Ahmed", "yesrat"];
const arrayOfStringUsingMap: string[] = NumberArray.map(num => num.toString());
// console.log(arrayOfStringUsingMap);

type Area<T> = {
    [key in keyof T]: T[key]
};

const area: Area<{ height: string; width: string }> = {
    height: '40',
    width: "50"
}
console.log(area);