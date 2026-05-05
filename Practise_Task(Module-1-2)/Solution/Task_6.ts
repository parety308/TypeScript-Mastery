type TUser = {
    name: string;
    id: number;
};

function getProductProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user: TUser = {
    name: "Parvez",
    id: 2304054,
};

console.log(getProductProp(user, "name")); 
console.log(getProductProp(user, "id")); 