// Generic Function
const CreateArrayWithGeneric = <T>(value: T) => {
    return value;
}

const withString = CreateArrayWithGeneric<string>("Apple");
const withNumber = CreateArrayWithGeneric<number>(10);
console.log(withNumber)
console.log(withString)