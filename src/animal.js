export class Animal {
    name;
    type;
    age;
    gender;
    weight;
    isPregnant;
    constructor(name, type, age, gender, weight, isPregnant) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.isPregnant = isPregnant;
    }

    Move() {
        return `${this.name} movement type is unknown, They moved 1 meter`
    }

    MakePregnant() {
        if (this.gender.toLowerCase() === 'female'){
            if (this.isPregnant == false) {
                this.isPregnant = true;
                return `${this.name} is now pregnant`;
            }
            else {
                return 'Females must give birth before getting pregant again'
            }
        }
        else {
            return 'Only Females can give birth';
        }
    }

    GiveBirth() {
        let animalType = this.type.name
        let newAnimal;
        let randomGender = (Math.random() > 0.5) ? 1 : 0;
        switch (animalType.toLowerCase()) {
            case 'hummingbird':
                newAnimal = new Hummingbird(
                    `${this.name} Jr.`,
                    Hummingbird,
                    0,
                    randomGender = 1 ? 'Male' : 'Female',
                    this.weight / 2,
                    false
                );
                break;
            case 'platypus':
                newAnimal = new Platypus(
                    `${this.name} Jr.`,
                    Platypus,
                    0,
                    randomGender = 1 ? 'Male' : 'Female',
                    this.weight / 2,
                    false
                );
                break;
            case 'shark':
                newAnimal = new Shark(
                    `${this.name} Jr.`,
                    Shark,
                    0,
                    randomGender = 1 ? 'Male' : 'Female',
                    this.weight / 2,
                    false
                );
                break;
            case 'chimpanzee':
                newAnimal = new Chimpanzee(
                    `${this.name} Jr.`,
                    Chimpanzee,
                    0,
                    randomGender = 1 ? 'Male' : 'Female',
                    this.weight / 2,
                    false
                );
                break;
            default: newAnimal = 'fail';
        }

        this.isPregnant = false;

        return newAnimal;
    }
}

export class Platypus extends Animal {
    moveDistance = 25;
    moveType = 'Swim'
    constructor(name, type, age, gender, weight, isPregnant) {
        super(name, type, age, gender, weight, isPregnant)
    }

    Move() {
        return `${this.name}s movement type is ${this.moveType}, they moved ${this.moveDistance} meters`;
    }
}

export class Hummingbird extends Animal {
    moveDistance = 5;
    moveType = 'Fly'
    constructor(name, type, age, gender, weight, isPregnant) {
        super(name, type, age, gender, weight, isPregnant)
    }

    Move() {
        return `${this.name}s movement type is ${this.moveType}, they moved ${this.moveDistance} meters`;
    }
}

export class Shark extends Animal {
    moveDistance = 58;
    moveType = 'Swim'
    constructor(name, type, age, gender, weight, isPregnant) {
        super(name, type, age, gender, weight, isPregnant)
    }

    Move() {
        return `${this.name}s movement type is ${this.moveType}, they moved ${this.moveDistance} meters`;
    }
}

export class Chimpanzee extends Animal {
    moveDistance = 12;
    moveType = 'Pace'
    constructor(name, type, age, gender, weight, isPregnant) {
        super(name, type, age, gender, weight, isPregnant)
    }

    Move() {
        return `${this.name}s movement type is ${this.moveType}, they moved ${this.moveDistance} meters`;
    }
}