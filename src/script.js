
import {
    Animal,
    Platypus,
    Hummingbird,
    Shark,
    Chimpanzee
} from './animal.js';
import {
    Guest
} from './guest.js';


/////////////// zoo

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

/////////// zoo end

///////////// validation start 

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

////////////// validation end


///////////////////////// Set up /////////////////////////

// Zoo id for ben's zoo
const ZooApiID = '620aca06aa82b8e358f4962f';

// Grab each zooField from the DOM.
let nameField = document.querySelector('#name');
let capacityField = document.querySelector('#capacity');
let animalCapacityField = document.querySelector('#animal-capacity');
let guestCountField = document.querySelector('#guest-count');
let animalCountField = document.querySelector('#animal-count');

// Represents the current version of the zoo
let GlobalZoo;

let ZooJson;

let restartZoo = {
    "_id": "620aca06aa82b8e358f4962f",
    "zooName": "Ben's Zoo",
    "guestCount": 496,
    "animalCount": 0,
    "animals": [
        {
            "id": 1,
            "name": "Perry",
            "age": 2,
            "gender": "Female",
            "weight": 3.2,
            "type": "Platypus",
            "isPregnant": false
        },
        {
            "id": 2,
            "name": "Harry",
            "age": 2,
            "gender": "Male",
            "weight": 3.2,
            "type": "Hummingbird",
            "isPregnant": false
        },
        {
            "id": 3,
            "name": "Sherry",
            "age": 2,
            "gender": "Female",
            "weight": 852,
            "type": "Shark",
            "isPregnant": true
        },
        {
            "id": 4,
            "name": "Cherry",
            "age": 2,
            "gender": "Female",
            "weight": 3.2,
            "type": "Chimpanzee",
            "isPregnant": true
        }
    ],
    "guests": [
        {
            "id": 1,
            "name": "Ben",
            "age": 22,
            "gender": "Male",
            "moneyAmount": 100
        },
        {
            "id": 2,
            "name": "Ally",
            "age": 20,
            "gender": "Female",
            "moneyAmount": 200
        },
        {
            "id": 3,
            "name": "Sierra",
            "age": 25,
            "gender": "Female",
            "moneyAmount": 35
        }
    ],
    "createdDate": "2022-02-14T21:29:37.040Z",
    "__v": 0
}

let createForms = () => {
    let body = document.querySelector('body');
    console.log('hit');

    fetch("FormCollection.json")
        .then(r => r.json())
        .then(data => {
            console.log(data);
            const animalForm = document.createElement('form-template');
            animalForm.form = data.AnimalForm;
            body.appendChild(animalForm);

            const zooForm = document.createElement('form-template');
            zooForm.form = data.ZooForm;
            body.appendChild(zooForm);

            const guestForm = document.createElement('form-template');
            guestForm.form = data.GuestForm;
            body.appendChild(guestForm);
        })
};

let findJsonAnimal = (animalName) => {
    let animal = ZooJson.animals.find(a => a.name === animalName);
    return animal;
}

///////////////////////// Api calls /////////////////////////

// GetRequest to zoo api to pull specific zoo
export let getRequestByID = (ID) => {
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
            return data
        })
        .catch((error) => {
            console.error("Error: ", error);
        })
};

let putRequest = (zooID, updatedZoo) => {
    let header = new Headers();

    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');

    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Credentials', 'true');

    header.append('GET', 'POST', 'OPTIONS');

    var requestOptions = {
        method: 'PUT',
        mode: 'cors',
        headers: header,
        body: JSON.stringify(updatedZoo)
    };

    const request = new Request(`https://zooapitabor.azurewebsites.net/zoo/zooID/${zooID}`, requestOptions);

    fetch(request)
        .then(response => response.json())
        .then(data => {
            console.log('Success: ', data);
            setTimeout(() => {window.location.reload()}, 1500);
        })
        .catch((error) => {
            console.error("Error: ", error);
        })
};

