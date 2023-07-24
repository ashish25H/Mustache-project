async function renderCreateAccountPage() {
    let response = await fetch('components/create-account/create-account-component.mustache');
    let template = await response.text();

    document.querySelector('#create-account').innerHTML = Mustache.render(template);
    
    const script = document.createElement('script');
    script.src = 'components/create-account/create-account.js';
    document.body.appendChild(script);

}

renderCreateAccountPage();