//JS to TS->object

//only TS->array,tuple,enum

//use of object type in TS
let person: { name:"Parvez Hasan"//literal type, fixed value -0r using  readonly
     ; age: number; isStudent: boolean } = {
    name:"Parvez Hasan" ,
    age: 25,
    isStudent: true
};
console.log(person);

// use of array type in TS
let numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(20);
numbers.push(32);
numbers.pop();
console.log(numbers);

//use of mixed type array in TS
let mixedArray: (string | number | boolean)[] = ["Parvez", 25, true];
mixedArray.push("Hasan");
mixedArray.push(true);
console.log(mixedArray);

//use of tuple type in TS
let cooridinates: [number, number] = [40.7128, -74.0060];
console.log(cooridinates);