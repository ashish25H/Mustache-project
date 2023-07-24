async function renderFollowCard() {
    let response = await fetch('components/follow-card/follow-card.mustache');
    let template = await response.text();

    document.getElementById('follow-card').innerHTML = Mustache.render(template);
}

renderFollowCard();
