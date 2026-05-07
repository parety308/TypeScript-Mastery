//polymorphism
class Person {
    getSleep() {
        console.log("Sleep At 10 hours");
    };
};

class Student extends Person {
    getSleep() {
        console.log("Sleep in 8 hours");
    };
};
class Developer extends Person {
    getSleep() {
        console.log("Sleep in 6 hours");
    };
};

const p1 = new Person();
const p2 = new Student();
const p3 = new Developer();
// p1.getSleep();
// p2.getSleep();
// p3.getSleep();

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number,
        width: number) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width;
    }
}