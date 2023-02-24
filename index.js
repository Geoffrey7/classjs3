class Animal{
    constructor(name,sound){
        this.name = name;
        this.sound = sound;
    }
}

class Dog extends Animal{
    constructor(name,sound,breed){
        super(name,sound,breed);
        this.breed = breed;
    }
}

const Rover = new Dog("Rover","woof","labrodoodle");
console.log(Rover)