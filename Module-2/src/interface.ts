/*
type User = {
    name: string;
    age: number;
};

//interface use in array,object and fucntion
interface IUser {
    name: string,
    age: number
}

type Role = {
    role: "admin" | "user"
}

type userWithRole = User & Role;

interface IUserWithRole extends IUser {
    role: "admin" | "user"
}
const user1: userWithRole = {
    name: "Parvez Hasan",
    age: 21,
    role: "admin"
};
const user2: IUserWithRole = {
    name: "Yesrat Jahan",
    age: 20,
    role: "user"

};

console.log(user1)
console.log(user2)
*/
// in function

type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;

interface IAdd {
    (num1: number, num2: number): number
}

const Iadd: IAdd = (num1, num2) => num1 + num2;

type Friends = string[];
const friends: Friends = ["Parvez", "Parul", "Gias", "Yesrat", "Keya"];

interface IFriends {
    [index: number]: string
}

const Ifriends: IFriends = ["Parvez", "Parul", "Gias", "Yesrat", "Keya"];
