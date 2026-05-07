class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    };
};

class Teacher extends Person {
    designation: string;
    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }
}

const std1 = new Person("Parvez", 21, "STTH");
const teacher = new Teacher("Rizvi", 35, "CUET", "Assistance Professor");
console.log(std1);
console.log(teacher);


