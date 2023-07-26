let currentUser = JSON.parse(localStorage.getItem('currentUser'));

async function renderUserInfoCard() {
    let response = await fetch('components/user-info-card/info-card.html');
    let template = await response.text();

    document.getElementById('user-info-card').innerHTML = Mustache.render(template, currentUser);

    $('#edit-btn').click(function(){
        $('.bs-info').each(function(){
            $(this).attr('readonly', false);
        });
        $('#submit-bs-btn').show();
    });

    $('#work-info-btn').click(function(){
        $('.work-info').each(function(){
            $(this).attr('readonly', false);
        });
        $('#submit-work-info-btn').show();
    });
}

renderUserInfoCard();