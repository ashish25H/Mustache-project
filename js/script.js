// let temp ;

// fetch('components/login/login.html')
//     .then(response => response.text())
//     .then(template => temp = template)
//     .then(renderLoginCom);

// function renderLoginCom() {
//     document.getElementById('login-form').innerHTML = Mustache.render(temp);
// };


async function renderLoginPage(){
    let response = await fetch('components/login/login.mustache');
    let template = await response.text();
    // .then(response => response.text())
    // .then(template =>  template);

    document.getElementById('login-form').innerHTML = Mustache.render(template);

    const script = document.createElement("script");
    script.src = "components/login/login-script.js";
    document.body.appendChild(script);
}

renderLoginPage();