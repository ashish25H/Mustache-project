let newAccountBtn = document.getElementById('new-account-btn');
let loginForm = document.getElementById('login-form-template');
let currentUser;


newAccountBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'create-account.html';
});

$.validator.addMethod('strongpassword', function (value, element) {
    return this.optional(element) || /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(value);
}, 'Password must contain at least one lowercase letter,one uppercase letter,one digit,one special character and is at least eight characters long');


$('#login-form-template').validate({
    rules: {
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
            strongpassword: true,
        }
    },
    messages: {
        email: {
            required: 'Please Enter email',
            email: 'Please enter correct email',
        },
        password: {
            required: 'Please enter password',
            strongpassword: 'Password must contain at least one lowercase letter,one uppercase letter,one digit,one special character and is at least eight characters long',
        }
    }
});

function loginUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === username && user.password === password);

    localStorage.setItem('currentUser', JSON.stringify(user));

    return user;
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.querySelector('#exampleInputEmail1').value;
    const password = document.querySelector('#exampleInputPassword1').value;

    let isLogedIn = loginUser(username, password);

    if(isLogedIn){
        window.location.href = 'about.html';
    }else{
        alert('Invalid username or password/User not exist create account');
    }
});

// module.exports =  currentUser;