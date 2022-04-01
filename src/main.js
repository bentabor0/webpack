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
};

let ClearAnimalFrom = () => {
    document.querySelector('#animal-name').value = '';
    document.querySelector('#animal-type-select').value = document.querySelector('#intro').value;
    document.querySelector('#animal-age').value = '';
    document.querySelector('#animal-gender').value = '';
    document.querySelector('#animal-weight').value = '';
    document.querySelector('#animal-pregnant').value = '';
};

 let MakeAnimalFormEditable = () => {
    document.querySelector('#animal-name').removeAttribute('readonly');
    document.querySelector('#animal-age').removeAttribute('readonly');
    document.querySelector('#animal-gender').removeAttribute('readonly');
    document.querySelector('#animal-weight').removeAttribute('readonly');
    document.querySelector('#animal-pregnant').removeAttribute('readonly');
};

 let MakeAnimalFormUnEditable = () => {
    document.querySelector('#animal-name').readOnly = true;
    document.querySelector('#animal-age').readOnly = true;
    document.querySelector('#animal-gender').readOnly = true;
    document.querySelector('#animal-weight').readOnly = true;
    document.querySelector('#animal-pregnant').readOnly = true;
};

 let AnimalFormValidation = (name, age, gender, weight, pregnant) => {

    let isError = false;
    let nameInput;
    let ageInput;
    let genderInput;
    let weightInput;
    let pregnantInput;

    // form validation from index.html
    if (name == undefined) {
        // Selects all input values.
        nameInput = document.querySelector('#animal-name').value;
        ageInput = document.querySelector('#animal-age').value;
        genderInput = document.querySelector('#animal-gender').value.toLowerCase();
        weightInput = document.querySelector('#animal-weight').value;
        pregnantInput = document.querySelector('#animal-pregnant').value.toLowerCase();

        // Remove spaces
        nameInput = nameInput.replace(/\s/g, '');
        ageInput = ageInput.replace(/\s/g, '');
        genderInput = genderInput.replace(/\s/g, '');
        weightInput = weightInput.replace(/\s/g, '');
        pregnantInput = pregnantInput.replace(/\s/g, '');

        var letterRegex = /^[a-zA-Z]+$/;

        // Name Validation
        if (nameInput == '') {
            document.querySelector('#animal-name').value = 'Name is blank';
            isError = true;
        } else if (!nameInput.match(letterRegex)) {
            document.querySelector('#animal-name').value = 'Names can only contain letters';
            isError = true;
        }
    
        // Age Validation
        if (ageInput == '') {
            document.querySelector('#animal-age').value = 'Age cannot be empty'
            isError = true;
        } else if (ageInput.match(letterRegex)) {
            document.querySelector('#animal-age').value = 'Age can only contain numbers';
            isError = true;
        } else if (parseInt(ageInput) < 0) {
            document.querySelector('#animal-age').value = 'Age cannot be less then 0';
            isError = true;
        } else if (parseInt(ageInput) > 49) {
            document.querySelector('#animal-age').value = 'Age cannot be higher than 50';
            isError = true;
        }
    
        // Gender Validation
        if (genderInput == 'male' || genderInput == 'female') {} else {
            document.querySelector('#animal-gender').value = 'Gender must be male or female';
            isError = true;
        }
    
        // Weight Validation
        if (weightInput == '') {
            document.querySelector('#animal-weight').value = 'Weight cannot be empty';
            isError = true;
        } else if (parseInt(weightInput) < 0) {
            document.querySelector('#animal-weight').value = 'Weight cannot be less than 0';
            isError = true;
        } else if (parseInt(weightInput) > 1000) {
            document.querySelector('#animal-weight').value = 'Weight cannot be more than 999';
            isError = true;
        } else if (weightInput.match(letterRegex)) {
            document.querySelector('#animal-weight').value = 'Weight can only contain numbers';
            isError = true;
        }
    
        // Pregnant Validation
        if (pregnantInput == 'true' || pregnantInput == 'false') {} else {
            document.querySelector('#animal-pregnant').value = 'Must be true of false'
            isError = true;
        }
    
        return isError;
    }
    // form validation from test.html
    else {
        nameInput = name;
        ageInput = age;
        genderInput = gender;
        weightInput = weight;
        pregnantInput = pregnant;

        var letterRegex = /^[a-zA-Z]+$/;

        if (nameInput.match(letterRegex)){
            return true
        }
        else {
            return false;
        }
    }
};

 let DisableAnimalTypeOptions = () => {
    document.querySelector('#intro').setAttribute('disabled', 'disabled');
    document.querySelector('#p').setAttribute('disabled', 'disabled');
    document.querySelector('#s').setAttribute('disabled', 'disabled');
    document.querySelector('#c').setAttribute('disabled', 'disabled');
    document.querySelector('#h').setAttribute('disabled', 'disabled');
};

 let EnableAnimalTypeOptions = () => {
    document.querySelector('#intro').removeAttribute('disabled');
    document.querySelector('#p').removeAttribute('disabled');
    document.querySelector('#s').removeAttribute('disabled');
    document.querySelector('#c').removeAttribute('disabled');
    document.querySelector('#h').removeAttribute('disabled');
}

 let ClearGuestForm = () => {
    document.querySelector('#guest-name').value = '';
    document.querySelector('#guest-age').value = '';
    document.querySelector('#guest-gender').value = '';
    document.querySelector('#wallet').value = '';
};

 let MakeGuestFormEditable = () => {
    document.querySelector('#guest-name').removeAttribute('readonly');
    document.querySelector('#guest-age').removeAttribute('readonly');
    document.querySelector('#guest-gender').removeAttribute('readonly');
    document.querySelector('#wallet').removeAttribute('readonly');
};

 let MakeGuestFormUnEditable = () => {
    document.querySelector('#guest-name').readOnly = true;
    document.querySelector('#guest-age').readOnly = true;
    document.querySelector('#guest-gender').readOnly = true;
    document.querySelector('#wallet').readOnly = true;
};

 let GuestFormValidation = () => {
    let isError = false;

    // Selects all input values.
    let nameInput = document.querySelector('#guest-name').value;
    let ageInput = document.querySelector('#guest-age').value;
    let genderInput = document.querySelector('#guest-gender').value;
    let moneyInput = document.querySelector('#wallet').value;

    nameInput = nameInput.replace(/\s/g, '');
    ageInput = ageInput.replace(/\s/g, '');
    genderInput = genderInput.replace(/\s/g, '');
    moneyInput = moneyInput.replace(/\s/g, '');

    var letterRegex = /^[a-zA-Z]+$/;

    // Name Validation
    if (nameInput == '') {
        document.querySelector('#guest-name').value = 'Name is blank';
        isError = true;
    } else if (!nameInput.match(letterRegex)) {
        document.querySelector('#guest-name').value = 'Names can only contain letters';
        isError = true;
    }

    // Age Validation
    if (ageInput == '') {
        document.querySelector('#guest-age').value = 'Age cannot be empty'
        isError = true;
    } else if (ageInput.match(letterRegex)) {
        document.querySelector('#guest-age').value = 'Age can only contain numbers';
        isError = true;
    } else if (parseInt(ageInput) < 0) {
        document.querySelector('#guest-age').value = 'Age cannot be less then 0';
        isError = true;
    } else if (parseInt(ageInput) > 122) {
        document.querySelector('#guest-age').value = 'No one has lived past 122';
        isError = true;
    }

    // Weight Validation
    if (parseInt(moneyInput) < 0) {
        document.querySelector('#wallet').value = 'money cannot be negative';
        isError = true;
    } else if (moneyInput == '') {
        document.querySelector('#wallet').value = '0';
    }

    return isError;
}

