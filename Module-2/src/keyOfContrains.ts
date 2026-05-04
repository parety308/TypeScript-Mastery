type User = {
    id: number;
    name: string;
    address: object
}

type Vehicle = {
    name: string;
    model: string;
    releaseYear: number
}
const user: User = {
    id: 2304054,
    name: "Parvez Hasan",
    address: {
        distric: "Thakurgaon",
        upzila: "Baliadangi"
    }
};

const vehicle: Vehicle = {
    name: "Audi",
    model: "20fu",
    releaseYear: 2023
}

const getPropertyFromObject = <T>(obj: T, key: keyof T) => {
    return obj[key];
};

const result = getPropertyFromObject<User>(user, "id");
const result1 = getPropertyFromObject<Vehicle>(vehicle, "model");
console.log(result1,result);