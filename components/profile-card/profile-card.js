// let logedInUser = JSON.parse(localStorage.getItem('currentUser'));

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

async function renderProfileCard() {
    let response = await fetch('components/profile-card/profile-card.mustache');
    let template = await response.text();

    document.getElementById('profile-card').innerHTML = Mustache.render(template, user);
}

renderProfileCard();