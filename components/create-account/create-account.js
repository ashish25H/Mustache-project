let createAccountForm = document.getElementById('create-account-form');
let users = [];


$.validator.addMethod('strongpassword', function (value, element) {
    return this.optional(element) || /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(value);
}, 'Password must contain at least one lowercase letter,one uppercase letter,one digit,one special character and is at least eight characters long');


$('#create-account-form').validate({
    rules: {
        name: {
            required: true,
            minlength: 4,
        },
        email: {
            required: true,
            email: true,
        },
        ['company-name']: {
            required: true,
        },
        age: {
            required: true,
            min: 5,
        },
        occupation: {
            required: true,
        },
        DOB: {
            required: true,
        },
        gender: {
            required: true,
        },
        password: {
            required: true,
            strongpassword: true,
        },
        ['confirm-password']: {
            required: true,
            equalTo: '#password',
        }
    },
    messages: {
        name: {
            required: 'Please enter your name',
        },
        email: {
            required: 'Please enter email id',
            email: 'Please enter a correct email id',
        },
        ['company-name']: {
            required: 'Enter your company name',
        },
        age: {
            required: 'Please enter your age',
            min: 'Please enter more then 5',
        },
        occupation: {
            required: 'Please enter your occuaption',
        },
        DOB: {
            required: 'Please enter your age',
        },
        gender: {
            required: 'Please select your gender',
        },
        password: {
            required: 'Please enter your password',
            strongpassword: 'Password must contain at least one lowercase letter,one uppercase letter,one digit,one special character and is at least eight characters long',
        },
        ['confirm-password']: {
            required: 'Please enter your password again',
            equalTo: 'Password should be same',
        }
    }
});



function getFormDataAsObject(formElement) {
    const formData = new FormData(formElement);
    const formDataObject = {};

    for (const [key, value] of formData.entries()) {
        formDataObject[key] = value;
    }

    return formDataObject;
}

function userExists(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
}

function createUser(user) {
    const newUser = user;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
}



createAccountForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formDataObject = getFormDataAsObject(createAccountForm);
    console.log(formDataObject);
    // users.push(formDataObject);

    if (userExists(formDataObject.email)) {
        alert('User already exists. With this email id please choose a different one.');
    } else {
        createUser(formDataObject);
        alert('Account created successfully!');
        createAccountForm.reset();
        window.location.href = 'index.html';
    }
});