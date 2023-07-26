let friends = JSON.parse(localStorage.getItem('friends'));
let flag = false;

let friend = {
    arr: friends,
}

async function renderFollowCard() {
    let response = await fetch('components/follow-card/follow-card.mustache');
    let template = await response.text();

    document.getElementById('follow-card').innerHTML = Mustache.render(template, friend);

    const followBtn = document.querySelectorAll('.follow-btn');

    followBtn.forEach((item) => {
        item.addEventListener('click', (event) => {
            window.frindImg = {url : event.target.id};
        });
    });
}

renderFollowCard();