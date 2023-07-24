
async function renderProfile(){
    let response = await fetch('components/profile/profile.mustache');
    let template = await response.text();

    document.getElementById('profile').innerHTML = Mustache.render(template);

}

renderProfile();