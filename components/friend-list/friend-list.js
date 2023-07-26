
async function renderFriendList() {
    let response = await fetch('components/friend-list/friend-list.mustache');
    let template = await response.text();

    document.getElementById('friend-list').innerHTML = Mustache.render(template);
}

renderFriendList();