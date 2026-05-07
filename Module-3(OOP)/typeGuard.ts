type Alphanumeric = number | string;

const add = (num1: Alphanumeric, num2: Alphanumeric) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }

    else {
        return num1.toString() + num2.toString();
    }

};

console.log(add(2, 3));
console.log(add("2", 3));

type TNormalUser = {
    name: string;
};

type TAdmin = {
    name: string;
    role: string;
};

const getInfo = (user: TNormalUser | TAdmin) => {
    if ('role' in user) {
        console.log(`This ${user.name} and his role is : ${user.role}`);
    }
    else {
        console.log(`${user.name}`);
    }

}

getInfo({ name: "Parvez" });
getInfo({ name: "Parvez", role: "std" });