//JS to TS->string,number,boolean,null,undefined,symbol,bigint

//only TS->void,never,unknown,any

let userName:string="Parvez Hasan";
let age:number=25 ;
let isStudent:boolean=true;
let course:string|null="Next Level Ai Engineering Bootcamp";
let score:undefined;
console.log("User Name:", userName.length);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Course:", course);
console.log("Score:", score);