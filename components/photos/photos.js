let photos = JSON.parse(localStorage.getItem('postArr')) || [];

let photo = {
    photosArr : photos,
}

async function renderPhotoSection(){
    let response = await fetch('components/photos/photos.mustache');
    let template = await response.text();

    document.getElementById('photo-section').innerHTML = Mustache.render(template, photo);
}

renderPhotoSection();
