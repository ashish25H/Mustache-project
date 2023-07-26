let friends = JSON.parse(localStorage.getItem('friends'));
let friendImg = []

let friend = {
    arr: friends,
}

async function renderFriendList() {
    let response = await fetch('components/friend-list/friend-list.html');
    let template = await response.text();
   
    let images = JSON.parse(localStorage.getItem('friendsImg'));

    let img = {
        arr: images,
    }

    document.getElementById('friend-list').innerHTML = Mustache.render(template, img);
}

async function renderFollowCard() {
    let response = await fetch('components/follow-card/follow-card.mustache');
    let template = await response.text();

    document.getElementById('follow-card').innerHTML = Mustache.render(template, friend);

    const followBtn = document.querySelectorAll('.follow-btn');

    followBtn.forEach((item) => {
        item.addEventListener('click', (event) => {
            // localStorage.removeItem('friendsImg');
           friendImg.push({url : event.target.id});
           localStorage.setItem('friendsImg', JSON.stringify(friendImg));
           event.target.disabled = true;
           event.target.style.backgroundColor = '#8e8e8e';

           renderFriendList();
        });
    });  
}



renderFollowCard();