// Sets up zoo and gets current verison from api
let SetUpZoo = (ZooID) => {

    // let animalSelect = document.querySelector('.animal-select');
    
    // for (let i = 1; i < animalSelect.length; i++) {
    //     animalSelect.remove(i);
    // }

    return getRequestByID(ZooID)
        .then(data => {
            ZooJson = data

            const newZoo = {zooName: data.zooName, guestCount: 0, animalCount: 0};

            console.log(data.zooName)

            let zoo = new Zoo(data);

            for (let i = 0; i < data.animals.length; i++) {

                let a = data.animals[i]
                switch (a.type) {
                    case "Platypus":
                        zoo.AddAnimal(new Platypus(a.name, Platypus, a.age, a.gender, a.weight, a.isPregnant));
                        break;

                    case "Hummingbird":
                        zoo.AddAnimal(new Hummingbird(a.name, Platypus, a.age, a.gender, a.weight, a.isPregnant));
                        break;

                    case "Shark":
                        zoo.AddAnimal(new Shark(a.name, Platypus, a.age, a.gender, a.weight, a.isPregnant));
                        break;

                    case "Chimpanzee":
                        zoo.AddAnimal(new Chimpanzee(a.name, Platypus, a.age, a.gender, a.weight, a.isPregnant));
                        break;
                }
            }

            for (let i = 0; i < data.guests.length; i++) {

                let g = data.guests[i];

                zoo.AddGuest(new Guest(g.name, g.age, g.gender, g.moneyAmount));
            }

            zoo.animalCount = zoo.animals.length;

            // Add values to inner html of fields.
            nameField.value = data.zooName;
            capacityField.value = zoo.guestCapcity;
            animalCapacityField.value = zoo.animalCapacity;
            guestCountField.value = zoo.guestCount;
            animalCountField.value = zoo.animals.length;

            GlobalZoo = zoo;

            let message = document.querySelector('.message');
            message.innerHTML = '';
            message.innerHTML = `Welcome to ${data.zooName}`;
            console.log('fetch request finished')
        })
};

