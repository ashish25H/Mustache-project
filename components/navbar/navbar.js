let user = JSON.parse(localStorage.getItem('currentUser'));

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

user.name = capitalizeFirstLetter(user.name);

async function renderNavbar() {
    let response = await fetch('components/navbar/navbar.mustache');
    let template = await response.text();

    document.getElementById('nav-component').innerHTML = Mustache.render(template, user);

}

renderNavbar();