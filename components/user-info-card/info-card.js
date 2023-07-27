let currentUser = JSON.parse(localStorage.getItem('currentUser'));
console.log(currentUser);

function handleClick(editBtn, inputFieldsClass, submitBtn) {
    $(`#${editBtn}`).click(function () {
        $(`.${inputFieldsClass}`).each(function () {
            $(this).attr('readonly', false);
        });
        $(`#${submitBtn}`).show();
    });
}

async function renderUserInfoCard() {
    let response = await fetch('components/user-info-card/info-card.mustache');
    let template = await response.text();

    document.getElementById('user-info-card').innerHTML = Mustache.render(template, currentUser);

   

    handleClick('edit-btn', 'bs-info', 'submit-bs-btn');
    handleClick('work-info-edit', 'work-info', 'submit-work-info-btn');

    // function updateUserArray(currentUser){
    //     let user = JSON.parse(localStorage.getItem('users'));
    //     let isPresent = user.findIndex(user => user.email === currentUser.email);

    //     if(isPresent !== -1){
    //         user[isPresent] = currentUser;
    //         localStorage.setItem('users', JSON.stringify(user));
    //     }
    // };


    $('#submit-bs-btn').click(function () {
        let name = $('#name').val();
        let gender = $('#gender').val();
        let DOB = $('#DOB').val();
        let martailStatus = $('#martail-status').val();
        let location = $('#location').val();

        currentUser.name = name;
        currentUser.gender = gender;
        currentUser.DOB = DOB;
        currentUser.martailStatus = martailStatus;
        currentUser.location = location;

        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    });

    $('#submit-work-info-btn').click(function(){
        let occupation = $('#occupation').val();
        let skills = $('#skills').val();
        let jobs = $('#jobs').val();

        currentUser.occupation = occupation;
        currentUser.skills = skills;
        currentUser.jobs = jobs;

        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    });
}

renderUserInfoCard();