let AddEvents = () => {

    let resetButton = document.querySelector('.reset-button');
    resetButton.addEventListener('click', () => {

        let message = document.querySelector('.message');
        
        if (confirm('Click OK to reset zoo to defualt values (this will remove new animals and guests)')) {
            message.innerHTML = '';
            message.innerHTML = 'Reset Submitted'
            putRequest(ZooApiID, restartZoo);
        }
        else {
            message.innerHTML = '';
            message.innerHTML = 'Reset canceled'
        }
    });

    // Grabs animal-selct from DOM and adds a change event to fill animal form.
    let animalSelect = document.querySelector('.animal-select');
    document.querySelector('.animal-select').addEventListener('change', () => {

        // Grab message to show users how many guest or animals have been added.
        let message = document.querySelector('.message');
        message.innerHTML = '';

        let a;

        if (document.querySelector('.edit-tag') != null) {
            console.log('hit');
            document.querySelector('.edit-tag').remove();
        }

        if (document.querySelector('.confirmButton-visable') != null) {
            let confirmButton = document.querySelector('.confirmButton-visable');
            confirmButton.classList.remove('confirmButton-visable');
            confirmButton.classList.add('confirmButton-hidden');
        }

        // Checks the options in the listbox to see which one is selected.
        Array.from(animalSelect.options).forEach(function (option) {
            if (option.selected) {
                a = GlobalZoo.FindAnimalByName(option.value);
            }
        })

        if (a != null) {
            document.querySelector('#animal-name').value = a.name;
            document.querySelector('#animal-age').value = a.age;
            document.querySelector('#animal-gender').value = a.gender;
            document.querySelector('#animal-weight').value = a.weight;
            document.querySelector('#animal-pregnant').value = a.isPregnant;

            let type = a.type.name.toString();
            let select = document.querySelector('#animal-type-select');

            switch (type) {
                case 'Hummingbird':
                    select.value = document.querySelector('#h').value;
                    DisableAnimalTypeOptions();
                    break;

                case 'Platypus':
                    select.value = document.querySelector('#p').value;
                    DisableAnimalTypeOptions();
                    break;

                case 'Shark':
                    select.value = document.querySelector('#s').value;
                    DisableAnimalTypeOptions();
                    break;

                case 'Chimpanzee':
                    select.value = document.querySelector('#c').value;
                    DisableAnimalTypeOptions();
                    break;
            }
        }
    });

    // Grab buttons in forms footer.
    let addAnimalButton = document.querySelector('.add-animal-button');
    addAnimalButton.addEventListener('click', () => {

        EnableAnimalTypeOptions();

        if (GlobalZoo.animalCount >= GlobalZoo.animalCapacity) {
            let message = document.querySelector('.message');
            message.innerHTML = 'The animal capacity is full'
        } else {
            ClearAnimalFrom();
            MakeAnimalFormEditable();
            // Grab message to show users how many guest or animals have been added.
            let message = document.querySelector('.message');
            message.innerHTML = '';
            message.innerHTML = 'Enter new animal info'

            if (document.querySelector('.confirmButton-hidden') != null) {
                let confirmButton = document.querySelector('.confirmButton-hidden');
                confirmButton.classList.remove('confirmButton-hidden');
                confirmButton.classList.add('confirmButton-visable')
            }
        }
    });

    // Confirm button made visable when add animal is clicked.
    let animalConfirmButton = document.querySelector('.confirmButton-hidden');
    animalConfirmButton.addEventListener('click', () => {

        // Grab message to show users how many guest or animals have been added.
        let message = document.querySelector('.message');

        let animalType;
        let typeSelect = document.querySelector('#animal-type-select')

        // Checks the options in the listbox to see which one is selected.
        Array.from(typeSelect.options).forEach(function (option) {
            if (option.selected) {
                animalType = option.value;
            }
        })

        let newAnimal;
        let isError = AnimalFormValidation();

        if (isError == true) {
            message.innerHTML = 'Please fix errors';
        } else {

            let pregantStatus;
            let stringValue = document.querySelector('#animal-pregnant').value.toLowerCase()

            if (stringValue == 'true') {
                pregantStatus = true;
            } else if (stringValue == 'false') {
                pregantStatus = false;
            }

            switch (animalType.toLowerCase()) {
                case 'hummingbird':
                    newAnimal = new Hummingbird(
                        document.querySelector('#animal-name').value,
                        Hummingbird,
                        parseInt(document.querySelector('#animal-age').value),
                        document.querySelector('#animal-gender').value,
                        parseInt(document.querySelector('#animal-weight').value),
                        pregantStatus
                    );
                    break;
                case 'platypus':
                    newAnimal = new Platypus(
                        document.querySelector('#animal-name').value,
                        Platypus,
                        document.querySelector('#animal-age').value,
                        document.querySelector('#animal-gender').value,
                        document.querySelector('#animal-weight').value,
                        pregantStatus
                    );
                    break;
                case 'shark':
                    newAnimal = new Shark(
                        document.querySelector('#animal-name').value,
                        Shark,
                        document.querySelector('#animal-age').value,
                        document.querySelector('#animal-gender').value,
                        document.querySelector('#animal-weight').value,
                        pregantStatus
                    );
                    break;
                case 'chimpanzee':
                    newAnimal = new Chimpanzee(
                        document.querySelector('#animal-name').value,
                        Chimpanzee,
                        document.querySelector('#animal-age').value,
                        document.querySelector('#animal-gender').value,
                        document.querySelector('#animal-weight').value,
                        pregantStatus
                    );
                    break;
                default:
                    message.innerHTML = 'only hummingbirds, platypuses, sharks or chimpanzees are allowed at Bens Zoo';
            }

            if (newAnimal != null) {
                let checkAnimal = GlobalZoo.FindAnimalByName(newAnimal.name);

                if (checkAnimal == null) {
                    // Add animal to zoo
                    message.innerHTML = `${newAnimal.name} was added to the zoo.`
                    MakeAnimalFormUnEditable();
                    animalConfirmButton.classList.remove('confirmButton-visable');
                    animalConfirmButton.classList.add('confirmButton-hidden');
                    animalCountField.value = GlobalZoo.animals.length;
                    DisableAnimalTypeOptions();
                    console.table(newAnimal);
                    console.log(GlobalZoo);

                    ZooJson.animals.push({
                        "id": `${ZooJson.animals.length + 1}`,
                        "name": `${newAnimal.name}`,
                        "age": `${newAnimal.age}`,
                        "gender": `${newAnimal.gender}`,
                        "weight": `${newAnimal.weight}`,
                        "type": `${animalType}`,
                        "isPregnant": `${newAnimal.isPregnant}`
                    });

                    putRequest(ZooApiID, ZooJson);
                    

                } else {
                    message.innerHTML = `There is already an animal named ${newAnimal.name} please change the name to add.`
                }
            }
        }
    });

    // Remove animal button and event
    let removeButton = document.querySelector('.remove-animal-button');
    removeButton.addEventListener('click', () => {

        // console.log(ZooJson.animals);

        // ZooJson.animals.splice(0, 1)

        // console.log(ZooJson.animals);


        // Grab message to show users how many guest or animals have been added.
        let message = document.querySelector('.message');

        message.innerHTML = '';

        let a;

        // Checks the options in the listbox to see which one is selected.
        Array.from(animalSelect.options).forEach(function (option) {
            if (option.selected) {
                a = GlobalZoo.FindAnimalByName(option.value);
            }
        })

        if (a != null) {
            // Removes animal from zoo variable and updates select options
            GlobalZoo.RemoveAnimal(a);

            // Find animal in zoo json object, remove it and update with put request
            let animalToRemove = findJsonAnimal(a.name);
            let animalIndex = ZooJson.animals.indexOf(animalToRemove);
            ZooJson.animals.splice(animalIndex, 1);
            putRequest(ZooApiID, ZooJson);

            message.innerHTML = `${a.name} was removed from the zoo`;
            animalCountField.value = GlobalZoo.animalCount;
        } else {
            message.innerHTML = 'Please select an animal to remove'
        }
    });

    // Move Animal
    let moveButton = document.querySelector('.move-animal-button');
    moveButton.addEventListener('click', () => {

        // Grab message to show users how many guest or animals have been added.
        let message = document.querySelector('.message');

        message.innerHTML = '';

        let a;

        // Checks the options in the listbox to see which one is selected.
        Array.from(animalSelect.options).forEach(function (option) {
            if (option.selected) {
                a = GlobalZoo.FindAnimalByName(option.value);

            }
        })

        if (a != null) {
            let result = a.Move();
            message.innerHTML = result;
        } else {
            message.innerHTML = 'Select an animal to move';
        }
    });

    // Make animal pregnant
    let makePregnantButton = document.querySelector('.make-pregnant-button');
    makePregnantButton.addEventListener('click', () => {

        // Grab message to show users how many guest or animals have been added.
        let message = document.querySelector('.message');

        message.innerHTML = '';

        let a;

        // Checks the options in the listbox to see which one is selected.
        Array.from(animalSelect.options).forEach(function (option) {
            if (option.selected) {
                a = GlobalZoo.FindAnimalByName(option.value);
            }
        })

        console.table(a);

        if (a != null) {
            message.innerHTML = a.MakePregnant();
            document.querySelector('#animal-pregnant').value = a.isPregnant;
        }

        console.table(a);
    });

    // Animal give birth
    let giveBirthButton = document.querySelector('.give-birth-button');
    giveBirthButton.addEventListener('click', () => {

        // Grab message to show users how many guest or animals have been added.
        let message = document.querySelector('.message');

        message.innerHTML = '';

        let a;

        // Checks the options in the listbox to see which one is selected.
        Array.from(animalSelect.options).forEach(function (option) {
            if (option.selected) {
                a = GlobalZoo.FindAnimalByName(option.value);
            }
        })

        if (a != null) {
            if (a.isPregnant == true) {
                let newAnimal = a.GiveBirth();

                if (newAnimal != null) {
                    let option = GlobalZoo.AddAnimal(newAnimal);
                    message.innerHTML = `${newAnimal.name} was added to the zoo.`
                    let animalCountField = document.querySelector('#animal-count');
                    animalCountField.value = GlobalZoo.animals.length;

                    let animalSelect = document.querySelector('.animal-select');
                    animalSelect.options[option.index].selected = true;
                    console.log('test');
                }
            } else {
                message.innerHTML = 'Animal must be pregnant to give birth';
            }
        } else {
            message.innerHTML = 'Please select an animal'
        }
    });

    let editAnimalButton = document.querySelector('.edit-animal-button');
    editAnimalButton.addEventListener('click', () => {

        // Grab message to show users how many guest or animals have been added.
        let message = document.querySelector('.message');
        message.innerHTML = '';

        let a;

        // Checks the options in the listbox to see which one is selected.
        Array.from(animalSelect.options).forEach(function (option) {
            if (option.selected) {
                a = GlobalZoo.FindAnimalByName(option.value);
            }
        })

        if (a != null) {
            let footer = document.querySelector('#animal-footer');
            let newButton = document.createElement('div');
            newButton.classList.add('edit-tag');
            newButton.innerHTML = `<button type="button" class="edit-confrim">confirm</button>`;
            footer.appendChild(newButton);

            document.querySelector('#animal-name').removeAttribute('readonly');
            document.querySelector('#animal-age').removeAttribute('readonly');
            document.querySelector('#animal-weight').removeAttribute('readonly');

            newButton.addEventListener('click', () => {
                let isError = AnimalFormValidation();

                if (isError == true) {
                    message.innerHTML = 'Please fix errors';
                } else {
                    let animalReplace;

                    switch (a.type.name.toLowerCase()) {
                        case 'hummingbird':
                            animalReplace = new Hummingbird(
                                document.querySelector('#animal-name').value,
                                Hummingbird,
                                parseInt(document.querySelector('#animal-age').value),
                                document.querySelector('#animal-gender').value,
                                parseInt(document.querySelector('#animal-weight').value),
                                a.isPregnant
                            );
                            break;
                        case 'platypus':
                            animalReplace = new Platypus(
                                document.querySelector('#animal-name').value,
                                Platypus,
                                parseInt(document.querySelector('#animal-age').value),
                                document.querySelector('#animal-gender').value,
                                parseInt(document.querySelector('#animal-weight').value),
                                a.isPregnant
                            );
                            break;
                        case 'shark':
                            animalReplace = new Shark(
                                document.querySelector('#animal-name').value,
                                Shark,
                                parseInt(document.querySelector('#animal-age').value),
                                document.querySelector('#animal-gender').value,
                                parseInt(document.querySelector('#animal-weight').value),
                                a.isPregnant
                            );
                            break;
                        case 'chimpanzee':
                            animalReplace = new Chimpanzee(
                                document.querySelector('#animal-name').value,
                                Hummingbird,
                                parseInt(document.querySelector('#animal-age').value),
                                document.querySelector('#animal-gender').value,
                                parseInt(document.querySelector('#animal-weight').value),
                                a.isPregnant
                            );
                            break;
                    }
                    console.table(animalReplace);
                    GlobalZoo.RemoveAnimal(a);
                    GlobalZoo.AddAnimal(animalReplace);
                    message.innerHTML = `${animalReplace.name} was updated.`
                    MakeAnimalFormUnEditable();
                    newButton.remove();
                }
            });
        } else {
            message.innerHTML = 'Please select an animal to edit';
        }

    });

    ///////////////////////// Guest event listeners /////////////////////////

    // Select box change
    let guestSelect = document.querySelector('.guest-select');
    guestSelect.addEventListener('change', () => {

        // Grab message to show users how many guest or animals have been added.
        let message = document.querySelector('.message');

        message.innerHTML = '';

        let g;

        // Checks the options in the listbox to see which one is selected.
        Array.from(guestSelect.options).forEach(function (option) {
            if (option.selected) {
                g = GlobalZoo.FindGuestByName(option.value);
            }
        })

        if (g != null) {
            document.querySelector('#guest-name').value = g.name;
            document.querySelector('#guest-age').value = g.age;
            document.querySelector('#guest-gender').value = g.gender;
            document.querySelector('#wallet').value = `$${g.moneyAmount}`;
        }
    });

    // admit single guest
    let admitGuestButton = document.querySelector('.admit-guest-button');
    admitGuestButton.addEventListener('click', () => {

        // Grab message to show users how many guest or animals have been added.
        let message = document.querySelector('.message');

        if (GlobalZoo.guestCount >= GlobalZoo.guestCapcity) {
            message.innerHTML = 'The zoos guest capacity is full';
        } else {
            ClearGuestForm();
            MakeGuestFormEditable();

            message.innerHTML = '';
            message.innerHTML = 'Enter new guest info'

            if (document.querySelector('.guestConfirmButton-hidden') != null) {
                let guestConfirmButton = document.querySelector('.guestConfirmButton-hidden');
                guestConfirmButton.classList.remove('guestConfirmButton-hidden');
                guestConfirmButton.classList.add('guestConfirmButton-visable')
            }
        }

    });

    // confirm adding of single guest
    let guestConfirmButton = document.querySelector('.guestConfirmButton-hidden');
    guestConfirmButton.addEventListener('click', () => {

        // Grab message to show users how many guest or animals have been added.
        let message = document.querySelector('.message');

        let isError = GuestFormValidation();

        if (isError == false) {
            let newGuest = new Guest(
                document.querySelector('#guest-name').value,
                document.querySelector('#guest-age').value,
                document.querySelector('#guest-gender').value,
                document.querySelector('#wallet').value
            );

            let checkGuestName = GlobalZoo.FindGuestByName(newGuest.name)

            if (checkGuestName == null) {
                if (newGuest != null) {
                    GlobalZoo.AddGuest(newGuest);
                    message.innerHTML = `${newGuest.name} was admitted to the zoo.`
                    MakeGuestFormUnEditable();
                    guestConfirmButton.classList.remove('guestConfirmButton-visable');
                    guestConfirmButton.classList.add('guestConfirmButton-hidden')
                    guestCountField.value = GlobalZoo.guests.length;
                }
            } else {
                message.innerHTML = `${newGuest.name} is already at the zoo please change it the name`
            }
        }
    });

    // admit group
    let admitGroupButton = document.querySelector('.admit-group-button');
    admitGroupButton.addEventListener('click', () => {

        // Grab message to show users how many guest or animals have been added.
        let message = document.querySelector('.message');

        let groupForm = document.createElement('div');

        fetch("GroupForm.json").then(response => response.json()).then(data => {
            groupForm.innerHTML = data.tag;
            document.querySelector('body').appendChild(groupForm);
            console.log(document.querySelector('body'));

            let confirmGroupButton = document.querySelector('.confrim-group-button');
            confirmGroupButton.addEventListener('click', () => {

                let numberOfGuests = document.querySelector('#group-number').value;
                if (numberOfGuests == '') {
                    groupForm.remove();
                    message.innerHTML = 'No one was added';
                } else {
                    if (parseFloat(numberOfGuests) + GlobalZoo.guestCount <= GlobalZoo.guestCapcity) {
                        GlobalZoo.AdmitGuest(parseFloat(numberOfGuests));
                        guestCountField.value = parseFloat(GlobalZoo.guestCount);
                        message.innerHTML = `A group of ${numberOfGuests} was added to the zoo`
                    } else {
                        message.innerHTML = `The group is too large for the zoos capacity`
                    }
                    groupForm.remove();
                }
            });
        });
    });
}

///////////////////////// Run Zoo /////////////////////////
SetUpZoo(ZooApiID);
AddEvents();

