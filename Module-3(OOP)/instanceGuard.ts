class Persons {
    name: string;
    constructor(name: string) {
        this.name = name;
    };

    Sleep(numOfHours: number) {
        console.log(`he sleep in a day ${numOfHours}`);
    }
};

class Student extends Persons {
    constructor(name: string) {
        super(name);
    }

    doStudy(numOfHours: number) {
        console.log(`This Person ${this.name} study in a day is ${numOfHours}`)
    }
}

class Teachers extends Persons {
    constructor(name: string) {
        super(name);
    }

    takeClass(numOfHours: number) {
        console.log(`This Person ${this.name} take class in a day is ${numOfHours}`)
    }
};

const getInfos = (user: Persons) => {
    if (user instanceof Student) {
        user.doStudy(5);
    }
    else if (user instanceof Teachers) {
        user.takeClass(5);
    }
    else {
        user.Sleep(10);
    }
}

const s = new Student("Parvez");
const t = new Teachers("Yesrat");
getInfos(s);
getInfos(t);