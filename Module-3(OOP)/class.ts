class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} is making sound ${this.sound}`);
    }
};

const cat = new Animal("Billu", "Cats", "Miu Miu");
console.log(cat);