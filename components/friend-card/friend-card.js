let typ = JSON.parse(localStorage.getItem('friends'));
let item = {
    arr : typ,
}
async function renderFriendCard(){
    let response = await fetch('components/friend-card/friend-card.mustache');
    let template = await response.text();

    document.getElementById('friend-cards').innerHTML  = Mustache.render(template, item);
}

renderFriendCard();
