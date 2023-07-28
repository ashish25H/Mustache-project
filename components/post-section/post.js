let postArr = [];

async function renderPost() {
    let response = await fetch('components/post-section/post.html');
    let template = await response.text();

    document.getElementById('post-section').innerHTML = Mustache.render(template);

    $('#post-form').hide();
    $('#start-post-btn').click(function () {
        $('#post-form').toggle('easing');
    });

    $('#post-form').validate({
        rules: {
            ['img-url']: {
                required: true,
                url: true,
            },
            title: {
                required: true,
                minlength: 1,
            },
            description: {
                required: true,
                minlength: 10,
            },
        },
        messages: {
            ['img-url']: {
                required: 'Please enter image url',
                url: 'URL is not valid',
            },
            title: {
                required: 'Please enter a title',
                minlength: 'At least one letter',
            },
            description: {
                required: 'Please enter description',
                minlength: 'At least 10 letter',
            }

        }
    });

    $('#post-form').submit(function () {
        let url = $('#img-url').val();
        let title = $('#title').val();
        let description = $('#description').val();

        const post = {
            url,
            title,
            description,
            postTime: new Date(),
            timeAgo: function timeAgo() {
                const currentDate = new Date();
                // const postDate = new Date(this.postTime);
                const timeDifference = currentDate - this.postTime;
                const seconds = Math.floor(timeDifference / 1000);

                if (seconds < 60) {
                    return seconds + " seconds ago";
                }

                const minutes = Math.floor(seconds / 60);
                if (minutes < 60) {
                    return minutes + " minutes ago";
                }

                const hours = Math.floor(minutes / 60);
                if (hours < 24) {
                    return hours + " hours ago";
                }

                const days = Math.floor(hours / 24);
                return days + " days ago";
            }
        }
        
        localStorage.removeItem(postArr);
        postArr.unshift(post);
        localStorage.setItem('postArr', JSON.stringify(postArr));
    });


}

renderPost();