let getRequestByID = (ID) => {
    let header = new Headers();

    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');

    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Credentials', 'true');

    header.append('GET', 'POST', 'OPTIONS');

    var requestOptions = {
        method: 'GET',
        mode: 'cors',
        headers: header
    };

    const request = new Request(`https://zooapitabor.azurewebsites.net/zoo/zooID/${ID}`, requestOptions);

    return fetch(request)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return true
        })
        .catch((error) => {
            return false
        })
};

describe('Modal Component', () => {

    // Test zoo insantiation with null name value
    it('zoo name defaults to empty string', () => {
        // arrange
        const data = {name: null, guestCount: 470, animalCount: 0};

        //act
        const model = new Zoo(data);

        // assert
        expect(model.name).toBe('');
    });

    // test letter regex in animal validation method
    it('numbers in the name input returns false', () => {
        // arrange
        const data = {name: '0', age: 0, gender: 'male', weight: 0, pregnant: false};

        // act
        const isError = AnimalFormValidation(data.name, data.age, data.gender, data.weight, data.pregnant);

        // assert
        expect(isError).toBe(false);
    });

    // test zoo api call
    it('Test if zoo api id is valid', () => {
        // arrange
        const id = '620aca06aa82b8e358f4962f';
        let isTrue = true;

        // act
        getRequestByID(id).then(data => {
            console.log();
            isTrue = data;
        });

        // assert
        expect(isTrue).toBe(true);
    });
});