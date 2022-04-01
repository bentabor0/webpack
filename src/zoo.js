class Zoo {
    name;
    guestCapcity = 1000;
    guestCount;
    animalCapacity = 10;
    animalCount;
    animals;
    constructor(data = {}) {

        if (data.name != null) {
            this.name = data.name;
        }
        else {
            this.name = '';
        }
        
        this.guestCount = data.guestCount;
        this.animalCount = data.animalCount;
        this.animals = new Array();
        this.guests = new Array();
    }

    AddAnimal(animal) {
        this.animals.push(animal);

        let label = document.createTextNode(`${animal.name}`);
        let option = document.createElement('option');
        option.setAttribute('value', label.textContent);
        option.appendChild(label);

        if (document.querySelector('.animal-select') != null) {
            let animalSelect = document.querySelector('.animal-select');
            animalSelect.appendChild(option);
        }

        this.animalCount++;

        return option;
    }

    AddGuest(guest) {
        this.guests.push(guest);

        let label = document.createTextNode(`${guest.name}`);
        let option = document.createElement('option');
        option.setAttribute('value', label.textContent);
        option.appendChild(label);

        if (document.querySelector('.guest-select') != null) {
            let guestSelect = document.querySelector('.guest-select');
            guestSelect.appendChild(option);
        }

        this.AdmitGuest(1);
    }

    RemoveAnimal(animal) {
        let animalIndex = this.animals.indexOf(animal);
        this.animals.splice(animalIndex, 1);

        let animalSelect = document.querySelector('.animal-select');
        animalSelect.options[animalIndex + 1] = null;

        this.animalCount--;
    }

    AdmitGuest(guestNumber) {
        this.guestCount = this.guestCount + guestNumber;
    }

    UpdateAnimal(animal) {
        console.log(`${animal.name} was updated`);
    }

    FindAnimalByName(animalName) {
        let animal = this.animals.find(animal => animal.name === animalName);
        return animal;
    }

    FindGuestByName(guestName) {
        let guest = this.guests.find(guest => guest.name == guestName);
        return guest;
    }
}